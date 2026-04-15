"use client"

import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Section Navigation Items
 * Maps to section IDs in the case study page
 */
const baseSectionItems = [
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
  const [isNearPageBottom, setIsNearPageBottom] = useState(false)
  const [isHeaderCompressed, setIsHeaderCompressed] = useState(false)
  const [hasDecisionFrameworkSection, setHasDecisionFrameworkSection] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [hoveredSectionId, setHoveredSectionId] = useState<string | null>(null)
  const [activeUnderline, setActiveUnderline] = useState({ left: 0, width: 0, visible: false })
  const [hoverUnderline, setHoverUnderline] = useState({ left: 0, width: 0, visible: false })
  const [isBottomOverrideActive, setIsBottomOverrideActive] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const mobileListboxId = "case-study-section-nav-mobile-listbox"
  const desktopScrollRef = useRef<HTMLDivElement>(null)
  const navItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const lastAutoScrolledSectionRef = useRef<string | null>(null)
  const isBottomOverrideActiveRef = useRef(false)

  useEffect(() => {
    const path = window.location.pathname
    setHasDecisionFrameworkSection(
      path === "/case-studies/walgreens" || path === "/case-studies/mediaplatform"
    )
  }, [])

  const sectionItems = useMemo(() => {
    if (!hasDecisionFrameworkSection) return baseSectionItems

    const insertionIndex = baseSectionItems.findIndex(
      (item) => item.id === "structural-bottlenecks"
    )
    const items = [...baseSectionItems]
    items.splice(insertionIndex + 1, 0, {
      id: "decision-framework",
      label: "Decisions & Constraints",
    })
    return items
  }, [hasDecisionFrameworkSection])

  // Get active section label
  const activeSectionLabel = sectionItems.find(item => item.id === activeSection)?.label || "Overview"

  const getUnderlineMetrics = useCallback((itemId: string) => {
    const itemEl = navItemRefs.current[itemId]
    if (!itemEl) return null

    const itemStyles = window.getComputedStyle(itemEl)
    const horizontalInset = Number.parseFloat(itemStyles.paddingLeft || "0") || 0
    const left = itemEl.offsetLeft + horizontalInset
    const width = Math.max(0, itemEl.offsetWidth - horizontalInset * 2)

    return { left, width }
  }, [])

  const getCurrentInViewSectionId = useCallback(() => {
    const sectionActivationY = 96
    let currentSectionId = sectionItems[0]?.id

    sectionItems.forEach((item) => {
      const sectionEl = document.getElementById(item.id)
      if (!sectionEl) return
      if (sectionEl.getBoundingClientRect().top <= sectionActivationY) {
        currentSectionId = item.id
      }
    })

    return currentSectionId
  }, [sectionItems])

  useEffect(() => {
    isBottomOverrideActiveRef.current = isBottomOverrideActive
  }, [isBottomOverrideActive])

  // Handle scroll visibility - show when main header has scrolled off-screen
  // and Executive Summary section is approaching the top
  useEffect(() => {
    const handleScroll = () => {
      const executiveSummaryEl = document.getElementById("executive-summary")
      if (!executiveSummaryEl) return

      const scrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const distanceFromBottom = Math.max(0, documentHeight - (scrollY + viewportHeight))
      const withinLastFivePercent = distanceFromBottom <= documentHeight * 0.05
      const withinFooterProximity = distanceFromBottom <= 64
      const shouldStackUnderHeader = withinLastFivePercent || withinFooterProximity

      setIsHeaderCompressed(scrollY > 10)
      setIsNearPageBottom(shouldStackUnderHeader)

      const rect = executiveSummaryEl.getBoundingClientRect()
      // Main header height is approximately 56-72px depending on scroll state
      // Show section nav only when:
      // 1. Executive summary is at or above the viewport top (rect.top <= 56)
      // 2. This ensures the main header has scrolled off-screen first
      const mainHeaderHeight = 72 // Conservative estimate for unscrolled header
      const shouldShow = rect.top <= mainHeaderHeight || shouldStackUnderHeader

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

  const navTop = isNearPageBottom
    ? isHeaderCompressed
      ? "var(--space-11)"
      : "var(--space-13)"
    : 0

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

  useEffect(() => {
    const scrollEl = desktopScrollRef.current
    if (!scrollEl) return

    const isTabletViewport = () =>
      window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches

    const updateAffordances = () => {
      if (!isVisible || !isTabletViewport()) {
        setCanScrollLeft(false)
        setCanScrollRight(false)
        return
      }

      const { scrollLeft, scrollWidth, clientWidth } = scrollEl
      const maxScrollLeft = Math.max(0, scrollWidth - clientWidth)

      setCanScrollLeft(scrollLeft > 1)
      setCanScrollRight(scrollLeft < maxScrollLeft - 1)
    }

    const handleResize = () => updateAffordances()
    const handleScroll = () => updateAffordances()

    updateAffordances()
    scrollEl.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isVisible, sectionItems])

  useEffect(() => {
    if (!isVisible) {
      setActiveUnderline((prev) => ({ ...prev, visible: false }))
      setHoverUnderline((prev) => ({ ...prev, visible: false }))
      return
    }

    const activeMetrics = getUnderlineMetrics(activeSection)
    if (activeMetrics) {
      setActiveUnderline({
        ...activeMetrics,
        visible: true,
      })
    } else {
      setActiveUnderline((prev) => ({ ...prev, visible: false }))
    }

    if (!hoveredSectionId || hoveredSectionId === activeSection) {
      setHoverUnderline((prev) => ({ ...prev, visible: false }))
      return
    }

    const hoverMetrics = getUnderlineMetrics(hoveredSectionId)
    if (!hoverMetrics) {
      setHoverUnderline((prev) => ({ ...prev, visible: false }))
      return
    }

    setHoverUnderline({
      ...hoverMetrics,
      visible: true,
    })
  }, [activeSection, hoveredSectionId, isVisible, getUnderlineMetrics, sectionItems])

  useEffect(() => {
    const scrollEl = desktopScrollRef.current
    if (!scrollEl) return

    const updateUnderlinePositions = () => {
      const activeMetrics = getUnderlineMetrics(activeSection)
      if (activeMetrics) {
        setActiveUnderline({
          ...activeMetrics,
          visible: true,
        })
      }

      if (!hoveredSectionId || hoveredSectionId === activeSection) return

      const hoverMetrics = getUnderlineMetrics(hoveredSectionId)
      if (hoverMetrics) {
        setHoverUnderline({
          ...hoverMetrics,
          visible: true,
        })
      }
    }

    updateUnderlinePositions()
    window.addEventListener("resize", updateUnderlinePositions, { passive: true })
    return () => window.removeEventListener("resize", updateUnderlinePositions)
  }, [activeSection, hoveredSectionId, getUnderlineMetrics])

  useEffect(() => {
    if (!isVisible) return

    const isTabletViewport =
      window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
    if (!isTabletViewport) return

    const scrollEl = desktopScrollRef.current
    const activeEl = navItemRefs.current[activeSection]
    if (!scrollEl || !activeEl) return
    if (scrollEl.scrollWidth <= scrollEl.clientWidth + 1) return

    const itemRect = activeEl.getBoundingClientRect()
    const containerRect = scrollEl.getBoundingClientRect()
    const itemCenter = itemRect.left + itemRect.width / 2
    const containerCenter = containerRect.left + containerRect.width / 2
    const centerDelta = Math.abs(itemCenter - containerCenter)
    const centerThreshold = containerRect.width * 0.2

    const visibleLeft = Math.max(itemRect.left, containerRect.left)
    const visibleRight = Math.min(itemRect.right, containerRect.right)
    const visibleWidth = Math.max(0, visibleRight - visibleLeft)
    const visibleRatio = itemRect.width > 0 ? visibleWidth / itemRect.width : 1
    const isMostlyVisible = visibleRatio >= 0.8
    const isMostlyCentered = centerDelta <= centerThreshold

    if (
      isMostlyVisible &&
      isMostlyCentered &&
      lastAutoScrolledSectionRef.current === activeSection
    ) {
      return
    }

    if (isMostlyVisible && isMostlyCentered) {
      lastAutoScrolledSectionRef.current = activeSection
      return
    }

    lastAutoScrolledSectionRef.current = activeSection
    activeEl.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    })
  }, [activeSection, isVisible])

  // Scrollspy - track active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isBottomOverrideActiveRef.current) return
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
  }, [sectionItems])

  // Ensure final section can become active near page bottom.
  useEffect(() => {
    const finalSectionId = sectionItems[sectionItems.length - 1]?.id
    if (!finalSectionId) return

    const bottomActivationThreshold = 12

    const handleBottomOverride = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isNearBottom =
        scrollPosition >= documentHeight - bottomActivationThreshold

      if (isNearBottom) {
        if (!isBottomOverrideActiveRef.current) {
          setIsBottomOverrideActive(true)
        }
        setActiveSection((currentSection) =>
          currentSection === finalSectionId ? currentSection : finalSectionId
        )
        return
      }

      if (isBottomOverrideActiveRef.current) {
        setIsBottomOverrideActive(false)
        const resumedSectionId = getCurrentInViewSectionId()
        if (resumedSectionId) {
          setActiveSection(resumedSectionId)
        }
      }
    }

    window.addEventListener("scroll", handleBottomOverride, { passive: true })
    handleBottomOverride()

    return () => window.removeEventListener("scroll", handleBottomOverride)
  }, [sectionItems, getCurrentInViewSectionId])

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
        top: navTop,
        backgroundColor: "var(--color-bg-page)",
        borderBottom: "var(--stroke-01) solid var(--color-border-subtle)",
        boxShadow: "var(--elevation-01)",
        transition:
          "top var(--motion-duration-03) var(--motion-easing-premium), opacity var(--motion-duration-03) var(--motion-easing-premium), transform var(--motion-duration-03) var(--motion-easing-premium)",
      }}
      aria-label="Case study section navigation"
      aria-hidden={!isVisible}
    >
      {/* Desktop Navigation - hidden on mobile */}
      <div className="hidden md:block layout-shell">
        <div
          className="case-study-nav-scroll-shell"
          data-scroll-left={canScrollLeft ? "true" : "false"}
          data-scroll-right={canScrollRight ? "true" : "false"}
        >
          <div
          ref={desktopScrollRef}
          onMouseLeave={() => setHoveredSectionId(null)}
          className="case-study-nav-scroll-track flex items-center overflow-x-auto"
          style={{
            height: "56px",
            gap: "var(--space-08)",
          }}
        >
          {sectionItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(el) => {
                navItemRefs.current[item.id] = el
              }}
              onClick={(e) => handleNavClick(e, item.id)}
              onMouseEnter={() => setHoveredSectionId(item.id)}
              aria-current={activeSection === item.id ? "location" : undefined}
              tabIndex={isVisible ? 0 : -1}
              data-active={activeSection === item.id ? "true" : "false"}
              className={cn(
                "case-study-nav-snap-item case-study-nav-item relative font-ui whitespace-nowrap transition-fast",
                "py-[var(--space-04)] px-[var(--space-02)] -mx-[var(--space-02)]",
                "rounded-[var(--radius-02)]",
                "focus-ring-standard outline-none",
                activeSection === item.id
                  ? "clr-text-primary font-medium"
                  : "clr-text-secondary hover:clr-text-primary font-normal"
              )}
              style={{
                fontSize: "var(--text-body-sm)",
                // Small optical offset for first sticky section-nav item so custom focus ring is not clipped on the left edge.
                marginLeft: item.id === sectionItems[0].id ? "4px" : undefined,
              }}
            >
              {item.label}
            </a>
          ))}
          <span
            className="case-study-nav-active-underline"
            aria-hidden="true"
            style={{
              left: `${activeUnderline.left}px`,
              width: `${activeUnderline.width}px`,
              opacity: activeUnderline.visible ? 1 : 0,
            }}
          />
          <span
            className="case-study-nav-hover-underline"
            aria-hidden="true"
            style={{
              left: `${hoverUnderline.left}px`,
              width: `${hoverUnderline.width}px`,
              opacity: hoverUnderline.visible ? 1 : 0,
            }}
          />
        </div>
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
            aria-controls={mobileListboxId}
            tabIndex={isVisible ? 0 : -1}
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
            <ul id={mobileListboxId} role="listbox" className="flex flex-col">
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
                    tabIndex={isVisible && mobileDropdownOpen ? 0 : -1}
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
