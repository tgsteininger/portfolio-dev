"use client"

import { useEffect, useRef, useState } from "react"

interface OperationalEfficiencyMetricProps {
  width?: number
  height?: number
}

export function OperationalEfficiencyMetric({
  width = 80,
  height = 60,
}: OperationalEfficiencyMetricProps) {
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
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_11371_7110)">
        <g
          style={{
            opacity: hasAnimated ? 0.3 : 0,
            transform: hasAnimated ? "translateX(0)" : "translateX(-4px)",
            transformOrigin: "left center",
            transition: transitionOrNone(`opacity 420ms ${ease} 0ms, transform 420ms ${ease} 0ms`),
            willChange: "opacity, transform",
          }}
        >
          <path d="M15.417 21.3364C17.193 21.3364 18.6328 19.8966 18.6328 18.1206C18.6328 16.3446 17.193 14.9048 15.417 14.9048C13.641 14.9048 12.2012 16.3446 12.2012 18.1206C12.2012 19.8966 13.641 21.3364 15.417 21.3364Z" fill="white" stroke="#415262" strokeWidth="0.46875" />
          <path d="M15.4159 37.9513C17.4878 37.9513 19.1676 36.2715 19.1676 34.1995C19.1676 32.1276 17.4878 30.4478 15.4159 30.4478C13.3439 30.4478 11.6641 32.1276 11.6641 34.1995C11.6641 36.2715 13.3439 37.9513 15.4159 37.9513Z" fill="white" stroke="#415262" strokeWidth="0.46875" />
          <path d="M15.4147 54.5658C17.7828 54.5658 19.7025 52.6461 19.7025 50.278C19.7025 47.9099 17.7828 45.9902 15.4147 45.9902C13.0466 45.9902 11.127 47.9099 11.127 50.278C11.127 52.6461 13.0466 54.5658 15.4147 54.5658Z" fill="white" stroke="#415262" strokeWidth="0.5625" />
          <path d="M15.4159 70.1091C17.4878 70.1091 19.1676 68.4293 19.1676 66.3573C19.1676 64.2853 17.4878 62.6055 15.4159 62.6055C13.3439 62.6055 11.6641 64.2853 11.6641 66.3573C11.6641 68.4293 13.3439 70.1091 15.4159 70.1091Z" fill="white" stroke="#415262" strokeWidth="0.46875" />
          <path d="M15.417 80.293C17.193 80.293 18.6328 78.8531 18.6328 77.0771C18.6328 75.3012 17.193 73.8613 15.417 73.8613C13.641 73.8613 12.2012 75.3012 12.2012 77.0771C12.2012 78.8531 13.641 80.293 15.417 80.293Z" fill="white" stroke="#415262" strokeWidth="0.46875" />
          <path d="M15.416 21.3364V30.4479" stroke="#415262" strokeWidth="0.4125" />
          <path d="M15.416 37.9517V45.9912" stroke="#415262" strokeWidth="0.4125" />
          <path d="M15.416 54.5659V62.6055" stroke="#415262" strokeWidth="0.4125" />
          <path d="M15.416 70.1094V73.8612" stroke="#415262" strokeWidth="0.4125" />
          <path d="M-5.48828 23.48H11.3671" stroke="#415262" strokeWidth="0.375" />
          <path d="M-5.48828 39.5591H11.6628" stroke="#415262" strokeWidth="0.375" />
          <path d="M-5.48828 55.6387H11.1268" stroke="#415262" strokeWidth="0.375" />
          <path d="M-5.48828 71.7173H11.3671" stroke="#415262" strokeWidth="0.375" />
          <path d="M8.9082 23.4802H11.5881M11.5881 23.4802L10.5161 22.6763M11.5881 23.4802L10.5161 24.2842" stroke="#415262" strokeWidth="0.28125" strokeLinecap="round" />
          <path d="M8.9082 39.5598H11.5881M11.5881 39.5598L10.5161 38.7559M11.5881 39.5598L10.5161 40.3638" stroke="#415262" strokeWidth="0.28125" strokeLinecap="round" />
          <path d="M8.9082 55.6379H11.5881M11.5881 55.6379L10.5161 54.834M11.5881 55.6379L10.5161 56.4419" stroke="#415262" strokeWidth="0.28125" strokeLinecap="round" />
          <path d="M8.9082 71.7166H11.5881M11.5881 71.7166L10.5161 70.9126M11.5881 71.7166L10.5161 72.5205" stroke="#415262" strokeWidth="0.28125" strokeLinecap="round" />
          <path d="M42.2182 32.3236C44.1422 32.3236 45.702 30.7638 45.702 28.8398C45.702 26.9157 44.1422 25.356 42.2182 25.356C40.2941 25.356 38.7344 26.9157 38.7344 28.8398C38.7344 30.7638 40.2941 32.3236 42.2182 32.3236Z" fill="white" stroke="#303D4B" strokeWidth="0.46875" />
          <path d="M42.2131 51.6187C44.4332 51.6187 46.2329 49.8189 46.2329 47.5989C46.2329 45.3788 44.4332 43.5791 42.2131 43.5791C39.9931 43.5791 38.1934 45.3788 38.1934 47.5989C38.1934 49.8189 39.9931 51.6187 42.2131 51.6187Z" fill="white" stroke="#303D4B" strokeWidth="0.525" />
          <path d="M42.2182 69.8421C44.1422 69.8421 45.702 68.2824 45.702 66.3583C45.702 64.4343 44.1422 62.8745 42.2182 62.8745C40.2941 62.8745 38.7344 64.4343 38.7344 66.3583C38.7344 68.2824 40.2941 69.8421 42.2182 69.8421Z" fill="white" stroke="#303D4B" strokeWidth="0.46875" />
        </g>

        <g
          style={{
            opacity: hasAnimated ? 0.3 : 0,
            transition: transitionOrNone(`opacity 280ms ${ease} 220ms`),
            willChange: "opacity",
          }}
        >
          <path
            d="M18.6328 18.1201L38.9997 28.3036"
            stroke="#303D4B"
            strokeWidth="0.375"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 440ms ${ease} 220ms`),
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M18.6328 34.1992L38.7317 46.5265"
            stroke="#303D4B"
            strokeWidth="0.375"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 440ms ${ease} 280ms`),
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M19.166 50.2783L38.4609 48.6704"
            stroke="#303D4B"
            strokeWidth="0.375"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 440ms ${ease} 340ms`),
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M18.6328 66.3584L38.7317 66.8944"
            stroke="#303D4B"
            strokeWidth="0.375"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 440ms ${ease} 400ms`),
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M18.6328 77.0772L38.9997 67.4297"
            stroke="#303D4B"
            strokeWidth="0.375"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 440ms ${ease} 460ms`),
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M45.6992 28.8398H58.2945L74.3736 47.5988"
            stroke="black"
            strokeWidth="0.4125"
            strokeLinecap="round"
            strokeDasharray="1.12 1.12"
            pathLength={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 420ms ${ease} 520ms`),
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M46.2363 47.5986H74.3748"
            stroke="black"
            strokeWidth="0.45"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 420ms ${ease} 600ms`),
              willChange: "stroke-dashoffset",
            }}
          />
          <path
            d="M45.6992 66.3576H58.2945L74.3736 47.5986"
            stroke="black"
            strokeWidth="0.4125"
            strokeLinecap="round"
            strokeDasharray="1.12 1.12"
            pathLength={1}
            strokeDashoffset={hasAnimated ? 0 : 1}
            style={{
              transition: transitionOrNone(`stroke-dashoffset 420ms ${ease} 680ms`),
              willChange: "stroke-dashoffset",
            }}
          />
        </g>

        <path
          d="M74.3706 52.4219C77.0347 52.4219 79.1943 50.2623 79.1943 47.5981C79.1943 44.934 77.0347 42.7744 74.3706 42.7744C71.7065 42.7744 69.5469 44.934 69.5469 47.5981C69.5469 50.2623 71.7065 52.4219 74.3706 52.4219Z"
          fill="white"
          stroke="#3B82F6"
          strokeWidth="0.9375"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? "scale(1)" : "scale(0.9)",
            transformOrigin: "74.3706px 47.5981px",
            transition: transitionOrNone(`opacity 300ms ${ease} 760ms, transform 300ms ${ease} 760ms`),
            willChange: "opacity, transform",
          }}
        />

        <path
          d="M79.1934 47.5986H101.71"
          stroke="#3B82F6"
          strokeWidth="0.9375"
          strokeDasharray="1 1"
          pathLength={1}
          strokeDashoffset={hasAnimated ? 0 : 1}
          style={{
            transition: transitionOrNone(`stroke-dashoffset 440ms ${ease} 880ms`),
            willChange: "stroke-dashoffset",
          }}
        />
        <path
          d="M102.6 47.5991L97.2402 44.3833"
          stroke="#3B82F6"
          strokeWidth="0.9375"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transition: transitionOrNone(`opacity 260ms ${ease} 1080ms`),
          }}
        />
        <path
          d="M102.6 47.5986L97.2402 50.8145"
          stroke="#3B82F6"
          strokeWidth="0.9375"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transition: transitionOrNone(`opacity 260ms ${ease} 1080ms`),
          }}
        />
        <path
          d="M110.641 52.9582C113.601 52.9582 116.001 50.5586 116.001 47.5985C116.001 44.6383 113.601 42.2388 110.641 42.2388C107.681 42.2388 105.281 44.6383 105.281 47.5985C105.281 50.5586 107.681 52.9582 110.641 52.9582Z"
          fill="#3B82F6"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? "scale(1)" : "scale(0.88)",
            transformOrigin: "110.641px 47.5985px",
            transition: transitionOrNone(`opacity 320ms ${ease} 1160ms, transform 320ms ${ease} 1160ms`),
            willChange: "opacity, transform",
          }}
        />
      </g>
      <defs>
        <clipPath id="clip0_11371_7110">
          <rect width="120" height="90" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
