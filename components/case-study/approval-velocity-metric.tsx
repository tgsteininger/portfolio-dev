"use client"

import { useId } from "react"
import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface ApprovalVelocityMetricProps {
  visualStaggerMs?: number
}

/**
 * Coca-Cola Business Outcomes — Approval Velocity.
 * Matches attached metric2 asset (90×90 bar chart + dashed trend arrow).
 */
export function ApprovalVelocityMetric({
  visualStaggerMs = 0,
}: ApprovalVelocityMetricProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)
  const uid = useId().replace(/:/g, "")
  const clipId = `av-clip-${uid}`

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const transitionOrNone = (value: string) => (prefersReducedMotion ? "none" : value)

  const barReveal = (delayMs: number, durationMs = 560) => ({
    transformBox: "fill-box" as const,
    transformOrigin: "center bottom",
    transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
    transition: prefersReducedMotion
      ? "none"
      : `transform ${durationMs}ms ${ease} ${delayMs}ms`,
    willChange: "transform",
  })

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block h-auto w-full max-h-full max-w-full object-contain"
      preserveAspectRatio="xMidYMid meet"
    >
      <g clipPath={`url(#${clipId})`}>
        {/* Baseline */}
        <path
          d="M2.8125 87.1875H87.1875"
          fill="none"
          stroke="#E9EDF5"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Bars — geometry from metric2.svg; rounded tops to match asset */}
        <rect
          x="5.0625"
          y="63.2812"
          width="14.625"
          height="23.9063"
          rx="1.5"
          fill="#C9D9F4"
          style={barReveal(0)}
        />
        <rect
          x="28.6875"
          y="46.6875"
          width="14.625"
          height="40.5"
          rx="1.5"
          fill="#B9CBEC"
          style={barReveal(120)}
        />
        <rect
          x="52.3125"
          y="27.5625"
          width="14.625"
          height="59.625"
          rx="1.5"
          fill="#8FB2E5"
          style={barReveal(240)}
        />
        <rect
          x="75.9375"
          y="10.6875"
          width="14.625"
          height="76.5"
          rx="1.5"
          fill="#3B82F6"
          style={barReveal(360, 620)}
        />

        {/* Trend shaft + head as one group so they stay connected */}
        <g
          style={{
            opacity: hasAnimated ? 1 : 0,
            transition: transitionOrNone(`opacity 600ms ${ease} 280ms`),
          }}
        >
          <path
            d="M12.375 63V87.1875"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />
          <path
            d="M12.6562 63.2812V63L59.9062 25.3125"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 3"
          />
          <path
            d="M59.9062 25.3125L57.375 25.5938"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M59.9062 25.3125L59.0625 27.8438"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="90" height="90" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
