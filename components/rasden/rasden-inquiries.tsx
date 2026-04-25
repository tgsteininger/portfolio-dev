"use client"

import { useEffect, useRef, useState } from "react"

import { Copy, Mail } from "lucide-react"

import { Container, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

import { RasdenInquiryForm } from "./rasden-inquiry-form"

const RASDEN_RELATIONS_LOCAL = "relations"
const RASDEN_RELATIONS_DOMAIN = "rasden"
const RASDEN_RELATIONS_ZONE = "com"

function assembleRasdenRelationsAddress(): string {
  return [RASDEN_RELATIONS_LOCAL, "@", RASDEN_RELATIONS_DOMAIN, ".", RASDEN_RELATIONS_ZONE].join("")
}

function InquiriesEmailAction() {
  const [revealedAddress, setRevealedAddress] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const revealedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!revealedAddress || !revealedRef.current) return
    revealedRef.current.focus()
  }, [revealedAddress])

  function handleReveal() {
    if (revealedAddress) return
    setRevealedAddress(assembleRasdenRelationsAddress())
  }

  async function handleCopy() {
    if (!revealedAddress) return
    try {
      await navigator.clipboard.writeText(revealedAddress)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex min-w-0 max-w-full flex-col items-start gap-y-[var(--space-04)]">
      <button
        type="button"
        onClick={handleReveal}
        aria-expanded={Boolean(revealedAddress)}
        className={cn(
          "focus-ring-standard inline-flex max-w-full cursor-pointer items-center gap-x-[var(--space-04)] rounded-[var(--radius-02)] border-0 bg-transparent p-0 text-left font-ui text-[length:var(--text-body-md)] outline-none transition-fast hover:opacity-90",
          revealedAddress && "cursor-default opacity-80 hover:opacity-80"
        )}
        style={{ color: "var(--color-blue-grey-200)" }}
      >
        <Mail
          aria-hidden
          className="size-[var(--icon-sm)] shrink-0 text-[var(--color-red-200)]"
        />
        Send us an email
      </button>
      {revealedAddress ? (
        <div
          ref={revealedRef}
          tabIndex={-1}
          className="flex min-w-0 max-w-full flex-col gap-y-[var(--space-04)] outline-none"
        >
          <p
            className="font-ui max-w-full break-all text-[length:var(--text-body-md)] text-[var(--color-blue-grey-200)]"
            aria-live="polite"
          >
            {revealedAddress}
          </p>
          <div className="flex min-w-0 flex-wrap items-center gap-x-[var(--space-06)] gap-y-[var(--space-03)]">
            <a
              href={`mailto:${revealedAddress}`}
              className="focus-ring-standard font-ui text-[length:var(--text-body-sm)] uppercase tracking-[0.08em] outline-none transition-fast hover:opacity-90"
              style={{ color: "var(--color-red-200)" }}
            >
              Open email app
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="focus-ring-standard inline-flex items-center gap-x-[var(--space-02)] rounded-[var(--radius-02)] border-0 bg-transparent p-0 font-ui text-[length:var(--text-body-sm)] uppercase tracking-[0.08em] outline-none transition-fast hover:opacity-90"
              style={{ color: "var(--color-blue-grey-200)" }}
            >
              <Copy aria-hidden className="size-[var(--icon-sm)] shrink-0" />
              Copy email
            </button>
          </div>
          {copied ? (
            <p
              className="font-ui text-[length:var(--text-label-sm)] text-[var(--color-blue-grey-400)]"
              aria-live="polite"
            >
              Copied to clipboard
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export function RasdenInquiries() {
  return (
    <Section
      id="inquiries"
      spacing="none"
      className="text-[var(--color-text-inverse)]"
      style={{
        background: "var(--color-blue-grey-900)",
        paddingBlock: "var(--space-14)",
      }}
    >
      <Container>
        <div
          className={cn(
            "grid min-w-0 grid-cols-1 items-start gap-y-[var(--space-10)]",
            "sm:grid-cols-2 sm:gap-x-[var(--space-10)] sm:gap-y-0",
            "lg:gap-x-[var(--space-16)] xl:gap-x-[var(--space-20)]"
          )}
        >
          <div className="flex min-w-0 flex-col text-left">
            <h2
              className="font-heading font-bold uppercase tracking-tight text-pretty"
              style={{
                fontSize: "var(--text-heading-02)",
                lineHeight: 1.15,
                color: "var(--color-text-inverse)",
                marginBottom: "var(--space-06)",
              }}
            >
              Inquiries
            </h2>
            <p
              className="font-body text-pretty"
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-blue-grey-200)",
                marginBottom: "var(--space-06)",
                maxWidth: "var(--layout-reading-max)",
              }}
            >
              For partnerships, collaborations, or work related to our initiatives,
              use the form below.
            </p>
            <InquiriesEmailAction />
          </div>

          <RasdenInquiryForm />
        </div>
      </Container>
    </Section>
  )
}
