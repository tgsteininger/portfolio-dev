"use client"

import { useMetricSvgReveal } from "@/lib/use-metric-svg-reveal"

interface WalgreensMetricThreeProps {
  visualStaggerMs?: number
}

export function WalgreensMetricThree({
  visualStaggerMs = 0,
}: WalgreensMetricThreeProps) {
  const { svgRef, hasAnimated, prefersReducedMotion } = useMetricSvgReveal(visualStaggerMs)

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
  const startDelayMs = 160
  const delayedMs = (ms: number) => `${ms + startDelayMs}ms`
  const transitionOrNone = (value: string) => (prefersReducedMotion ? "none" : value)

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 108 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block h-full w-full min-h-0 min-w-0 max-h-full max-w-full object-contain"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        style={{
          opacity: hasAnimated ? 0.42 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(-2px)",
          transformOrigin: "center top",
          transition: transitionOrNone(
            `opacity 360ms ${ease} ${delayedMs(0)}, transform 360ms ${ease} ${delayedMs(0)}`
          ),
          willChange: "opacity, transform",
        }}
      >
        <path d="M13.5 30.5703H25.0714" stroke="#94A3B8" strokeWidth="0.723214" />
        <path d="M32.7856 30.5703H44.3571" stroke="#94A3B8" strokeWidth="0.723214" />
        <path d="M52.0713 30.5703H63.6427" stroke="#94A3B8" strokeWidth="0.723214" />
        <path d="M71.3569 30.5703H82.9284" stroke="#94A3B8" strokeWidth="0.723214" />
        <path d="M9.64279 34.4291C11.773 34.4291 13.4999 32.7022 13.4999 30.572C13.4999 28.4417 11.773 26.7148 9.64279 26.7148C7.51255 26.7148 5.78564 28.4417 5.78564 30.572C5.78564 32.7022 7.51255 34.4291 9.64279 34.4291Z" fill="white" stroke="#94A3B8" strokeWidth="0.964286" />
        <path d="M28.9284 34.4291C31.0587 34.4291 32.7856 32.7022 32.7856 30.572C32.7856 28.4417 31.0587 26.7148 28.9284 26.7148C26.7982 26.7148 25.0713 28.4417 25.0713 30.572C25.0713 32.7022 26.7982 34.4291 28.9284 34.4291Z" fill="white" stroke="#94A3B8" strokeWidth="0.964286" />
        <path d="M48.2141 34.4291C50.3443 34.4291 52.0712 32.7022 52.0712 30.572C52.0712 28.4417 50.3443 26.7148 48.2141 26.7148C46.0838 26.7148 44.3569 28.4417 44.3569 30.572C44.3569 32.7022 46.0838 34.4291 48.2141 34.4291Z" fill="white" stroke="#94A3B8" strokeWidth="0.964286" />
        <path d="M67.4997 34.4291C69.63 34.4291 71.3569 32.7022 71.3569 30.572C71.3569 28.4417 69.63 26.7148 67.4997 26.7148C65.3695 26.7148 63.6426 28.4417 63.6426 30.572C63.6426 32.7022 65.3695 34.4291 67.4997 34.4291Z" fill="white" stroke="#94A3B8" strokeWidth="0.964286" />
        <path d="M86.7859 34.4291C88.9161 34.4291 90.643 32.7022 90.643 30.572C90.643 28.4417 88.9161 26.7148 86.7859 26.7148C84.6556 26.7148 82.9287 28.4417 82.9287 30.572C82.9287 32.7022 84.6556 34.4291 86.7859 34.4291Z" fill="white" stroke="#94A3B8" strokeWidth="0.964286" />
      </g>

      <g
        style={{
          opacity: hasAnimated ? 0.35 : 0,
          transition: transitionOrNone(`opacity 260ms ${ease} ${delayedMs(200)}`),
          willChange: "opacity",
        }}
      >
        <path d="M17.3569 35.3926V55.6426" stroke="#1970C8" strokeWidth="0.723214" strokeDasharray="1.93 1.93" />
        <path d="M17.3569 35.3926V47.4453" stroke="#1970C8" strokeWidth="0.723214" strokeDasharray="1.93 1.93" />
        <path d="M52.0713 35.3926V55.6426" stroke="#1970C8" strokeWidth="0.723214" strokeDasharray="1.93 1.93" />
        <path d="M86.7856 35.3926V55.6426" stroke="#1970C8" strokeWidth="0.723214" strokeDasharray="1.93 1.93" />
      </g>

      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(2px)",
          transformOrigin: "left center",
          transition: transitionOrNone(
            `opacity 320ms ${ease} ${delayedMs(260)}, transform 320ms ${ease} ${delayedMs(260)}`
          ),
          willChange: "opacity, transform",
        }}
      >
        <path d="M17.3576 68.178C20.0204 68.178 22.179 66.0194 22.179 63.3566C22.179 60.6938 20.0204 58.5352 17.3576 58.5352C14.6948 58.5352 12.5361 60.6938 12.5361 63.3566C12.5361 66.0194 14.6948 68.178 17.3576 68.178Z" fill="#EBF3FC" stroke="#1970C8" strokeWidth="1.20536" />
      </g>

      <path
        d="M23.1431 63.3555H46.2859"
        stroke="#1970C8"
        strokeWidth="0.964286"
        strokeOpacity={0.35}
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={hasAnimated ? 0 : 1}
        style={{
          transition: transitionOrNone(`stroke-dashoffset 420ms ${ease} ${delayedMs(360)}`),
          willChange: "stroke-dashoffset",
        }}
      />
      <path
        d="M33.2681 61.4277L36.6431 63.3563L33.2681 65.2849"
        stroke="#1970C8"
        strokeWidth="0.723214"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.55}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 220ms ${ease} ${delayedMs(720)}`),
        }}
      />

      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "scale(1)" : "scale(0.92)",
          transformOrigin: "52.0718px 63.356px",
          transition: transitionOrNone(
            `opacity 320ms ${ease} ${delayedMs(520)}, transform 320ms ${ease} ${delayedMs(520)}`
          ),
          willChange: "opacity, transform",
        }}
      >
        <path d="M52.0718 69.1417C55.2672 69.1417 57.8576 66.5514 57.8576 63.356C57.8576 60.1607 55.2672 57.5703 52.0718 57.5703C48.8765 57.5703 46.2861 60.1607 46.2861 63.356C46.2861 66.5514 48.8765 69.1417 52.0718 69.1417Z" fill="#1970C8" stroke="#1970C8" strokeWidth="1.6875" />
        <path d="M52.0716 65.2849C53.1368 65.2849 54.0002 64.4214 54.0002 63.3563C54.0002 62.2912 53.1368 61.4277 52.0716 61.4277C51.0065 61.4277 50.1431 62.2912 50.1431 63.3563C50.1431 64.4214 51.0065 65.2849 52.0716 65.2849Z" fill="white" />
      </g>

      <path
        d="M57.8574 63.3555H81.0003"
        stroke="#1970C8"
        strokeWidth="0.964286"
        strokeOpacity={0.35}
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={hasAnimated ? 0 : 1}
        style={{
          transition: transitionOrNone(`stroke-dashoffset 420ms ${ease} ${delayedMs(640)}`),
          willChange: "stroke-dashoffset",
        }}
      />
      <path
        d="M67.9824 61.4277L71.3574 63.3563L67.9824 65.2849"
        stroke="#1970C8"
        strokeWidth="0.723214"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.55}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transition: transitionOrNone(`opacity 220ms ${ease} ${delayedMs(980)}`),
        }}
      />

      <g
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(2px)",
          transformOrigin: "right center",
          transition: transitionOrNone(
            `opacity 320ms ${ease} ${delayedMs(760)}, transform 320ms ${ease} ${delayedMs(760)}`
          ),
          willChange: "opacity, transform",
        }}
      >
        <path d="M86.7858 68.178C89.4486 68.178 91.6072 66.0194 91.6072 63.3566C91.6072 60.6938 89.4486 58.5352 86.7858 58.5352C84.123 58.5352 81.9644 60.6938 81.9644 63.3566C81.9644 66.0194 84.123 68.178 86.7858 68.178Z" fill="#EBF3FC" stroke="#1970C8" strokeWidth="1.20536" />
      </g>
    </svg>
  )
}
