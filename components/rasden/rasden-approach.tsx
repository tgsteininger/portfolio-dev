import type { CSSProperties } from "react"

import { Container, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

const bodyStyle = {
  fontSize: "var(--text-body-md)",
  lineHeight: "var(--leading-relaxed)",
} as const

const rightContentMax = "min(100%, 40rem)"

const approachAtmosphereRootStyle: CSSProperties = {
  ["--approach-depth-ink" as string]: "0.8",
  ["--approach-depth-blur" as string]: "2.45rem",
  ["--approach-depth-blur-fine" as string]: "1.6rem",
  ["--approach-depth-primary-opacity" as string]: "0.82",
  ["--approach-depth-secondary-opacity" as string]: "0.64",
  WebkitMaskImage:
    "radial-gradient(ellipse 120% 132% at 56% 48%, rgba(255, 255, 255, 0) 0% 30%, rgba(255, 255, 255, 0.48) 55%, #fff 90%, #fff 100%)",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskImage:
    "radial-gradient(ellipse 120% 132% at 56% 48%, rgba(255, 255, 255, 0) 0% 30%, rgba(255, 255, 255, 0.48) 55%, #fff 90%, #fff 100%)",
  maskRepeat: "no-repeat",
  maskSize: "100% 100%",
}

const approachAtmosphereLayerPrimary: CSSProperties = {
  filter: "blur(var(--approach-depth-blur))",
  background: `
    linear-gradient(
      to top right,
      rgba(0, 0, 0, 0.046) 0%,
      rgba(0, 0, 0, 0.016) 40%,
      rgba(0, 0, 0, 0) 64%
    ),
    linear-gradient(
      100deg,
      rgba(0, 0, 0, 0.052) 0%,
      rgba(0, 0, 0, 0.02) 24%,
      rgba(0, 0, 0, 0) 46%
    ),
    linear-gradient(
      280deg,
      rgba(0, 0, 0, 0.014) 0%,
      rgba(0, 0, 0, 0) 34%
    ),
    linear-gradient(
      to top right,
      rgba(255, 255, 255, 0.026) 0%,
      rgba(0, 0, 0, 0) 30%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0% 58%,
      rgba(0, 0, 0, 0.016) 100%
    )
  `,
  opacity: "calc(var(--approach-depth-ink) * var(--approach-depth-primary-opacity))",
}

const approachAtmosphereLayerSecondary: CSSProperties = {
  filter: "blur(var(--approach-depth-blur-fine))",
  background: `
    linear-gradient(
      to top right,
      rgba(0, 0, 0, 0.03) 0%,
      rgba(0, 0, 0, 0) 50%
    ),
    linear-gradient(
      92deg,
      rgba(0, 0, 0, 0.042) 0%,
      rgba(0, 0, 0, 0.014) 25%,
      rgba(0, 0, 0, 0) 50%
    ),
    linear-gradient(
      280deg,
      rgba(0, 0, 0, 0.014) 0%,
      rgba(0, 0, 0, 0) 32%
    ),
    linear-gradient(
      200deg,
      rgba(0, 0, 0, 0) 0% 52%,
      rgba(0, 0, 0, 0.018) 100%
    )
  `,
  opacity: "calc(var(--approach-depth-ink) * var(--approach-depth-secondary-opacity))",
}

export function RasdenApproach() {
  return (
    <Section
      id="approach"
      spacing="large"
      className="relative overflow-hidden"
      style={{ paddingBlock: "var(--space-12)" }}
    >
      <div
        className="pointer-events-none absolute z-0 -inset-1 sm:-inset-2"
        style={approachAtmosphereRootStyle}
        aria-hidden
      >
        <div className="absolute inset-0" style={approachAtmosphereLayerPrimary} />
        <div
          className="absolute inset-0"
          style={approachAtmosphereLayerSecondary}
        />
      </div>
      <Container className="relative z-[1] min-w-0">
        <div
          className={cn(
            "grid min-w-0 grid-cols-1",
            "items-start",
            "gap-y-[var(--space-07)]",
            "min-[900px]:grid-cols-12",
            "min-[900px]:items-baseline",
            "min-[900px]:gap-y-[var(--space-08)]",
            "min-[900px]:gap-x-[var(--space-10)]",
            "min-[90rem]:gap-x-[var(--space-12)]"
          )}
        >
          <p
            className="min-w-0 self-start text-left text-pretty font-ui font-medium uppercase tracking-[0.08em] min-[900px]:col-span-6 min-[900px]:row-1"
            style={{
              fontSize: "var(--text-label-md)",
              lineHeight: "var(--leading-normal)",
              color: "var(--color-red-800)",
            }}
          >
            Approach
          </p>
          <div
            className="hidden min-h-0 min-w-0 min-[900px]:col-start-7 min-[900px]:row-1 min-[900px]:col-span-6 min-[900px]:block"
            aria-hidden
          />
          <h2
            id="approach-heading"
            className={cn(
              "self-start text-left",
              "w-full min-w-0 break-words",
              "max-w-full",
              "max-[899px]:max-w-[min(32rem,100%)]",
              "min-[900px]:max-w-none",
              "font-heading font-bold tracking-tight text-pretty clr-text-primary",
              "text-[length:var(--text-heading-02)]",
              "min-[900px]:col-span-6 min-[900px]:row-2",
              "lg:self-start",
              "lg:text-[length:var(--text-heading-01)]",
              "xl:text-[length:var(--text-display-lg)]"
            )}
            style={{ lineHeight: 1.12 }}
          >
            <span className="min-[900px]:hidden text-pretty">
              Designing systems that scale, adapt, and evolve over time.
            </span>
            <span className="hidden min-w-0 w-full min-[900px]:block text-pretty">
              Designing systems
              <br />
              that scale, adapt, and
              <br />
              evolve over time.
            </span>
          </h2>
          <div
            className={cn(
              "min-h-0 min-w-0 self-start text-left",
              "mt-0",
              "min-[900px]:[margin-top:clamp(2rem,5vw,5rem)]",
              "min-[900px]:col-start-7 min-[900px]:col-span-6 min-[900px]:row-2"
            )}
            style={{ maxWidth: "100%" }}
          >
            <div
              className="w-full min-w-0"
              style={{ maxWidth: rightContentMax }}
            >
              <p
                className="font-body [line-height:var(--leading-loose)] min-[900px]:[line-height:1.78] text-pretty clr-text-primary"
                style={{
                  fontSize: "var(--text-body-md)",
                  marginBottom: "var(--space-06)",
                }}
              >
                We design and build modular digital systems, from design
                systems and platforms to full-scale applications, structured
                for long-term growth and adaptability.
              </p>
              <p
                className="font-body [line-height:var(--leading-loose)] min-[900px]:[line-height:1.78] text-pretty clr-text-primary"
                style={{
                  fontSize: "var(--text-body-md)",
                  marginBottom: "var(--space-05)",
                }}
              >
                Our work is built on shared foundations, enabling faster
                development, operational consistency, and continuous evolution
                across initiatives.
              </p>
              <div
                className={cn(
                  "w-full min-w-0",
                  "grid max-w-full grid-cols-1",
                  "gap-y-[var(--space-08)]",
                  "gap-x-[var(--space-10)]",
                  "min-[640px]:grid-cols-2"
                )}
                style={{ marginBottom: "var(--space-07)" }}
              >
                <div>
                  <p
                    className="font-body font-semibold text-pretty [color:color-mix(in_srgb,var(--color-text-primary)_88%,var(--color-text-secondary)_12%)]"
                    style={{
                      ...bodyStyle,
                      marginBottom: "var(--space-02)",
                    }}
                  >
                    System-based solutions
                  </p>
                  <p
                    className="font-body text-pretty clr-text-secondary"
                    style={bodyStyle}
                  >
                    Built on our internal platform to accelerate development,
                    reduce duplication, and maintain consistency across
                    ventures.
                  </p>
                </div>
                <div>
                  <p
                    className="font-body font-semibold text-pretty [color:color-mix(in_srgb,var(--color-text-primary)_88%,var(--color-text-secondary)_12%)]"
                    style={{
                      ...bodyStyle,
                      marginBottom: "var(--space-02)",
                    }}
                  >
                    Tailored systems
                  </p>
                  <p
                    className="font-body text-pretty clr-text-secondary"
                    style={bodyStyle}
                  >
                    Designed for specialized institutional needs where
                    off-the-shelf systems are not sufficient.
                  </p>
                </div>
              </div>
              <p
                className="font-body text-pretty clr-text-secondary"
                style={bodyStyle}
              >
                We also collaborate with select partners to develop and grow
                ventures within the Rasden ecosystem.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
