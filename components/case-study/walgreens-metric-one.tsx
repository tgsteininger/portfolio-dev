"use client"

import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface WalgreensMetricOneProps {
  visualStaggerMs?: number
}

/**
 * Walgreens Business Outcomes — Workflow Efficiency.
 * Inline SVG matches `public/images/case-studies/walgreens/metric1.svg`.
 */
export function WalgreensMetricOne({
  visualStaggerMs = 0,
}: WalgreensMetricOneProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const transitionOrNone = (value: string) => (prefersReducedMotion ? "none" : value)
  const SW = 2.9

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 116 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block h-full w-full min-h-0 min-w-0 max-h-full max-w-full object-contain"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateX(0)" : "translateX(-3px)",
          transformOrigin: "left center",
          transition: transitionOrNone(`opacity 420ms ${ease} 0ms, transform 420ms ${ease} 0ms`),
          willChange: "opacity, transform",
        }}
      >
        <path d="M14.5 21.5156V25.6584" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 32.9102V37.053" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 44.3008V48.4437" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 55.6953V59.8382" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 67.0859V71.2287" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4998 20.9994C16.2158 20.9994 17.6069 19.6083 17.6069 17.8923C17.6069 16.1763 16.2158 14.7852 14.4998 14.7852C12.7837 14.7852 11.3926 16.1763 11.3926 17.8923C11.3926 19.6083 12.7837 20.9994 14.4998 20.9994Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4998 32.3901C16.2158 32.3901 17.6069 30.999 17.6069 29.283C17.6069 27.5669 16.2158 26.1758 14.4998 26.1758C12.7837 26.1758 11.3926 27.5669 11.3926 29.283C11.3926 30.999 12.7837 32.3901 14.4998 32.3901Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4998 43.7846C16.2158 43.7846 17.6069 42.3935 17.6069 40.6775C17.6069 38.9614 16.2158 37.5703 14.4998 37.5703C12.7837 37.5703 11.3926 38.9614 11.3926 40.6775C11.3926 42.3935 12.7837 43.7846 14.4998 43.7846Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4998 55.1752C16.2158 55.1752 17.6069 53.7841 17.6069 52.068C17.6069 50.352 16.2158 48.9609 14.4998 48.9609C12.7837 48.9609 11.3926 50.352 11.3926 52.068C11.3926 53.7841 12.7837 55.1752 14.4998 55.1752Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4998 66.5698C16.2158 66.5698 17.6069 65.1787 17.6069 63.4627C17.6069 61.7466 16.2158 60.3555 14.4998 60.3555C12.7837 60.3555 11.3926 61.7466 11.3926 63.4627C11.3926 65.1787 12.7837 66.5698 14.4998 66.5698Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4998 77.9643C16.2158 77.9643 17.6069 76.5732 17.6069 74.8571C17.6069 73.1411 16.2158 71.75 14.4998 71.75C12.7837 71.75 11.3926 73.1411 11.3926 74.8571C11.3926 76.5732 12.7837 77.9643 14.4998 77.9643Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.6069 29.2852H25.8926" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.9644 31.0977C28.9654 31.0977 29.7769 30.2862 29.7769 29.2852C29.7769 28.2841 28.9654 27.4727 27.9644 27.4727C26.9633 27.4727 26.1519 28.2841 26.1519 29.2852C26.1519 30.2862 26.9633 31.0977 27.9644 31.0977Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.6069 52.0703H25.8926" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.9644 53.8828C28.9654 53.8828 29.7769 53.0713 29.7769 52.0703C29.7769 51.0693 28.9654 50.2578 27.9644 50.2578C26.9633 50.2578 26.1519 51.0693 26.1519 52.0703C26.1519 53.0713 26.9633 53.8828 27.9644 53.8828Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.6069 74.8555H25.8926" fill="none" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.9644 76.668C28.9654 76.668 29.7769 75.8565 29.7769 74.8555C29.7769 73.8545 28.9654 73.043 27.9644 73.043C26.9633 73.043 26.1519 73.8545 26.1519 74.8555C26.1519 75.8565 26.9633 76.668 27.9644 76.668Z" fill="white" stroke="#D1D1D1" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 560ms ${ease} 220ms`),
          willChange: "opacity",
        }}
      >
        <path
          d="M37.0713 52.375H84.7142"
          fill="none"
          stroke="#1970C8"
          strokeWidth={SW}
          strokeLinecap="round"
          strokeDasharray="1.04 1.04"
        />
        <path
          d="M81.6074 49.7852L85.7502 52.3744L81.6074 54.9637"
          fill="none"
          stroke="#1970C8"
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <path
        d="M99.4639 40.6758V45.8544"
        fill="none"
        stroke="#1970C8"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 260ms ${ease} 760ms`),
        }}
      />
      <path
        d="M99.4639 58.2852V63.4637"
        fill="none"
        stroke="#1970C8"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 260ms ${ease} 820ms`),
        }}
      />

      <path
        d="M99.464 39.6423C102.324 39.6423 104.643 37.3238 104.643 34.4637C104.643 31.6037 102.324 29.2852 99.464 29.2852C96.6042 29.2852 94.2856 31.6037 94.2856 34.4637C94.2856 37.3238 96.6042 39.6423 99.464 39.6423Z"
        fill="white"
        stroke="#1970C8"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.9)",
          transformOrigin: "99.464px 34.4637px",
          transition: transitionOrNone(`opacity 320ms ${ease} 780ms, transform 320ms ${ease} 780ms`),
          willChange: "opacity, transform",
        }}
      />
      <path
        d="M99.464 57.2516C102.324 57.2516 104.643 54.9331 104.643 52.073C104.643 49.213 102.324 46.8945 99.464 46.8945C96.6042 46.8945 94.2856 49.213 94.2856 52.073C94.2856 54.9331 96.6042 57.2516 99.464 57.2516Z"
        fill="white"
        stroke="#1970C8"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.9)",
          transformOrigin: "99.464px 52.073px",
          transition: transitionOrNone(`opacity 320ms ${ease} 860ms, transform 320ms ${ease} 860ms`),
          willChange: "opacity, transform",
        }}
      />
      <path
        d="M99.464 74.8571C102.324 74.8571 104.643 72.5386 104.643 69.6786C104.643 66.8185 102.324 64.5 99.464 64.5C96.6042 64.5 94.2856 66.8185 94.2856 69.6786C94.2856 72.5386 96.6042 74.8571 99.464 74.8571Z"
        fill="white"
        stroke="#1970C8"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.9)",
          transformOrigin: "99.464px 69.6786px",
          transition: transitionOrNone(`opacity 320ms ${ease} 940ms, transform 320ms ${ease} 940ms`),
          willChange: "opacity, transform",
        }}
      />
    </svg>
  )
}
