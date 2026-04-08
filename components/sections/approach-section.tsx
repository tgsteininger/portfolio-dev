"use client"

import { Section, Container, Grid } from "@/components/layout"
import { GitBranch, LayoutGrid, User } from "lucide-react"

/**
 * Approach principle data
 */
const principles = [
  {
    icon: GitBranch,
    title: "Model Systems Through Research",
    description:
      "I start with research to map workflows, dependencies, and decision paths across users, data, and operations before designing interfaces.",
  },
  {
    icon: LayoutGrid,
    title: "Design for Operational Scale, Not Screens",
    description:
      "I build design systems, token architectures, and interaction patterns that reduce variance and support real-world operational complexity.",
  },
  {
    icon: User,
    title: "Augment Decisions, Not Just Interfaces",
    description:
      "I design workflows that support human judgment with data, automation, and AI, reducing friction while preserving accountability.",
  },
]

/**
 * Icon wrapper component with hover emphasis
 */
function IconWrapper({ 
  icon: Icon 
}: { 
  icon: React.ComponentType<{ className?: string }> 
}) {
  return (
    <div 
      className="flex items-center justify-center flex-shrink-0 transition-fast group-hover:scale-105 group-hover:shadow-[var(--elevation-01)]"
      style={{
        width: "var(--space-11)",
        height: "var(--space-11)",
        borderRadius: "var(--radius-04)",
        backgroundColor: "var(--color-blue-50)",
      }}
    >
      <Icon 
        className="clr-icon-secondary transition-fast group-hover:clr-icon-accent"
        style={{
          width: "var(--icon-lg)",
          height: "var(--icon-lg)",
        }}
      />
    </div>
  )
}

/**
 * Principle card component with hover microinteraction
 * - Icon scales subtly on hover
 * - Title gains accent underline on hover
 * - Subtle background emphasis
 */
function PrincipleCard({
  icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div 
      className="group flex flex-col cursor-default transition-standard hover:bg-[var(--color-bg-surface)] hover:shadow-[var(--elevation-01)]"
      style={{ 
        gap: "var(--space-05)",
        padding: "var(--space-05)",
        marginLeft: "calc(var(--space-05) * -1)",
        marginRight: "calc(var(--space-05) * -1)",
        borderRadius: "var(--radius-04)",
      }}
    >
      <div 
        className="flex items-start"
        style={{ gap: "var(--space-05)" }}
      >
        <IconWrapper icon={icon} />
        <div className="flex flex-col" style={{ paddingTop: "var(--space-02)" }}>
          <h3 
            className="clr-text-primary font-heading relative inline-block"
            style={{
              fontSize: "var(--text-heading-05)",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {title}
            {/* Animated underline on hover */}
            <span 
              className="absolute left-0 origin-left scale-x-0 group-hover:scale-x-100"
              style={{
                bottom: "calc(var(--space-01) * -1)",
                width: "100%",
                height: "var(--stroke-02)",
                backgroundColor: "var(--color-cyan-500)",
                borderRadius: "var(--radius-full)",
                transition: "transform 300ms var(--motion-easing-emphasized)",
              }}
            />
          </h3>
        </div>
      </div>
      <p 
        className="clr-text-secondary font-body transition-standard"
        style={{
          fontSize: "var(--text-body-sm)",
          lineHeight: 1.6,
          paddingLeft: "calc(var(--space-11) + var(--space-05))",
        }}
      >
        {description}
      </p>
    </div>
  )
}

/**
 * ApproachSection - Systems approach methodology.
 * Displays the "How I Approach Complex Systems" section with 3 principle blocks.
 */
export function ApproachSection() {
  return (
    <Section 
      id="approach" 
      background="subtle"
    >
      <Container>
        <div 
          className="flex flex-col"
          style={{ gap: "var(--space-12)" }}
        >
          {/* Section Header */}
          <h2 
            className="clr-text-primary font-heading"
            style={{
              fontSize: "var(--text-heading-02)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              maxWidth: "var(--layout-content-max)",
            }}
          >
            How I Approach Complex Systems
          </h2>

          {/* Principles Grid */}
          <Grid cols={3} gap="lg">
            {principles.map((principle) => (
              <PrincipleCard
                key={principle.title}
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  )
}
