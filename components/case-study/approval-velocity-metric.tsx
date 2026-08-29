"use client"

import { useId, useMemo } from "react"
import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface ApprovalVelocityMetricProps {
  visualStaggerMs?: number
}

/**
 * Coca-Cola Business Outcomes — Approval Velocity.
 * Inline SVG matches `public/images/case-studies/coca-cola/metric2.svg`.
 */
export function ApprovalVelocityMetric({
  visualStaggerMs = 0,
}: ApprovalVelocityMetricProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)
  const uid = useId().replace(/:/g, "")
  const clipId = `av-clip-${uid}`
  const maskId = `av-mask-${uid}`

  const trendStart = useMemo(() => ({ x: 12.6562, y: 63 }), [])
  const trendEnd = useMemo(() => ({ x: 59.9062, y: 25.3125 }), [])
  const trendLength = useMemo(() => {
    const dx = trendEnd.x - trendStart.x
    const dy = trendEnd.y - trendStart.y
    return Math.sqrt(dx * dx + dy * dy)
  }, [trendEnd.x, trendEnd.y, trendStart.x, trendStart.y])

  const guideLength = 24.1875
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"

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
        <mask
          id={maskId}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="90"
          height="90"
        >
          <path d="M90 0H0V90H90V0Z" fill="white" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path
            d="M2.8125 87.1875H87.1875"
            fill="none"
            stroke="#E9EDF5"
            strokeWidth="0.28125"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.6875 63.2812H5.0625V87.1875H19.6875V63.2812Z"
            fill="#C9D9F4"
            style={barReveal(0)}
          />
          <path
            d="M43.3125 46.6875H28.6875V87.1875H43.3125V46.6875Z"
            fill="#B9CBEC"
            style={barReveal(120)}
          />
          <path
            d="M66.9375 27.5625H52.3125V87.1875H66.9375V27.5625Z"
            fill="#8FB2E5"
            style={barReveal(240)}
          />
          <path
            d="M90.5625 10.6875H75.9375V87.1875H90.5625V10.6875Z"
            fill="#3B82F6"
            style={barReveal(360, 620)}
          />
          <path
            d="M12.375 63V87.1875"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="0.421875"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="1.41 1.41"
            style={{
              strokeDasharray: `${guideLength}`,
              strokeDashoffset: hasAnimated ? 0 : guideLength,
              transition: prefersReducedMotion
                ? "none"
                : `stroke-dashoffset 520ms ${ease} 140ms`,
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M12.6562 63.2812V63L59.9062 25.3125"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="0.421875"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{
              strokeDasharray: `${trendLength}`,
              strokeDashoffset: hasAnimated ? 0 : trendLength,
              transition: prefersReducedMotion
                ? "none"
                : `stroke-dashoffset 620ms ${ease} 520ms`,
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M59.9062 25.3125L57.375 25.5938"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="0.421875"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transition: prefersReducedMotion ? "none" : `opacity 260ms ease 980ms`,
            }}
          />
          <path
            d="M59.9062 25.3125L59.0625 27.8438"
            fill="none"
            stroke="#9DB9EA"
            strokeWidth="0.421875"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transition: prefersReducedMotion ? "none" : `opacity 260ms ease 980ms`,
            }}
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
