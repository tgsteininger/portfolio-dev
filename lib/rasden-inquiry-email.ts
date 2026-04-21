import { z } from "zod"

/**
 * Rasden inquiry email (Resend)
 *
 * - RASDEN_INQUIRY_FROM_EMAIL must use a domain you have verified in the Resend
 *   dashboard (Resend will reject unverified senders). This is independent of where
 *   mail is delivered.
 * - RASDEN_INQUIRY_TO_EMAIL may be any reachable inbox (including Gmail); Resend
 *   delivers to the address you configure—no special casing required for Gmail.
 */

export type RasdenInquiryLead = {
  name: string
  email: string
  message: string
}

const RESEND_API = "https://api.resend.com/emails"

const SUBJECT_PREFIX = "[Rasden Inquiry]"

const envEmailSchema = z.string().trim().email()

type ResendSendResponse = {
  id?: string
  message?: string
  name?: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function truncateForLog(text: string, max = 800): string {
  const t = text.replace(/\s+/g, " ").trim()
  return t.length <= max ? t : `${t.slice(0, max)}…`
}

/**
 * Sends a verified Rasden inquiry via the Resend HTTP API.
 * Requires RESEND_API_KEY, RASDEN_INQUIRY_TO_EMAIL, and RASDEN_INQUIRY_FROM_EMAIL
 * (all validated; no hardcoded fallbacks).
 */
export async function sendRasdenInquiryEmail(
  lead: RasdenInquiryLead
): Promise<{ ok: true } | { ok: false }> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const toRaw = process.env.RASDEN_INQUIRY_TO_EMAIL?.trim()
  const fromRaw = process.env.RASDEN_INQUIRY_FROM_EMAIL?.trim()

  if (!apiKey) {
    console.error("[rasden/inquiries] RESEND_API_KEY is missing or empty; cannot send email.")
    return { ok: false }
  }

  if (!fromRaw) {
    console.error(
      "[rasden/inquiries] RASDEN_INQUIRY_FROM_EMAIL is missing or empty. Set a sender that uses your Resend-verified domain (no default is applied)."
    )
    return { ok: false }
  }

  const fromParsed = envEmailSchema.safeParse(fromRaw)
  if (!fromParsed.success) {
    console.error(
      "[rasden/inquiries] RASDEN_INQUIRY_FROM_EMAIL is not a valid email address. It must match a verified domain in Resend.",
      truncateForLog(fromRaw, 120)
    )
    return { ok: false }
  }
  const from = fromParsed.data

  if (!toRaw) {
    console.error(
      "[rasden/inquiries] RASDEN_INQUIRY_TO_EMAIL is missing or empty; cannot send email."
    )
    return { ok: false }
  }

  const toParsed = envEmailSchema.safeParse(toRaw)
  if (!toParsed.success) {
    console.error(
      "[rasden/inquiries] RASDEN_INQUIRY_TO_EMAIL is not a valid email address.",
      truncateForLog(toRaw, 120)
    )
    return { ok: false }
  }
  const to = toParsed.data

  const subject = `${SUBJECT_PREFIX} ${lead.name}`.trim().slice(0, 998)

  const text = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    "",
    "Message:",
    lead.message,
  ].join("\n")

  const html = `
    <p><strong>Name</strong><br />${escapeHtml(lead.name)}</p>
    <p><strong>Email</strong><br /><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></p>
    <p><strong>Message</strong></p>
    <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif">${escapeHtml(lead.message)}</pre>
  `.trim()

  const payload = {
    from,
    to: [to],
    reply_to: lead.email,
    subject,
    text,
    html,
  }

  try {
    const res = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    if (!res.ok) {
      let detail = ""
      try {
        detail = await res.text()
      } catch {
        /* noop */
      }
      console.error(
        "[rasden/inquiries] Resend rejected the request.",
        "HTTP",
        res.status,
        res.statusText + ".",
        "Body (truncated):",
        truncateForLog(detail, 800)
      )
      return { ok: false }
    }

    try {
      const body = (await res.json()) as ResendSendResponse
      if (!body?.id) {
        console.warn(
          "[rasden/inquiries] Resend returned 200 but response omitted id; body:",
          truncateForLog(JSON.stringify(body), 400)
        )
      }
    } catch (e) {
      console.error(
        "[rasden/inquiries] Resend success response could not be parsed as JSON; treating as failure.",
        e
      )
      return { ok: false }
    }

    return { ok: true }
  } catch (e) {
    console.error("[rasden/inquiries] Resend network or runtime error:", e)
    return { ok: false }
  }
}
