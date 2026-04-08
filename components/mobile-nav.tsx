"use client"

import { useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { caseStudies } from "@/lib/navigation"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * MobileNav - Full-screen mobile navigation drawer.
 * Uses token-driven utility classes from globals.css.
 */
export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-[color-mix(in_srgb,var(--color-neutral-900)_40%,transparent)]",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        style={{
          transition: "opacity 250ms var(--motion-easing-decelerate), visibility 250ms",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-[24rem] z-50 md:hidden",
          "clr-bg-surface",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          transition: "transform 300ms var(--motion-easing-emphasized)",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-[var(--space-05)] h-[var(--space-11)] border-b clr-border-default">
            <span className="font-heading font-semibold text-[length:var(--text-body-lg)] tracking-tight clr-text-primary">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-[var(--space-03)] -mr-[var(--space-03)] clr-icon-primary transition-fast hover:bg-[var(--color-bg-surface-subtle)] active:bg-[var(--color-neutral-100)] rounded-[var(--radius-02)] focus-visible:focus-ring-standard outline-none"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="w-[var(--icon-lg)] h-[var(--icon-lg)]"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Nav Content */}
          <nav className="flex-1 overflow-y-auto p-[var(--space-05)]">
            <div className="flex flex-col gap-[var(--space-06)]">
              {/* Home Link */}
              <div>
                <Link
                  href="/"
                  onClick={onClose}
                  prefetch={false}
                  className="block font-body text-[length:var(--text-body-md)] clr-text-primary rounded-[var(--radius-02)] hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.99] focus-visible:focus-ring-standard outline-none transition-fast"
                  style={{
                    padding: "var(--space-03) var(--space-04)",
                    marginLeft: "calc(var(--space-04) * -1)",
                    marginRight: "calc(var(--space-04) * -1)",
                  }}
                >
                  Home
                </Link>
              </div>

              {/* Case Studies Section */}
              <div>
                <p 
                  className="font-ui font-medium text-[length:var(--text-overline)] clr-text-tertiary uppercase tracking-widest"
                  style={{ 
                    marginBottom: "var(--space-03)",
                  }}
                >
                  Case Studies
                </p>
                <div className="flex flex-col">
                  {caseStudies.map((study) => (
                    <Link
                      key={study.href}
                      href={study.href}
                      onClick={onClose}
                      prefetch={false}
                      className="block font-body text-[length:var(--text-body-md)] clr-text-primary rounded-[var(--radius-02)] hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.99] focus-visible:focus-ring-standard outline-none transition-fast"
                      style={{
                        padding: "var(--space-03) var(--space-04)",
                        marginLeft: "calc(var(--space-04) * -1)",
                        marginRight: "calc(var(--space-04) * -1)",
                      }}
                    >
                      {study.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="p-[var(--space-05)] border-t clr-border-default">
            <Link
              href="/contact"
              onClick={onClose}
              prefetch={false}
              className="block w-full text-center font-ui font-medium text-[length:var(--text-body-sm)] btn-primary-interactive focus-visible:focus-ring-standard outline-none"
              style={{
                padding: "var(--space-04) var(--space-05)",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
