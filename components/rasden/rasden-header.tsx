"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

import { Container } from "@/components/layout"
import { cn } from "@/lib/utils"

import { rasdenRedCtaSurfaceClass } from "./rasden-cta-classes"

const NAV: { id: string; label: string }[] = [
  { id: "philosophy", label: "Philosophy" },
  { id: "structure", label: "Structure" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "governance", label: "Governance" },
  { id: "inquiries", label: "Inquiries" },
]

const SECTION_IDS = NAV.map((n) => n.id)

const inquireClass = cn(
  "focus-ring-standard inline-flex items-center justify-center font-ui font-medium uppercase tracking-[0.12em] rounded-[var(--radius-02)] outline-none transition-fast",
  rasdenRedCtaSurfaceClass,
  "px-[var(--space-05)] py-[var(--space-03)]"
)

/** Resolves a spacing token to pixels in the current document. */
function tokenHeightToPx(varName: string): number {
  if (typeof document === "undefined") return 0
  const probe = document.createElement("div")
  probe.style.cssText =
    "position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none"
  probe.style.height = `var(${varName})`
  document.body.appendChild(probe)
  const px = probe.getBoundingClientRect().height
  document.body.removeChild(probe)
  return px
}

function resolveActiveSectionId(
  headerBottom: number,
  offsetPx: number
): string {
  const line = headerBottom + offsetPx
  let current = SECTION_IDS[0]
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= line) current = id
  }
  return current
}

export function RasdenHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const [activeId, setActiveId] = useState<string>(SECTION_IDS[0])
  const rafRef = useRef<number>(0)

  const scheduleUpdate = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = window.requestAnimationFrame(() => {
      const header = headerRef.current
      if (!header) return
      const bottom = header.getBoundingClientRect().bottom
      const offset = tokenHeightToPx("--space-03") || 8
      const next = resolveActiveSectionId(bottom, offset)
      setActiveId((prev) => (prev === next ? prev : next))
    })
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && SECTION_IDS.includes(hash)) {
      setActiveId(hash)
    }
  }, [])

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    )
    if (elements.length === 0) return

    scheduleUpdate()

    const observer = new IntersectionObserver(
      () => {
        scheduleUpdate()
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.01, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))

    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate, { passive: true })
    window.addEventListener("hashchange", scheduleUpdate, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      window.removeEventListener("hashchange", scheduleUpdate)
      cancelAnimationFrame(rafRef.current)
    }
  }, [scheduleUpdate])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b clr-border-subtle backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-bg-page) 78%, transparent)",
      }}
    >
      <Container
        className={cn(
          "grid min-w-0 grid-rows-1 items-center py-[var(--space-05)] sm:py-[var(--space-06)]",
          "grid-cols-[minmax(0,1fr)_auto] gap-x-[var(--space-04)]",
          "sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-x-[var(--space-04)] md:gap-x-[var(--space-06)]"
        )}
      >
        <Link
          href="/rasden"
          className="focus-ring-standard col-start-1 row-start-1 shrink-0 justify-self-start self-center font-heading font-semibold uppercase tracking-[0.06em] clr-text-primary rounded-[var(--radius-02)] outline-none transition-fast hover:clr-text-accent"
          style={{ fontSize: "var(--text-heading-05)" }}
        >
          Rasden
        </Link>

        <nav
          className={cn(
            "col-start-2 row-start-1 hidden min-w-0 justify-self-center self-center sm:flex",
            "shrink-0 flex-nowrap items-center justify-center",
            "gap-x-[var(--space-06)] md:gap-x-[var(--space-07)] lg:gap-x-[var(--space-08)]"
          )}
          aria-label="Rasden sections"
        >
          {NAV.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative inline-block shrink-0 whitespace-nowrap rounded-none font-ui font-medium text-[length:var(--text-label-sm)] uppercase tracking-[0.12em] outline-none focus-ring-standard pb-[var(--space-02)]",
                  "motion-safe:transition-[color] motion-safe:duration-[220ms] motion-safe:[transition-timing-function:var(--motion-easing-standard)] motion-reduce:transition-none",
                  !isActive &&
                    "clr-text-secondary hover:[color:color-mix(in_srgb,var(--color-text-primary)_30%,var(--color-text-secondary))]"
                )}
                style={{
                  color: isActive ? "var(--color-red-800)" : undefined,
                }}
              >
                {label}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-0 bottom-0 origin-left rounded-none bg-[var(--color-red-800)]",
                    "motion-safe:transition-[transform,opacity] motion-safe:duration-[220ms] motion-safe:[transition-timing-function:var(--motion-easing-standard)] motion-reduce:transition-none",
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  )}
                  style={{
                    height: "var(--stroke-02)",
                  }}
                />
              </a>
            )
          })}
        </nav>

        <a
          href="#inquiries"
          className={cn(
            inquireClass,
            "col-start-2 row-start-1 shrink-0 justify-self-end self-center sm:col-start-3 sm:justify-self-end"
          )}
          style={{
            fontSize: "var(--text-label-sm)",
          }}
        >
          INQUIRE
        </a>
      </Container>
    </header>
  )
}
