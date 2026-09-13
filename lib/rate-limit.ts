const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_KEY = 5
const MAX_GLOBAL = 120

const hits = new Map<string, number[]>()
let globalHits: number[] = []

function prune(list: number[], now: number) {
  while (list.length > 0 && list[0] <= now - WINDOW_MS) list.shift()
}

export interface RateLimitResult {
  allowed: boolean
  retryAfterSeconds?: number
}

/**
 * Lightweight in-memory sliding-window limiter (per IP key + a global safety cap).
 * Fine for stopping form spam on a single Node instance. For a multi-instance or
 * true distributed deployment, swap this for an Upstash/Vercel KV counter.
 */
export function checkRateLimit(key: string, now = Date.now()): RateLimitResult {
  prune(globalHits, now)
  if (globalHits.length >= MAX_GLOBAL) {
    const oldest = globalHits[0]
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 1000)),
    }
  }

  const list = hits.get(key) ?? []
  prune(list, now)
  if (list.length >= MAX_PER_KEY) {
    const oldest = list[0]
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 1000)),
    }
  }

  list.push(now)
  hits.set(key, list)
  globalHits.push(now)
  return { allowed: true }
}