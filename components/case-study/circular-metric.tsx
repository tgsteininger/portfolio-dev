"use client"

import { useMemo } from "react"
import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface CircularMetricProps {
  size?: number
  strokeWidth?: number
  progress?: number
  trackColor?: string
  progressColor?: string
  visualStaggerMs?: number
}

export function CircularMetric({
  size = 64,
  strokeWidth = 4,
  progress = 0.9,
  trackColor = "var(--color-neutral-200)",
  progressColor = "var(--color-blue-500)",
  visualStaggerMs = 0,
}: CircularMetricProps) {
  const { svgRef, hasAnimated } = useMetricSvgReveal(visualStaggerMs)

  const clampedProgress = Math.min(1, Math.max(0, progress))
  const radius = useMemo(() => size / 2 - strokeWidth / 2, [size, strokeWidth])
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius])
  const finalDashOffset = useMemo(
    () => circumference * (1 - clampedProgress),
    [circumference, clampedProgress]
  )

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={trackColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={progressColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={hasAnimated ? finalDashOffset : circumference}
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
          transition: "stroke-dashoffset 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "stroke-dashoffset",
        }}
      />
    </svg>
  )
}
