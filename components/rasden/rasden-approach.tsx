import { Container, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

const bodyStyle = {
  fontSize: "var(--text-body-md)",
  lineHeight: "var(--leading-relaxed)",
} as const

export function RasdenApproach() {
  return (
    <Section
      id="approach"
      spacing="large"
      style={{ paddingBlock: "var(--space-12)" }}
    >
      <Container>
        <div
          className={cn(
            "grid min-w-0 grid-cols-1",
            "gap-y-[var(--space-08)]",
            "md:grid-cols-12 md:items-start",
            "md:gap-y-[var(--space-08)]",
            "lg:gap-y-[var(--space-10)]",
            "md:gap-x-[var(--space-10)]",
            "lg:gap-x-[var(--space-12)]"
          )}
        >
          <p
            className="col-span-12 font-ui font-bold uppercase tracking-[0.12em] text-pretty md:col-span-7"
            style={{
              fontSize: "var(--text-label-md)",
              color: "var(--color-red-800)",
            }}
            id="approach-label"
          >
            Approach
          </p>
          <div
            className="hidden min-h-0 min-w-0 md:col-span-5 md:block"
            aria-hidden
          />
          <h2
            className={cn(
              "col-span-12 self-start",
              "font-heading font-bold tracking-tight text-pretty clr-text-primary",
              "text-[length:var(--text-heading-02)]",
              "md:col-span-7",
              "lg:text-[length:var(--text-heading-01)]",
              "xl:text-[length:var(--text-display-lg)]"
            )}
            style={{ lineHeight: 1.15 }}
            aria-labelledby="approach-label"
          >
            Designing systems
            <br />
            that scale, adapt, and
            <br />
            evolve over time.
          </h2>
          <div
            className={cn(
              "col-span-12 flex w-full min-w-0 max-w-full flex-col",
              "md:col-span-5 md:ms-auto md:max-w-[700px] md:shrink-0"
            )}
          >
            <p
              className="font-body clr-text-secondary text-pretty"
              style={{ ...bodyStyle, marginBottom: "var(--space-06)" }}
            >
              We design and build modular digital systems, from design systems
              and platforms to full-scale applications, structured for
              long-term growth and adaptability.
            </p>
            <p
              className="font-body clr-text-secondary text-pretty"
              style={{ ...bodyStyle, marginBottom: "var(--space-05)" }}
            >
              Our work is built on shared foundations, enabling faster
              development, consistency, and continuous evolution across
              initiatives.
            </p>
            <div
              className={cn(
                "grid w-full min-w-0 grid-cols-1 gap-y-[var(--space-08)]",
                "gap-x-[var(--space-10)]",
                "md:grid-cols-2"
              )}
              style={{ marginBottom: "var(--space-07)" }}
            >
              <div>
                <p
                  className="font-body font-medium text-pretty clr-text-secondary"
                  style={{
                    fontSize: "var(--text-body-md)",
                    lineHeight: "var(--leading-relaxed)",
                    marginBottom: "var(--space-02)",
                  }}
                >
                  System-based solutions
                </p>
                <p
                  className="font-body clr-text-secondary text-pretty"
                  style={bodyStyle}
                >
                  System-based solutions developed from our internal platform.
                </p>
              </div>
              <div>
                <p
                  className="font-body font-medium text-pretty clr-text-secondary"
                  style={{
                    fontSize: "var(--text-body-md)",
                    lineHeight: "var(--leading-relaxed)",
                    marginBottom: "var(--space-02)",
                  }}
                >
                  Tailored systems
                </p>
                <p
                  className="font-body clr-text-secondary text-pretty"
                  style={bodyStyle}
                >
                  Tailored systems for more specialized institutional needs.
                </p>
              </div>
            </div>
            <p
              className="font-body clr-text-secondary text-pretty"
              style={bodyStyle}
            >
              We also collaborate with select partners to develop and grow
              ventures within the Rasden ecosystem.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
