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
export function AppBackground() {
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
      
      {/* Panel Layer - Multiple overlapping translucent rectangles */}
      <div className="absolute inset-0">
        {/* Panel 1: Top-left large panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "-5%",
            left: "-10%",
            width: "55%",
            height: "45%",
            backgroundColor: "var(--color-blue-100)",
            opacity: 0.35,
            borderRadius: "var(--radius-03)",
          }}
        />
        
        {/* Panel 2: Center-right tall panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "8%",
            left: "52%",
            width: "35%",
            height: "55%",
            backgroundColor: "var(--color-blue-50)",
            opacity: 0.5,
            borderRadius: "var(--radius-03)",
          }}
        />
        
        {/* Panel 3: Top-right small panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "0%",
            right: "0%",
            width: "30%",
            height: "25%",
            backgroundColor: "var(--color-neutral-50)",
            opacity: 0.7,
            borderRadius: "var(--radius-03)",
          }}
        />
        
        {/* Panel 4: Bottom-left large panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "35%",
            left: "-5%",
            width: "45%",
            height: "50%",
            backgroundColor: "var(--color-blue-100)",
            opacity: 0.3,
            borderRadius: "var(--radius-03)",
          }}
        />
        
        {/* Panel 5: Center overlapping panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "40%",
            left: "25%",
            width: "50%",
            height: "30%",
            backgroundColor: "var(--color-blue-200)",
            opacity: 0.2,
            borderRadius: "var(--radius-03)",
          }}
        />
        
        {/* Panel 6: Center vertical accent panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "20%",
            left: "48%",
            width: "4%",
            height: "60%",
            backgroundColor: "var(--color-blue-300)",
            opacity: 0.15,
            borderRadius: "var(--radius-02)",
          }}
        />
        
        {/* Panel 7: Bottom-center panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "55%",
            left: "40%",
            width: "35%",
            height: "35%",
            backgroundColor: "var(--color-blue-100)",
            opacity: 0.35,
            borderRadius: "var(--radius-03)",
          }}
        />
        
        {/* Panel 8: Bottom-right accent panel */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "60%",
            right: "5%",
            width: "25%",
            height: "30%",
            backgroundColor: "var(--color-blue-200)",
            opacity: 0.25,
            borderRadius: "var(--radius-03)",
          }}
        />
        
        {/* Panel 9: Small elevated accent */}
        <div 
          className="absolute motion-safe-transform"
          style={{
            top: "45%",
            left: "55%",
            width: "20%",
            height: "20%",
            backgroundColor: "var(--color-blue-100)",
            opacity: 0.4,
            borderRadius: "var(--radius-04)",
          }}
        />
      </div>
    </div>
  )
}

export default AppBackground
