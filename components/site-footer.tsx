"use client"

import { Launch } from "@carbon/icons-react"
import Link from "next/link"
import { openContactEmail } from "@/lib/contact-mailto"
import { scrollToSection } from "@/lib/scroll-to-section"

/**
 * SiteFooter - Minimal global footer with identity and navigation.
 * Uses token-driven utility classes from globals.css.
 */
export function SiteFooter() {
  const navLinks = [
    { label: "Case Studies", href: "#featured-projects" },
    { label: "About", href: "#about" },
  ] as const

  return (
    <footer 
      className="border-t clr-border-default clr-bg-surface"
    >
      <div className="layout-shell">
        <div 
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-[var(--space-06)]"
          style={{ 
            paddingTop: "var(--space-08)",
            paddingBottom: "var(--space-08)",
          }}
        >
          {/* Left: Identity */}
          <div className="flex items-center gap-[var(--space-05)]">
            {/* Avatar */}
            <div 
              className="flex items-center justify-center flex-shrink-0 font-heading font-semibold clr-text-primary text-[length:var(--text-body-sm)] lg:text-[length:var(--text-body-lg)]"
              style={{
                width: "var(--space-11)",
                height: "var(--space-11)",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-neutral-100)",
                letterSpacing: "0.08em",
                textIndent: "0.08em",
              }}
            >
              TS
            </div>
            
            {/* Text */}
            <div className="flex flex-col gap-[var(--space-01)]">
              <p 
                className="font-body clr-text-primary"
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 500,
                }}
              >
                Designed and built by Thomas Steininger
              </p>
              <p 
                className="font-body clr-text-tertiary"
                style={{
                  fontSize: "var(--text-body-sm)",
                }}
              >
                Senior product designer specializing in complex enterprise systems and high-stakes workflows.
              </p>
              <p
                className="mt-[var(--space-03)] font-body text-[var(--color-neutral-400)]"
                style={{
                  fontSize: "var(--text-caption)",
                }}
              >
                Made with{" "}
                <a
                  href="https://www.figma.com/design/v7KkZn4CvvXPubp4vVJKzB/Synthesis-UI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring-standard inline-flex items-center gap-[var(--space-02)] clr-text-accent font-medium transition-fast hover:underline underline-offset-4 outline-none rounded-[var(--radius-02)]"
                >
                  Synthesis UI
                  <Launch size={16} aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>

          {/* Right: Navigation */}
          <nav className="flex items-center gap-[var(--space-07)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="focus-ring-standard font-body clr-text-secondary transition-fast hover:clr-text-primary outline-none rounded-[var(--radius-02)] relative"
                style={{
                  fontSize: "var(--text-body-sm)",
                  padding: "var(--space-02) var(--space-03)",
                  margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => openContactEmail()}
              className="cursor-pointer border-0 bg-transparent font-inherit focus-ring-standard font-body clr-text-secondary transition-fast hover:clr-text-primary outline-none rounded-[var(--radius-02)] relative"
              style={{
                fontSize: "var(--text-body-sm)",
                padding: "var(--space-02) var(--space-03)",
                margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}
