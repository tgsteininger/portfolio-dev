"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/layout/container"

/**
 * DetailedProcessSection
 * 
 * An expandable disclosure section for deep-dive process content.
 * Features:
 * - Intro paragraph (always visible)
 * - Animated underline on viewport entry
 * - Accordion toggle for expanded content
 * - 4 process subsections inside the disclosed container
 */
export function DetailedProcessSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [underlineAnimated, setUnderlineAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for underline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !underlineAnimated) {
            setUnderlineAnimated(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [underlineAnimated])

  return (
    <section
      id="detailed-process"
      ref={sectionRef}
      className="relative"
      style={{
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
        backgroundColor: "var(--color-blue-50)",
      }}
    >
      <Container>
        {/* Section Title */}
        <h2
          className="font-heading clr-text-primary"
          style={{
            fontSize: "var(--text-heading-02)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "var(--space-06)",
          }}
        >
          Detailed Process
        </h2>

        {/* Intro Paragraph */}
        <p
          className="font-body clr-text-secondary"
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: 1.7,
            maxWidth: "var(--layout-content-max)",
          }}
        >
          To address these systemic bottlenecks, I designed a structured workflow transformation
          spanning research, modeling, and implementation.
        </p>

        {/* Animated Underline */}
        <div
          className="relative"
          style={{
            marginTop: "var(--space-05)",
            marginBottom: "var(--space-08)",
          }}
        >
          <div
            className="transition-emphasized"
            style={{
              width: underlineAnimated ? "100%" : "0%",
              maxWidth: "var(--layout-content-max)",
              height: "var(--stroke-02)",
              backgroundColor: "var(--color-cyan-500)",
              borderRadius: "var(--radius-full)",
              transitionProperty: "width",
              transitionDuration: "var(--motion-duration-05)",
              transitionTimingFunction: "var(--motion-easing-emphasized)",
            }}
          />
        </div>

        {/* Accordion Toggle Button */}
        <div
          className="flex justify-center"
          style={{ marginBottom: isExpanded ? "var(--space-06)" : "0" }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-[var(--space-03)] font-ui cursor-pointer rounded-[var(--radius-03)] transition-fast focus-visible:focus-ring-standard outline-none active:scale-[0.98] ${
              isExpanded 
                ? "bg-[var(--action-primary)] text-[var(--text-inverse)] hover:bg-[var(--action-primary-hover)] active:bg-[var(--action-primary-active)]" 
                : "bg-transparent border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-blue-50)] hover:border-[var(--color-blue-200)]"
            }`}
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: 500,
              height: "var(--button-height-md)",
              padding: "0 var(--button-pad-x-md)",
            }}
          >
            <span>
              {isExpanded ? "Hide Detailed Process" : "View How the System Was Designed"}
            </span>
            <ChevronDown
              style={{
                width: "var(--icon-md)",
                height: "var(--icon-md)",
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform var(--motion-duration-02) var(--motion-easing-standard)",
              }}
            />
          </button>
        </div>

      </Container>

      {/* Expandable Content Container - Full Width Bands */}
      <div
        className="transition-emphasized"
        style={{
          display: "grid",
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          opacity: isExpanded ? 1 : 0,
          transitionProperty: "grid-template-rows, opacity",
          transitionDuration: "var(--motion-duration-04)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          {/* Process Subsection 1: Process Overview - White Band */}
          <ProcessOverviewBand />

          {/* Process Subsection 2: Who's Who - White Band */}
          <WhosWhoBand />

          {/* Process Subsection 3: My Design Moves - Blue Tinted Band */}
          <MyDesignMovesBand />

          {/* Process Subsection 4: Before → After - Light Gray Band */}
          <BeforeAfterBand />
        </div>
      </div>
    </section>
  )
}

/**
 * Before → After Band Component
 * Full-width light gray band with comparison panels and interactive screenshot
 */
function BeforeAfterBand() {
  const beforeItems = [
    "Survey requests started informally",
    "Creators built content manually in spreadsheets",
    "Approvals moved through scattered email threads",
    "Translation had no formal workflow",
    "Publishing required developer intervention",
    "Surveys could be printed, mailed, scanned, or faxed",
    "Facility managers completed mismatched or unclear forms",
    "Leadership received fragmented data with little actionable clarity",
  ]

  const afterItems = [
    "Survey content moved through a structured CMS",
    "Creators built modules using templates and defined inputs",
    "Approvers reviewed content through visible queues",
    "Translation became a supported step in the workflow",
    "Publishing became a controlled user action, not a developer task",
    "Surveys were distributed digitally and matched to facility context",
    "Facility managers completed relevant content in the appropriate language",
    "Leadership gained centralized visibility into trends and priorities",
  ]

  return (
    <div
      style={{
        backgroundColor: "var(--color-neutral-100)",
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
        borderTop: "var(--stroke-01) solid var(--color-border-subtle)",
      }}
    >
      <Container>
        {/* Section Header */}
        <h3
          className="font-heading clr-text-primary"
          style={{
            fontSize: "var(--text-heading-02)",
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "var(--space-10)",
          }}
        >
          Before → After
        </h3>

        {/* Comparison Panels */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-06)]"
          style={{ marginBottom: "var(--space-12)" }}
        >
          {/* Before Panel */}
          <div
            style={{
              backgroundColor: "var(--color-bg-page)",
              borderRadius: "var(--radius-04)",
              padding: "var(--space-08)",
              border: "var(--stroke-01) solid var(--color-border-subtle)",
            }}
          >
            <span
              className="font-body clr-text-tertiary"
              style={{
                fontSize: "var(--text-label-sm)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "var(--space-06)",
                display: "block",
              }}
            >
              Before
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {beforeItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[var(--space-03)]"
                  style={{
                    marginBottom: index === beforeItems.length - 1 ? "0" : "var(--space-04)",
                  }}
                >
                  <svg
                    className="flex-shrink-0"
                    style={{
                      width: "var(--icon-sm)",
                      height: "var(--icon-sm)",
                      marginTop: "2px",
                      color: "var(--color-neutral-400)",
                    }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="font-body clr-text-secondary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Panel */}
          <div
            style={{
              backgroundColor: "var(--color-bg-page)",
              borderRadius: "var(--radius-04)",
              padding: "var(--space-08)",
              border: "var(--stroke-01) solid var(--color-border-subtle)",
            }}
          >
            <span
              className="font-body"
              style={{
                fontSize: "var(--text-label-sm)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "var(--space-06)",
                display: "block",
                color: "var(--color-cyan-600)",
              }}
            >
              After
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {afterItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[var(--space-03)]"
                  style={{
                    marginBottom: index === afterItems.length - 1 ? "0" : "var(--space-04)",
                  }}
                >
                  <svg
                    className="flex-shrink-0"
                    style={{
                      width: "var(--icon-sm)",
                      height: "var(--icon-sm)",
                      marginTop: "2px",
                      color: "var(--color-cyan-600)",
                    }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="font-body clr-text-secondary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactive Comparison Section */}
        <div>
          <span
            className="font-body clr-text-tertiary"
            style={{
              fontSize: "var(--text-label-sm)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "var(--space-06)",
              display: "block",
            }}
          >
            Interactive Comparison
          </span>

          {/* Screenshot Comparison */}
          <div
            className="relative"
            style={{
              backgroundColor: "var(--color-neutral-200)",
              borderRadius: "var(--radius-04)",
              padding: "var(--space-08)",
              border: "var(--stroke-01) solid var(--color-border-subtle)",
            }}
          >
            {/* Labels Row */}
            <div
              className="flex justify-between"
              style={{ marginBottom: "var(--space-04)" }}
            >
              <div>
                <h4
                  className="font-heading clr-text-primary"
                  style={{
                    fontSize: "var(--text-body-md)",
                    fontWeight: 600,
                    marginBottom: "var(--space-01)",
                  }}
                >
                  Admin-Only Tool
                </h4>
                <p
                  className="font-body clr-text-tertiary"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  Not accessible to end users
                </p>
              </div>
              <div className="text-right">
                <h4
                  className="font-heading clr-text-primary"
                  style={{
                    fontSize: "var(--text-body-md)",
                    fontWeight: 600,
                    marginBottom: "var(--space-01)",
                  }}
                >
                  Shared Web Interface
                </h4>
                <p
                  className="font-body clr-text-tertiary"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  Accessible to creators, approvers, and publishers
                </p>
              </div>
            </div>

            {/* Interactive Comparison Slider */}
            <InteractiveComparisonSlider />

            {/* Caption */}
            <p
              className="font-body clr-text-secondary"
              style={{
                fontSize: "var(--text-body-sm)",
                lineHeight: 1.6,
                marginTop: "var(--space-06)",
                maxWidth: "var(--layout-content-max)",
              }}
            >
              Previously, publishing required access to an internal admin tool. The redesigned system introduces a shared web interface that enables creators, approvers, and publishers to manage the workflow independently.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Interactive Comparison Slider Component
 * Draggable slider to compare before/after screenshots
 */
function InteractiveComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Handle click on container to move slider
  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  // Add global mouse listeners for dragging outside container
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove)
      window.addEventListener("mouseup", handleGlobalMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove)
      window.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{
        borderRadius: "var(--radius-03)",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        cursor: isDragging ? "grabbing" : "ew-resize",
        aspectRatio: "16/9",
      }}
      onClick={handleContainerClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before Image (Bottom Layer) */}
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop"
        alt="Legacy admin-only tool interface"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After Image (Top Layer - Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
          alt="New shared web interface"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Before Label */}
      <span
        className="absolute font-body pointer-events-none"
        style={{
          top: "var(--space-04)",
          left: "var(--space-04)",
          fontSize: "var(--text-label-sm)",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          backgroundColor: "var(--color-neutral-800)",
          color: "white",
          padding: "var(--space-02) var(--space-03)",
          borderRadius: "var(--radius-02)",
          opacity: sliderPosition < 15 ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        Before
      </span>

      {/* After Label */}
      <span
        className="absolute font-body pointer-events-none"
        style={{
          top: "var(--space-04)",
          right: "var(--space-04)",
          fontSize: "var(--text-label-sm)",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          backgroundColor: "var(--color-cyan-600)",
          color: "white",
          padding: "var(--space-02) var(--space-03)",
          borderRadius: "var(--radius-02)",
          opacity: sliderPosition > 85 ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        After
      </span>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          width: "2px",
          backgroundColor: "white",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
          transform: "translateX(-50%)",
        }}
      />

      {/* Draggable Handle */}
      <div
        className="absolute top-1/2 flex items-center justify-center transition-fast hover:scale-110"
        style={{
          left: `${sliderPosition}%`,
          transform: `translate(-50%, -50%) ${isDragging ? 'scale(1.05)' : ''}`,
          width: "44px",
          height: "44px",
          backgroundColor: "white",
          borderRadius: "var(--radius-full)",
          boxShadow: isDragging ? "0 4px 16px rgba(0, 0, 0, 0.25)" : "0 2px 12px rgba(0, 0, 0, 0.2)",
          border: "2px solid var(--color-border-subtle)",
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: 10,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <svg
          style={{
            width: "20px",
            height: "20px",
            color: "var(--color-neutral-500)",
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
        </svg>
      </div>
    </div>
  )
}

/**
 * My Design Moves Band Component
 * Full-width blue-tinted band with two-column layout (text + image stack)
 */
function MyDesignMovesBand() {
  const designMoves = [
    {
      number: "1",
      title: "Mapped the Existing Workflow",
      description: "I created before-and-after workflow models to visualize how survey content moved through the organization and where delays and handoff failures were happening.",
    },
    {
      number: "2",
      title: "Designed a Modular Survey Builder",
      description: "I designed a structured content system that preserved useful Excel familiarity while eliminating version chaos and manual workarounds.",
    },
    {
      number: "3",
      title: "Created Role-Based Experiences",
      description: "I tailored workflows and interfaces for creators, approvers, translators, publishers, and leadership so each group had the right information and controls.",
    },
    {
      number: "4",
      title: "Introduced AI-Assisted Translation",
      description: "I incorporated AI-assisted translation as a first-draft mechanism with human review built into the workflow.",
    },
    {
      number: "5",
      title: "Aligned Design with Platform Constraints",
      description: "I designed the system to work within PowerApps limitations while still improving usability, structure, and clarity.",
    },
    {
      number: "6",
      title: "Partnered Closely Through Delivery",
      description: "I collaborated with development and QA throughout implementation and created detailed specifications to support accurate delivery.",
    },
  ]

  const supportingImages = [
    {
      label: "WORKFLOW DIAGRAM",
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&h=350&fit=crop",
      alt: "Workflow diagram showing content creation and approval process",
    },
    {
      label: "CONTENT CREATION",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
      alt: "Content creation interface screenshot",
    },
    {
      label: "FINAL UI / PUBLISHER VIEW",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
      alt: "Final publisher view of the CMS interface",
    },
  ]

  return (
    <div
      style={{
        backgroundColor: "var(--color-blue-50)",
        paddingTop: "var(--space-12)",
        paddingBottom: "var(--space-12)",
        borderTop: "var(--stroke-01) solid var(--color-blue-100)",
      }}
    >
      <Container>
        <div
          className="grid grid-cols-1 sm:grid-cols-[1fr_minmax(180px,280px)] gap-[var(--space-06)] sm:gap-[var(--space-08)]"
          style={{ alignItems: "start" }}
        >
          {/* Left Column: Design Moves */}
          <div>
            <h3
              className="font-heading clr-text-primary"
              style={{
                fontSize: "var(--text-heading-03)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: "var(--space-08)",
              }}
            >
              My Design Moves
            </h3>

            <div>
              {designMoves.map((move, index) => (
                <div
                  key={move.number}
                  style={{
                    marginBottom: index === designMoves.length - 1 ? "0" : "var(--space-07)",
                  }}
                >
                  <h4
                    className="font-heading clr-text-primary"
                    style={{
                      fontSize: "var(--text-body-lg)",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: "var(--space-03)",
                    }}
                  >
                    {move.number}. {move.title}
                  </h4>
                  <p
                    className="font-body clr-text-secondary"
                    style={{
                      fontSize: "var(--text-body-md)",
                      lineHeight: 1.7,
                      maxWidth: "540px",
                    }}
                  >
                    {move.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Supporting Images */}
          <div className="flex flex-col gap-[var(--space-05)]">
            {supportingImages.map((image) => (
              <div key={image.label}>
                <div
                  className="transition-standard hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
                  style={{
                    borderRadius: "var(--radius-03)",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    marginBottom: "var(--space-02)",
                    border: "var(--stroke-01) solid var(--color-border-subtle)",
                    backgroundColor: "var(--color-bg-page)",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    style={{ 
                      aspectRatio: "16/10",
                    }}
                  />
                </div>
                <span
                  className="font-body clr-text-tertiary inline-block"
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {image.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Process Overview Card Component
 * Displays the 5 process steps in a clean vertical layout
 */
/**
 * Who's Who Band Component
 * Full-width white band with two-column layout (image + stakeholder list)
 */
function WhosWhoBand() {
  const stakeholders = [
    {
      role: "Content Creator",
      coreJob: "Create structured survey modules",
      painPoint: "Previously relied on spreadsheets and email with no clear system or structure",
    },
    {
      role: "Content Approver",
      coreJob: "Review and approve survey content",
      painPoint: "No visibility into approval status and no reliable review queue",
    },
    {
      role: "Translator",
      coreJob: "Localize finalized content",
      painPoint: "No formal translation workflow or dedicated tools",
    },
    {
      role: "Publisher (Executive)",
      coreJob: "Publish finalized content globally",
      painPoint: "Dependent on developers for routine content updates",
    },
    {
      role: "Facility Manager",
      coreJob: "Complete relevant surveys in the right language",
      painPoint: "Often received mismatched or unclear inputs",
    },
  ]

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-page)",
        paddingTop: "var(--space-12)",
        paddingBottom: "var(--space-12)",
        borderTop: "var(--stroke-01) solid var(--color-border-subtle)",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--grid-gap-lg)]">
          {/* Left Column: Image */}
          <div
            style={{
              borderRadius: "var(--radius-04)",
              overflow: "hidden",
              aspectRatio: "4/5",
              backgroundColor: "var(--color-neutral-100)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=750&fit=crop&crop=faces"
              alt="Team collaboration in office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Stakeholder Roles */}
          <div>
            <h3
              className="font-heading clr-text-primary"
              style={{
                fontSize: "var(--text-heading-03)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: "var(--space-07)",
              }}
            >
              Who&apos;s Who (And What They Needed)
            </h3>

            <div>
              {stakeholders.map((stakeholder, index) => (
                <div
                  key={stakeholder.role}
                  style={{
                    paddingTop: index === 0 ? "0" : "var(--space-05)",
                    paddingBottom: index === stakeholders.length - 1 ? "0" : "var(--space-05)",
                    borderBottom: index === stakeholders.length - 1 ? "none" : "var(--stroke-01) solid var(--color-border-subtle)",
                  }}
                >
                  <h4
                    className="font-heading clr-text-primary"
                    style={{
                      fontSize: "var(--text-heading-05)",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      marginBottom: "var(--space-02)",
                    }}
                  >
                    {stakeholder.role}
                  </h4>
                  <p
                    className="font-body clr-text-secondary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: 1.6,
                      marginBottom: "var(--space-02)",
                    }}
                  >
                    <span className="font-semibold clr-text-primary">Core Job:</span>{" "}
                    {stakeholder.coreJob}
                  </p>
                  <p
                    className="font-body clr-text-secondary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span className="font-semibold clr-text-primary">Pain Point:</span>{" "}
                    {stakeholder.painPoint}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Process Overview Band Component
 * Full-width white band with centered process steps
 */
function ProcessOverviewBand() {
  const steps = [
    {
      title: "Research & Discovery",
      description: "I conducted interviews across stakeholder groups and time zones to understand how content moved through the organization in practice.",
    },
    {
      title: "Workflow Modeling",
      description: "I translated findings into user flows and future-state workflows that could be validated with stakeholders.",
    },
    {
      title: "Wireframing & Prototyping",
      description: "I started with low-fidelity wireframes and then created Figma prototypes tailored to the realities of PowerApps.",
    },
    {
      title: "Familiarity Without Chaos",
      description: "The interface needed to feel more structured than Excel, but not so unfamiliar that adoption became its own barrier.",
    },
    {
      title: "Documentation & Handoff",
      description: "I created detailed design specifications and worked closely with engineering and QA to ensure the experience translated accurately into the shipped product.",
    },
  ]

  return (
    <div
      style={{
        paddingBottom: "var(--space-10)",
      }}
    >
      <Container>
        <div
          style={{
            backgroundColor: "var(--color-bg-page)",
            border: "var(--stroke-01) solid var(--color-border-subtle)",
            borderRadius: "var(--radius-05)",
            padding: "var(--space-08)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                paddingTop: index === 0 ? "0" : "var(--space-06)",
                paddingBottom: index === steps.length - 1 ? "0" : "var(--space-06)",
                borderBottom: index === steps.length - 1 ? "none" : "var(--stroke-01) solid var(--color-border-subtle)",
              }}
            >
              <h4
                className="font-heading clr-text-primary"
                style={{
                  fontSize: "var(--text-heading-05)",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  marginBottom: "var(--space-03)",
                }}
              >
                {step.title}
              </h4>
              <p
                className="font-body clr-text-secondary"
                style={{
                  fontSize: "var(--text-body-md)",
                  lineHeight: 1.7,
                  maxWidth: "var(--layout-content-max)",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}


