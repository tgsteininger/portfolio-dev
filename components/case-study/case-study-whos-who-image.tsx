/**
 * Synthesis UI — normalized “Who’s Who” stakeholder photo frame.
 * Same structure, 4:3 crop, tone, and chrome for every case study; only `src` / `alt` vary.
 */

function whosWhoPresets(src: string): {
  objectPosition: string
  /** Extra filter functions appended after shared base */
  filterExtra: string
} {
  if (src.includes("coca-cola")) {
    return {
      objectPosition: "48% 46%",
      filterExtra: "",
    }
  }
  if (src.includes("walgreens")) {
    return {
      objectPosition: "56% 48%",
      filterExtra: "",
    }
  }
  if (src.includes("mediaplatform")) {
    return {
      objectPosition: "50% 40%",
      filterExtra: "brightness(1.04)",
    }
  }
  return {
    objectPosition: "50% 50%",
    filterExtra: "",
  }
}

const BASE_FILTER = "saturate(0.88) contrast(0.96) brightness(1.02)"

interface CaseStudyWhosWhoImageProps {
  src: string
  alt: string
}

export function CaseStudyWhosWhoImage({ src, alt }: CaseStudyWhosWhoImageProps) {
  const { objectPosition, filterExtra } = whosWhoPresets(src)
  const filter = filterExtra ? `${BASE_FILTER} ${filterExtra}` : BASE_FILTER

  return (
    <div className="relative w-full" style={{ maxWidth: "100%" }}>
      {/* Offset backing panel — single faint plane, consistent geometry */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "clamp(-5px, -0.7vw, -4px)",
          left: "clamp(-5px, -0.7vw, -4px)",
          width: "calc(100% + 10px)",
          height: "calc(100% + 10px)",
          borderRadius: "var(--radius-04)",
          background: "color-mix(in srgb, var(--color-blue-100) 12%, transparent)",
          zIndex: 0,
        }}
      />

      <div
        className="relative w-full overflow-hidden"
        style={{
          zIndex: 1,
          borderRadius: "var(--radius-04)",
          border: "var(--stroke-01) solid var(--color-border-subtle)",
          backgroundColor: "var(--color-bg-surface)",
          boxShadow:
            "inset 2px 0 0 0 color-mix(in srgb, var(--color-cyan-500) 22%, transparent), var(--elevation-01)",
          padding: "var(--space-04)",
          boxSizing: "border-box",
        }}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "4 / 3",
            borderRadius: "var(--radius-03)",
            backgroundColor: "var(--color-neutral-100)",
          }}
        >
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{
              objectPosition,
              filter,
            }}
          />
        </div>
      </div>
    </div>
  )
}
