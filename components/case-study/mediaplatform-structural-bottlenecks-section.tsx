import { Container } from "@/components/layout/container"

interface Bottleneck {
  number: string
  title: string
  description: string
}

const bottlenecks: Bottleneck[] = [
  {
    number: "01",
    title: "Mandatory Setup Friction",
    description:
      "Users encountered a multi-step event setup process with required inputs before accessing the production environment, delaying the start of production and increasing cognitive load upfront.",
  },
  {
    number: "02",
    title: "Producer Overload",
    description:
      "Manual layout adjustments during live events created cognitive strain and increased the likelihood of errors under pressure.",
  },
  {
    number: "03",
    title: "Single Camera Limitation",
    description:
      "The system lacked support for dynamic, multi-camera workflows, limiting production quality and flexibility.",
  },
  {
    number: "04",
    title: "Legacy Streaming Infrastructure",
    description:
      "Outdated protocols created performance issues, compatibility challenges, and increased failure risk during large-scale broadcasts.",
  },
  {
    number: "05",
    title: "Disconnected Planning Tools",
    description:
      "Event planning occurred outside the system, requiring spreadsheets and manual coordination without shared visibility.",
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

export function MediaPlatformStructuralBottlenecksSection() {
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
            Five critical breakdowns in the live broadcast workflow created
            inefficiency, increased stress, and introduced risk during high-stakes
            events.
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
