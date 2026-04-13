"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Section Navigation Items
 * Maps to section IDs in the case study page
 */
const sectionItems = [
  { id: "overview", label: "Overview" },
  { id: "executive-summary", label: "Executive Summary" },
  { id: "business-outcomes", label: "Business Outcomes" },
  { id: "system-transformation", label: "System Transformation" },
  { id: "structural-bottlenecks", label: "Structural Bottlenecks" },
  { id: "detailed-process", label: "Detailed Process" },
  { id: "what-i-learned", label: "What I Learned" },
]

/**
 * CaseStudySectionNav - Sticky scroll-aware secondary navigation for case study pages.
 * 
 * Behavior:
 * - Hidden at page load
 * - Reveals when scrolling to Executive Summary section
 * - Sticks to top of viewport once revealed
 * - Active section updates based on scroll position (scrollspy)
 * - Clicking an item smoothly scrolls to that section
 * - Mobile: Shows dropdown pattern with "On this page" trigger
 * - Desktop: Shows horizontal tab navigation
 */
export function CaseStudySectionNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  // Get active section label
  const activeSectionLabel = sectionItems.find(item => item.id === activeSection)?.label || "Overview"

  // Handle scroll visibility - show when main header has scrolled off-screen
  // and Executive Summary section is approaching the top
  useEffect(() => {
    const handleScroll = () => {
      const executiveSummaryEl = document.getElementById("executive-summary")
      if (!executiveSummaryEl) return

      const rect = executiveSummaryEl.getBoundingClientRect()
      // Main header height is approximately 56-72px depending on scroll state
      // Show section nav only when:
      // 1. Executive summary is at or above the viewport top (rect.top <= 56)
      // 2. This ensures the main header has scrolled off-screen first
      const mainHeaderHeight = 72 // Conservative estimate for unscrolled header
      const shouldShow = rect.top <= mainHeaderHeight

      if (shouldShow && !isVisible) {
        setIsVisible(true)
        // Trigger animation only on first reveal
        if (!hasAnimatedIn) {
          setHasAnimatedIn(true)
        }
      } else if (!shouldShow && isVisible) {
        setIsVisible(false)
        setMobileDropdownOpen(false) // Close dropdown when nav hides
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible, hasAnimatedIn])

  // Close mobile dropdown on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (mobileDropdownOpen) {
        setMobileDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScrollClose, { passive: true })
    return () => window.removeEventListener("scroll", handleScrollClose)
  }, [mobileDropdownOpen])

  // Scrollspy - track active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Smooth scroll to section on click
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (!el) return

    // Calculate offset accounting for sticky nav height (56px)
    const navHeight = 56
    const elementPosition = el.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    // Close mobile dropdown after navigation
    setMobileDropdownOpen(false)
  }, [])

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-40",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
      style={{
        top: 0,
        backgroundColor: "var(--color-bg-page)",
        borderBottom: "var(--stroke-01) solid var(--color-border-subtle)",
        transition:
          "opacity var(--motion-duration-03) var(--motion-easing-premium), transform var(--motion-duration-03) var(--motion-easing-premium)",
      }}
      aria-label="Case study section navigation"
    >
      {/* Desktop Navigation - hidden on mobile */}
      <div className="hidden md:block layout-shell">
        <div
          className="flex items-center overflow-x-auto scrollbar-hide"
          style={{
            height: "56px",
            gap: "var(--space-08)",
          }}
        >
          {sectionItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                "relative font-ui whitespace-nowrap transition-fast",
                "py-[var(--space-04)] px-[var(--space-02)] -mx-[var(--space-02)]",
                "rounded-[var(--radius-02)]",
                "focus-ring-standard outline-none",
                activeSection === item.id
                  ? "clr-text-primary font-medium"
                  : "clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-bg-surface-subtle)] font-normal"
              )}
              style={{
                fontSize: "var(--text-body-sm)",
              }}
            >
              {item.label}
              {/* Active indicator underline */}
              <span
                className="absolute left-[var(--space-02)] right-[var(--space-02)] bottom-0"
                style={{
                  height: "var(--stroke-02)",
                  backgroundColor: "var(--color-cyan-500)",
                  borderRadius: "var(--radius-full)",
                  transformOrigin: "left center",
                  transform: activeSection === item.id ? "scaleX(1)" : "scaleX(0)",
                  opacity: activeSection === item.id ? 1 : 0,
                  transition:
                    "transform var(--motion-duration-03) var(--motion-easing-premium), opacity var(--motion-duration-03) var(--motion-easing-premium)",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation - visible on mobile only */}
      <div className="md:hidden">
        {/* Mobile Trigger */}
        <div className="layout-shell">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-between w-full cursor-pointer transition-fast hover:bg-[var(--color-bg-surface-subtle)] active:bg-[var(--color-neutral-100)] rounded-[var(--radius-02)] focus-ring-standard outline-none"
            style={{
              height: "56px",
              padding: "0 var(--space-03)",
              margin: "0 calc(var(--space-03) * -1)",
            }}
            aria-expanded={mobileDropdownOpen}
            aria-haspopup="listbox"
          >
            <div className="flex items-center gap-[var(--space-02)]">
              <span
                className="font-body clr-text-tertiary"
                style={{
                  fontSize: "var(--text-body-sm)",
                }}
              >
                On this page:
              </span>
              <span
                className="font-body clr-text-primary"
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 500,
                }}
              >
                {activeSectionLabel}
              </span>
            </div>
            <ChevronDown
              className="clr-text-secondary"
              style={{
                width: "var(--icon-md)",
                height: "var(--icon-md)",
                transform: mobileDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 200ms var(--motion-easing-standard)",
              }}
            />
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        <div
          className={cn(
            "absolute left-0 right-0 overflow-hidden",
            mobileDropdownOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          )}
          style={{
            top: "56px",
            backgroundColor: "var(--color-bg-page)",
            borderBottom: mobileDropdownOpen ? "var(--stroke-01) solid var(--color-border-subtle)" : "none",
            boxShadow: mobileDropdownOpen ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "none",
            maxHeight: mobileDropdownOpen ? "400px" : "0",
            transition: "opacity 200ms var(--motion-easing-decelerate), max-height 250ms var(--motion-easing-decelerate), visibility 200ms, box-shadow 200ms",
          }}
        >
          <div
            className="layout-shell"
            style={{
              paddingTop: "var(--space-03)",
              paddingBottom: "var(--space-03)",
            }}
          >
            <ul role="listbox" className="flex flex-col">
              {sectionItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      "flex items-center justify-between w-full text-left font-body transition-fast cursor-pointer",
                      "focus-ring-standard outline-none",
                      "active:scale-[0.99]",
                      activeSection === item.id
                        ? "clr-text-primary bg-[var(--color-cyan-50)]"
                        : "clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)]"
                    )}
                    style={{
                      fontSize: "var(--text-body-md)",
                      fontWeight: activeSection === item.id ? 500 : 400,
                      padding: "var(--space-04) var(--space-03)",
                      borderRadius: "var(--radius-02)",
                    }}
                    role="option"
                    aria-selected={activeSection === item.id}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <Check
                        style={{
                          color: "var(--color-cyan-600)",
                          width: "var(--icon-sm)",
                          height: "var(--icon-sm)",
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
