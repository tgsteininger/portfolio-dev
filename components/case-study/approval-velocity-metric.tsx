"use client"

import type { CSSProperties } from "react"
import { useMemo } from "react"

import { METRIC_ICON, METRIC_ICON_EASE, metricIconStroke } from "@/lib/metric-icon"
import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface ApprovalVelocityMetricProps {
  visualStaggerMs?: number
}

/** Restored geometry from pre-simplification pass; stroke styling matched to MediaPlatform. */
const SW = metricIconStroke(90)
const NSE = "non-scaling-stroke" as const

export function ApprovalVelocityMetric({
  visualStaggerMs = 0,
}: ApprovalVelocityMetricProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const trendStart = useMemo(() => ({ x: 12.6562, y: 63 }), [])
  const trendEnd = useMemo(() => ({ x: 59.9062, y: 25.3125 }), [])
  const trendLength = useMemo(() => {
    const dx = trendEnd.x - trendStart.x
    const dy = trendEnd.y - trendStart.y
    return Math.sqrt(dx * dx + dy * dy)
  }, [trendEnd.x, trendEnd.y, trendStart.x, trendStart.y])

  const guideLength = 24.1875
  const ease = METRIC_ICON_EASE

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block h-auto w-full max-h-full max-w-full object-contain"
      preserveAspectRatio="xMidYMid meet"
      style={
        {
          ["--metric-icon-stroke" as string]: SW,
        } as CSSProperties
      }
    >
      <path
        d="M2.8125 87.1875H87.1875"
        className="metric-icon-muted"
        stroke={METRIC_ICON.muted}
        strokeWidth={SW}
        strokeLinecap="round"
        vectorEffect={NSE}
      />

      <rect
        x="5.0625"
        y="63.2812"
        width="14.625"
        height="23.9063"
        fill={METRIC_ICON.muted}
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : `transform 560ms ${ease} 0ms`,
          willChange: "transform",
        }}
      />
      <rect
        x="28.6875"
        y="46.6875"
        width="14.625"
        height="40.5"
        fill={METRIC_ICON.mid}
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : `transform 560ms ${ease} 120ms`,
          willChange: "transform",
        }}
      />
      <rect
        x="52.3125"
        y="27.5625"
        width="14.625"
        height="59.625"
        fill="#6EADED"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : `transform 560ms ${ease} 240ms`,
          willChange: "transform",
        }}
      />
      <rect
        x="75.9375"
        y="10.6875"
        width="14.625"
        height="76.5"
        fill={METRIC_ICON.active}
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : `transform 620ms ${ease} 360ms`,
          willChange: "transform",
        }}
      />

      <path
        d="M12.375 63V87.1875"
        className="metric-icon-draw-path"
        stroke={METRIC_ICON.active}
        strokeWidth={SW}
        strokeLinecap="round"
        vectorEffect={NSE}
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
        className="metric-icon-draw-path"
        stroke={METRIC_ICON.active}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={NSE}
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
        className="metric-icon-active"
        stroke={METRIC_ICON.active}
        strokeWidth={SW}
        strokeLinecap="round"
        vectorEffect={NSE}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: prefersReducedMotion ? "none" : `opacity 260ms ${ease} 980ms`,
        }}
      />
      <path
        d="M59.9062 25.3125L59.0625 27.8438"
        className="metric-icon-active"
        stroke={METRIC_ICON.active}
        strokeWidth={SW}
        strokeLinecap="round"
        vectorEffect={NSE}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: prefersReducedMotion ? "none" : `opacity 260ms ${ease} 980ms`,
        }}
      />
    </svg>
  )
}
