'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex flex-1 items-start justify-between gap-4 rounded-[var(--radius-02)] py-4 text-left text-sm font-medium',
          'transition-fast outline-none',
          'hover:bg-[var(--color-bg-surface-subtle)]',
          'active:bg-[var(--color-neutral-100)] active:scale-[0.99]',
          'focus-ring-standard',
          'disabled:pointer-events-none disabled:opacity-50',
          '[&[data-state=open]>svg]:rotate-180',
          className,
        )}
        style={{
          padding: 'var(--space-04)',
          marginLeft: 'calc(var(--space-04) * -1)',
          marginRight: 'calc(var(--space-04) * -1)',
        }}
        {...props}
      >
        {children}
        <ChevronDownIcon 
          className="pointer-events-none shrink-0 translate-y-0.5" 
          style={{
            width: 'var(--icon-md)',
            height: 'var(--icon-md)',
            color: 'var(--color-text-tertiary)',
            transition: 'transform 200ms var(--motion-easing-standard)',
          }}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm"
      style={{
        transition: 'height 250ms var(--motion-easing-decelerate), opacity 200ms var(--motion-easing-standard)',
      }}
      {...props}
    >
      <div 
        className={cn('pt-0 pb-4', className)}
        style={{
          transition: 'opacity 200ms var(--motion-easing-standard)',
        }}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
