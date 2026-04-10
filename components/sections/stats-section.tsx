"use client"

import { Section, Container, Grid } from "@/components/layout"
import { accentLineHoverTransitionBase } from "@/lib/accent-hover-motion"

/**
 * Stats data structure
 */
interface Stat {
  value: string
  description: string
}

/**
 * Default stats matching the Figma design
 */
const defaultStats: Stat[] = [
  {
    value: "20+ Years",
    description: "Designing complex, data-driven systems across enterprise environments",
  },
  {
    value: "Global Platforms",
    description: "Delivered scalable solutions across distributed teams and international operations",
  },
  {
    value: "Cross-Functional Systems",
    description: "Aligning product, engineering, and operations through shared system design",
  },
  {
    value: "AI-Augmented Workflows",
    description: "Integrating automation and decision support into high-stakes user journeys",
  },
]

/**
 * StatsSection Props
 */
interface StatsSectionProps {
  stats?: Stat[]
}

/**
 * Individual stat block: cyan overline grows by width above headline; content lifts/scales on hover.
 */
function StatBlock({
  stat,
  showDivider,
}: {
  stat: Stat
  showDivider: boolean
}) {
  return (
    <div className="group flex cursor-default" style={{ gap: "var(--grid-gap-md)" }}>
      {/* Vertical divider - only on non-first items, hidden on mobile */}
      {showDivider && (
        <div
          className="hidden flex-shrink-0 lg:block"
          style={{
            width: "var(--stroke-01)",
            backgroundColor:
              "color-mix(in srgb, var(--color-border-default) 22%, transparent)",
            marginTop: "var(--space-02)",
            marginBottom: "var(--space-02)",
          }}
        />
      )}

      {/* Stat content lift/scale: same transition contract as overline width + headline color */}
      <div
        className="flex min-w-0 flex-1 origin-top-left scale-100 flex-col items-start text-left motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:scale-100 group-hover:-translate-y-[3px] group-hover:scale-[1.015] motion-reduce:transform-none"
        style={{
          gap: "var(--space-05)",
          transitionProperty: "transform",
          ...accentLineHoverTransitionBase,
        }}
      >
        <div
          className="relative w-full min-w-0"
          style={{
            paddingTop: "calc(var(--stroke-01) + var(--space-03))",
          }}
        >
          {/* Overline: fixed track + width 0 → 100% (left-anchored grow / shrink) */}
          <span
            aria-hidden
            className="absolute left-0 top-0 block overflow-hidden"
            style={{
              width: "var(--space-09)",
              height: "var(--stroke-01)",
            }}
          >
            <span
              className="block h-full w-0 max-w-none rounded-full motion-reduce:transition-none group-hover:w-[var(--space-09)]"
              style={{
                backgroundColor: "var(--color-border-focus)",
                opacity: 1,
                transitionProperty: "width",
                ...accentLineHoverTransitionBase,
              }}
            />
          </span>
          <h3
            className="font-heading clr-text-primary motion-reduce:transition-none group-hover:clr-text-accent"
            style={{
              fontSize: "var(--text-heading-03)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              transitionProperty: "color",
              ...accentLineHoverTransitionBase,
            }}
          >
            {stat.value}
          </h3>
        </div>
        <p
          className="clr-text-secondary font-body"
          style={{
            fontSize: "var(--text-body-sm)",
            lineHeight: 1.6,
            maxWidth: "var(--layout-narrow-max)",
          }}
        >
          {stat.description}
        </p>
      </div>
    </div>
  )
}

/**
 * StatsSection - Key metrics and capabilities display.
 * Features a 4-column layout with vertical dividers between blocks.
 * Responsive: stacks on mobile, 2-col on tablet, 4-col on desktop.
 */
export function StatsSection({ stats = defaultStats }: StatsSectionProps) {
  return (
    <Section spacing="default" background="default">
      <Container>
        <Grid cols={4} gap="lg">
          {stats.map((stat, index) => (
            <StatBlock
              key={stat.value}
              stat={stat}
              showDivider={index > 0}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
