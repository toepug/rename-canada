import { Redis } from "@upstash/redis";

/**
 * Shared Upstash Redis client.
 *
 * Spec §7 note: Vercel's Upstash/KV marketplace integration injects
 * KV_-prefixed env vars (KV_REST_API_URL / KV_REST_API_TOKEN), while a
 * directly-configured Upstash database uses UPSTASH_-prefixed ones
 * (UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN). This bit the
 * Timber and Trims build; accept either so the deploy works regardless
 * of how the database gets attached.
 */
function requiredEnv(): { url: string; token: string } {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error(
      "Redis credentials missing: set UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN " +
        "(or Vercel KV's KV_REST_API_URL / KV_REST_API_TOKEN).",
    );
  }
  return { url, token };
}

let client: Redis | null = null;

/** Lazily construct the client so a missing env var fails at request time, not build time. */
export function getRedis(): Redis {
  if (!client) {
    const { url, token } = requiredEnv();
    client = new Redis({ url, token });
  }
  return client;
}
