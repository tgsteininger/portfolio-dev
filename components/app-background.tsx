"use client"

/**
 * AppBackground
 * 
 * A persistent decorative background layer for case study pages.
 * Features multiple large translucent rectangular panels that create
 * subtle depth through overlap, opacity, and scale variation.
 * 
 * - Fixed positioning, spans full viewport
 * - Non-interactive (pointer-events: none)
 * - Z-index 0, sits behind all content
 * - Uses design system tokens for colors/opacity
 * - Parallax-ready with transform-based positioning
 */
interface AppBackgroundProps {
  showStructuralGrid?: boolean
}

export function AppBackground({ showStructuralGrid = false }: AppBackgroundProps) {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Base surface — cool blue-tinted gradient so panels read as one system (not flat white) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              168deg,
              color-mix(in srgb, var(--color-blue-50) 72%, var(--color-neutral-50)) 0%,
              var(--color-bg-surface-subtle) 42%,
              color-mix(in srgb, var(--color-blue-100) 22%, var(--color-neutral-50)) 100%
            )
          `,
        }}
      />

      {showStructuralGrid ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                color-mix(in srgb, var(--color-neutral-400) 18%, transparent) 0,
                color-mix(in srgb, var(--color-neutral-400) 18%, transparent) 1px,
                transparent 1px,
                transparent 72px
              ),
              repeating-linear-gradient(
                to bottom,
                color-mix(in srgb, var(--color-neutral-400) 18%, transparent) 0,
                color-mix(in srgb, var(--color-neutral-400) 18%, transparent) 1px,
                transparent 1px,
                transparent 72px
              )
            `,
            opacity: 0.3,
          }}
        />
      ) : null}
      
      {/* Panel Layer - Architectural rectangles aligned to AppBG.svg composition */}
      <div className="absolute inset-0">
        {/* Panel 1: Upper-left anchor */}
        <div
          className="absolute motion-safe-transform app-bg-panel app-bg-panel-1"
          style={{
            top: "-5.9%",
            left: "-13.1%",
            width: "65%",
            height: "75%",
            backgroundColor: "var(--color-blue-500)",
            opacity: 0.043,
            borderRadius: "var(--radius-03)",
            transform: "rotate(-2.5deg)",
            transformOrigin: "12% 14%",
          }}
        />

        {/* Panel 2: Right tall field */}
        <div
          className="absolute motion-safe-transform app-bg-panel app-bg-panel-2"
          style={{
            top: "16.9%",
            left: "52.6%",
            width: "58%",
            height: "68%",
            backgroundColor: "var(--color-blue-500)",
            opacity: 0.055,
            borderRadius: "var(--radius-03)",
            transform: "rotate(1.5deg)",
            transformOrigin: "18% 16%",
          }}
        />

        {/* Panel 3: Lower-left tall slab */}
        <div
          className="absolute motion-safe-transform app-bg-panel app-bg-panel-3"
          style={{
            top: "48.8%",
            left: "4.5%",
            width: "52%",
            height: "72%",
            backgroundColor: "var(--color-blue-500)",
            opacity: 0.05,
            borderRadius: "var(--radius-03)",
            transform: "rotate(-1.2deg)",
            transformOrigin: "20% 10%",
          }}
        />

        {/* Panel 4: Far lower-right anchor */}
        <div
          className="absolute motion-safe-transform app-bg-panel app-bg-panel-4"
          style={{
            top: "70.8%",
            left: "57.7%",
            width: "48%",
            height: "58%",
            backgroundColor: "var(--color-blue-500)",
            opacity: 0.04,
            borderRadius: "var(--radius-03)",
            transform: "rotate(2deg)",
            transformOrigin: "20% 12%",
          }}
        />

        {/* Panel 5: Mid-lower bridge panel */}
        <div
          className="absolute motion-safe-transform app-bg-panel app-bg-panel-5"
          style={{
            top: "62.5%",
            left: "14.8%",
            width: "55%",
            height: "50%",
            backgroundColor: "var(--color-blue-500)",
            opacity: 0.06,
            borderRadius: "var(--radius-04)",
            transform: "rotate(-0.8deg)",
            transformOrigin: "22% 12%",
          }}
        />
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .app-bg-panel {
            filter: none;
          }
          .app-bg-panel-1 {
            opacity: 0.036 !important;
          }
          .app-bg-panel-2 {
            opacity: 0.046 !important;
          }
          .app-bg-panel-3 {
            opacity: 0.042 !important;
          }
          .app-bg-panel-4 {
            opacity: 0.032 !important;
          }
          .app-bg-panel-5 {
            opacity: 0.05 !important;
          }
        }

        @media (max-width: 768px) {
          .app-bg-panel-1 {
            left: -24% !important;
            width: 82% !important;
            opacity: 0.03 !important;
          }
          .app-bg-panel-2 {
            left: 66% !important;
            width: 62% !important;
            opacity: 0.038 !important;
          }
          .app-bg-panel-3 {
            left: -8% !important;
            width: 66% !important;
            opacity: 0.034 !important;
          }
          .app-bg-panel-4 {
            opacity: 0.026 !important;
          }
          .app-bg-panel-5 {
            left: 6% !important;
            width: 70% !important;
            opacity: 0.042 !important;
          }
        }
      `}</style>
    </div>
  )
}

export default AppBackground
