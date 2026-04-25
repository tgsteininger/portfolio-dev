import { Container, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

export function RasdenPhilosophy() {
  return (
    <Section
      id="philosophy"
      spacing="large"
      background="subtle"
      style={{ paddingBlock: "var(--space-12)" }}
    >
      <Container>
        <div
          className={cn(
            "grid min-w-0 grid-cols-1 gap-y-[var(--space-08)]",
            "md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start md:gap-x-[var(--space-10)] md:gap-y-0",
            "lg:gap-x-[var(--space-12)]"
          )}
        >
          <div
            className={cn(
              "flex flex-row items-center gap-x-[var(--space-04)]",
              "self-start"
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
              className="font-ui font-medium uppercase tracking-normal clr-text-primary text-pretty"
              style={{ fontSize: "var(--text-heading-03)" }}
            >
              Philosophy
            </span>
          </div>

          <div className="flex min-w-0 max-w-[var(--layout-reading-max)] flex-col">
            <p
              className={cn(
                "font-body font-normal tracking-[-0.01em] clr-text-primary text-pretty",
                "text-[length:var(--text-heading-03)] leading-[1.35]",
                "md:text-[length:var(--text-heading-02)] md:leading-[1.32]",
                "lg:text-[length:calc((var(--text-heading-01)+var(--text-heading-02))/2)] lg:leading-[1.3]"
              )}
              style={{ marginBottom: "var(--space-06)" }}
            >
              Rasden develops ventures internally through a shared system.
            </p>
            <p
              className="font-ui font-medium uppercase tracking-[0.1em] clr-text-tertiary text-pretty"
              style={{
                fontSize: "var(--text-label-sm)",
                marginBottom: "var(--space-02)",
              }}
            >
              Foundation
            </p>
            <p
              className="font-body clr-text-secondary text-pretty"
              style={{
                fontSize: "var(--text-body-md)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Each initiative is created and grown on a common foundation for
              structure, operations, and digital presence, allowing new efforts to
              launch and evolve without starting from scratch.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
