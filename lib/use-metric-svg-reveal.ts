"use client"

import { useEffect, useRef, useState } from "react"

/**
 * One-shot intersection reveal for inline SVG business-outcome metrics.
 * Optional `visualStaggerMs` aligns icon motion with the parent card’s `data-reveal-delay`.
 */
export function useMetricSvgReveal(visualStaggerMs = 0) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const staggerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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
          if (!entry.isIntersecting) {
            if (staggerRef.current) {
              clearTimeout(staggerRef.current)
              staggerRef.current = null
            }
            return
          }

          const finish = () => {
            setHasAnimated(true)
            observer.unobserve(entry.target)
            staggerRef.current = null
          }

          if (visualStaggerMs <= 0) {
            finish()
          } else {
            staggerRef.current = setTimeout(finish, visualStaggerMs)
          }
        })
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: "0px 0px -8% 0px",
      }
    )

    observer.observe(target)
    return () => {
      observer.disconnect()
      if (staggerRef.current) {
        clearTimeout(staggerRef.current)
        staggerRef.current = null
      }
    }
  }, [hasAnimated, visualStaggerMs])

  return { svgRef, hasAnimated, prefersReducedMotion }
}
