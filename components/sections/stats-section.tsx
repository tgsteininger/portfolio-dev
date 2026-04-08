"use client"

import { Section, Container, Grid } from "@/components/layout"

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
 * Individual stat block component with hover underline animation
 */
function StatBlock({ 
  stat, 
  showDivider 
}: { 
  stat: Stat
  showDivider: boolean 
}) {
  return (
    <div 
      className="group flex cursor-default transition-fast"
      style={{ gap: "var(--grid-gap-md)" }}
    >
      {/* Vertical divider - only on non-first items, hidden on mobile */}
      {showDivider && (
        <div 
          className="hidden lg:block flex-shrink-0"
          style={{
            width: "var(--stroke-01)",
            backgroundColor: "var(--color-border-default)",
            marginTop: "var(--space-02)",
            marginBottom: "var(--space-02)",
          }}
        />
      )}
      
      {/* Content */}
      <div className="flex flex-col" style={{ gap: "var(--space-04)" }}>
        <div className="relative inline-block">
          <h3 
            className="clr-text-primary font-heading"
            style={{
              fontSize: "var(--text-heading-03)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            {stat.value}
          </h3>
          {/* Animated underline on hover */}
          <span 
            className="absolute left-0 origin-left scale-x-0 group-hover:scale-x-100"
            style={{
              bottom: "calc(var(--space-01) * -1)",
              width: "var(--space-10)",
              height: "var(--stroke-02)",
              backgroundColor: "var(--color-cyan-500)",
              borderRadius: "var(--radius-full)",
              transition: "transform 300ms var(--motion-easing-emphasized)",
            }}
          />
        </div>
        <p 
          className="clr-text-secondary font-body transition-standard"
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
