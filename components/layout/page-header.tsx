import { cn } from "@/lib/utils"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page title */
  title: string
  /** Optional description text */
  description?: string
  /** Optional eyebrow/overline text */
  eyebrow?: string
  /** Content alignment */
  align?: "left" | "center"
}

/**
 * PageHeader component for consistent page title sections.
 * Uses token-driven utility classes from globals.css.
 */
export function PageHeader({
  className,
  title,
  description,
  eyebrow,
  align = "left",
  children,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "py-[var(--space-10)]",
        align === "center" && "text-center",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "max-w-[var(--layout-content-max)]",
          align === "center" && "mx-auto"
        )}
      >
        {eyebrow && (
          <p className="font-ui font-medium text-[length:var(--text-overline)] clr-text-tertiary uppercase tracking-widest mb-[var(--space-04)]">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading font-semibold text-[clamp(var(--text-heading-02),4vw,var(--text-heading-01))] tracking-tight clr-text-primary leading-tight">
          {title}
        </h1>
        {description && (
          <p className="font-body text-[length:var(--text-body-lg)] clr-text-secondary leading-relaxed mt-[var(--space-05)]">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-[var(--space-07)]">
            {children}
          </div>
        )}
      </div>
    </header>
  )
}
