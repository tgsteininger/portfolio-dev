'use client'

import { useEffect, useRef } from 'react'

import { entryInterfaceZone } from '@/lib/entry-interface-zone'

/** Grid point: resting position + lerped membrane state (no per-frame allocations). */
type Dot = {
  bx: number
  by: number
  cx: number
  cy: number
  cScale: number
}

/** Fixed-point tap pulse for coarse pointers (no hover trail). */
type TouchBurst = { x: number; y: number; t0: number }

export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: 0, y: 0, inside: false })
  const smoothRef = useRef({ x: 0, y: 0 })
  const presenceRef = useRef(0)
  const touchBurstRef = useRef<TouchBurst | null>(null)
  const rafRef = useRef<number>(0)
  const centeredRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const SPACING = 15
    const MOUSE_LERP = 0.14
    const DOT_LERP = 0.1
    const PRESENCE_IN = 0.06
    const PRESENCE_OUT = 0.035

    const FIELD_RADIUS = 286
    const DISPLACEMENT_STRENGTH = 14.5
    const SCALE_STRENGTH = 0.54
    /** Linear fade duration for touch / pen tap (ms); no residual after end. */
    const TOUCH_BURST_MS = 400

    const BASE_DOT_R = 1.1
    const IDLE_POS_AMP = 0.32
    const IDLE_SCALE_AMP = 0.009
    const IDLE_TIME = 0.00028
    const IDLE_WAVE_AMP = 0.22

    const REST_R = 26
    const REST_G = 30
    const REST_B = 36
    const PEAK_R = 60
    const PEAK_G = 78
    const PEAK_B = 85

    const rebuildDots = (w: number, h: number) => {
      const next: Dot[] = []
      const half = SPACING / 2
      for (let y = half; y < h; y += SPACING) {
        for (let x = half; x < w; x += SPACING) {
          next.push({ bx: x, by: y, cx: x, cy: y, cScale: 1 })
        }
      }
      dotsRef.current = next
    }

    const syncSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (w < 1 || h < 1) return
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      rebuildDots(w, h)
      if (!centeredRef.current) {
        const cx = w / 2
        const cy = h / 2
        mouseRef.current.x = cx
        mouseRef.current.y = cy
        smoothRef.current.x = cx
        smoothRef.current.y = cy
        centeredRef.current = true
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      // Touch drags would otherwise act like a continuous cursor attractor; tap burst handles mobile.
      if (e.pointerType === 'touch') return
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseRef.current.x = x
      mouseRef.current.y = y
      mouseRef.current.inside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height
    }

    const onPointerLeave = () => {
      mouseRef.current.inside = false
    }

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') return
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return
      touchBurstRef.current = { x, y, t0: performance.now() }
    }

    syncSize()
    const ro = new ResizeObserver(() => {
      syncSize()
    })
    ro.observe(canvas)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    canvas.addEventListener('pointerleave', onPointerLeave)
    canvas.addEventListener('pointerdown', onPointerDown)

    const tick = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      const mouse = mouseRef.current
      const smooth = smoothRef.current

      smooth.x += (mouse.x - smooth.x) * MOUSE_LERP
      smooth.y += (mouse.y - smooth.y) * MOUSE_LERP

      let pres = presenceRef.current
      const targetPres = mouse.inside ? 1 : 0
      const pr = mouse.inside ? PRESENCE_IN : PRESENCE_OUT
      pres += (targetPres - pres) * pr
      presenceRef.current = pres

      const mx = smooth.x
      const my = smooth.y
      const tIdle = performance.now() * IDLE_TIME

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, w, h)

      const dots = dotsRef.current
      const invR = 1 / FIELD_RADIUS

      const now = performance.now()
      let burstAmp = 0
      let burstX = 0
      let burstY = 0
      const burst = touchBurstRef.current
      if (burst) {
        const elapsed = now - burst.t0
        if (elapsed >= TOUCH_BURST_MS) {
          touchBurstRef.current = null
        } else {
          burstAmp = 1 - elapsed / TOUCH_BURST_MS
          burstX = burst.x
          burstY = burst.y
        }
      }

      const radialSpatial = (dist: number) => {
        let u = 1 - dist * invR
        if (u < 0) u = 0
        else if (u > 1) u = 1
        return u * u * Math.sqrt(u)
      }

      const cRect = canvas.getBoundingClientRect()
      const zr = entryInterfaceZone.rect
      const zBoost = entryInterfaceZone.cursorBoost
      let zcx = 0
      let zcy = 0
      let zoneActive = false
      if (zr) {
        zcx = (zr.left + zr.right) / 2 - cRect.left
        zcy = (zr.top + zr.bottom) / 2 - cRect.top
        zoneActive = true
      }

      // Ultra-slow global drift (render-only): ~50s-scale beats, incommensurate partials
      const ta = performance.now() * 0.001
      const k = Math.PI * 2
      const ambX =
        Math.sin(ta * (k / 56) + 0.11) * 3.6 +
        Math.sin(ta * (k / 73) + 0.9) * 2.8
      const ambY =
        Math.cos(ta * (k / 49) + 0.35) * 3.4 +
        Math.sin(ta * (k / 67) + 1.4) * 2.7
      let ambS =
        1 +
        Math.sin(ta * (k / 52) + 0.22) * 0.003 +
        Math.cos(ta * (k / 61) + 0.55) * 0.00145

      // Invisible environmental pressure fields (soft Gaussians, very slow drift)
      const minWh = Math.min(w, h)
      const td = performance.now() * 0.000072
      const eG = (px: number, py: number, cx: number, cy: number, sigma: number) => {
        const dx = px - cx
        const dy = py - cy
        return Math.exp(-(dx * dx + dy * dy) / (2 * sigma * sigma))
      }

      const f1x = w * 0.76 + Math.sin(td + 0.15) * w * 0.036
      const f1y = h * 0.24 + Math.cos(td * 0.81 + 0.9) * h * 0.03
      const s1 = minWh * 0.52

      const f2x = w * 0.18 + Math.sin(td * 0.63 + 2.2) * w * 0.04
      const f2y = h * 0.82 + Math.cos(td + 0.45) * h * 0.034
      const s2 = minWh * 0.46

      const f3x = w * 0.5 + Math.sin(td * 0.51 + 3.0) * w * 0.028
      const f3y = h * 0.36 + Math.cos(td * 0.86 + 0.25) * h * 0.038
      const s3 = minWh * 0.5

      const f1c = eG(w * 0.72, h * 0.28, f1x, f1y, s1)
      const f3c = eG(w * 0.48, h * 0.4, f3x, f3y, s3)
      ambS *= 1 + f1c * 0.011 + f3c * 0.009

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]

        const sh1 = eG(d.bx, d.by, f1x, f1y, s1)
        const sh2 = eG(d.bx, d.by, f2x, f2y, s2)
        const sh3 = eG(d.bx, d.by, f3x, f3y, s3)

        const dx = d.bx - mx
        const dy = d.by - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        const spatial = radialSpatial(dist)
        const inf = spatial * pres
        const infCore = inf * (1 - sh2 * 0.034)

        let zoneInf = 0
        if (zoneActive && zr) {
          const pad = 44
          const L = zr.left - cRect.left - pad
          const T = zr.top - cRect.top - pad
          const R = zr.right - cRect.left + pad
          const B = zr.bottom - cRect.top + pad
          const px = Math.min(Math.max(d.bx, L), R)
          const py = Math.min(Math.max(d.by, T), B)
          const distZ = Math.hypot(d.bx - px, d.by - py)
          const zFall = 200
          let zLin = Math.max(0, Math.min(1, 1 - distZ / zFall))
          zoneInf = zLin * zLin * 0.36
          zoneInf *= 0.74 + 0.26 * zBoost
        }

        const infMouseEff = infCore * (1 - zoneInf * 0.2)

        let infTouchEff = 0
        let ntx = 0
        let nty = 0
        if (burstAmp > 0) {
          const tdx = d.bx - burstX
          const tdy = d.by - burstY
          const distT = Math.hypot(tdx, tdy)
          const spatialT = radialSpatial(distT) * burstAmp
          const infTCore = spatialT * (1 - sh2 * 0.034)
          infTouchEff = infTCore * (1 - zoneInf * 0.2)
          if (distT > 0.001) {
            ntx = tdx / distT
            nty = tdy / distT
          }
        }

        const infColor = Math.min(1, infMouseEff + infTouchEff)
        const infScale = Math.min(1, infMouseEff + infTouchEff)

        let nx = 0
        let ny = 0
        if (dist > 0.001) {
          nx = dx / dist
          ny = dy / dist
        }

        const phase = d.bx * 0.011 + d.by * 0.017
        const slowWave =
          Math.sin((d.bx + d.by) * 0.0036 - tIdle * 0.33) * IDLE_WAVE_AMP
        const idleX =
          Math.sin(tIdle + phase) * IDLE_POS_AMP + slowWave * 0.62
        const idleY =
          Math.cos(tIdle * 0.88 + phase * 1.07) * IDLE_POS_AMP + slowWave * 0.48
        const idleScale =
          1 +
          Math.sin(tIdle * 0.62 + phase * 1.2) * IDLE_SCALE_AMP +
          Math.sin(tIdle * 0.38 + (d.bx - d.by) * 0.0028) * (IDLE_SCALE_AMP * 0.55)

        let targetScale = (1 + infScale * SCALE_STRENGTH) * idleScale
        targetScale *= 1 - zoneInf * 0.05

        let targetX =
          d.bx +
          nx * infMouseEff * DISPLACEMENT_STRENGTH +
          ntx * infTouchEff * DISPLACEMENT_STRENGTH +
          idleX
        let targetY =
          d.by +
          ny * infMouseEff * DISPLACEMENT_STRENGTH +
          nty * infTouchEff * DISPLACEMENT_STRENGTH +
          idleY

        if (zoneActive && zoneInf > 0.001) {
          const vdx = d.bx - zcx
          const vdy = d.by - zcy
          const vdist = Math.hypot(vdx, vdy) + 1e-4
          const clear = zoneInf * 2.1
          targetX += (vdx / vdist) * clear
          targetY += (vdy / vdist) * clear
        }

        d.cx += (targetX - d.cx) * DOT_LERP
        d.cy += (targetY - d.cy) * DOT_LERP
        d.cScale += (targetScale - d.cScale) * DOT_LERP

        // Slightly softer color weight at full influence so the core stays calm vs. displacement
        const colorInf = infColor * (0.92 + 0.08 * (1 - infColor))
        let rr = REST_R + (PEAK_R - REST_R) * colorInf
        let rg = REST_G + (PEAK_G - REST_G) * colorInf
        let rb = REST_B + (PEAK_B - REST_B) * colorInf
        const dim = 1 - zoneInf * 0.118
        rr *= dim
        rg *= dim
        rb *= dim

        // ~2–3% deterministic variation (optical, not animated)
        const v =
          ((d.bx * 0.731 + d.by * 0.419) % 1) - 0.5
        const wv = ((d.bx * 0.211 + d.by * 0.883) % 1) - 0.5
        const sizeJitter = 1 + v * 0.026
        const toneJitter = 1 + wv * 0.022
        rr *= toneJitter
        rg *= toneJitter
        rb *= toneJitter

        rr *= 1 - sh3 * 0.038
        rg *= 1 + sh2 * 0.012
        rb += sh1 * 0.85 - sh2 * 0.35

        const rad =
          BASE_DOT_R *
          d.cScale *
          (1 - zoneInf * 0.041) *
          sizeJitter *
          (1 + sh1 * 0.012 - sh3 * 0.009 + sh2 * 0.006)

        const qx = Math.round((d.cx + ambX) * 2) / 2
        const qy = Math.round((d.cy + ambY) * 2) / 2
        const rDraw = rad * ambS
        ctx.fillStyle = `rgb(${Math.round(rr)},${Math.round(rg)},${Math.round(rb)})`
        ctx.beginPath()
        ctx.arc(qx, qy, rDraw, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      canvas.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 block h-full w-full touch-none"
      aria-hidden
    />
  )
}
