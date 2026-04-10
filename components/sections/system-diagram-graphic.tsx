"use client"

import { useEffect, useState } from "react"

/** Hero section `id` — scroll progress is derived from this element’s geometry. */
const HERO_SECTION_ID = "overview"

/**
 * Cyan focal node sits at x=560 on the main horizontal (y≈358.188). Next junction to the right on that spine is x=760.
 * Max parallax = ~77.5% of that gap so the glow never reads as overlapping the next node.
 */
const HORIZONTAL_GAP_TO_NEXT_NODE = 200
const PARALLAX_MAX_SVG_UNITS = HORIZONTAL_GAP_TO_NEXT_NODE * 0.775

function heroScrollProgress(hero: HTMLElement): number {
  const vh = window.innerHeight
  const rect = hero.getBoundingClientRect()
  const denom = vh + rect.height
  if (denom <= 0) return 0
  const raw = (vh - rect.top) / denom
  return Math.min(1, Math.max(0, raw))
}

export function SystemDiagramGraphic() {
  const [parallaxX, setParallaxX] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let raf = 0

    const tick = () => {
      raf = 0
      if (reduceMotion.matches) {
        setParallaxX(0)
        return
      }
      const hero = document.getElementById(HERO_SECTION_ID)
      if (!hero) {
        setParallaxX(0)
        return
      }
      const p = heroScrollProgress(hero)
      setParallaxX(Number((p * PARALLAX_MAX_SVG_UNITS).toFixed(3)))
    }

    const schedule = () => {
      if (raf) return
      raf = window.requestAnimationFrame(tick)
    }

    tick()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule, { passive: true })
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null
    const heroEl = document.getElementById(HERO_SECTION_ID)
    if (heroEl && ro) ro.observe(heroEl)

    const onReduceChange = () => schedule()
    reduceMotion.addEventListener("change", onReduceChange)

    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      reduceMotion.removeEventListener("change", onReduceChange)
      if (raf) cancelAnimationFrame(raf)
      ro?.disconnect()
    }
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={960}
      height={657}
      viewBox="0 0 960 657"
      fill="none"
      role="presentation"
      focusable="false"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none block h-auto max-h-[min(657px,55vh)] w-auto max-w-[min(960px,92vw)] select-none"
    >
      <g opacity="0.85">
        <path
          opacity="0.08"
          d="M796 318.188H654C646.268 318.188 640 324.456 640 332.188V394.188C640 401.919 646.268 408.188 654 408.188H796C803.732 408.188 810 401.919 810 394.188V332.188C810 324.456 803.732 318.188 796 318.188Z"
          fill="#3B82F6"
        />
        <path
          opacity="0.06"
          d="M876 218.188H774C766.268 218.188 760 224.456 760 232.188V276.188C760 283.919 766.268 290.188 774 290.188H876C883.732 290.188 890 283.919 890 276.188V232.188C890 224.456 883.732 218.188 876 218.188Z"
          fill="#3B82F6"
        />
        <path
          opacity="0.05"
          d="M1026 368.188H904C896.268 368.188 890 374.456 890 382.188V438.188C890 445.919 896.268 452.188 904 452.188H1026C1033.73 452.188 1040 445.919 1040 438.188V382.188C1040 374.456 1033.73 368.188 1026 368.188Z"
          fill="#3B82F6"
        />
        <path
          opacity="0.05"
          d="M616 388.188H534C526.268 388.188 520 394.456 520 402.188V442.188C520 449.919 526.268 456.188 534 456.188H616C623.732 456.188 630 449.919 630 442.188V402.188C630 394.456 623.732 388.188 616 388.188Z"
          fill="#3B82F6"
        />
        <path
          opacity="0.04"
          d="M806 428.188H714C706.268 428.188 700 434.456 700 442.188V484.188C700 491.919 706.268 498.188 714 498.188H806C813.732 498.188 820 491.919 820 484.188V442.188C820 434.456 813.732 428.188 806 428.188Z"
          fill="#3B82F6"
        />
        <g opacity="0.6">
          <path opacity="0.62" d="M140 358.188H980" stroke="white" strokeWidth="2" />
          <path opacity="0.5" d="M220 358.188V428.188" stroke="white" strokeWidth="2" />
          <path opacity="0.5" d="M220 428.188H420" stroke="white" strokeWidth="2" />
          <path opacity="0.5" d="M420 428.188V358.188" stroke="white" strokeWidth="2" />
          <path opacity="0.45" d="M360 358.188V288.188" stroke="white" strokeWidth="2" />
          <path opacity="0.45" d="M360 288.188H530" stroke="white" strokeWidth="2" />
          <path opacity="0.5" d="M560 358.188V288.188" stroke="white" strokeWidth="2" />
          <path opacity="0.5" d="M560 288.188H760" stroke="white" strokeWidth="2" />
          <path opacity="0.42" d="M560 358.188V448.188" stroke="white" strokeWidth="2" />
          <path opacity="0.42" d="M560 448.188H740" stroke="white" strokeWidth="2" />
          <path opacity="0.5" d="M760 358.188V258.188" stroke="white" strokeWidth="2" />
          <path opacity="0.5" d="M760 258.188H990" stroke="white" strokeWidth="2" />
          <path opacity="0.45" d="M860 358.188V408.188" stroke="white" strokeWidth="2" />
          <path opacity="0.45" d="M860 408.188H1010" stroke="white" strokeWidth="2" />
        </g>
        <path
          opacity="0.72"
          d="M220 363.188C222.761 363.188 225 360.948 225 358.188C225 355.427 222.761 353.188 220 353.188C217.239 353.188 215 355.427 215 358.188C215 360.948 217.239 363.188 220 363.188Z"
          fill="white"
        />
        <path
          opacity="0.6"
          d="M360 362.188C362.209 362.188 364 360.397 364 358.188C364 355.978 362.209 354.188 360 354.188C357.791 354.188 356 355.978 356 358.188C356 360.397 357.791 362.188 360 362.188Z"
          fill="white"
        />
        <path
          opacity="0.68"
          d="M760 363.188C762.761 363.188 765 360.948 765 358.188C765 355.427 762.761 353.188 760 353.188C757.239 353.188 755 355.427 755 358.188C755 360.948 757.239 363.188 760 363.188Z"
          fill="white"
        />
        <path
          opacity="0.6"
          d="M860 362.188C862.209 362.188 864 360.397 864 358.188C864 355.978 862.209 354.188 860 354.188C857.791 354.188 856 355.978 856 358.188C856 360.397 857.791 362.188 860 362.188Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M420 431.188C421.657 431.188 423 429.844 423 428.188C423 426.531 421.657 425.188 420 425.188C418.343 425.188 417 426.531 417 428.188C417 429.844 418.343 431.188 420 431.188Z"
          fill="white"
        />
        <path
          opacity="0.45"
          d="M530 291.188C531.657 291.188 533 289.844 533 288.188C533 286.531 531.657 285.188 530 285.188C528.343 285.188 527 286.531 527 288.188C527 289.844 528.343 291.188 530 291.188Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M760 291.188C761.657 291.188 763 289.844 763 288.188C763 286.531 761.657 285.188 760 285.188C758.343 285.188 757 286.531 757 288.188C757 289.844 758.343 291.188 760 291.188Z"
          fill="white"
        />
        <path
          opacity="0.42"
          d="M740 451.188C741.657 451.188 743 449.844 743 448.188C743 446.531 741.657 445.188 740 445.188C738.343 445.188 737 446.531 737 448.188C737 449.844 738.343 451.188 740 451.188Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M760 261.188C761.657 261.188 763 259.844 763 258.188C763 256.531 761.657 255.188 760 255.188C758.343 255.188 757 256.531 757 258.188C757 259.844 758.343 261.188 760 261.188Z"
          fill="white"
        />
        <path
          opacity="0.45"
          d="M860 411.188C861.657 411.188 863 409.844 863 408.188C863 406.531 861.657 405.188 860 405.188C858.343 405.188 857 406.531 857 408.188C857 409.844 858.343 411.188 860 411.188Z"
          fill="white"
        />
        <g opacity="0.85">
          {/* Scroll parallax (SVG transform) — outer; pulse CSS stays on inner groups */}
          <g className="system-node-parallax" transform={`translate(${parallaxX} 0)`}>
            <g className="system-diagram-focal-glow">
              <path
                opacity="0.215558"
                d="M560 370.188C566.627 370.188 572 364.815 572 358.188C572 351.56 566.627 346.188 560 346.188C553.373 346.188 548 351.56 548 358.188C548 364.815 553.373 370.188 560 370.188Z"
                fill="#22D3EE"
              />
            </g>
            <g className="system-diagram-focal-ring">
              <path
                opacity="0.365558"
                d="M560 364.188C563.314 364.188 566 361.501 566 358.188C566 354.874 563.314 352.188 560 352.188C556.686 352.188 554 354.874 554 358.188C554 361.501 556.686 364.188 560 364.188Z"
                fill="#22D3EE"
              />
            </g>
            <path
              d="M560 362.188C562.209 362.188 564 360.397 564 358.188C564 355.978 562.209 354.188 560 354.188C557.791 354.188 556 355.978 556 358.188C556 360.397 557.791 362.188 560 362.188Z"
              fill="#22D3EE"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
