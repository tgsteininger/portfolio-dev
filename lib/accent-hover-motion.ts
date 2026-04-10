/**
 * Shared timing for cyan accent lines (stats overline, approach underline, etc.).
 * Uses --motion-duration-04 (400ms) + emphasized ease — slower than UI hover (200ms).
 */
export const accentLineHoverTransitionBase = {
  transitionDuration: "var(--motion-duration-04)",
  transitionTimingFunction: "var(--motion-easing-emphasized)",
  transitionDelay: "0ms",
} as const
