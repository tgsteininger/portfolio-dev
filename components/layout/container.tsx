import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Container max-width variant */
  size?: "default" | "narrow" | "content" | "reading" | "wide"
  /** Semantic HTML element */
  as?: "div" | "section" | "article" | "main"
}

/**
 * Container component that constrains content width and applies consistent horizontal padding.
 * Uses layout tokens from the design system:
 * - default: 1280px (--layout-container-lg)
 * - narrow: 560px (--layout-narrow-max)
 * - content: 700px (--layout-content-max)
 * - reading: 680px (--layout-reading-max)
 * - wide: 1440px (--layout-container-xl)
 */
export function Container({
  className,
  size = "default",
  as: Component = "div",
  style,
  children,
  ...props
}: ContainerProps) {
  const maxWidthMap = {
    default: "var(--layout-container-lg)",
    narrow: "var(--layout-narrow-max)",
    content: "var(--layout-content-max)",
    reading: "var(--layout-reading-max)",
    wide: "var(--layout-container-xl)",
  }

  return (
    <Component
      className={cn("layout-shell", className)}
      style={{
        maxWidth: maxWidthMap[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
