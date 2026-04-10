"use client"

import { useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { caseStudies } from "@/lib/navigation"
import { openContactEmail } from "@/lib/contact-mailto"

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
      {/* Drawer first in DOM so Tab moves through panel before overlay control */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-[24rem] md:hidden",
          "clr-bg-surface",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          transition: "transform 300ms var(--motion-easing-emphasized)",
        }}
        inert={!isOpen ? true : undefined}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-[var(--space-05)] h-[var(--space-11)] border-b clr-border-default">
            <span className="font-heading font-semibold text-[length:var(--text-body-lg)] tracking-tight clr-text-primary">
              Menu
            </span>
            <button
              onClick={onClose}
              className="focus-ring-standard p-[var(--space-03)] -mr-[var(--space-03)] clr-icon-primary transition-fast hover:bg-[var(--color-bg-surface-subtle)] active:bg-[var(--color-neutral-100)] rounded-[var(--radius-02)] outline-none"
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
                  className="focus-ring-standard block font-body text-[length:var(--text-body-md)] clr-text-primary rounded-[var(--radius-02)] hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.99] outline-none transition-fast"
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
                      className="focus-ring-standard block font-body text-[length:var(--text-body-md)] clr-text-primary rounded-[var(--radius-02)] hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.99] outline-none transition-fast"
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
            <button
              type="button"
              onClick={() => {
                onClose()
                openContactEmail()
              }}
              className="cursor-pointer border-0 font-inherit btn-primary-interactive focus-ring-standard block w-full text-center font-ui font-medium text-[length:var(--text-body-sm)] outline-none"
              style={{
                padding: "var(--space-04) var(--space-05)",
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop: pointer dismiss; tabIndex -1 keeps Tab inside drawer (close + links) */}
      <button
        type="button"
        tabIndex={-1}
        className={cn(
          "fixed inset-0 z-40 cursor-default border-0 p-0 md:hidden",
          "bg-[color-mix(in_srgb,var(--color-neutral-900)_40%,transparent)]",
          isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        )}
        style={{
          transition: "opacity 250ms var(--motion-easing-decelerate), visibility 250ms",
        }}
        onClick={onClose}
        aria-label="Close menu"
      />
    </>
  )
}
