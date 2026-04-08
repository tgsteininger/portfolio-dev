import { cn } from "@/lib/utils"

/**
 * Hero background: left, center, right panels are direct children of hero root (before artboard)
 * so artboard + vector paint on top. Right rail uses `right: 0` + stepped `top` (not artboard crop).
 */

interface HeroBackgroundLayersProps {
  /** Reserved for future composition reveal timing; unused while empty */
  isVisible?: boolean
}

/** Deterministic canvas for layer coordinates (desktop/tablet primary). */
const HERO_BG_COMPOSITION_WIDTH_PX = 2000
const HERO_BG_COMPOSITION_HEIGHT_PX = 700

export function HeroBackgroundLayers(_props: HeroBackgroundLayersProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
      data-hero-bg-root
    >
      {/* Left panel: positioned vs hero root (not artboard) so it does not shift when artboard `right` changes. */}
      <div
        aria-hidden
        className={cn(
          "absolute z-0",
          /* Tablet / narrow desktop (md–xl) */
          "left-[-167.07px] top-[-169.92px]",
          /* Mobile: Figma x/y */
          "max-md:left-[-328.35px] max-md:top-[-171.67px]",
          /* Large desktop */
          "xl:left-[-328.35px] xl:top-[-171.67px]"
        )}
        style={{
          width: 900,
          height: 650,
          borderRadius: 8,
          backgroundColor: "#1A7FFF",
          opacity: 0.07,
          transform: "rotate(1.5deg)",
          filter: "blur(6px)",
        }}
      />

      {/* Center panel: mobile 650×500 @ 195.27/147.16; tablet md–xl 550×425 @ 236.69/344.44; xl+ 650×500 @ 235.69/344.44 */}
      <div
        aria-hidden
        className={cn(
          "absolute z-0 left-[236.69px] top-[344.44px]",
          "max-md:left-[195.27px] max-md:top-[147.16px]",
          "xl:left-[235.69px] xl:top-[344.44px]",
          "w-[650px] h-[500px] md:w-[550px] md:h-[425px] xl:w-[650px] xl:h-[500px]",
          "opacity-[0.055] max-md:opacity-[0.048] xl:opacity-[0.06]"
        )}
        style={{
          borderRadius: 8,
          backgroundColor: "#1A7FFF",
          transform: "rotate(1deg)",
          filter: "blur(6px)",
        }}
      />

      {/* Right panel: hero-root–anchored; under artboard; pinned to section right edge. */}
      <div
        aria-hidden
        className={cn(
          "absolute right-0 z-0",
          "top-[147.16px] max-md:top-[128px]",
          "opacity-[0.05] max-md:opacity-[0.038]"
        )}
        style={{
          width: 750,
          height: 800,
          borderRadius: 8,
          backgroundColor: "#1A7FFF",
          transform: "rotate(-2deg)",
          filter: "blur(4px)",
        }}
      />

      {/* Artboard: right-weighted crop; tighter offset as viewport narrows (stepped). */}
      <div
        className={cn(
          "absolute top-1/2 z-0 -translate-y-1/2",
          "max-md:right-[-5.5rem]",
          "md:max-xl:right-[-9.5rem]",
          "xl:right-[-12.5rem]"
        )}
        style={{
          width: HERO_BG_COMPOSITION_WIDTH_PX,
          height: HERO_BG_COMPOSITION_HEIGHT_PX,
        }}
        data-hero-bg-artboard
      >
        <div className="relative isolate h-full w-full" data-hero-bg-composition>
          {/* Vector overlay: above rects, hidden on mobile; restrained opacity + scale sub-xl */}
          <div
            aria-hidden
            className={cn(
              "absolute z-[1] hidden md:block",
              "left-[255px] top-[193.91px] h-[202.91px] w-[844.5px]",
              "opacity-[0.24] xl:opacity-[0.36]"
            )}
          >
            <div
              className={cn(
                "h-full w-full",
                "origin-[82%_48%] scale-100",
                "md:max-xl:scale-[0.82]"
              )}
            >
              <svg
                className="block h-full w-full"
                viewBox="0 0 845 203"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M 3 3 L 325.5 134.275 L 648 35.8187 L 841.5 199.913"
                  stroke="#1A7FFF"
                  strokeOpacity={0.55}
                  strokeWidth={0.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
                  fill="#1A7FFF"
                  fillOpacity={0.58}
                />
                <path
                  d="M325.5 137.275C327.157 137.275 328.5 135.932 328.5 134.275C328.5 132.618 327.157 131.275 325.5 131.275C323.843 131.275 322.5 132.618 322.5 134.275C322.5 135.932 323.843 137.275 325.5 137.275Z"
                  fill="#1A7FFF"
                  fillOpacity={0.58}
                />
                <path
                  d="M648 38.8187C649.657 38.8187 651 37.4756 651 35.8187C651 34.1619 649.657 32.8187 648 32.8187C646.343 32.8187 645 34.1619 645 35.8187C645 37.4756 646.343 38.8187 648 38.8187Z"
                  fill="#1A7FFF"
                  fillOpacity={0.58}
                />
                <path
                  d="M841.5 202.913C843.157 202.913 844.5 201.569 844.5 199.913C844.5 198.256 843.157 196.913 841.5 196.913C839.843 196.913 838.5 198.256 838.5 199.913C838.5 201.569 839.843 202.913 841.5 202.913Z"
                  fill="#1A7FFF"
                  fillOpacity={0.58}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
