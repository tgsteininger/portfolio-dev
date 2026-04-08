import { Container } from "@/components/layout"
import { CheckCircle2 } from "lucide-react"

/**
 * BusinessOutcomesSection
 * 
 * A structured enterprise section displaying key business metrics and outcomes.
 * Features a white floating container with metric cards and outcome bullets.
 */
export function BusinessOutcomesSection() {
  return (
    <section
      id="business-outcomes"
      style={{
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
      }}
    >
      <Container>
        {/* White Content Container */}
        <div
          style={{
            backgroundColor: "var(--color-bg-surface)",
            borderRadius: "var(--radius-04)",
            border: "var(--stroke-01) solid var(--color-border-subtle)",
            boxShadow: "var(--elevation-01)",
            padding: "var(--space-10)",
          }}
        >
          {/* Section Heading */}
          <h2
            className="font-heading"
            style={{
              fontSize: "var(--text-heading-01)",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-09)",
              letterSpacing: "-0.02em",
            }}
          >
            Business Outcomes
          </h2>

          {/* Metrics Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--grid-gap-md)]">
            {/* Metric Card 1: Adoption */}
            <MetricCard
              label="ADOPTION"
              value="90%+"
              primaryText="Platform adoption across target users"
              secondaryText="Strong uptake after rollout"
              graphic={<AdoptionRingGraphic />}
            />

            {/* Metric Card 2: Approval Velocity */}
            <MetricCard
              label="APPROVAL VELOCITY"
              value="50–75%"
              primaryText="Faster approval workflows"
              secondaryText="Reduced delays and bottlenecks"
              graphic={<VelocityBarGraphic />}
            />

            {/* Metric Card 3: Operational Efficiency */}
            <MetricCard
              label="OPERATIONAL EFFICIENCY"
              value="Reduced dependency"
              valueSize="small"
              primaryText="Less manual coordination and fewer engineering handoffs"
              secondaryText="Simplified operational flow"
              graphic={<EfficiencyFlowGraphic />}
            />
          </div>

          {/* Outcome Bullets Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-[var(--grid-gap-sm)]"
            style={{ marginTop: "var(--space-08)" }}
          >
            <OutcomeBullet text="Replaced fragmented spreadsheet and email workflows with a centralized CMS" />
            <OutcomeBullet text="Improved consistency across survey creation, translation, and approval" />
            <OutcomeBullet text="Enabled more scalable multilingual distribution across global facilities" />
            <OutcomeBullet text="Gave leadership clearer visibility into performance trends and operational priorities" />
          </div>

          {/* Footnote */}
          <p
            className="font-body"
            style={{
              marginTop: "var(--space-07)",
              fontSize: "var(--text-caption)",
              color: "var(--color-text-tertiary)",
              lineHeight: 1.5,
            }}
          >
            Outcomes based on stakeholder reporting, workflow analysis, and post-launch operational trends.
          </p>
        </div>
      </Container>
    </section>
  )
}

/**
 * MetricCard component
 */
function MetricCard({
  label,
  value,
  valueSize = "large",
  primaryText,
  secondaryText,
  graphic,
}: {
  label: string
  value: string
  valueSize?: "large" | "small"
  primaryText: string
  secondaryText: string
  graphic: React.ReactNode
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "var(--stroke-01) solid var(--color-border-default)",
        borderRadius: "var(--radius-03)",
        padding: "var(--space-07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "var(--space-05)",
        minHeight: "200px",
      }}
    >
      {/* Content */}
      <div className="flex flex-col" style={{ flex: 1 }}>
        {/* Label */}
        <span
          className="font-ui"
          style={{
            fontSize: "var(--text-overline)",
            fontWeight: 500,
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "var(--space-04)",
          }}
        >
          {label}
        </span>

        {/* Value */}
        <span
          className="font-heading"
          style={{
            fontSize: valueSize === "large" ? "var(--text-display-lg)" : "var(--text-heading-02)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "var(--space-05)",
          }}
        >
          {value}
        </span>

        {/* Primary text */}
        <p
          className="font-body"
          style={{
            fontSize: "var(--text-body-sm)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.5,
            marginBottom: "var(--space-02)",
          }}
        >
          {primaryText}
        </p>

        {/* Secondary text */}
        <p
          className="font-body"
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--color-text-tertiary)",
            lineHeight: 1.4,
          }}
        >
          {secondaryText}
        </p>
      </div>

      {/* Graphic */}
      <div
        className="flex-shrink-0"
        style={{
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {graphic}
      </div>
    </div>
  )
}

/**
 * OutcomeBullet component
 */
function OutcomeBullet({ text }: { text: string }) {
  return (
    <div
      className="flex items-center transition-standard"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "var(--stroke-01) solid var(--color-border-default)",
        borderRadius: "var(--radius-03)",
        padding: "var(--space-05) var(--space-06)",
        gap: "var(--space-04)",
      }}
    >
      <CheckCircle2
        style={{
          width: "var(--icon-md)",
          height: "var(--icon-md)",
          color: "var(--color-cyan-500)",
          flexShrink: 0,
        }}
      />
      <span
        className="font-body"
        style={{
          fontSize: "var(--text-body-sm)",
          color: "var(--color-text-primary)",
          lineHeight: 1.5,
        }}
      >
        {text}
      </span>
    </div>
  )
}

/**
 * Adoption Ring Graphic - circular progress ring
 */
function AdoptionRingGraphic() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background ring */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="var(--color-neutral-200)"
        strokeWidth="4"
        fill="none"
      />
      {/* Progress ring - 90% = ~324 degrees */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="var(--color-cyan-400)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="147 163"
        transform="rotate(-90 32 32)"
      />
    </svg>
  )
}

/**
 * Velocity Bar Graphic - ascending bar chart
 */
function VelocityBarGraphic() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bar 1 - shortest */}
      <rect
        x="8"
        y="44"
        width="10"
        height="12"
        rx="2"
        fill="var(--color-cyan-100)"
      />
      {/* Bar 2 */}
      <rect
        x="21"
        y="36"
        width="10"
        height="20"
        rx="2"
        fill="var(--color-cyan-200)"
      />
      {/* Bar 3 */}
      <rect
        x="34"
        y="26"
        width="10"
        height="30"
        rx="2"
        fill="var(--color-cyan-300)"
      />
      {/* Bar 4 - tallest */}
      <rect
        x="47"
        y="14"
        width="10"
        height="42"
        rx="2"
        fill="var(--color-cyan-500)"
      />
    </svg>
  )
}

/**
 * Efficiency Flow Graphic - workflow connection dots
 */
function EfficiencyFlowGraphic() {
  return (
    <svg
      width="80"
      height="48"
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dotted line */}
      <line
        x1="8"
        y1="24"
        x2="72"
        y2="24"
        stroke="var(--color-neutral-300)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      {/* Node 1 */}
      <circle
        cx="16"
        cy="24"
        r="6"
        fill="var(--color-neutral-200)"
        stroke="var(--color-neutral-300)"
        strokeWidth="2"
      />
      {/* Node 2 */}
      <circle
        cx="40"
        cy="24"
        r="6"
        fill="var(--color-neutral-200)"
        stroke="var(--color-neutral-300)"
        strokeWidth="2"
      />
      {/* Node 3 */}
      <circle
        cx="64"
        cy="24"
        r="6"
        fill="var(--color-cyan-500)"
        stroke="var(--color-cyan-600)"
        strokeWidth="2"
      />
      {/* Arrow head */}
      <path
        d="M70 24L76 24M76 24L72 20M76 24L72 28"
        stroke="var(--color-cyan-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
