"use client"

import Link from "next/link"

/**
 * SiteFooter - Minimal global footer with identity and navigation.
 * Uses token-driven utility classes from globals.css.
 */
export function SiteFooter() {
  const navLinks = [
    { label: "Case Studies", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <footer 
      className="border-t clr-border-default clr-bg-surface-subtle"
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
              className="flex items-center justify-center flex-shrink-0 clr-bg-surface font-heading font-semibold clr-text-primary"
              style={{
                width: "var(--space-11)",
                height: "var(--space-11)",
                borderRadius: "var(--radius-full)",
                fontSize: "var(--text-body-sm)",
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
                Senior UX Designer focused on complex, data-driven products
              </p>
            </div>
          </div>

          {/* Right: Navigation */}
          <nav className="flex items-center gap-[var(--space-07)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body clr-text-secondary transition-fast hover:clr-text-primary focus-visible:focus-ring-standard outline-none rounded-[var(--radius-02)] relative"
                style={{
                  fontSize: "var(--text-body-sm)",
                  padding: "var(--space-02) var(--space-03)",
                  margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
