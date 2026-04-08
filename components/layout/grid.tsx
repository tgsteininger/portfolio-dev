import { cn } from "@/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns at largest breakpoint */
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  /** Gap size using design system tokens */
  gap?: "none" | "sm" | "md" | "lg"
}

/**
 * Grid component using the 12-column editorial grid from the design system.
 * Uses grid gap tokens:
 * - sm: 16px (--grid-gap-sm)
 * - md: 24px (--grid-gap-md) - default
 * - lg: 32px (--grid-gap-lg)
 */
export function Grid({
  className,
  cols = 12,
  gap = "md",
  style,
  children,
  ...props
}: GridProps) {
  const gapMap = {
    none: "0",
    sm: "var(--grid-gap-sm)",
    md: "var(--grid-gap-md)",
    lg: "var(--grid-gap-lg)",
  }

  return (
    <div
      className={cn(
        "grid",
        {
          "grid-cols-1": cols === 1,
          "grid-cols-1 md:grid-cols-2": cols === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": cols === 4,
          "grid-cols-2 md:grid-cols-3 lg:grid-cols-6": cols === 6,
          "grid-cols-4 md:grid-cols-6 lg:grid-cols-12": cols === 12,
        },
        className
      )}
      style={{
        gap: gapMap[gap],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Full 12-column editorial grid using CSS Grid.
 * Items can span columns using col-span-* classes.
 */
export function EditorialGrid({
  className,
  gap = "md",
  style,
  children,
  ...props
}: Omit<GridProps, "cols">) {
  const gapMap = {
    none: "0",
    sm: "var(--grid-gap-sm)",
    md: "var(--grid-gap-md)",
    lg: "var(--grid-gap-lg)",
  }

  return (
    <div
      className={cn("editorial-grid", className)}
      style={{
        gap: gapMap[gap],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
