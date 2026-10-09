/**
 * Business Outcomes metric icon visual system.
 * Source of truth: edited MediaPlatform SVGs (`strokeWidth: 2` @ viewBox 80,
 * neutrals `#D1D1D1` / `#B3B3B3` / `#808080`, accent `#1970C8`).
 */

export const METRIC_ICON = {
  /** Soft / muted construction lines (MediaPlatform `#D1D1D1`) */
  muted: "#D1D1D1",
  /** Mid gray structure (MediaPlatform `#B3B3B3`) */
  mid: "#B3B3B3",
  /** Primary gray structure / nodes (MediaPlatform `#808080`) */
  base: "#808080",
  /** Brand blue accent (MediaPlatform `#1970C8`) */
  active: "#1970C8",
  /** Reference stroke width at MediaPlatform viewBox size 80 */
  strokeAt80: 2,
} as const

/**
 * Scale MediaPlatform strokeWidth 2 to another viewBox size so rendered weight
 * matches when icons share the same graphic slot (`object-contain`).
 */
export function metricIconStroke(viewBoxSize: number): number {
  return Number(((METRIC_ICON.strokeAt80 * viewBoxSize) / 80).toFixed(3))
}

export const METRIC_ICON_EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
