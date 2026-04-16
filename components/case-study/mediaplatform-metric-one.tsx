"use client"

import { useId } from "react"
import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface MediaPlatformMetricOneProps {
  /** Aligns stroke animation start with Business Outcomes card `data-reveal-delay`. */
  visualStaggerMs?: number
}

/**
 * MediaPlatform Business Outcomes — metric 1 (“Setup Efficiency”).
 * Inline SVG matches `public/images/case-studies/mediaplatform/metric1.svg`; stroke order
 * animates left → convergence → arrow / node (same observer + easing cadence as Coca-Cola metrics).
 */
export function MediaPlatformMetricOne({ visualStaggerMs = 0 }: MediaPlatformMetricOneProps) {
  const gradId = useId().replace(/:/g, "")
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const none = prefersReducedMotion
  const dash = (durationMs: number, delayMs: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: hasAnimated ? 0 : 1,
    transition: none ? "none" : `stroke-dashoffset ${durationMs}ms ${ease} ${delayMs}ms`,
    willChange: "stroke-dashoffset" as const,
  })

  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        ref={svgRef}
        width={80}
        height={80}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`${gradId}-paint`}
            x1="47"
            y1="38.5"
            x2="60"
            y2="38.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D1D1D1" />
            <stop offset="1" stopColor="#1970C8" />
          </linearGradient>
        </defs>

        {/* 1–4: horizontal inputs (left to right stagger) */}
        <path
          pathLength={1}
          d="M10 21H29"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(320, 0)}
        />
        <path
          pathLength={1}
          d="M10 33H29"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(320, 48)}
        />
        <path
          pathLength={1}
          d="M10 45H29"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(320, 96)}
        />
        <path
          pathLength={1}
          d="M10 57H29"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(320, 144)}
        />

        {/* 5–8: junction nodes */}
        <path
          pathLength={1}
          d="M33.5 24C35.433 24 37 22.433 37 20.5C37 18.567 35.433 17 33.5 17C31.567 17 30 18.567 30 20.5C30 22.433 31.567 24 33.5 24Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(380, 200)}
        />
        <path
          pathLength={1}
          d="M33.5 36C35.433 36 37 34.433 37 32.5C37 30.567 35.433 29 33.5 29C31.567 29 30 30.567 30 32.5C30 34.433 31.567 36 33.5 36Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(380, 232)}
        />
        <path
          pathLength={1}
          d="M33.5 48C35.433 48 37 46.433 37 44.5C37 42.567 35.433 41 33.5 41C31.567 41 30 42.567 30 44.5C30 46.433 31.567 48 33.5 48Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(380, 264)}
        />
        <path
          pathLength={1}
          d="M33.5 60C35.433 60 37 58.433 37 56.5C37 54.567 35.433 53 33.5 53C31.567 53 30 54.567 30 56.5C30 58.433 31.567 60 33.5 60Z"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(380, 296)}
        />

        {/* 9–12: convergence toward right */}
        <path
          pathLength={1}
          d="M41 34C44 37 47 38 53 38"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(400, 360)}
        />
        <path
          pathLength={1}
          d="M41 42C44 39 47 38.0001 53 38"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(400, 400)}
        />
        <path
          pathLength={1}
          d="M41 51C44.5 46 46.5 43.866 52 41"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(400, 440)}
        />
        <path
          pathLength={1}
          d="M41 25C44.5 30 46.5 32.134 52 35"
          stroke="#D1D1D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(400, 480)}
        />

        {/* 13–15: arrow shaft + gradient segment + chevron */}
        <path
          pathLength={1}
          d="M50 38H60"
          stroke="#1970C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(280, 540)}
        />
        <path
          pathLength={1}
          d="M47 38H60"
          stroke={`url(#${gradId}-paint)`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(340, 600)}
        />
        <path
          pathLength={1}
          d="M56 34L60 38L56 42"
          stroke="#1970C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(260, 680)}
        />

        {/* 16: end node */}
        <path
          pathLength={1}
          d="M69 43C71.7614 43 74 40.7614 74 38C74 35.2386 71.7614 33 69 33C66.2386 33 64 35.2386 64 38C64 40.7614 66.2386 43 69 43Z"
          stroke="#1970C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={dash(420, 760)}
        />
      </svg>
    </div>
  )
}
