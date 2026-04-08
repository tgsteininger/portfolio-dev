import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * Button component using token-driven utility classes from globals.css.
 * All colors, spacing, radius, and motion are derived from the design system.
 */
const buttonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-center whitespace-nowrap shrink-0",
    // Typography
    "font-ui font-medium",
    // Motion - using fast transition for snappy feel
    "transition-fast",
    // States
    "disabled:pointer-events-none disabled:opacity-50",
    // Focus - consistent accessible focus ring
    "outline-none focus-visible:focus-ring-standard",
    // Pressed state - subtle scale
    "active:scale-[0.98]",
    // Icons
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--action-primary)] text-[var(--text-inverse)]",
          "hover:bg-[var(--action-primary-hover)] hover:shadow-[0_2px_8px_rgba(29,78,216,0.25)]",
          "active:bg-[var(--action-primary-active)]",
        ].join(" "),
        primary: [
          "action-primary",
          "hover:bg-[var(--color-neutral-800)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.12)]",
          "active:bg-[var(--color-neutral-900)]",
        ].join(" "),
        secondary: [
          "bg-transparent border border-[var(--color-border-default)] clr-text-primary",
          "hover:bg-[var(--color-blue-50)] hover:border-[var(--color-blue-200)]",
          "active:bg-[var(--color-blue-100)]",
        ].join(" "),
        outline: [
          "bg-transparent border border-[var(--color-border-default)] clr-text-primary",
          "hover:bg-[var(--color-bg-surface-subtle)] hover:border-[var(--color-border-strong)]",
          "active:bg-[var(--color-neutral-100)]",
        ].join(" "),
        ghost: [
          "bg-transparent clr-text-secondary",
          "hover:bg-[var(--color-bg-surface-subtle)] hover:clr-text-primary",
          "active:bg-[var(--color-neutral-100)]",
        ].join(" "),
        link: "clr-text-accent underline-offset-4 hover:underline active:scale-100",
        destructive: [
          "action-destructive",
          "hover:bg-[#b91c1c] hover:shadow-[0_2px_8px_rgba(185,28,28,0.25)]",
          "active:bg-[#991b1b]",
        ].join(" "),
      },
      size: {
        default: [
          "h-[var(--button-height-md)]",
          "px-[var(--button-pad-x-md)]",
          "gap-[var(--space-03)]",
          "text-[length:var(--text-body-sm)]",
          "rounded-[var(--radius-03)]",
          "has-[>svg]:px-[var(--button-pad-x-sm)]",
        ].join(" "),
        sm: [
          "h-[var(--button-height-sm)]",
          "px-[var(--button-pad-x-sm)]",
          "gap-[var(--space-02)]",
          "text-[length:var(--text-body-sm)]",
          "rounded-[var(--radius-02)]",
          "has-[>svg]:px-[var(--space-03)]",
        ].join(" "),
        lg: [
          "h-[var(--button-height-lg)]",
          "px-[var(--button-pad-x-lg)]",
          "gap-[var(--space-04)]",
          "text-[length:var(--text-body-md)]",
          "rounded-[var(--radius-03)]",
          "has-[>svg]:px-[var(--button-pad-x-md)]",
        ].join(" "),
        icon: [
          "size-[var(--button-height-md)]",
          "rounded-[var(--radius-03)]",
        ].join(" "),
        'icon-sm': [
          "size-[var(--button-height-sm)]",
          "rounded-[var(--radius-02)]",
        ].join(" "),
        'icon-lg': [
          "size-[var(--button-height-lg)]",
          "rounded-[var(--radius-03)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'
  const resolvedVariant = variant ?? 'default'
  const isPrimaryActionVariant =
    resolvedVariant === 'default' || resolvedVariant === 'primary'

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        isPrimaryActionVariant && 'rounded-[var(--radius-03)]',
        className,
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
