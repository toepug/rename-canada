import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { getRedis } from "@/lib/redis";

/**
 * POST /api/submit
 * Body: { "proposedName": string, "rationale"?: string }
 *
 * Share Your Voice intake (spec §5): submissions go to a PRIVATE queue
 * (Redis list submissions:queue) and are never published. Curation is
 * manual, from the Upstash console. A separate counter tracks total
 * submissions received; the public "12,847 submissions received" number
 * is updated manually with the quarterly tabulations, not read live —
 * same principle as the vote model.
 */

const MAX_NAME_LENGTH = 100;
const MAX_RATIONALE_LENGTH = 1000;

/** 2 submissions per IP per day. Intake review takes 14–16 months anyway. */
function getLimiter() {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(2, "1 d"),
    prefix: "ratelimit:submit",
  });
}

function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

/** Strip control characters and collapse whitespace. Queue is private and
 *  hand-curated, so this is hygiene, not a publishing safety layer. */
function sanitize(input: string, maxLength: number): string {
  return input
    .replace(/[\p{Cc}\p{Cf}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    const { success } = await getLimiter().limit(clientIp(req));
    if (!success) {
      return NextResponse.json(
        {
          status: "deferred",
          message:
            "You have reached the maximum number of submissions permitted per intake interval. The Secretariat thanks you for your enthusiasm.",
        },
        { status: 429 },
      );
    }

    const body = (await req.json().catch(() => null)) as {
      proposedName?: unknown;
      rationale?: unknown;
    } | null;

    const rawName =
      typeof body?.proposedName === "string" ? body.proposedName : "";
    const proposedName = sanitize(rawName, MAX_NAME_LENGTH);

    if (!proposedName) {
      return NextResponse.json(
        {
          status: "non-compliant",
          message:
            "A proposed designation is required. Submissions without a designation cannot be assessed for insufficiency.",
        },
        { status: 400 },
      );
    }

    const rationale =
      typeof body?.rationale === "string"
        ? sanitize(body.rationale, MAX_RATIONALE_LENGTH)
        : "";

    const redis = getRedis();
    const submission = {
      proposedName,
      rationale,
      receivedAt: new Date().toISOString(),
      // Deliberately no IP or other identifiers stored with the submission.
    };

    await Promise.all([
      redis.lpush("submissions:queue", JSON.stringify(submission)),
      redis.incr("submissions:count"),
    ]);

    return NextResponse.json({
      status: "received",
      message:
        "Thank you. Your submission has entered Phase 0 intake review. Current processing time: 14\u201316 months. Submissions are assessed against the Program's core criterion and applicable dignity requirements. You will not be contacted.",
    });
  } catch {
    return NextResponse.json(
      {
        status: "unavailable",
        message:
          "Intake is temporarily unavailable. Your voice matters and may be shared at a later time.",
      },
      { status: 503 },
    );
  }
}
