import { cn } from "@/lib/utils"

/**
 * Fixed graphic region for Business Outcomes metric cards.
 * Below 480px the slot is half the desktop footprint (aligned with MetricCard grid layout).
 *
 * When `fitArtwork` is set (Walgreens / MediaPlatform), overflow stays visible so scaled SVGs
 * are never clipped — pair with SVGs that use viewBox + object-contain classes.
 */
export function CaseStudyMetricGraphicSlot({
  children,
  fitArtwork = false,
}: {
  children: React.ReactNode
  /** Metrics with fixed intrinsic px sizes scale via viewBox/contain instead of clipping. */
  fitArtwork?: boolean
}) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 max-w-full shrink-0 items-center justify-center min-[480px]:h-20 min-[480px]:w-20",
        fitArtwork ? "overflow-visible" : "overflow-hidden",
      )}
    >
      <div
        className={cn(
          "flex h-full w-full min-h-0 min-w-0 max-h-full max-w-full items-center justify-center",
          fitArtwork ? "overflow-visible" : "overflow-hidden",
        )}
      >
        {children}
      </div>
    </div>
  )
}
