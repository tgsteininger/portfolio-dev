'use client'

import { useEffect, useRef, useState } from 'react'

import { entryInterfaceZone } from '@/lib/entry-interface-zone'

const ENTRY_URL = 'https://steininger.uxsvr.com'

function distPointToPaddedRect(
  px: number,
  py: number,
  rect: DOMRect,
  pad: number
): number {
  const L = rect.left - pad
  const T = rect.top - pad
  const R = rect.right + pad
  const B = rect.bottom + pad
  const cx = Math.min(Math.max(px, L), R)
  const cy = Math.min(Math.max(py, T), B)
  return Math.hypot(px - cx, py - cy)
}

/**
 * Minimal bottom-left entry cluster for the domain landing surface.
 * Sits above the dot field; whole cluster responds subtly to cursor proximity.
 */
export function EntrySignal() {
  const [settled, setSettled] = useState(false)
  const settledRef = useRef(false)
  const navRef = useRef<HTMLElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const smoothRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    settledRef.current = settled
  }, [settled])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setSettled(true))
    })
    return () => window.cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const PAD = 56
    const FALLOFF = 340
    const LERP = 0.042

    const tick = () => {
      const nav = navRef.current
      const shell = shellRef.current
      if (!nav || !shell) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      let target = 0
      if (settledRef.current && !reduceMotion.matches) {
        const rect = nav.getBoundingClientRect()
        const d = distPointToPaddedRect(
          mouseRef.current.x,
          mouseRef.current.y,
          rect,
          PAD
        )
        const linear = Math.max(0, Math.min(1, 1 - d / FALLOFF))
        target = linear * linear
      }

      const s = smoothRef.current
      smoothRef.current += (target - s) * LERP
      const p = smoothRef.current

      if (reduceMotion.matches) {
        shell.style.opacity = ''
        shell.style.transform = ''
        shell.style.filter = ''
        entryInterfaceZone.cursorBoost = 0
      } else {
        shell.style.opacity = `${0.88 + p * 0.1}`
        shell.style.transform = `translate3d(0,${(-p * 2.6).toFixed(2)}px,0)`
        shell.style.filter = `brightness(${1 + p * 0.048})`
        entryInterfaceZone.cursorBoost = p
      }

      if (settledRef.current && nav) {
        const r = nav.getBoundingClientRect()
        entryInterfaceZone.rect = {
          left: r.left,
          top: r.top,
          right: r.right,
          bottom: r.bottom,
        }
      } else {
        entryInterfaceZone.rect = null
        entryInterfaceZone.cursorBoost = 0
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onMove)
      entryInterfaceZone.rect = null
      entryInterfaceZone.cursorBoost = 0
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 flex items-end justify-start"
      style={{
        paddingBottom: 'calc(var(--space-14) + 6px)',
        paddingLeft: 'calc(var(--space-13) + 6px)',
        paddingRight: 'var(--space-09)',
      }}
    >
      <nav
        ref={navRef}
        className={`pointer-events-auto flex max-w-[min(100%,28rem)] flex-col transition-opacity duration-[1100ms] ease-out motion-reduce:transition-none ${
          settled ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="UX Server entry"
      >
        <div ref={shellRef} className="flex flex-col will-change-[transform,opacity,filter]">
          <p
            className="font-ui font-normal uppercase clr-text-inverse"
            style={{
              fontSize: 'var(--text-body-lg)',
              letterSpacing: '0.19em',
              lineHeight: 1.32,
              opacity: 0.52,
              marginBottom: 'var(--space-04)',
            }}
          >
            [UX SERVER]
          </p>

          <a
            href={ENTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group focus-ring-standard font-body inline-flex w-fit items-baseline rounded-[var(--radius-02)] outline-none clr-text-inverse motion-reduce:transition-none"
          >
            <span
              className="motion-reduce:transition-none group-hover:opacity-100"
              style={{
                fontSize: '1.6875rem',
                fontWeight: 500,
                letterSpacing: '-0.014em',
                lineHeight: 1.26,
                opacity: 0.97,
                transition:
                  'opacity 200ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              Enter Portfolio
            </span>
            <span
              className="inline-block motion-reduce:transition-none group-hover:translate-x-[2px] group-hover:opacity-100 clr-text-inverse"
              style={{
                marginLeft: '0.42em',
                fontSize: '1.6875rem',
                fontWeight: 500,
                lineHeight: 1.26,
                opacity: 0.84,
                transition:
                  'transform 150ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              ›
            </span>
          </a>

          <p
            className="font-ui"
            style={{
              fontSize: 'var(--text-body-sm)',
              fontWeight: 400,
              lineHeight: 1.46,
              letterSpacing: '-0.03em',
              color:
                'color-mix(in srgb, var(--color-text-inverse) 52%, var(--color-blue-grey-500) 48%)',
              opacity: 0.5,
              marginTop: 'var(--space-12)',
            }}
          >
            System Interface
          </p>
          <p
            className="font-ui font-normal"
            style={{
              fontSize: 'var(--text-caption)',
              fontWeight: 400,
              lineHeight: 1.42,
              letterSpacing: '0.035em',
              color:
                'color-mix(in srgb, var(--color-text-inverse) 44%, var(--color-blue-grey-500) 56%)',
              opacity: 0.52,
              textShadow: '0 0 2px rgba(0, 0, 0, 0.22)',
              marginTop: 'var(--space-01)',
            }}
          >
            by Thomas Steininger
          </p>
        </div>
      </nav>
    </div>
  )
}
