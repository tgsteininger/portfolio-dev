import { Container } from "@/components/layout/container"

/**
 * Bottleneck data structure
 */
interface Bottleneck {
  number: string
  title: string
  description: string
}

/**
 * Default bottlenecks data
 */
const bottlenecks: Bottleneck[] = [
  {
    number: "01",
    title: "File Chaos",
    description:
      "Multiple uncontrolled versions of surveys created inconsistency and confusion across teams.",
  },
  {
    number: "02",
    title: "Engineers as Publishers",
    description:
      "Content updates required developer intervention, creating bottlenecks and delays.",
  },
  {
    number: "03",
    title: "Translation Without Structure",
    description:
      "There was no formal localization workflow, leading to inconsistent and unreliable translations.",
  },
  {
    number: "04",
    title: "Wrong Questions, Wrong Facilities",
    description:
      "Facilities sometimes received questions that did not apply to their machinery or operating context, hurting data quality.",
  },
  {
    number: "05",
    title: "Static Data, Limited Insight",
    description:
      "Leadership had access to information, but not in a form that supported timely decision-making.",
  },
]

/**
 * Individual bottleneck item component
 */
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
      {/* Number Badge */}
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

      {/* Content */}
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

/**
 * Structural Bottlenecks Section
 *
 * Displays critical operational friction points identified through
 * workflow analysis and stakeholder research.
 */
export function StructuralBottlenecksSection() {
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
        {/* Section Header */}
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
            Five critical operational friction points compounded across the global organization, 
            creating measurable productivity loss and delaying strategic decision-making.
          </p>
        </header>

        {/* Bottlenecks List */}
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
