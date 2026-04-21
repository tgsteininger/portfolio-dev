import { cn } from "@/lib/utils"

/**
 * Shared Rasden red CTA surface: default red-800, hover darkens to red-900,
 * active darkens further. Pair with `transition-fast` (200ms, system easing) and
 * `focus-ring-standard` on the element. No scale or shadow.
 */
export const rasdenRedCtaSurfaceClass = cn(
  "bg-[var(--color-red-800)] text-[var(--color-text-inverse)]",
  "hover:bg-[var(--color-red-900)]",
  "active:bg-[color-mix(in_srgb,var(--color-red-900)_78%,black)]",
  /* Kill property transitions only; hover/active colors still apply instantly. */
  "motion-reduce:transition-none"
)
