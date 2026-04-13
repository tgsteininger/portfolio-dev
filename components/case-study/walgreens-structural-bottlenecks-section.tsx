import { Container } from "@/components/layout/container"

interface Bottleneck {
  number: string
  title: string
  description: string
}

const bottlenecks: Bottleneck[] = [
  {
    number: "01",
    title: "Reprocessing Overhead",
    description:
      "Pharmacists were required to re-read entire prescription records to make minor corrections, wasting time on repetitive review and increasing cognitive fatigue.",
  },
  {
    number: "02",
    title: "Inefficient Interaction Model",
    description:
      "The system relied heavily on mouse-based input with limited keyboard support, resulting in slower navigation and reduced throughput in high-volume scenarios.",
  },
  {
    number: "03",
    title: "Ambiguous Exception Handling",
    description:
      "Errors could be flagged but without context or specificity, forcing technicians to re-analyze entire records and increasing back-and-forth communication.",
  },
  {
    number: "04",
    title: "Fragmented Cross-System Validation",
    description:
      "Prescription verification required switching between multiple applications and windows, causing loss of context, increased error potential, and workflow interruptions.",
  },
  {
    number: "05",
    title: "Loss of Workflow State",
    description:
      "No clear indicators of progress or completion existed across tasks. Users lost their place after interruptions, leading to repeated work and reduced efficiency.",
  },
]

function BottleneckItem({
  bottleneck,
  revealDelay,
}: {
  bottleneck: Bottleneck
  revealDelay?: string
}) {
  return (
    <div
      className="group flex items-start transition-fast hover:bg-[var(--color-bg-surface-subtle)]"
      data-reveal
      data-reveal-delay={revealDelay}
      style={{
        paddingTop: "var(--space-07)",
        paddingBottom: "var(--space-07)",
        paddingLeft: "var(--space-05)",
        paddingRight: "var(--space-05)",
        marginLeft: "calc(var(--space-05) * -1)",
        marginRight: "calc(var(--space-05) * -1)",
        borderBottom: "var(--stroke-01) solid var(--color-border-subtle)",
        borderRadius: "var(--radius-03)",
        transitionDuration: "var(--motion-duration-03)",
        transitionTimingFunction: "var(--motion-easing-premium)",
      }}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center font-ui clr-text-accent"
        style={{
          width: "var(--space-09)",
          height: "var(--space-08)",
          backgroundColor: "var(--color-blue-50)",
          borderRadius: "var(--radius-02)",
          fontSize: "var(--text-label-sm)",
          fontWeight: 600,
          marginRight: "var(--space-06)",
        }}
      >
        {bottleneck.number}
      </div>

      <div className="flex flex-col" style={{ gap: "var(--space-03)" }}>
        <h3
          className="font-heading clr-text-primary"
          style={{
            fontSize: "var(--text-heading-05)",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {bottleneck.title}
        </h3>
        <p
          className="font-body clr-text-secondary"
          style={{
            fontSize: "var(--text-body-md)",
            lineHeight: 1.6,
            maxWidth: "var(--layout-reading-max)",
          }}
        >
          {bottleneck.description}
        </p>
      </div>
    </div>
  )
}

export function WalgreensStructuralBottlenecksSection() {
  return (
    <section
      id="structural-bottlenecks"
      className="relative"
      style={{
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
        backgroundColor: "var(--color-bg-page)",
      }}
    >
      <Container>
        <header
          className="flex flex-col"
          data-reveal
          style={{
            gap: "var(--space-05)",
            marginBottom: "var(--space-08)",
          }}
        >
          <h2
            className="font-heading clr-text-primary"
            style={{
              fontSize: "var(--text-heading-02)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Structural Bottlenecks
          </h2>
          <p
            className="font-body clr-text-secondary"
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.6,
              maxWidth: "var(--layout-content-max)",
            }}
          >
            Five critical workflow friction points compounded across a high-volume pharmacy
            environment, creating measurable inefficiency, increased error rates, and slowed
            prescription throughput.
          </p>
        </header>

        <div
          className="flex flex-col"
          style={{
            borderTop: "var(--stroke-01) solid var(--color-border-subtle)",
          }}
        >
          {bottlenecks.map((bottleneck, index) => (
            <BottleneckItem
              key={bottleneck.number}
              bottleneck={bottleneck}
              revealDelay={String(80 + index * 50)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
