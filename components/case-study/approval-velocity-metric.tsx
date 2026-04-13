"use client"

import { useEffect, useMemo, useRef, useState } from "react"

interface ApprovalVelocityMetricProps {
  width?: number
  height?: number
}

export function ApprovalVelocityMetric({
  width = 72,
  height = 72,
}: ApprovalVelocityMetricProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const trendStart = useMemo(() => ({ x: 12.6562, y: 63 }), [])
  const trendEnd = useMemo(() => ({ x: 59.9062, y: 25.3125 }), [])
  const trendLength = useMemo(() => {
    const dx = trendEnd.x - trendStart.x
    const dy = trendEnd.y - trendStart.y
    return Math.sqrt(dx * dx + dy * dy)
  }, [trendEnd.x, trendEnd.y, trendStart.x, trendStart.y])

  const guideLength = 24.1875

  useEffect(() => {
    if (hasAnimated) return
    const target = svgRef.current
    if (!target) return

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(reducedMotionQuery.matches)

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
      width={width}
      height={height}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2.8125 87.1875H87.1875" stroke="#E9EDF5" strokeWidth="0.28125" />

      <rect
        x="5.0625"
        y="63.2812"
        width="14.625"
        height="23.9063"
        fill="#C9D9F4"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : "transform 560ms cubic-bezier(0.22, 1, 0.36, 1) 0ms",
          willChange: "transform",
        }}
      />
      <rect
        x="28.6875"
        y="46.6875"
        width="14.625"
        height="40.5"
        fill="#B9CBEC"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : "transform 560ms cubic-bezier(0.22, 1, 0.36, 1) 120ms",
          willChange: "transform",
        }}
      />
      <rect
        x="52.3125"
        y="27.5625"
        width="14.625"
        height="59.625"
        fill="#8FB2E5"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : "transform 560ms cubic-bezier(0.22, 1, 0.36, 1) 240ms",
          willChange: "transform",
        }}
      />
      <rect
        x="75.9375"
        y="10.6875"
        width="14.625"
        height="76.5"
        fill="#3B82F6"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center bottom",
          transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
          transition: prefersReducedMotion
            ? "none"
            : "transform 620ms cubic-bezier(0.22, 1, 0.36, 1) 360ms",
          willChange: "transform",
        }}
      />

      <path
        d="M12.375 63V87.1875"
        stroke="#9DB9EA"
        strokeWidth="0.421875"
        strokeDasharray="1.41 1.41"
        style={{
          strokeDasharray: `${guideLength}`,
          strokeDashoffset: hasAnimated ? 0 : guideLength,
          transition: prefersReducedMotion
            ? "none"
            : "stroke-dashoffset 520ms cubic-bezier(0.22, 1, 0.36, 1) 140ms",
          willChange: "stroke-dashoffset",
        }}
      />
      <path
        d="M12.6562 63.2812V63L59.9062 25.3125"
        stroke="#9DB9EA"
        strokeWidth="0.421875"
        strokeDasharray="1 1"
        style={{
          strokeDasharray: `${trendLength}`,
          strokeDashoffset: hasAnimated ? 0 : trendLength,
          transition: prefersReducedMotion
            ? "none"
            : "stroke-dashoffset 620ms cubic-bezier(0.22, 1, 0.36, 1) 520ms",
          willChange: "stroke-dashoffset",
        }}
      />
      <path
        d="M59.9062 25.3125L57.375 25.5938"
        stroke="#9DB9EA"
        strokeWidth="0.421875"
        strokeLinecap="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: prefersReducedMotion ? "none" : "opacity 260ms ease 980ms",
        }}
      />
      <path
        d="M59.9062 25.3125L59.0625 27.8438"
        stroke="#9DB9EA"
        strokeWidth="0.421875"
        strokeLinecap="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: prefersReducedMotion ? "none" : "opacity 260ms ease 980ms",
        }}
      />
    </svg>
  )
}
