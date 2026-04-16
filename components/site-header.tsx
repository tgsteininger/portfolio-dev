"use client"

import { useState, useEffect } from "react"
import { useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { mainNavigation, type NavGroup, type NavItem } from "@/lib/navigation"

import { MegaMenu } from "@/components/mega-menu"
import { MobileNav } from "@/components/mobile-nav"
import { openContactEmail } from "@/lib/contact-mailto"

function isNavGroup(item: NavItem | NavGroup): item is NavGroup {
  return "caseStudies" in item
}

/**
 * SiteHeader - Global sticky header with scroll-aware compression.
 * Matches Figma design with brand, center nav with dropdown, and right CTAs.
 */
interface SiteHeaderProps {
  /** When true, header scrolls away naturally instead of staying fixed */
  scrollAway?: boolean
}

export function SiteHeader({ scrollAway = false }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isNearPageBottom, setIsNearPageBottom] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Get pathname on client side only to avoid router initialization issues
  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  // Check if current path is within case studies
  const isCaseStudiesActive = currentPath?.startsWith("/case-studies") ?? false

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 10)
      
      // If scrollAway mode, hide header once we've scrolled past the hero area
      if (scrollAway) {
        const documentHeight = document.documentElement.scrollHeight
        const viewportHeight = window.innerHeight
        const distanceFromBottom = Math.max(
          0,
          documentHeight - (scrollY + viewportHeight)
        )
        const withinLastFivePercent =
          distanceFromBottom <= documentHeight * 0.05
        const withinFooterProximity = distanceFromBottom <= 64
        const shouldForceVisibleNearBottom =
          withinLastFivePercent || withinFooterProximity
        setIsNearPageBottom(shouldForceVisibleNearBottom)

        // Hide header when scrolled past approximately 400px (hero section)
        setIsHidden(scrollY > 400 && !shouldForceVisibleNearBottom)
      } else {
        setIsNearPageBottom(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollAway])

  const headerIsHidden = scrollAway && isHidden

  useEffect(() => {
    const headerEl = headerRef.current
    if (!headerEl) return

    if (headerIsHidden) {
      headerEl.setAttribute("inert", "")
      return
    }

    headerEl.removeAttribute("inert")
  }, [headerIsHidden])

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "clr-bg-page border-b clr-border-subtle",
        isScrolled &&
          !(scrollAway && isNearPageBottom) &&
          "shadow-[var(--elevation-01)]",
        // Hide header when scrollAway mode is active and we've scrolled past threshold
        scrollAway && isHidden && "opacity-0 -translate-y-full pointer-events-none"
      )}
      style={{
        height: isScrolled ? "var(--space-11)" : "var(--space-13)",
        transition: "height 250ms var(--motion-easing-standard), background-color 200ms var(--motion-easing-standard), border-color 200ms var(--motion-easing-standard), box-shadow 200ms var(--motion-easing-standard), opacity 250ms var(--motion-easing-standard), transform 250ms var(--motion-easing-standard)",
      }}
      aria-hidden={headerIsHidden}
    >
      <div className="layout-shell h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Brand with vertical divider */}
          <div 
            className="flex items-center"
            style={{ gap: "var(--space-05)" }}
          >
            <Link
              href="/"
              prefetch={false}
              className="focus-ring-standard font-heading font-semibold text-[length:var(--text-body-lg)] tracking-tight clr-text-primary transition-fast hover:clr-text-accent outline-none rounded-[var(--radius-02)] px-[var(--space-02)] -mx-[var(--space-02)]"
            >
              Steininger UX
            </Link>
            {/* Vertical divider */}
            <div 
              className="hidden sm:block"
              style={{
                width: "var(--stroke-01)",
                height: "var(--space-07)",
                backgroundColor: "var(--color-border-default)",
              }}
            />
          </div>

          {/* Center Navigation - Case Studies only */}
          <div 
            className="hidden md:flex items-center"
            style={{ gap: "var(--space-08)" }}
          >
            {mainNavigation.map((item) =>
              isNavGroup(item) && (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                    aria-controls="site-header-case-studies-menu"
                    className={cn(
                      "font-ui font-medium text-[length:var(--text-body-sm)]",
                      "flex items-center py-[var(--space-03)] relative",
                      "transition-fast outline-none",
                      "focus-ring-standard rounded-[var(--radius-02)]",
                      activeDropdown === item.label
                        ? "clr-text-primary" 
                        : "clr-text-secondary hover:clr-text-primary"
                    )}
                    style={{ 
                      gap: "var(--space-02)",
                      padding: "var(--space-02) var(--space-03)",
                      margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                    }}
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 200ms ease-out",
                        transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M3 4.5L6 7.5L9 4.5" />
                    </svg>
                    {/* Underline - animates from left on hover/open */}
                    <span 
                      className="absolute left-0 right-0"
                      style={{
                        bottom: 0,
                        height: "var(--stroke-02)",
                        backgroundColor: "var(--color-cyan-500)",
                        borderRadius: "var(--radius-full)",
                        transformOrigin: "left center",
                        transform: activeDropdown === item.label ? "scaleX(1)" : "scaleX(0)",
                        opacity: activeDropdown === item.label ? 1 : 0,
                        transition: "transform 200ms ease-out, opacity 200ms ease-out",
                      }}
                    />
                  </button>
                  <MegaMenu
                    id="site-header-case-studies-menu"
                    caseStudies={item.caseStudies || []}
                    isOpen={activeDropdown === item.label}
                    onClose={() => setActiveDropdown(null)}
                  />
                </div>
              )
            )}
          </div>

          {/* Right side: Contact button only */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={() => openContactEmail()}
              className={cn(
                "cursor-pointer border-0 font-inherit",
                "font-ui font-medium text-[length:var(--text-body-sm)]",
                "btn-primary-interactive",
                "inline-flex items-center justify-center",
                "focus-ring-standard"
              )}
              style={{
                height: "var(--button-height-sm)",
                padding: "0 var(--button-pad-x-md)",
              }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className={cn(
              "md:hidden clr-icon-primary transition-fast",
              "hover:bg-[var(--color-bg-surface-subtle)] active:bg-[var(--color-neutral-100)]",
              "rounded-[var(--radius-02)]",
              "focus-ring-standard outline-none"
            )}
            style={{ padding: "var(--space-03)", marginRight: "calc(var(--space-03) * -1)" }}
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
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
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  )
}
