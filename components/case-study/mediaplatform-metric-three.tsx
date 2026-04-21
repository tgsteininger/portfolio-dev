"use client"

import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface MediaPlatformMetricThreeProps {
  visualStaggerMs?: number
}

/**
 * MediaPlatform Business Outcomes — metric 3 (“Product Access”).
 * Inline SVG matches `public/images/case-studies/mediaplatform/metric3.svg` element order.
 * Stroke reveal sequence: small → gray tie → medium → blue horizontal → large → blue vertical
 * (same intersection + easing as metrics 1 & 2).
 */
export function MediaPlatformMetricThree({ visualStaggerMs = 0 }: MediaPlatformMetricThreeProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const settled = hasAnimated || prefersReducedMotion
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const dash = (durationMs: number, delayMs: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: settled ? 0 : 1,
    transition: prefersReducedMotion
      ? "none"
      : `stroke-dashoffset ${durationMs}ms ${ease} ${delayMs}ms`,
    willChange: "stroke-dashoffset" as const,
  })

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
        {/* DOM order matches static metric3.svg (stacking / final pixel parity) */}
        <path
          pathLength={1}
          d="M35 18H13C11.3431 18 10 19.3431 10 21V35C10 36.6569 11.3431 38 13 38H35C36.6569 38 38 36.6569 38 35V21C38 19.3431 36.6569 18 35 18Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(440, 480)}
        />
        <path
          pathLength={1}
          d="M18 42H30"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(280, 160)}
        />
        <path
          pathLength={1}
          d="M61 14H49C47.3431 14 46 15.3431 46 17V39C46 40.6569 47.3431 42 49 42H61C62.6569 42 64 40.6569 64 39V17C64 15.3431 62.6569 14 61 14Z"
          stroke="#B3B3B3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(380, 260)}
        />
        <path
          pathLength={1}
          d="M39 46H33C31.3431 46 30 47.3431 30 49V63C30 64.6569 31.3431 66 33 66H39C40.6569 66 42 64.6569 42 63V49C42 47.3431 40.6569 46 39 46Z"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(340, 0)}
        />
        <path
          pathLength={1}
          d="M38 28H46"
          stroke="#1970C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(300, 400)}
        />
        <path
          pathLength={1}
          d="M36 38V46"
          stroke="#1970C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(320, 600)}
        />
      </svg>
  )
}
