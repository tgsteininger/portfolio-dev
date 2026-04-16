"use client"

import { useId } from "react"
import { Section, Container, Grid } from "@/components/layout"
import { accentLineHoverTransitionBase } from "@/lib/accent-hover-motion"
import { GitBranch, LayoutGrid, User } from "lucide-react"

const MESH_STROKE = "var(--color-blue-grey-300)"
const MESH_NODE = "var(--color-blue-grey-300)"

/**
 * Repeating node/line field (z-0). Sits under the alpha tint so structure reads through the veil.
 */
function ApproachSectionPattern() {
  const patternId = `approach-mesh-rpt-${useId().replace(/:/g, "")}`

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.35] max-md:opacity-[0.40]"
    >
      <svg
        className="block h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="132"
            height="132"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke={MESH_STROKE}
              strokeWidth="0.58"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            >
              <path d="M 14 28 L 40 50 L 72 34" />
              <path d="M 40 50 L 34 82 M 72 34 L 102 18" />
              <path d="M 6 70 L 28 58 L 22 98" />
              <path d="M 92 52 L 118 38 M 92 52 L 100 86" />
              <path d="M 48 108 L 78 96 L 108 114" />
              <path d="M 118 92 L 132 76" />
              <path d="M 0 44 L 18 32" />
              <path d="M 62 12 L 88 26" />
            </g>
            <g fill={MESH_NODE} stroke="none" opacity="0.48">
              <circle cx="14" cy="28" r="1.15" />
              <circle cx="40" cy="50" r="1" />
              <circle cx="72" cy="34" r="1.05" />
              <circle cx="34" cy="82" r="0.9" />
              <circle cx="102" cy="18" r="0.85" />
              <circle cx="6" cy="70" r="0.8" />
              <circle cx="28" cy="58" r="0.95" />
              <circle cx="22" cy="98" r="0.85" />
              <circle cx="92" cy="52" r="1" />
              <circle cx="118" cy="38" r="0.9" />
              <circle cx="100" cy="86" r="0.88" />
              <circle cx="48" cy="108" r="1" />
              <circle cx="78" cy="96" r="0.92" />
              <circle cx="108" cy="114" r="0.88" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

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
 * Icon tile: Lucide uses currentColor; parent group drives hover with headline.
 */
function IconWrapper({
  icon: Icon,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
}) {
  return (
    <div
      className="flex flex-shrink-0 items-center justify-center text-[var(--color-icon-secondary)] transition-colors duration-[var(--motion-duration-03)] ease-[var(--motion-easing-decelerate)] motion-reduce:transition-none group-hover:text-[var(--color-blue-500)]"
      style={{
        width: "var(--space-11)",
        height: "var(--space-11)",
        borderRadius: "var(--radius-04)",
        backgroundColor: "var(--color-blue-50)",
      }}
    >
      <Icon
        className="shrink-0"
        style={{
          width: "var(--icon-lg)",
          height: "var(--icon-lg)",
        }}
      />
    </div>
  )
}

/**
 * Principle block — parent `group` drives headline + icon color on hover; underline uses stats timing.
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
  const headingId = `approach-principle-${useId().replace(/:/g, "")}`

  return (
    <div
      className="group flex cursor-default flex-col transition-[background-color] duration-[var(--motion-duration-02)] ease-[var(--motion-easing-standard)] hover:bg-[var(--color-mix-approach-principle-hover)]"
      style={{
        gap: "var(--space-05)",
        paddingBlock: "var(--space-04)",
        paddingInline: "var(--space-03)",
        borderRadius: "var(--radius-04)",
      }}
    >
      <div className="flex min-w-0 items-start" style={{ gap: "var(--space-05)" }}>
        <IconWrapper icon={icon} />
        <div
          className="flex min-w-0 flex-1 flex-col items-start text-left"
          style={{
            paddingTop: "var(--space-02)",
            gap: "var(--space-02)",
          }}
        >
          <h3
            id={headingId}
            className="font-heading w-full min-w-0 text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-03)] ease-[var(--motion-easing-decelerate)] motion-reduce:transition-none group-hover:text-[var(--color-blue-500)]"
            style={{
              fontSize: "var(--text-heading-05)",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {title}
          </h3>
          {/* Same accent-line pattern as stats: overflow track + width reveal (left-anchored) */}
          <span
            aria-hidden
            className="block shrink-0 overflow-hidden"
            style={{
              width: "var(--space-09)",
              height: "var(--stroke-01)",
            }}
          >
            <span
              className="block h-full w-0 max-w-none rounded-full motion-reduce:transition-none group-hover:w-[var(--space-09)]"
              style={{
                backgroundColor: "var(--color-cyan-500)",
                opacity: 1,
                transitionProperty: "width",
                ...accentLineHoverTransitionBase,
              }}
            />
          </span>
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
      background="default"
      className="relative overflow-hidden"
    >
      {/* Stack: transparent section → z-0 mesh → z-1 neutral veil (same mix as row hover, softer) → z-2 content */}
      <ApproachSectionPattern />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "var(--color-bg-surface-approach-veil)" }}
      />
      <Container className="relative z-[2]">
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
