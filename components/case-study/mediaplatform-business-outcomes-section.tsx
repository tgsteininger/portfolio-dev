import { Container } from "@/components/layout"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"
import {
  caseStudyBoBulletDelay,
  caseStudyBoFootnoteDelay,
  caseStudyBoMetricDelay,
} from "@/lib/case-study-reveal"
import { MediaPlatformMetricOne } from "@/components/case-study/mediaplatform-metric-one"
import { MediaPlatformMetricTwo } from "@/components/case-study/mediaplatform-metric-two"
import { MediaPlatformMetricThree } from "@/components/case-study/mediaplatform-metric-three"
import { CaseStudyMetricGraphicSlot } from "@/components/case-study/case-study-metric-graphic-slot"

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
              graphic={<MediaPlatformMetricOne visualStaggerMs={0} />}
              revealDelay={caseStudyBoMetricDelay(0)}
            />

            <MetricCard
              label="PRODUCTION VELOCITY"
              value="Faster live production control"
              valueSize="small"
              primaryText="Reduced delay during scene switching and layout updates"
              secondaryText="Improved responsiveness during real-time workflows"
              graphic={<MediaPlatformMetricTwo visualStaggerMs={140} />}
              revealDelay={caseStudyBoMetricDelay(1)}
            />

            <MetricCard
              label="PRODUCT ACCESS"
              value="Multi-device, role-based"
              valueSize="small"
              primaryText="Designed for desktop, tablet, and mobile workflows"
              secondaryText="Expanded usability across user types"
              graphic={<MediaPlatformMetricThree visualStaggerMs={280} />}
              revealDelay={caseStudyBoMetricDelay(2)}
            />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-[var(--grid-gap-sm)]"
            style={{ marginTop: "var(--space-08)" }}
          >
            <OutcomeBullet
              text="Reduced dependency on engineering through self-service configuration"
              revealDelay={caseStudyBoBulletDelay(0)}
            />
            <OutcomeBullet
              text="Enabled streamlined production workflows across roles"
              revealDelay={caseStudyBoBulletDelay(1)}
            />
            <OutcomeBullet
              text="Improved consistency across event setup, execution, and analytics"
              revealDelay={caseStudyBoBulletDelay(2)}
            />
            <OutcomeBullet
              text="Established a scalable system for enterprise broadcasting"
              revealDelay={caseStudyBoBulletDelay(3)}
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
  const valueFontClasses =
    valueSize === "large"
      ? "max-[479px]:text-[length:var(--text-heading-02)] min-[480px]:text-[length:var(--text-display-lg)]"
      : "max-[479px]:text-[length:var(--text-heading-03)] min-[480px]:text-[length:var(--text-heading-02)]"

  return (
    <div
      data-reveal
      data-reveal-delay={revealDelay}
      className={cn(
        "transition-standard min-w-0 flex flex-col gap-y-[var(--space-03)]",
        "max-[479px]:p-[var(--space-06)] min-[480px]:p-[var(--space-07)]",
        "max-[479px]:min-h-0 min-[480px]:min-h-[200px]",
        "min-[480px]:grid min-[480px]:grid-cols-[minmax(0,1fr)_auto] min-[480px]:grid-rows-[auto_auto_auto_auto]",
        "min-[480px]:gap-x-[var(--space-05)] min-[480px]:gap-y-0",
      )}
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "var(--stroke-01) solid var(--color-border-default)",
        borderRadius: "var(--radius-03)",
        transitionDuration: "var(--motion-duration-03)",
        transitionTimingFunction: "var(--motion-easing-premium)",
      }}
    >
      <div className="flex w-full min-w-0 flex-row items-start justify-between gap-x-[var(--space-03)] min-[480px]:contents">
        <span
          className={cn(
            "font-ui min-w-0 flex-1 text-balance pr-[var(--space-02)]",
            "max-[479px]:mb-0 min-[480px]:col-start-1 min-[480px]:row-start-1 min-[480px]:mb-[var(--space-04)]",
          )}
          style={{
            fontSize: "var(--text-overline)",
            fontWeight: 500,
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>

        <div
          className={cn(
            "flex max-w-full shrink-0 justify-end self-start",
            "min-[480px]:col-start-2 min-[480px]:row-start-1 min-[480px]:row-span-4 min-[480px]:justify-end",
          )}
        >
          <CaseStudyMetricGraphicSlot fitArtwork>{graphic}</CaseStudyMetricGraphicSlot>
        </div>
      </div>

      <span
        className={cn(
          "font-heading min-w-0",
          valueFontClasses,
          "max-[479px]:mb-0 min-[480px]:col-start-1 min-[480px]:row-start-2 min-[480px]:mb-[var(--space-05)]",
        )}
        style={{
          fontWeight: 600,
          color: "var(--color-text-primary)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>

      <p
        className={cn(
          "font-body min-w-0",
          "max-[479px]:mb-0 min-[480px]:col-start-1 min-[480px]:row-start-3 min-[480px]:mb-[var(--space-02)]",
        )}
        style={{
          fontSize: "var(--text-body-sm)",
          color: "var(--color-text-secondary)",
          lineHeight: 1.5,
        }}
      >
        {primaryText}
      </p>

      <p
        className={cn(
          "font-body min-w-0",
          "min-[480px]:col-start-1 min-[480px]:row-start-4",
        )}
        style={{
          fontSize: "var(--text-caption)",
          color: "var(--color-text-tertiary)",
          lineHeight: 1.4,
        }}
      >
        {secondaryText}
      </p>
    </div>
  )
}

function OutcomeBullet({ text, revealDelay }: { text: string; revealDelay?: string }) {
  return (
    <div
      data-reveal
      data-reveal-delay={revealDelay}
      className="flex items-start gap-[var(--space-04)] transition-standard"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "var(--stroke-01) solid var(--color-border-default)",
        borderRadius: "var(--radius-03)",
        padding: "var(--space-05) var(--space-06)",
        transitionDuration: "var(--motion-duration-03)",
        transitionTimingFunction: "var(--motion-easing-premium)",
      }}
    >
      <CheckCircle2
        className="mt-[2px] shrink-0"
        style={{
          width: "var(--icon-md)",
          height: "var(--icon-md)",
          color: "var(--color-blue-500)",
        }}
      />
      <span
        className="font-body min-w-0"
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
