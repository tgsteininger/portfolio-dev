"use client"

import { useEffect, useRef, useState } from "react"

interface MediaPlatformMetricTwoProps {
  width?: number
  height?: number
}

export function MediaPlatformMetricTwo({
  width = 84,
  height = 72,
}: MediaPlatformMetricTwoProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const transitionOrNone = (value: string) => (prefersReducedMotion ? "none" : value)

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox="0 0 108 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.85718 65.2852H104.143"
        stroke="#E5E7EB"
        strokeWidth="0.723214"
        strokeLinecap="round"
        strokeDasharray="2.89 2.89"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 280ms ${ease} 0ms`),
        }}
      />

      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateX(0)" : "translateX(-4px)",
          transformOrigin: "left center",
          transition: transitionOrNone(
            `opacity 360ms ${ease} 80ms, transform 360ms ${ease} 80ms`
          ),
          willChange: "opacity, transform",
        }}
      >
        <path
          d="M19.2857 39.2497C24.0788 39.2497 27.9643 35.3642 27.9643 30.5711C27.9643 25.7781 24.0788 21.8926 19.2857 21.8926C14.4927 21.8926 10.6072 25.7781 10.6072 30.5711C10.6072 35.3642 14.4927 39.2497 19.2857 39.2497Z"
          fill="#EBF3FC"
          stroke="#1970C8"
          strokeWidth="1.44643"
        />
        <path
          d="M3.85718 57.5703C3.85718 48.5703 9.00003 44.0703 19.2857 44.0703C29.5715 44.0703 34.7143 48.5703 34.7143 57.5703"
          fill="#EBF3FC"
        />
        <path
          d="M3.85718 57.5703C3.85718 48.5703 9.00003 44.0703 19.2857 44.0703C29.5715 44.0703 34.7143 48.5703 34.7143 57.5703"
          stroke="#1970C8"
          strokeWidth="1.44643"
        />
      </g>

      <path
        d="M36.6428 44.0723H67.5"
        stroke="#1970C8"
        strokeWidth="1.44643"
        strokeLinecap="round"
        strokeDasharray="0.96 0.96"
        pathLength={1}
        strokeDashoffset={hasAnimated ? 0 : 1}
        style={{
          transition: transitionOrNone(`stroke-dashoffset 520ms ${ease} 260ms`),
          willChange: "stroke-dashoffset",
        }}
      />
      <path
        d="M64.6072 41.3711L68.4643 44.0711L64.6072 46.7711"
        stroke="#1970C8"
        strokeWidth="1.44643"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 220ms ${ease} 760ms`),
        }}
      />

      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.92)",
          transformOrigin: "53.0358px 26.714px",
          transition: transitionOrNone(
            `opacity 320ms ${ease} 520ms, transform 320ms ${ease} 520ms`
          ),
          willChange: "opacity, transform",
        }}
      >
        <path
          d="M53.0358 34.9104C57.5625 34.9104 61.2322 31.2408 61.2322 26.714C61.2322 22.1872 57.5625 18.5176 53.0358 18.5176C48.509 18.5176 44.8394 22.1872 44.8394 26.714C44.8394 31.2408 48.509 34.9104 53.0358 34.9104Z"
          fill="#EBF3FC"
          stroke="#1970C8"
          strokeWidth="0.964286"
        />
        <path
          d="M48.6965 26.7143L51.8787 29.6071L57.3751 22.375"
          stroke="#1970C8"
          strokeWidth="1.44643"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateX(0)" : "translateX(4px)",
          transformOrigin: "right center",
          transition: transitionOrNone(
            `opacity 360ms ${ease} 660ms, transform 360ms ${ease} 660ms`
          ),
          willChange: "opacity, transform",
        }}
      >
        <path
          d="M86.7857 39.2497C91.5788 39.2497 95.4643 35.3642 95.4643 30.5711C95.4643 25.7781 91.5788 21.8926 86.7857 21.8926C81.9927 21.8926 78.1072 25.7781 78.1072 30.5711C78.1072 35.3642 81.9927 39.2497 86.7857 39.2497Z"
          fill="#EEF5FC"
          stroke="#5899E0"
          strokeWidth="1.44643"
        />
        <path
          d="M71.3572 57.5703C71.3572 48.5703 76.5 44.0703 86.7857 44.0703C97.0715 44.0703 102.214 48.5703 102.214 57.5703"
          fill="#EEF5FC"
        />
        <path
          d="M71.3572 57.5703C71.3572 48.5703 76.5 44.0703 86.7857 44.0703C97.0715 44.0703 102.214 48.5703 102.214 57.5703"
          stroke="#5899E0"
          strokeWidth="1.44643"
        />
      </g>
    </svg>
  )
}
