import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Vertical padding variant */
  spacing?: "default" | "compact" | "large" | "none"
  /** Background variant */
  background?: "default" | "subtle" | "subtleBlue" | "inverse"
}

/**
 * Section component for page sections with consistent vertical spacing.
 * Uses the .section-pad utility class from the design system for responsive padding.
 * 
 * Spacing variants:
 * - default: uses .section-pad (responsive --space-10 to --space-14)
 * - compact: tighter spacing (--space-08)
 * - large: more breathing room (--space-14)
 * - none: no vertical padding
 *
 * Background: subtleBlue = shared alpha-only blue veil (About on section; Approach uses overlay).
 */
export function Section({
  className,
  spacing = "default",
  background = "default",
  style,
  children,
  ...props
}: SectionProps) {
  const backgroundMap = {
    default: undefined,
    subtle: "var(--color-bg-surface-subtle)",
    subtleBlue: "var(--color-bg-surface-tint-blue)",
    inverse: "var(--color-neutral-900)",
  }

  // Use section-pad for default spacing, override for other variants
  const useDefaultPad = spacing === "default"
  
  const paddingOverride = {
    compact: "var(--space-08)",
    large: "var(--space-14)",
    none: "0",
  }

  return (
    <section
      className={cn(
        useDefaultPad && "section-pad",
        background === "inverse" && "text-[var(--color-text-inverse)]",
        className
      )}
      style={{
        ...(!useDefaultPad && { paddingBlock: paddingOverride[spacing as keyof typeof paddingOverride] }),
        ...(backgroundMap[background] && { background: backgroundMap[background] }),
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  )
}
