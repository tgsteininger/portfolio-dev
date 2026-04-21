import Image from "next/image"

import { Container, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

/** Negative margin aligns media to the shell edge once the two-column hero is active (≥640px). */
const mediaBleedR =
  "min-[40rem]:-mr-[var(--space-08)] xl:-mr-[var(--space-10)]"

/**
 * Two-column hero image height: caps near ~819px on wide desktop, scales down with
 * viewport width below ~1440px (fluid max(16rem, 48vw + 8rem)), and never exceeds dvh.
 */
const heroMediaHeightTwoCol =
  "min-[40rem]:h-[min(51.1875rem,calc(100dvh-var(--header-height)-var(--space-10)),max(16rem,calc(48vw+8rem)))]"

export function RasdenHero() {
  return (
    <Section
      spacing="none"
      className={cn(
        "flex min-h-0 flex-col border-b clr-border-subtle clr-bg-page",
        "min-h-[min(28rem,calc(88dvh-var(--header-height)))] min-[40rem]:min-h-[min(32rem,calc(90dvh-var(--header-height)))]",
        "lg:min-h-[calc(100dvh-var(--header-height))]"
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <Container className="flex min-h-0 flex-1 flex-col">
          <div
            className={cn(
              "grid min-h-0 flex-1 gap-y-[var(--space-10)]",
              "grid-cols-1 grid-rows-[auto_minmax(0,1fr)]",
              "min-[40rem]:grid-cols-12 min-[40rem]:grid-rows-[minmax(0,1fr)] min-[40rem]:gap-y-0 min-[40rem]:gap-x-[var(--space-06)]",
              "lg:gap-x-[var(--space-10)]",
              "xl:gap-x-[var(--space-12)]"
            )}
          >
            <div
              className={cn(
                "min-w-0 self-start min-[40rem]:col-span-5",
                "max-w-[var(--layout-reading-max)] min-[40rem]:max-w-[var(--layout-narrow-max)]",
                "mt-[var(--space-06)] min-[40rem]:mt-0",
                "min-[40rem]:flex min-[40rem]:min-h-0 min-[40rem]:flex-col min-[40rem]:justify-center min-[40rem]:self-stretch"
              )}
            >
              <h1
                className={cn(
                  "font-heading tracking-tight clr-text-primary text-balance",
                  "text-[length:calc(var(--text-display-xl)*1.06)]",
                  "min-[40rem]:text-[length:calc(var(--text-display-xl)*1.1)]",
                  "lg:text-[length:calc(var(--text-display-xl)*1.2)]"
                )}
                style={{
                  lineHeight: 1.02,
                  marginBottom: "var(--space-06)",
                  fontWeight: 600,
                  maxWidth: "12ch",
                }}
              >
                Rasden
              </h1>

              <p
                className="font-body clr-text-tertiary"
                style={{
                  fontSize: "var(--text-heading-04)",
                  lineHeight: 1.45,
                  maxWidth: "var(--layout-reading-max)",
                }}
              >
                A system for developing and evolving ventures over time.
              </p>

              <div
                aria-hidden
                style={{
                  width: "var(--space-10)",
                  height: "var(--stroke-02)",
                  backgroundColor: "var(--color-red-800)",
                  marginTop: "var(--space-05)",
                }}
              />
            </div>

            <div
              className={cn(
                "relative flex w-full min-h-0 flex-1 flex-col items-center justify-center overflow-hidden",
                "min-h-0",
                "min-[40rem]:col-span-6 min-[40rem]:col-start-7",
                heroMediaHeightTwoCol,
                "min-[40rem]:min-h-0 min-[40rem]:w-full min-[40rem]:self-center",
                mediaBleedR
              )}
            >
              <div
                className={cn(
                  "group relative isolate mx-auto w-full max-w-full shrink-0 overflow-hidden",
                  /* Stacked mobile: portrait frame + tighter cap — strong but less viewport-heavy. */
                  "aspect-[10/11] max-h-[min(30rem,56dvh)]",
                  "min-[40rem]:aspect-auto min-[40rem]:mx-0 min-[40rem]:max-h-none",
                  "min-[40rem]:h-full min-[40rem]:min-h-0 min-[40rem]:flex-1"
                )}
              >
                <Image
                  src="/rasden/hero-foundation-system.jpg"
                  alt="Foundational system image representing the shared structure behind Rasden."
                  fill
                  priority
                  draggable={false}
                  sizes="(max-width: 639px) 100vw, 50vw"
                  className={cn(
                    "nonDraggableImage object-cover object-center",
                    "max-[39.9375rem]:transition-[filter] max-[39.9375rem]:[transition-duration:var(--motion-duration-02)] max-[39.9375rem]:[transition-timing-function:var(--motion-easing-standard)]",
                    "motion-reduce:transition-none",
                    "max-[39.9375rem]:group-hover:contrast-[1.02]"
                  )}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  )
}
