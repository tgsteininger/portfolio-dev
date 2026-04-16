import { Container } from "@/components/layout"
import { CheckCircle2 } from "lucide-react"
import {
  caseStudyBoBulletDelay,
  caseStudyBoFootnoteDelay,
  caseStudyBoMetricDelay,
} from "@/lib/case-study-reveal"
import { CircularMetric } from "@/components/case-study/circular-metric"
import { ApprovalVelocityMetric } from "@/components/case-study/approval-velocity-metric"
import { OperationalEfficiencyMetric } from "@/components/case-study/operational-efficiency-metric"

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
          data-reveal
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
            data-reveal
            data-reveal-delay="40"
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
              graphic={<CircularMetric progress={0.9} visualStaggerMs={0} />}
              revealDelay={caseStudyBoMetricDelay(0)}
            />

            {/* Metric Card 2: Approval Velocity */}
            <MetricCard
              label="APPROVAL VELOCITY"
              value="50–75%"
              primaryText="Faster approval workflows"
              secondaryText="Reduced delays and bottlenecks"
              graphic={<ApprovalVelocityMetric visualStaggerMs={140} />}
              revealDelay={caseStudyBoMetricDelay(1)}
            />

            {/* Metric Card 3: Operational Efficiency */}
            <MetricCard
              label="OPERATIONAL EFFICIENCY"
              value="Reduced dependency"
              valueSize="small"
              primaryText="Less manual coordination and fewer engineering handoffs"
              secondaryText="Simplified operational flow"
              graphic={<OperationalEfficiencyMetric visualStaggerMs={280} />}
              revealDelay={caseStudyBoMetricDelay(2)}
            />
          </div>

          {/* Outcome Bullets Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-[var(--grid-gap-sm)]"
            style={{ marginTop: "var(--space-08)" }}
          >
            <OutcomeBullet
              text="Replaced fragmented spreadsheet and email workflows with a centralized CMS"
              revealDelay={caseStudyBoBulletDelay(0)}
            />
            <OutcomeBullet
              text="Improved consistency across survey creation, translation, and approval"
              revealDelay={caseStudyBoBulletDelay(1)}
            />
            <OutcomeBullet
              text="Enabled more scalable multilingual distribution across global facilities"
              revealDelay={caseStudyBoBulletDelay(2)}
            />
            <OutcomeBullet
              text="Gave leadership clearer visibility into performance trends and operational priorities"
              revealDelay={caseStudyBoBulletDelay(3)}
            />
          </div>

          {/* Footnote */}
          <p
            className="font-body"
            data-reveal
            data-reveal-delay={caseStudyBoFootnoteDelay()}
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
  revealDelay,
}: {
  label: string
  value: string
  valueSize?: "large" | "small"
  primaryText: string
  secondaryText: string
  graphic: React.ReactNode
  revealDelay?: string
}) {
  return (
    <div
      data-reveal
      data-reveal-delay={revealDelay}
      className="transition-standard"
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
        transitionDuration: "var(--motion-duration-03)",
        transitionTimingFunction: "var(--motion-easing-premium)",
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
function OutcomeBullet({ text, revealDelay }: { text: string; revealDelay?: string }) {
  return (
    <div
      data-reveal
      data-reveal-delay={revealDelay}
      className="flex items-center transition-standard"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "var(--stroke-01) solid var(--color-border-default)",
        borderRadius: "var(--radius-03)",
        padding: "var(--space-05) var(--space-06)",
        gap: "var(--space-04)",
        transitionDuration: "var(--motion-duration-03)",
        transitionTimingFunction: "var(--motion-easing-premium)",
      }}
    >
      <CheckCircle2
        style={{
          width: "var(--icon-md)",
          height: "var(--icon-md)",
          color: "var(--color-blue-500)",
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

