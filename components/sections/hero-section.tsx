"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/lib/scroll-to-section"
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
  return (
    <section
      id="overview"
      className={cn(
        "relative overflow-hidden bg-transparent",
        /* Content-driven height; vertical presence from responsive padding (tokens). */
        "pt-[var(--space-14)] pb-[var(--space-10)]",
        "min-[480px]:pt-[var(--space-15)] min-[480px]:pb-[var(--space-11)]",
        "md:pt-[var(--space-15)] md:pb-[var(--space-12)]",
        "lg:pt-[var(--space-16)] lg:pb-[var(--space-13)]",
        "xl:pb-[var(--space-14)]"
      )}
    >
      <HeroBackgroundLayers />

      {/* Content */}
      <Container className="relative" style={{ zIndex: 10 }}>
        {/* Eyebrow row: full container width; right metadata LG+ only */}
        <div
          className={cn(
            "reveal-slide is-visible flex items-center justify-between gap-x-6"
          )}
          style={{
            marginBottom: "var(--space-07)",
            transitionDelay: "0ms",
          }}
        >
          <p
            className="font-ui min-w-0 shrink font-medium uppercase tracking-widest clr-text-tertiary"
            style={{
              fontSize: "var(--text-overline)",
              letterSpacing: "0.15em",
            }}
          >
            {eyebrow}
          </p>
          <p
            className="font-ui hidden shrink-0 text-right font-normal uppercase lg:block"
            style={{
              fontSize: "var(--text-overline)",
              letterSpacing: "0.2em",
              color:
                "color-mix(in srgb, var(--color-text-tertiary) 48%, var(--color-bg-page))",
            }}
          >
            SYSTEM / FLOW / ARCHITECTURE / DECISION
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ gap: "var(--grid-gap-lg)" }}
        >
          {/* Text Content - Left Side (wider measure on lg/xl for editorial headline) */}
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Headline Main */}
            <h1
              className={cn(
                "font-heading font-semibold clr-text-primary reveal-slide is-visible w-full"
              )}
              style={{
                fontSize: "clamp(var(--text-heading-02), 4vw, var(--text-display-lg))",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                transitionDelay: "50ms",
                maxWidth: "min(100%, 52rem)",
              }}
            >
              {headlineMain}
            </h1>

            {/* Headline Continuation */}
            <p
              className={cn(
                "font-heading clr-text-secondary reveal-slide is-visible"
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
              className={cn("reveal-slide is-visible")}
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
                "font-body clr-text-secondary leading-relaxed reveal-slide is-visible"
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
              className={cn("reveal-slide is-visible")}
              style={{
                marginTop: "var(--space-09)",
                transitionDelay: "250ms",
              }}
            >
              <Button asChild size="lg">
                <Link
                  href={ctaHref}
                  onClick={
                    ctaHref.startsWith("#")
                      ? (e) => {
                          e.preventDefault()
                          scrollToSection(ctaHref)
                        }
                      : undefined
                  }
                >
                  {ctaLabel}
                </Link>
              </Button>
            </div>
          </div>

          {/* Spacer for grid alignment */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" aria-hidden="true" />
        </div>
      </Container>
    </section>
  )
}
