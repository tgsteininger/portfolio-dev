"use client"

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
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
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
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 16V64"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56 16V64"
          stroke="#B3B3B3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Slider 1: starts higher, settles to bottom neutral (static y=54) */}
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
            stroke="#808080"
            strokeWidth={2}
          />
        </g>

        {/* Slider 3 (right): last — rises into blue “on” state (paint order matches static SVG) */}
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
            fill={settled ? "#1970C8" : "white"}
            stroke={settled ? "#1970C8" : "#808080"}
            strokeWidth={2}
          />
        </g>

        {/* Slider 2 (center): second — lowers after left */}
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
            stroke="#808080"
            strokeWidth={2}
          />
        </g>
      </svg>
  )
}
