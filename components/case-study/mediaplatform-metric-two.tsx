"use client"

import { METRIC_ICON, METRIC_ICON_EASE } from "@/lib/metric-icon"
import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface MediaPlatformMetricTwoProps {
  visualStaggerMs?: number
}

/**
 * MediaPlatform Business Outcomes — metric 2 (“Production Velocity”).
 * Inline SVG matches `public/images/case-studies/mediaplatform/metric2.svg`. Sliders 1–2
 * ease down into the neutral low position; slider 3 rises into the blue “on” state last
 * (same intersection + easing pattern as `MediaPlatformMetricOne`).
 */
export function MediaPlatformMetricTwo({ visualStaggerMs = 0 }: MediaPlatformMetricTwoProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const settled = hasAnimated || prefersReducedMotion
  const ease = METRIC_ICON_EASE
  const sw = METRIC_ICON.strokeAt80
  const tfm = (durationMs: number, delayMs: number) =>
    prefersReducedMotion
      ? "none"
      : `transform ${durationMs}ms ${ease} ${delayMs}ms`

  const tfmFill = (durationMs: number, delayMs: number, fillDelayMs: number) =>
    prefersReducedMotion
      ? "none"
      : `transform ${durationMs}ms ${ease} ${delayMs}ms, fill ${Math.round(durationMs * 0.55)}ms ${ease} ${fillDelayMs}ms, stroke ${Math.round(durationMs * 0.55)}ms ${ease} ${fillDelayMs}ms`

  return (
      <svg
        ref={svgRef}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="block h-full w-full min-h-0 min-w-0 max-h-full max-w-full object-contain"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M24 16V64"
          className="metric-icon-muted"
          stroke={METRIC_ICON.muted}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 16V64"
          className="metric-icon-muted"
          stroke={METRIC_ICON.muted}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56 16V64"
          stroke={METRIC_ICON.mid}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g
          style={{
            transform: settled ? "translateY(0px)" : "translateY(-26px)",
            transformOrigin: "24px 60px",
            transition: tfm(420, 0),
            willChange: "transform",
          }}
        >
          <rect
            x={20}
            y={54}
            width={8}
            height={6}
            rx={2}
            fill="white"
            className="metric-icon-base"
            stroke={METRIC_ICON.base}
            strokeWidth={sw}
          />
        </g>

        <g
          style={{
            transform: settled ? "translateY(0px)" : "translateY(34px)",
            transformOrigin: "56px 23px",
            transition: tfmFill(480, 220, 440),
            willChange: "transform",
          }}
        >
          <rect
            x={52}
            y={20}
            width={8}
            height={6}
            rx={2}
            fill={settled ? METRIC_ICON.active : "white"}
            stroke={settled ? METRIC_ICON.active : METRIC_ICON.base}
            strokeWidth={sw}
          />
        </g>

        <g
          style={{
            transform: settled ? "translateY(0px)" : "translateY(-24px)",
            transformOrigin: "40px 60px",
            transition: tfm(420, 100),
            willChange: "transform",
          }}
        >
          <rect
            x={36}
            y={54}
            width={8}
            height={6}
            rx={2}
            fill="white"
            className="metric-icon-base"
            stroke={METRIC_ICON.base}
            strokeWidth={sw}
          />
        </g>
      </svg>
  )
}
