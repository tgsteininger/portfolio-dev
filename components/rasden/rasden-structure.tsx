import { Container, Grid, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

export function RasdenStructure() {
  return (
    <Section
      id="structure"
      spacing="large"
      style={{ paddingBlock: "var(--space-12)" }}
    >
      <Container>
        <Grid cols={12} gap="lg">
          <div className="col-span-full min-w-0 text-left lg:col-span-9">
            <p
              className="font-ui font-normal uppercase tracking-[0.12em] text-pretty"
              style={{
                fontSize: "var(--text-label-md)",
                color: "var(--color-red-800)",
                marginBottom: "var(--space-08)",
              }}
            >
              Structure
            </p>
            <h2
              className={cn(
                "font-heading font-medium tracking-tight clr-text-primary text-pretty min-[40rem]:font-semibold",
                "text-[length:var(--text-heading-02)] md:text-[length:var(--text-heading-01)]",
                "lg:text-[length:var(--text-display-lg)] xl:text-[length:var(--text-heading-01)]"
              )}
              style={{
                lineHeight: 1.15,
                marginBottom: "var(--space-07)",
              }}
            >
              A shared infrastructure supports all initiatives.
            </h2>
            <p
              className="font-body clr-text-secondary text-pretty"
              style={{
                fontSize: "var(--text-body-sm)",
                lineHeight: "var(--leading-relaxed)",
                maxWidth: "var(--layout-reading-max)",
              }}
            >
              Core systems for design, development, and operations are reused
              and refined over time, allowing each venture to build on existing
              foundations.
            </p>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
