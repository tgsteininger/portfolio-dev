'use client'

import { useEffect, useRef } from 'react'

const TWO_PI = Math.PI * 2

/** Single right-side structural surface behind the dot field — flat, very slow drift only. */
export function FloatingPanels() {
  const panelRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return

    const periodSec = 54
    const phase = 1.15
    const ampX = 7
    const ampY = 9
    const scaleAmp = 0.0022

    const tick = () => {
      const t = performance.now() * 0.001
      const w = TWO_PI / periodSec
      const driftX = Math.sin(t * w + phase) * ampX
      const driftY = Math.cos(t * w * 0.96 + phase * 1.2) * ampY
      const sc = 1 + Math.sin(t * w * 0.48 + phase) * scaleAmp

      el.style.transform = `translate3d(${driftX.toFixed(2)}px,${driftY.toFixed(2)}px,0) scale(${sc.toFixed(4)})`

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        ref={panelRef}
        className="absolute will-change-transform"
        style={{
          top: '11%',
          right: '5%',
          width: 'min(52%, 640px)',
          height: '78%',
          borderRadius: 'var(--radius-04)',
          border:
            '1px solid color-mix(in srgb, var(--color-blue-grey-700) 0.55%, transparent)',
          background: [
            'color-mix(in srgb, var(--color-blue-900) 3.4%, transparent)',
            'color-mix(in srgb, var(--color-blue-grey-900) 7.2%, transparent)',
          ].join(', '),
        }}
      />
    </div>
  )
}
