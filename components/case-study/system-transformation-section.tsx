"use client"

import Image from "next/image"
import { Container } from "@/components/layout/container"

/**
 * Bullet point data type
 */
interface BulletPoint {
  text: string
}

/**
 * Comparison panel data type
 */
interface PanelData {
  label: string
  labelColor: "neutral" | "accent"
  imageSrc: string
  imageAlt: string
  bullets: BulletPoint[]
}

/**
 * Before panel bullet points
 */
const beforeBullets: BulletPoint[] = [
  { text: "Fragmented workflows" },
  { text: "Manual coordination" },
  { text: "No visibility" },
  { text: "Version control issues" },
]

/**
 * After panel bullet points
 */
const afterBullets: BulletPoint[] = [
  { text: "Structured CMS workflow" },
  { text: "Defined roles & automation" },
  { text: "Centralized visibility" },
  { text: "Version-controlled content" },
]

/**
 * Bullet item with colored dot indicator
 */
function BulletItem({ 
  text, 
  variant 
}: { 
  text: string
  variant: "neutral" | "accent" 
}) {
  return (
    <div 
      className="flex items-center"
      style={{ gap: "var(--space-04)" }}
    >
      <div 
        className="flex-shrink-0 rounded-full"
        style={{
          width: "var(--space-03)",
          height: "var(--space-03)",
          backgroundColor: variant === "accent" 
            ? "var(--color-blue-500)" 
            : "var(--color-neutral-400)",
        }}
      />
      <span 
        className="font-body"
        style={{
          fontSize: "var(--text-body-sm)",
          color: variant === "accent" 
            ? "var(--color-text-primary)" 
            : "var(--color-text-secondary)",
          fontWeight: variant === "accent" ? 500 : 400,
        }}
      >
        {text}
      </span>
    </div>
  )
}

/**
 * Comparison panel component
 */
function ComparisonPanel({ 
  data,
  variant,
  revealDelay,
}: { 
  data: PanelData
  variant: "before" | "after"
  revealDelay?: string
}) {
  const isAfter = variant === "after"
  
  return (
    <div
      className="relative"
      data-reveal
      data-reveal-delay={revealDelay}
      style={{
        paddingRight: "var(--space-03)",
        paddingBottom: "var(--space-03)",
      }}
    >
      {/* Card-level backing panel */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "var(--space-02)",
          right: 0,
          bottom: 0,
          left: "var(--space-03)",
          borderRadius: "var(--radius-05)",
          backgroundColor:
            "color-mix(in srgb, var(--color-blue-100) 44%, transparent)",
        }}
      />

      <div
        className="relative flex flex-col"
        style={{
          zIndex: 1,
          backgroundColor: "var(--color-bg-surface)",
          borderRadius: "var(--radius-05)",
          border: "var(--stroke-01) solid var(--color-border-subtle)",
          padding: "var(--space-10)",
          boxShadow: "var(--elevation-01)",
        }}
      >
        {/* Label + Image Group */}
        <div
          className="relative"
          style={{
            marginBottom: "var(--space-06)",
          }}
        >
          {/* Label */}
          <span
            className="font-ui uppercase tracking-wider relative"
            style={{
              display: "block",
              zIndex: 1,
              fontSize: "var(--text-label-sm)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: isAfter
                ? "var(--color-blue-500)"
                : "var(--color-neutral-500)",
              marginBottom: "var(--space-05)",
            }}
          >
            {data.label}
          </span>

          {/* Screenshot Frame */}
          <div
            className="relative overflow-hidden"
            style={{
              zIndex: 1,
              borderRadius: "var(--radius-04)",
              backgroundColor: "var(--color-neutral-100)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              border: "var(--stroke-01) solid var(--color-border-subtle)",
              aspectRatio: "16 / 10",
            }}
          >
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bullet Points */}
        <div 
          className="flex flex-col"
          style={{ gap: "var(--space-03)" }}
        >
          {data.bullets.map((bullet, index) => (
            <BulletItem 
              key={index}
              text={bullet.text}
              variant={isAfter ? "accent" : "neutral"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * System Transformation Section
 * 
 * Displays a before/after comparison of the workflow transformation
 * with visual panels showing the legacy vs. new system
 */
export function SystemTransformationSection() {
  const beforePanel: PanelData = {
    label: "Before",
    labelColor: "neutral",
    imageSrc: "/images/case-studies/coca-cola/before.png",
    imageAlt: "Before view of legacy fragmented workflow",
    bullets: beforeBullets,
  }

  const afterPanel: PanelData = {
    label: "After",
    labelColor: "accent",
    imageSrc: "/images/case-studies/coca-cola/after.png",
    imageAlt: "New centralized CMS platform with structured workflow",
    bullets: afterBullets,
  }

  return (
    <section 
      id="system-transformation"
      className="relative"
      style={{
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
        backgroundColor: "color-mix(in srgb, var(--color-neutral-0) 96%, transparent)",
      }}
    >
      <Container className="relative">
        <div
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-neutral-0) 92%, transparent)",
            borderRadius: "var(--radius-05)",
            boxShadow: "var(--elevation-00)",
            padding: "var(--space-07)",
            WebkitBackdropFilter: "blur(4px)",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Section Header */}
          <div 
            className="flex"
            data-reveal
            data-reveal-delay="40"
            style={{ 
              marginBottom: "var(--space-10)",
              gap: "var(--space-05)",
            }}
          >
            {/* Vertical accent bar */}
            <div 
              className="flex-shrink-0"
              style={{
                width: "var(--space-02)",
                backgroundColor: "var(--color-neutral-900)",
                borderRadius: "var(--radius-full)",
              }}
            />
            
            {/* Title and eyebrow */}
            <div className="flex flex-col" style={{ gap: "var(--space-04)" }}>
              <h2 
                className="font-heading"
                style={{
                  fontSize: "var(--text-heading-01)",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                System Transformation
              </h2>
              <p 
                className="font-body uppercase tracking-wider"
                style={{
                  fontSize: "var(--text-label-sm)",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "var(--color-text-tertiary)",
                }}
              >
                From fragmented workflows to a structured, scalable platform
              </p>
            </div>
          </div>

          {/* Shared comparison backdrop + 2-column cards */}
          <div
            className="relative"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-blue-50) 72%, transparent)",
              borderRadius: "var(--radius-05)",
              padding: "var(--space-04)",
              boxShadow: "var(--elevation-00)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--grid-gap-lg)]">
              {/* Before Panel */}
              <ComparisonPanel 
                data={beforePanel}
                variant="before"
                revealDelay="120"
              />

              {/* After Panel */}
              <ComparisonPanel 
                data={afterPanel}
                variant="after"
                revealDelay="180"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
