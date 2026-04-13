"use client"

import { useEffect, useMemo, useRef, useState } from "react"

interface CircularMetricProps {
  size?: number
  strokeWidth?: number
  progress?: number
  trackColor?: string
  progressColor?: string
}

export function CircularMetric({
  size = 64,
  strokeWidth = 4,
  progress = 0.9,
  trackColor = "var(--color-neutral-200)",
  progressColor = "var(--color-blue-500)",
}: CircularMetricProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const clampedProgress = Math.min(1, Math.max(0, progress))
  const radius = useMemo(() => size / 2 - strokeWidth / 2, [size, strokeWidth])
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius])
  const finalDashOffset = useMemo(
    () => circumference * (1 - clampedProgress),
    [circumference, clampedProgress]
  )

  useEffect(() => {
    if (hasAnimated) return
    const target = svgRef.current
    if (!target) return

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotionQuery.matches) {
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.25) return
          setHasAnimated(true)
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: "0px 0px -8% 0px",
      }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [hasAnimated])

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
