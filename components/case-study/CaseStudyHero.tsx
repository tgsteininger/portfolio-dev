"use client"

import Image from "next/image"
import { Container, Grid } from "@/components/layout"

/** Production hero — file: `public/images/case-studies/coca-cola/coca-cola-hero.webp` */
const CASE_STUDY_HERO_IMAGE = "/images/case-studies/coca-cola/coca-cola-hero.webp"

const HERO_METADATA = [
  { label: "ROLE", value: "Lead UX Designer" },
  {
    label: "SCOPE",
    value: "Workflow design, role-based UX, prototyping, usability validation",
  },
  { label: "PLATFORM", value: "PowerApps enterprise CMS" },
  { label: "KEY OUTCOME", value: "Scalable, centralized workflow" },
] as const

/**
 * Coca-Cola case study hero — transparent over AppBackground; offset blue panels behind the
 * white image frame match Walgreens / MediaPlatform hero framing.
 */
export function CaseStudyHero() {
  return (
    <section
      id="overview"
      className="relative z-[1] w-full overflow-hidden bg-transparent"
      aria-labelledby="case-study-hero-title"
      style={{
        marginTop: "calc(-1 * var(--space-13))",
        paddingTop: "calc(var(--space-13) + var(--space-10))",
        paddingBottom: "var(--space-13)",
        marginBottom: "var(--space-08)",
      }}
    >
      <Container className="relative">
        <Grid
          cols={12}
          gap="lg"
          className="items-center"
          style={{
            rowGap: "var(--space-11)",
            columnGap: "clamp(var(--space-08), 5vw, var(--space-10))",
          }}
        >
          <div
            className="col-span-4 flex w-full min-w-0 max-w-none flex-col items-start text-left md:col-span-6 lg:col-span-5 lg:max-w-[36rem]"
            data-reveal
            data-reveal-delay="40"
          >
            <p
              className="font-ui font-medium"
              style={{
                marginBottom: "var(--space-03)",
                fontSize: "var(--text-body-sm)",
                letterSpacing: "0.02em",
                color: "color-mix(in srgb, var(--color-text-secondary) 92%, transparent)",
              }}
            >
              Coca-Cola
            </p>

            <h1
              id="case-study-hero-title"
              className="font-heading clr-text-primary"
              style={{
                marginBottom: "var(--space-05)",
                fontSize:
                  "clamp(calc(var(--text-heading-02) * 1.06), 3.6vw + 0.55rem, 2.875rem)",
                fontWeight: 700,
                letterSpacing: "-0.028em",
                lineHeight: 1.05,
                textWrap: "balance",
              }}
            >
              Global Supply Chain
              <span className="-mt-[0.04em] block">Benchmarking CMS</span>
            </h1>

            <p
              className="font-body"
              style={{
                marginBottom: "var(--space-07)",
                fontSize: "var(--text-body-md)",
                lineHeight: 1.62,
                color: "var(--color-text-secondary)",
                maxWidth: "32rem",
              }}
            >
              Designing a structured survey platform for Coca-Cola&apos;s global bottling
              network
            </p>

            <div
              className="grid w-full min-w-0"
              style={{
                gap: "var(--space-05) var(--space-08)",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              }}
            >
              {HERO_METADATA.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 flex-col"
                  style={{ gap: "var(--space-01)" }}
                >
                  <p
                    className="font-ui font-medium uppercase tracking-widest"
                    style={{
                      fontSize: "var(--text-caption)",
                      letterSpacing: "0.14em",
                      color: "color-mix(in srgb, var(--color-text-tertiary) 88%, transparent)",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-body min-w-0 clr-text-primary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: 1.45,
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-4 flex min-h-0 items-center justify-center md:col-span-6 lg:col-span-7">
            <div
              className="relative w-full max-w-none lg:ml-auto lg:mr-0 lg:max-w-[min(100%,46rem)]"
              data-reveal
              data-reveal-delay="140"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute"
                style={{
                  top: "clamp(-12px, -1.8vw, -10px)",
                  left: "clamp(-12px, -2vw, -10px)",
                  width: "calc(97% + clamp(8px, 1.2vw, 16px))",
                  height: "calc(97% + clamp(10px, 1.4vw, 18px))",
                  borderRadius: "var(--radius-04)",
                  background:
                    "color-mix(in srgb, var(--color-blue-100) 16%, transparent)",
                  zIndex: 0,
                }}
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute"
                style={{
                  right: "clamp(-12px, -2vw, -10px)",
                  bottom: "clamp(-12px, -1.8vw, -10px)",
                  width: "calc(97% + clamp(8px, 1.2vw, 16px))",
                  height: "calc(97% + clamp(10px, 1.4vw, 18px))",
                  borderRadius: "var(--radius-04)",
                  background:
                    "color-mix(in srgb, var(--color-blue-500) 7%, transparent)",
                  zIndex: 1,
                }}
              />

              <div
                className="hero-image-reveal-surface relative z-[2]"
                style={{
                  padding: "var(--space-04)",
                  borderRadius: "var(--radius-04)",
                  backgroundColor: "var(--color-bg-surface)",
                  boxShadow: "var(--elevation-01)",
                }}
              >
                <div
                  className="w-full overflow-hidden"
                  style={{
                    borderRadius: "var(--radius-03)",
                    backgroundColor: "var(--color-neutral-50)",
                  }}
                >
                  <Image
                    src={CASE_STUDY_HERO_IMAGE}
                    alt="Coca-Cola global supply chain benchmarking CMS on a laptop"
                    width={1600}
                    height={920}
                    className="h-auto w-full object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, min(46rem, 52vw)"
                    style={{
                      display: "block",
                      transform: "scaleY(1.06)",
                      transformOrigin: "center center",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  )
}
