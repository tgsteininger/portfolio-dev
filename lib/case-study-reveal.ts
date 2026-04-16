/**
 * Shared reveal cadence for case study Business Outcomes grids (metrics + bullets + footnote).
 * Used by Coca-Cola, Walgreens, and MediaPlatform sections so motion stays identical.
 */
export const CASE_STUDY_BO_STAGGER_MS = 140

/** Metric card column index 0..2 → `data-reveal-delay` (ms string). */
export function caseStudyBoMetricDelay(index: number): string {
  return String(index * CASE_STUDY_BO_STAGGER_MS)
}

/** Outcome bullet row index 0..3 → delay after the three metric cards. */
export function caseStudyBoBulletDelay(bulletIndex: number): string {
  return String(3 * CASE_STUDY_BO_STAGGER_MS + bulletIndex * CASE_STUDY_BO_STAGGER_MS)
}

/** Footnote after four staggered bullets. */
export function caseStudyBoFootnoteDelay(): string {
  return String(3 * CASE_STUDY_BO_STAGGER_MS + 4 * CASE_STUDY_BO_STAGGER_MS)
}
