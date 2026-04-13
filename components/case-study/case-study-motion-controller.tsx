"use client"

import { useEffect } from "react"

/**
 * CaseStudyMotionController
 *
 * Applies progressive, token-driven reveal states to elements marked
 * with `data-reveal` and optional `data-reveal-delay`.
 */
export function CaseStudyMotionController() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    )

    if (targets.length === 0) return

    targets.forEach((target) => {
      const delay = target.dataset.revealDelay
      if (delay) {
        target.style.setProperty("--reveal-delay", `${delay}ms`)
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-revealed")
          observer.unobserve(entry.target)
        })
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  return null
}
