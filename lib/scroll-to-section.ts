/**
 * Scrolls to a section by id using programmatic scroll (not browser hash navigation),
 * so repeated clicks work even when the URL already contains the same hash.
 * Syncs the address bar with history.replaceState (no reload).
 * Respects prefers-reduced-motion for scroll behavior.
 */
export function scrollToSection(elementId: string): void {
  if (typeof window === "undefined" || typeof document === "undefined") return

  const id = elementId.replace(/^#/, "")
  if (!id) return

  const el = document.getElementById(id)
  if (!el) return

  const reduced =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  el.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  })

  const { pathname, search } = window.location
  const next = `${pathname}${search}#${id}`
  window.history.replaceState(null, "", next)
}
