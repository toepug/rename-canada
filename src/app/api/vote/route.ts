import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { getRedis } from "@/lib/redis";

/**
 * POST /api/vote
 * Body: { "candidate": "<slug>" }
 *
 * Records a vote by incrementing votes:<slug> in Redis. Per spec §7,
 * recording is real but public standings are manual quarterly snapshots —
 * nothing reads these counters at request time. True counts are visible
 * in the Upstash console.
 */

/** Must match the slugs in /content/candidates/. Votes for anything else are rejected. */
const CANDIDATE_SLUGS = [
  "norterra",
  "kanada",
  "vantage-north",
  "maplea",
  "solvenna",
  "canada-presented-by-sponsor-pending",
  "nameless-mcnameface",
  "canada-2",
] as const;

/** 3 votes per IP per hour — generous for humans, boring for scripts. */
function getLimiter() {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    prefix: "ratelimit:vote",
  });
}

function clientIp(req: NextRequest): string {
  // Vercel sets x-forwarded-for; first entry is the client.
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

export async function POST(req: NextRequest) {
  try {
    const { success } = await getLimiter().limit(clientIp(req));
    if (!success) {
      return NextResponse.json(
        {
          status: "deferred",
          message:
            "You have reached the maximum number of ballots permitted per processing interval. Additional ballots may be cast in a future interval.",
        },
        { status: 429 },
      );
    }

    const body = (await req.json().catch(() => null)) as {
      candidate?: unknown;
    } | null;
    const candidate = body?.candidate;

    if (
      typeof candidate !== "string" ||
      !(CANDIDATE_SLUGS as readonly string[]).includes(candidate)
    ) {
      return NextResponse.json(
        {
          status: "non-compliant",
          message:
            "The submitted ballot does not correspond to a shortlisted candidate designation and has been assessed as out of scope.",
        },
        { status: 400 },
      );
    }

    await getRedis().incr(`votes:${candidate}`);

    return NextResponse.json({
      status: "recorded",
      message:
        "Your ballot has been received and has entered the standard processing queue. Vote processing time: 90–120 days. Standings are updated at each quarterly tabulation.",
    });
  } catch {
    return NextResponse.json(
      {
        status: "unavailable",
        message:
          "Ballot intake is temporarily unavailable. The Secretariat regrets any inconvenience and remains confident in the process.",
      },
      { status: 503 },
    );
  }
}
