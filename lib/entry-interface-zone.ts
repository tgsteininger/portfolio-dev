/**
 * Viewport-space bounds of the domain entry cluster for DotField coupling.
 * Updated by EntrySignal; read each frame by DotField. Null when inactive.
 */
export const entryInterfaceZone = {
  rect: null as { left: number; top: number; right: number; bottom: number } | null,
  /** 0–1: cursor proximity to cluster (from EntrySignal); strengthens interface calm slightly */
  cursorBoost: 0,
}
