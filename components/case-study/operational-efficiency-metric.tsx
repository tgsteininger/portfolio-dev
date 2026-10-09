"use client"

import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface OperationalEfficiencyMetricProps {
  visualStaggerMs?: number
}

/**
 * Coca-Cola Business Outcomes — Operational Efficiency.
 * Matches attached metric3 asset (120×90): 5-node spine → 3 → hub → blue outcome.
 */
export function OperationalEfficiencyMetric({
  visualStaggerMs = 0,
}: OperationalEfficiencyMetricProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const transitionOrNone = (value: string) => (prefersReducedMotion ? "none" : value)
  const SW = 2
  const muted = "#D1D1D1"
  const active = "#1970C8"

  /** Column-1 node centers (5), evenly spaced */
  const c1 = [18, 31, 44, 57, 70] as const
  /** Column-2 node centers (3) */
  const c2 = [26, 44, 62] as const
  const hubY = 44
  const x1 = 28
  const x2 = 54
  const x3 = 78
  const xArrowEnd = 98
  const xBlue = 108

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block h-auto w-full max-h-full max-w-full object-contain"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 420ms ${ease} 0ms`),
        }}
      >
        {/* Input arrows (4) — matches asset */}
        <path d={`M6 ${c1[0]}H${x1 - 6}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path d={`M6 ${c1[1]}H${x1 - 6}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path d={`M6 ${c1[3]}H${x1 - 6}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path d={`M6 ${c1[4]}H${x1 - 6}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path
          d={`M${x1 - 9} ${c1[0] - 2.5}L${x1 - 5} ${c1[0]}L${x1 - 9} ${c1[0] + 2.5}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M${x1 - 9} ${c1[1] - 2.5}L${x1 - 5} ${c1[1]}L${x1 - 9} ${c1[1] + 2.5}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M${x1 - 9} ${c1[3] - 2.5}L${x1 - 5} ${c1[3]}L${x1 - 9} ${c1[3] + 2.5}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M${x1 - 9} ${c1[4] - 2.5}L${x1 - 5} ${c1[4]}L${x1 - 9} ${c1[4] + 2.5}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Column-1 vertical spine */}
        <path
          d={`M${x1} ${c1[0]}V${c1[4]}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
        />

        {/* Column-1 nodes (5) */}
        {c1.map((y) => (
          <circle key={`c1-${y}`} cx={x1} cy={y} r="3.25" fill="white" stroke={muted} strokeWidth={SW} />
        ))}

        {/* Column-1 → Column-2 */}
        <path d={`M${x1 + 3.5} ${c1[0]}L${x2 - 3.5} ${c2[0]}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path d={`M${x1 + 3.5} ${c1[1]}L${x2 - 3.5} ${c2[0]}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path d={`M${x1 + 3.5} ${c1[2]}H${x2 - 3.5}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path d={`M${x1 + 3.5} ${c1[3]}L${x2 - 3.5} ${c2[2]}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />
        <path d={`M${x1 + 3.5} ${c1[4]}L${x2 - 3.5} ${c2[2]}`} stroke={muted} strokeWidth={SW} strokeLinecap="round" />

        {/* Column-2 nodes (3) */}
        {c2.map((y) => (
          <circle key={`c2-${y}`} cx={x2} cy={y} r="3.25" fill="white" stroke={muted} strokeWidth={SW} />
        ))}

        {/* Column-2 → hub (dashed diagonals + solid middle) */}
        <path
          d={`M${x2 + 3.5} ${c2[0]}L${x3 - 3.75} ${hubY}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeDasharray="2.5 2.5"
        />
        <path
          d={`M${x2 + 3.5} ${c2[1]}H${x3 - 3.75}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
        />
        <path
          d={`M${x2 + 3.5} ${c2[2]}L${x3 - 3.75} ${hubY}`}
          stroke={muted}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeDasharray="2.5 2.5"
        />

        {/* Hub */}
        <circle cx={x3} cy={hubY} r="3.75" fill="white" stroke={muted} strokeWidth={SW} />
      </g>

      {/* Blue output: shaft + head grouped so they stay connected */}
      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 360ms ${ease} 280ms`),
        }}
      >
        <path
          d={`M${x3 + 4} ${hubY}H${xArrowEnd}`}
          fill="none"
          stroke={active}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeDasharray="2.5 2.5"
        />
        <path
          d={`M${xArrowEnd - 5} ${hubY - 4}L${xArrowEnd + 1} ${hubY}L${xArrowEnd - 5} ${hubY + 4}`}
          fill="none"
          stroke={active}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <circle
        cx={xBlue}
        cy={hubY}
        r="5"
        fill={active}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.88)",
          transformOrigin: `${xBlue}px ${hubY}px`,
          transition: transitionOrNone(
            `opacity 320ms ${ease} 420ms, transform 320ms ${ease} 420ms`
          ),
          willChange: "opacity, transform",
        }}
      />
    </svg>
  )
}
