"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { ArrowDownRight } from "@carbon/icons-react"
import { cn } from "@/lib/utils"
import type { CaseStudyItem } from "@/lib/navigation"

import styles from "./mega-menu.module.css"

/** Matches desktop case-studies nav (`md` / 64rem in @theme) — focus-out close only here, not mobile. */
const DESKTOP_MEGA_FOCUS_MEDIA = "(min-width: 64rem)"

interface MegaMenuProps {
  /** Stable id for aria-controls on the desktop trigger */
  id?: string
  caseStudies: CaseStudyItem[]
  isOpen: boolean
  onClose: () => void
}

/**
 * MegaMenu - Refined dropdown for case studies navigation.
 * Two-column layout with left intro and right case study list.
 * Uses token-driven utility classes from globals.css.
 */
export function MegaMenu({ id, caseStudies, isOpen, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!isOpen) return
    const node = panelRef.current
    if (!node) return

    const handleFocusOut = (e: FocusEvent) => {
      if (!window.matchMedia(DESKTOP_MEGA_FOCUS_MEDIA).matches) return
      const next = e.relatedTarget
      if (next instanceof Node && node.contains(next)) return
      onCloseRef.current()
    }

    node.addEventListener("focusout", handleFocusOut)
    return () => node.removeEventListener("focusout", handleFocusOut)
  }, [isOpen])

  return (
    <div
      ref={panelRef}
      id={id}
      role="region"
      aria-label="Case studies"
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2",
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
      style={{
        paddingTop: "12px",
        transformOrigin: "top center",
        willChange: "opacity, transform",
        transition:
          "opacity 200ms var(--motion-easing-decelerate), transform 200ms var(--motion-easing-decelerate)",
      }}
    >
      {/* Panel container - refined styling */}
      <div 
        className="flex clr-bg-surface"
        style={{
          width: "720px",
          borderRadius: "var(--radius-04)",
          border: "var(--stroke-01) solid var(--color-border-subtle)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Left column - Selected Work intro */}
        <div 
          className="flex flex-col flex-shrink-0"
          style={{
            width: "220px",
            padding: "var(--space-07) var(--space-06)",
            gap: "var(--space-03)",
          }}
        >
          <h3 
            className="font-ui clr-text-primary"
            style={{
              fontSize: "var(--text-body-md)",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            Selected Work
          </h3>
          <p 
            className="font-body"
            style={{
              fontSize: "var(--text-body-sm)",
              lineHeight: 1.6,
              color: "var(--color-neutral-500)",
            }}
          >
            Product design case studies spanning enterprise systems, healthcare, and collaboration platforms.
          </p>
        </div>

        {/* Vertical divider */}
        <div 
          style={{
            width: "var(--stroke-01)",
            backgroundColor: "var(--color-border-subtle)",
            marginBlock: "var(--space-06)",
          }}
        />

        {/* Right column - Case study list */}
        <div 
          className="flex flex-col flex-1"
          style={{
            padding: "var(--space-05)",
            gap: "var(--space-02)",
          }}
        >
          {caseStudies.map((study) => (
            <div key={study.href}>
              <CaseStudyRow study={study} onClose={onClose} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Individual case study row with hover state
 */
function CaseStudyRow({ 
  study, 
  onClose 
}: { 
  study: CaseStudyItem
  onClose: () => void 
}) {
  return (
    <Link
      href={study.href}
      onClick={onClose}
      prefetch={false}
      className={cn(
        styles.caseRow,
        "group relative flex items-center rounded-[var(--radius-03)]",
        "hover:bg-[var(--color-blue-50)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.045)] hover:-translate-y-px",
        "focus-visible:bg-[var(--color-blue-50)] focus-visible:shadow-[0_4px_12px_rgba(0,0,0,0.045)] focus-visible:-translate-y-px",
        "active:translate-y-0 active:scale-[0.995] active:bg-[var(--color-blue-100)]",
        "outline-none",
        "transition-fast"
      )}
      style={{
        padding: "var(--space-04)",
        gap: "var(--space-05)",
      }}
    >
      {/* Thumbnail: restrained veil with subtle clarity feedback on row hover/focus */}
      <div
        className={cn(
          styles.caseRowThumbnail,
          "relative flex-shrink-0 overflow-hidden"
        )}
        style={{
          width: "var(--space-14)",
          height: "var(--space-11)",
          borderRadius: "var(--radius-03)",
          border: "var(--stroke-01) solid var(--color-border-subtle)",
          backgroundColor: "var(--color-neutral-100)",
        }}
      >
        <Image
          src={study.thumbnail || "/placeholder.svg?height=56&width=80"}
          alt={study.title}
          width={80}
          height={56}
          className={cn(styles.caseRowThumbnailImage, "h-full w-full object-cover")}
          sizes="80px"
        />
        <div
          className={cn(
            styles.caseRowThumbnailVeil,
            "pointer-events-none absolute inset-0 z-[1]"
          )}
          style={{
            backgroundImage:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-blue-900) 4%, transparent), color-mix(in srgb, var(--color-neutral-900) 8%, transparent))",
          }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div
        className="flex-1 min-w-0 flex flex-col justify-center"
        style={{ paddingRight: "var(--space-07)" }}
      >
        {/* Title row with metric */}
        <div className="flex items-baseline justify-between gap-[var(--space-04)]">
          <h4 
            className="font-ui clr-text-primary"
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            {study.title}
          </h4>
          <span 
            className="font-body flex-shrink-0"
            style={{
              fontSize: "var(--text-caption)",
              color: "var(--color-neutral-400)",
              lineHeight: 1.4,
            }}
          >
            {study.metric}
          </span>
        </div>

        {/* Client name */}
        <p 
          className="font-body"
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-neutral-600)",
            lineHeight: 1.4,
            marginTop: "2px",
          }}
        >
          {study.client}
        </p>

        {/* Description */}
        <p 
          className="font-body"
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-neutral-500)",
            lineHeight: 1.5,
            marginTop: "var(--space-02)",
          }}
        >
          {study.description}
        </p>
      </div>

      {/* Bottom-right Carbon affordance: hidden until row hover/focus */}
      <span
        className={styles.caseRowArrow}
        style={{
          color: "var(--color-blue-500)",
        }}
        aria-hidden="true"
      >
        <ArrowDownRight size={16} />
      </span>
    </Link>
  )
}
