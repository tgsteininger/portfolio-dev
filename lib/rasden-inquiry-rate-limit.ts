/** In-memory sliding-window limiter (per server instance). */

const WINDOW_MS = 15 * 60 * 1000
const MAX_SUBMISSIONS = 8

const hitsByIp = new Map<string, number[]>()

export function isRasdenInquiryRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowStart = now - WINDOW_MS
  const prev = hitsByIp.get(ip) ?? []
  const next = prev.filter((t) => t > windowStart)
  if (next.length >= MAX_SUBMISSIONS) {
    hitsByIp.set(ip, next)
    return true
  }
  next.push(now)
  hitsByIp.set(ip, next)
  return false
}
