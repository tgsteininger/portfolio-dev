import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

import { sendRasdenInquiryEmail } from "@/lib/rasden-inquiry-email"
import type { RasdenInquiryApiResponse } from "@/lib/rasden-inquiry"
import { isRasdenInquiryRateLimited } from "@/lib/rasden-inquiry-rate-limit"

const ACCEPTED_MESSAGE =
  "Thank you. We have received your inquiry and will follow up if appropriate."

const bodySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Valid email is required").max(320),
  message: z.string().trim().min(1, "Message is required").max(20_000),
  honeypot: z.string().max(500).optional().default(""),
  token: z.string().min(1, "Verification required").max(12_000),
})

type SiteverifyResult = {
  success: boolean
  "error-codes"?: string[]
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim()
    if (first) return first
  }
  const realIp = req.headers.get("x-real-ip")?.trim()
  if (realIp) return realIp
  return "unknown"
}

async function verifyTurnstileToken(
  token: string,
  remoteip: string | undefined
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim()
  if (!secret) {
    console.error(
      "[rasden/inquiries] TURNSTILE_SECRET_KEY is missing, empty, or whitespace-only; Turnstile verification cannot run."
    )
    return false
  }

  const body = new URLSearchParams()
  body.set("secret", secret)
  body.set("response", token)
  if (remoteip) body.set("remoteip", remoteip)

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    })

    if (!res.ok) {
      console.error(
        "[rasden/inquiries] Turnstile siteverify HTTP error:",
        res.status,
        res.statusText
      )
      return false
    }

    let data: SiteverifyResult
    try {
      data = (await res.json()) as SiteverifyResult
    } catch (e) {
      console.error("[rasden/inquiries] Turnstile siteverify response JSON parse failed:", e)
      return false
    }

    if (data.success !== true) {
      console.warn(
        "[rasden/inquiries] Turnstile verification failed. error-codes:",
        data["error-codes"] ?? "(none)"
      )
      return false
    }

    return true
  } catch (e) {
    console.error("[rasden/inquiries] Turnstile siteverify fetch failed:", e)
    return false
  }
}

export async function POST(req: NextRequest): Promise<NextResponse<RasdenInquiryApiResponse>> {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    )
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    const msg =
      parsed.error.issues[0]?.message ?? "Please check the form and try again."
    return NextResponse.json({ ok: false, error: msg }, { status: 422 })
  }

  const { name, email, message, honeypot, token } = parsed.data
  const clientIp = getClientIp(req)

  if (honeypot.length > 0) {
    console.warn("[rasden/inquiries] Honeypot filled; returning silent success.", {
      ip: clientIp,
    })
    return NextResponse.json({ ok: true, message: ACCEPTED_MESSAGE }, { status: 200 })
  }

  if (isRasdenInquiryRateLimited(clientIp)) {
    console.warn("[rasden/inquiries] Rate limit exceeded for IP:", clientIp)
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }

  const verified = await verifyTurnstileToken(token, clientIp === "unknown" ? undefined : clientIp)
  if (!verified) {
    return NextResponse.json(
      { ok: false, error: "Verification failed. Please try again." },
      { status: 403 }
    )
  }

  const sent = await sendRasdenInquiryEmail({ name, email, message })
  if (!sent.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "We could not deliver your inquiry. Please try again later.",
      },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true, message: ACCEPTED_MESSAGE }, { status: 200 })
}
