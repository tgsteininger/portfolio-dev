import { Container } from "@/components/layout"
import { CheckCircle2 } from "lucide-react"
import { MediaPlatformMetricOne } from "@/components/case-study/mediaplatform-metric-one"
import { MediaPlatformMetricTwo } from "@/components/case-study/mediaplatform-metric-two"
import { MediaPlatformMetricThree } from "@/components/case-study/mediaplatform-metric-three"

export function MediaPlatformBusinessOutcomesSection() {
  return (
    <section
      id="business-outcomes"
      style={{
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
      }}
    >
      <Container>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--grid-gap-md)]">
            <MetricCard
              label="SETUP EFFICIENCY"
              value="Multi-step to instant start"
              valueSize="small"
              primaryText="Minimal inputs required to initiate projects"
              secondaryText="Faster transition from setup to execution"
              graphic={<MediaPlatformMetricOne />}
              revealDelay="80"
            />

            <MetricCard
              label="WORKFLOW VELOCITY"
              value="50-75% faster setup"
              valueSize="small"
              primaryText="Reduced delays during event preparation"
              secondaryText="Improved speed across production stages"
              graphic={<MediaPlatformMetricTwo />}
              revealDelay="130"
            />

            <MetricCard
              label="PRODUCT ACCESS"
              value="Multi-device, role-based"
              valueSize="small"
              primaryText="Designed for desktop, tablet, and mobile workflows"
              secondaryText="Expanded usability across user types"
              graphic={<MediaPlatformMetricThree />}
              revealDelay="180"
            />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-[var(--grid-gap-sm)]"
            style={{ marginTop: "var(--space-08)" }}
          >
            <OutcomeBullet
              text="Reduced dependency on engineering through self-service configuration"
              revealDelay="220"
            />
            <OutcomeBullet
              text="Enabled single-operator production workflows"
              revealDelay="260"
            />
            <OutcomeBullet
              text="Improved consistency across event setup, execution, and analytics"
              revealDelay="300"
            />
            <OutcomeBullet
              text="Established a scalable system for enterprise broadcasting"
              revealDelay="340"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

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
      <div className="flex flex-col" style={{ flex: 1 }}>
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

        <span
          className="font-heading"
          style={{
            fontSize:
              valueSize === "large"
                ? "var(--text-display-lg)"
                : "var(--text-heading-02)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "var(--space-05)",
          }}
        >
          {value}
        </span>

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

      <div
        className="flex-shrink-0"
        style={{
          width: "76px",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2px",
          marginRight: "2px",
        }}
      >
        <div
          style={{
            transform: "scale(0.94)",
            transformOrigin: "center center",
          }}
        >
          {graphic}
        </div>
      </div>
    </div>
  )
}

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
