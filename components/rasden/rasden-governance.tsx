import { Container, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

export function RasdenGovernance() {
  return (
    <Section
      id="governance"
      spacing="large"
      style={{ paddingBlock: "var(--space-12)" }}
    >
      <Container>
        <div
          className={cn(
            "grid min-w-0 grid-cols-1 gap-y-[var(--space-09)] text-left",
            "md:grid-cols-12 md:items-start md:gap-x-[var(--space-10)] md:gap-y-0",
            "lg:gap-x-[var(--space-12)]"
          )}
        >
          <div
            className={cn(
              "flex flex-row items-center gap-x-[var(--space-04)] self-start",
              "md:col-span-5"
            )}
          >
            <span
              aria-hidden
              className="shrink-0 rounded-[var(--radius-01)]"
              style={{
                width: "var(--stroke-02)",
                height: "var(--space-09)",
                backgroundColor: "var(--color-red-800)",
              }}
            />
            <span
              className="font-ui font-normal uppercase tracking-[0.12em] text-pretty"
              style={{
                fontSize: "var(--text-label-md)",
                color: "var(--color-red-800)",
              }}
            >
              Governance
            </span>
          </div>

          <div className="flex min-w-0 flex-col md:col-span-7">
            <h2
              className={cn(
                "font-heading font-medium tracking-tight clr-text-primary text-pretty min-[40rem]:font-semibold",
                "text-[length:var(--text-heading-02)] md:text-[length:var(--text-heading-01)]",
                "lg:text-[length:var(--text-display-lg)] xl:text-[length:var(--text-heading-01)]"
              )}
              style={{
                lineHeight: 1.15,
                marginBottom: "var(--space-06)",
              }}
            >
              Each initiative follows consistent standards for structure, design,
              and execution.
            </h2>
            <p
              className="font-body clr-text-secondary text-pretty"
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              This ensures alignment across the system while allowing individual
              ventures to develop independently.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
