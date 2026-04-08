"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { CaseStudyItem } from "@/lib/navigation"

import styles from "./mega-menu.module.css"

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
  return (
    <div
      id={id}
      role="region"
      aria-label="Case studies"
      aria-hidden={!isOpen}
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
          {caseStudies.map((study, index) => (
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
        "group flex items-center rounded-[var(--radius-03)]",
        "hover:bg-[var(--color-blue-50)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
        "active:translate-y-0 active:scale-[0.995] active:bg-[var(--color-blue-100)]",
        "focus-visible:focus-ring-standard outline-none",
        "transition-fast"
      )}
      style={{
        padding: "var(--space-04)",
        gap: "var(--space-05)",
      }}
    >
      {/* Thumbnail */}
      <div 
        className="flex-shrink-0 overflow-hidden"
        style={{
          width: "100px",
          height: "72px",
          borderRadius: "var(--radius-03)",
          border: "var(--stroke-01) solid var(--color-border-subtle)",
          backgroundColor: "var(--color-neutral-100)",
        }}
      >
        <Image
          src={study.thumbnail || "/placeholder.svg?height=72&width=100"}
          alt={study.title}
          width={100}
          height={72}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
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

      {/* Right arrow: hidden until row hover/focus (see mega-menu.module.css) */}
      <span
        className={styles.caseRowArrow}
        style={{
          color: "var(--color-blue-500)",
        }}
        aria-hidden="true"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  )
}
