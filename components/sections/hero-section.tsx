"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout"
import { cn } from "@/lib/utils"
import { HeroBackgroundLayers } from "@/components/sections/hero-background-layers"

/**
 * HeroSection - Enterprise portfolio hero.
 *
 * Visual layers: empty background slot (z-0) + content (z-10).
 */

interface HeroSectionProps {
  eyebrow?: string
  headlineMain?: string
  headlineContinuation?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function HeroSection({
  eyebrow = "Enterprise Product UX",
  headlineMain = "Complex systems don't fail from lack of features. They fail from lack of structure",
  headlineContinuation = "in how people, data, and decisions connect.",
  description = "I architect enterprise systems that bring clarity, alignment, and operational intelligence to high-stakes workflows.",
  ctaLabel = "Explore Work",
  ctaHref = "#featured-projects",
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="overview"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "transparent",
        paddingTop: "var(--space-16)",
        paddingBottom: "var(--space-14)",
        minHeight: "min(85vh, 900px)",
      }}
    >
      <HeroBackgroundLayers isVisible={isVisible} />

      {/* Content */}
      <Container className="relative" style={{ zIndex: 10 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ gap: "var(--grid-gap-lg)" }}
        >
          {/* Text Content - Left Side (7 columns on desktop) */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Eyebrow */}
            <p
              className={cn(
                "font-ui font-medium uppercase tracking-widest clr-text-tertiary reveal-slide",
                isVisible && "is-visible"
              )}
              style={{
                fontSize: "var(--text-overline)",
                letterSpacing: "0.15em",
                marginBottom: "var(--space-07)",
                transitionDelay: "0ms",
              }}
            >
              {eyebrow}
            </p>

            {/* Headline Main */}
            <h1
              className={cn(
                "font-heading font-semibold clr-text-primary reveal-slide",
                isVisible && "is-visible"
              )}
              style={{
                fontSize: "clamp(var(--text-heading-02), 4vw, var(--text-display-lg))",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                transitionDelay: "50ms",
              }}
            >
              {headlineMain}
            </h1>

            {/* Headline Continuation */}
            <p
              className={cn(
                "font-heading clr-text-secondary reveal-slide",
                isVisible && "is-visible"
              )}
              style={{
                fontSize: "clamp(var(--text-heading-04), 2.5vw, var(--text-heading-02))",
                lineHeight: 1.3,
                marginTop: "var(--space-05)",
                maxWidth: "var(--layout-reading-max)",
                transitionDelay: "100ms",
              }}
            >
              {headlineContinuation}
            </p>

            {/* Accent Divider */}
            <div
              className={cn("reveal-slide", isVisible && "is-visible")}
              style={{
                width: "var(--space-09)",
                height: "var(--space-01)",
                backgroundColor: "var(--color-cyan-500)",
                marginTop: "var(--space-08)",
                borderRadius: "var(--radius-full)",
                transitionDelay: "150ms",
              }}
            />

            {/* Body Description */}
            <p
              className={cn(
                "font-body clr-text-secondary leading-relaxed reveal-slide",
                isVisible && "is-visible"
              )}
              style={{
                fontSize: "var(--text-body-md)",
                marginTop: "var(--space-07)",
                maxWidth: "var(--layout-reading-max)",
                transitionDelay: "200ms",
              }}
            >
              {description}
            </p>

            {/* CTA */}
            <div
              className={cn("reveal-slide", isVisible && "is-visible")}
              style={{
                marginTop: "var(--space-09)",
                transitionDelay: "250ms",
              }}
            >
              <Button asChild size="lg">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>

          {/* Spacer for grid alignment */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" aria-hidden="true" />
        </div>
      </Container>
    </section>
  )
}
