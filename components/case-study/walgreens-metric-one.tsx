"use client"

import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface WalgreensMetricOneProps {
  width?: number
  height?: number
  visualStaggerMs?: number
}

export function WalgreensMetricOne({
  width = 84,
  height = 72,
  visualStaggerMs = 0,
}: WalgreensMetricOneProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const transitionOrNone = (value: string) => (prefersReducedMotion ? "none" : value)

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox="0 0 116 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g
        style={{
          opacity: hasAnimated ? 0.42 : 0,
          transform: hasAnimated ? "translateX(0)" : "translateX(-3px)",
          transformOrigin: "left center",
          transition: transitionOrNone(`opacity 420ms ${ease} 0ms, transform 420ms ${ease} 0ms`),
          willChange: "opacity, transform",
        }}
      >
        <path d="M14.5 21.5176V25.6604" stroke="#94A3B8" strokeWidth="0.828571" />
        <path d="M14.5 32.9102V37.053" stroke="#94A3B8" strokeWidth="0.828571" />
        <path d="M14.5 44.3027V48.4456" stroke="#94A3B8" strokeWidth="0.828571" />
        <path d="M14.5 55.6953V59.8382" stroke="#94A3B8" strokeWidth="0.828571" />
        <path d="M14.5 67.0879V71.2307" stroke="#94A3B8" strokeWidth="0.828571" />
        <path d="M14.5 20.9994C16.216 20.9994 17.6071 19.6083 17.6071 17.8923C17.6071 16.1763 16.216 14.7852 14.5 14.7852C12.7839 14.7852 11.3928 16.1763 11.3928 17.8923C11.3928 19.6083 12.7839 20.9994 14.5 20.9994Z" fill="white" stroke="#94A3B8" strokeWidth="1.03571" />
        <path d="M14.5 32.392C16.216 32.392 17.6071 31.0009 17.6071 29.2849C17.6071 27.5688 16.216 26.1777 14.5 26.1777C12.7839 26.1777 11.3928 27.5688 11.3928 29.2849C11.3928 31.0009 12.7839 32.392 14.5 32.392Z" fill="white" stroke="#94A3B8" strokeWidth="1.03571" />
        <path d="M14.5 43.7846C16.216 43.7846 17.6071 42.3935 17.6071 40.6775C17.6071 38.9614 16.216 37.5703 14.5 37.5703C12.7839 37.5703 11.3928 38.9614 11.3928 40.6775C11.3928 42.3935 12.7839 43.7846 14.5 43.7846Z" fill="white" stroke="#94A3B8" strokeWidth="1.03571" />
        <path d="M14.5 55.1772C16.216 55.1772 17.6071 53.7861 17.6071 52.07C17.6071 50.354 16.216 48.9629 14.5 48.9629C12.7839 48.9629 11.3928 50.354 11.3928 52.07C11.3928 53.7861 12.7839 55.1772 14.5 55.1772Z" fill="white" stroke="#94A3B8" strokeWidth="1.03571" />
        <path d="M14.5 66.5717C16.216 66.5717 17.6071 65.1806 17.6071 63.4646C17.6071 61.7485 16.216 60.3574 14.5 60.3574C12.7839 60.3574 11.3928 61.7485 11.3928 63.4646C11.3928 65.1806 12.7839 66.5717 14.5 66.5717Z" fill="white" stroke="#94A3B8" strokeWidth="1.03571" />
        <path d="M14.5 77.9643C16.216 77.9643 17.6071 76.5732 17.6071 74.8571C17.6071 73.1411 16.216 71.75 14.5 71.75C12.7839 71.75 11.3928 73.1411 11.3928 74.8571C11.3928 76.5732 12.7839 77.9643 14.5 77.9643Z" fill="white" stroke="#94A3B8" strokeWidth="1.03571" />
        <path d="M17.6072 29.2852H25.8929" stroke="#94A3B8" strokeWidth="0.776786" />
        <path d="M27.9644 31.0977C28.9654 31.0977 29.7769 30.2862 29.7769 29.2852C29.7769 28.2841 28.9654 27.4727 27.9644 27.4727C26.9633 27.4727 26.1519 28.2841 26.1519 29.2852C26.1519 30.2862 26.9633 31.0977 27.9644 31.0977Z" fill="white" stroke="#94A3B8" strokeWidth="0.776786" />
        <path d="M17.6072 52.0703H25.8929" stroke="#94A3B8" strokeWidth="0.776786" />
        <path d="M27.9644 53.8828C28.9654 53.8828 29.7769 53.0713 29.7769 52.0703C29.7769 51.0693 28.9654 50.2578 27.9644 50.2578C26.9633 50.2578 26.1519 51.0693 26.1519 52.0703C26.1519 53.0713 26.9633 53.8828 27.9644 53.8828Z" fill="white" stroke="#94A3B8" strokeWidth="0.776786" />
        <path d="M17.6072 74.8574H25.8929" stroke="#94A3B8" strokeWidth="0.776786" />
        <path d="M27.9644 76.6699C28.9654 76.6699 29.7769 75.8584 29.7769 74.8574C29.7769 73.8564 28.9654 73.0449 27.9644 73.0449C26.9633 73.0449 26.1519 73.8564 26.1519 74.8574C26.1519 75.8584 26.9633 76.6699 27.9644 76.6699Z" fill="white" stroke="#94A3B8" strokeWidth="0.776786" />
      </g>

      <path
        d="M31.0715 46.375H78.7144"
        stroke="#1970C8"
        strokeWidth="1.29464"
        strokeLinecap="round"
        strokeDasharray="1.04 1.04"
        pathLength={1}
        strokeDashoffset={hasAnimated ? 0 : 1}
        style={{
          transition: transitionOrNone(`stroke-dashoffset 560ms ${ease} 220ms`),
          willChange: "stroke-dashoffset",
        }}
      />
      <path
        d="M75.6072 43.7852L79.75 46.3744L75.6072 48.9637"
        stroke="#1970C8"
        strokeWidth="1.29464"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 260ms ${ease} 700ms`),
        }}
      />

      <path
        d="M100.464 40.6777V45.8563"
        stroke="#1970C8"
        strokeWidth="1.03571"
        style={{
          opacity: hasAnimated ? 0.3 : 0,
          transition: transitionOrNone(`opacity 260ms ${ease} 760ms`),
        }}
      />
      <path
        d="M100.464 58.2852V63.4637"
        stroke="#1970C8"
        strokeWidth="1.03571"
        style={{
          opacity: hasAnimated ? 0.3 : 0,
          transition: transitionOrNone(`opacity 260ms ${ease} 820ms`),
        }}
      />

      <path
        d="M100.464 39.6423C103.324 39.6423 105.643 37.3238 105.643 34.4637C105.643 31.6037 103.324 29.2852 100.464 29.2852C97.6042 29.2852 95.2856 31.6037 95.2856 34.4637C95.2856 37.3238 97.6042 39.6423 100.464 39.6423Z"
        fill="#EBF3FC"
        stroke="#1970C8"
        strokeWidth="1.55357"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.9)",
          transformOrigin: "100.464px 34.4637px",
          transition: transitionOrNone(`opacity 320ms ${ease} 780ms, transform 320ms ${ease} 780ms`),
          willChange: "opacity, transform",
        }}
      />
      <path
        d="M100.464 57.2497C103.324 57.2497 105.643 54.9312 105.643 52.0711C105.643 49.2111 103.324 46.8926 100.464 46.8926C97.6042 46.8926 95.2856 49.2111 95.2856 52.0711C95.2856 54.9312 97.6042 57.2497 100.464 57.2497Z"
        fill="#EBF3FC"
        stroke="#1970C8"
        strokeWidth="1.55357"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.9)",
          transformOrigin: "100.464px 52.0711px",
          transition: transitionOrNone(`opacity 320ms ${ease} 860ms, transform 320ms ${ease} 860ms`),
          willChange: "opacity, transform",
        }}
      />
      <path
        d="M100.464 74.8571C103.324 74.8571 105.643 72.5386 105.643 69.6786C105.643 66.8185 103.324 64.5 100.464 64.5C97.6042 64.5 95.2856 66.8185 95.2856 69.6786C95.2856 72.5386 97.6042 74.8571 100.464 74.8571Z"
        fill="#EBF3FC"
        stroke="#1970C8"
        strokeWidth="1.55357"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.9)",
          transformOrigin: "100.464px 69.6786px",
          transition: transitionOrNone(`opacity 320ms ${ease} 940ms, transform 320ms ${ease} 940ms`),
          willChange: "opacity, transform",
        }}
      />
    </svg>
  )
}
