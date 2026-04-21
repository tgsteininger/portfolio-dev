"use client"

import type { FormEvent } from "react"
import { useRef, useState } from "react"

import { cn } from "@/lib/utils"
import {
  RASDEN_INQUIRY_API_PATH,
  type RasdenInquiryApiResponse,
  type RasdenInquiryPayload,
} from "@/lib/rasden-inquiry"

import { rasdenRedCtaSurfaceClass } from "./rasden-cta-classes"
import { RasdenTurnstileInvisible, type RasdenTurnstileHandle } from "./rasden-turnstile-invisible"

const fieldClass = cn(
  "w-full rounded-[var(--radius-02)] border-[length:var(--stroke-01)] border-solid",
  "border-[var(--color-blue-grey-500)] bg-[color-mix(in_srgb,var(--color-blue-grey-800)_50%,transparent)]",
  "px-[var(--space-04)] py-[var(--space-03)] font-body text-[length:var(--text-body-md)] outline-none transition-fast",
  "text-[var(--color-text-inverse)]",
  "placeholder:text-[var(--color-blue-grey-200)]",
  "placeholder:opacity-100 motion-safe:placeholder:transition-opacity motion-safe:placeholder:[transition-duration:var(--motion-duration-02)] motion-safe:placeholder:[transition-timing-function:var(--motion-easing-standard)] motion-reduce:placeholder:transition-none",
  "focus-visible:placeholder:opacity-[0.52] motion-reduce:focus-visible:placeholder:opacity-100",
  "focus-visible:border-[var(--color-blue-grey-400)] focus-visible:ring-1 focus-visible:ring-[var(--color-blue-grey-400)]"
)

const labelClass =
  "font-ui text-[length:var(--text-label-sm)] font-medium uppercase tracking-[0.12em] text-[var(--color-blue-grey-300)]"

const statusBase = "font-ui text-[length:var(--text-body-sm)]"

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export function RasdenInquiryForm() {
  const turnstileRef = useRef<RasdenTurnstileHandle>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")

  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage("Please complete name, email, and message.")
      return
    }

    if (!turnstileSiteKey) {
      setErrorMessage("This form is temporarily unavailable.")
      return
    }

    setSubmitting(true)
    try {
      let token: string
      try {
        const gate = turnstileRef.current
        if (!gate) {
          setErrorMessage("Could not verify the request. Please try again.")
          return
        }
        token = await gate.execute()
      } catch {
        setErrorMessage("Could not verify the request. Please try again.")
        return
      }

      if (!token) {
        setErrorMessage("Could not verify the request. Please try again.")
        return
      }

      const payload: RasdenInquiryPayload = {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        honeypot,
        token,
      }

      const res = await fetch(RASDEN_INQUIRY_API_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      let data: RasdenInquiryApiResponse
      try {
        data = (await res.json()) as RasdenInquiryApiResponse
      } catch {
        setErrorMessage("Something went wrong. Please try again.")
        turnstileRef.current?.reset()
        return
      }

      if (!res.ok || !data.ok) {
        const fallback = "Something went wrong. Please try again."
        const msg =
          data.ok === false && typeof data.error === "string" && data.error.trim()
            ? data.error
            : fallback
        setErrorMessage(msg)
        turnstileRef.current?.reset()
        return
      }

      setSuccessMessage(
        "message" in data && data.message
          ? data.message
          : "Thank you. We have received your inquiry."
      )
      setName("")
      setEmail("")
      setMessage("")
      setHoneypot("")
      turnstileRef.current?.reset()
    } catch {
      setErrorMessage("Network error. Please try again.")
      turnstileRef.current?.reset()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className="relative flex min-w-0 flex-col gap-y-[var(--space-06)] text-left"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
    >
      <div className="flex flex-col gap-y-[var(--space-02)]">
        <label htmlFor="inquiry-name" className={labelClass}>
          Name
        </label>
        <input
          id="inquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          className={fieldClass}
          placeholder="Full name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          required
          disabled={submitting}
        />
      </div>
      <div className="flex flex-col gap-y-[var(--space-02)]">
        <label htmlFor="inquiry-email" className={labelClass}>
          Email
        </label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="name@company.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
          disabled={submitting}
        />
      </div>
      <div className="flex flex-col gap-y-[var(--space-02)]">
        <label htmlFor="inquiry-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={5}
          className={cn(fieldClass, "min-h-[10rem] resize-y")}
          placeholder="Briefly describe your inquiry."
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          required
          disabled={submitting}
        />
      </div>

      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 m-0 h-px w-px overflow-hidden p-0 opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="inquiry-company-website">Company website</label>
        <input
          id="inquiry-company-website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(ev) => setHoneypot(ev.target.value)}
          disabled={submitting}
        />
      </div>

      <RasdenTurnstileInvisible ref={turnstileRef} siteKey={turnstileSiteKey} />

      {successMessage ? (
        <p
          role="status"
          aria-live="polite"
          className={cn(statusBase, "text-[var(--color-blue-grey-200)]")}
        >
          {successMessage}
        </p>
      ) : null}
      {errorMessage ? (
        <p role="alert" className={cn(statusBase, "text-[var(--color-red-200)]")}>
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "focus-ring-standard self-start font-ui font-semibold uppercase tracking-[0.08em]",
          "rounded-[var(--radius-02)] px-[var(--space-06)] py-[var(--space-04)] outline-none transition-fast",
          rasdenRedCtaSurfaceClass,
          submitting && "pointer-events-none opacity-60"
        )}
        style={{
          fontSize: "var(--text-label-md)",
          marginTop: "var(--space-06)",
        }}
      >
        {submitting ? "Sending…" : "Submit inquiry"}
      </button>
    </form>
  )
}
