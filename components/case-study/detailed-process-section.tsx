"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react"
import { createPortal } from "react-dom"
import { Container } from "@/components/layout/container"

interface DetailedProcessSectionProps {
  introText?: string
  processOverviewSteps?: ProcessOverviewStep[]
  whosWhoTitle?: string
  whosWhoStakeholders?: WhosWhoStakeholder[]
  whosWhoImageSrc?: string
  supportingImages?: SupportingImage[]
  comparisonBeforeSrc?: string
  comparisonAfterSrc?: string
  designMoves?: DesignMove[]
  beforeAfterItems?: {
    before: string[]
    after: string[]
  }
  interactiveComparisonContent?: InteractiveComparisonContent
}

const DEFAULT_INTRO_TEXT =
  "To address these systemic bottlenecks, I designed a structured workflow transformation spanning research, modeling, and implementation."

interface ProcessOverviewStep {
  title: string
  description: string
}

interface WhosWhoStakeholder {
  role: string
  coreJob: string
  painPoint: string
}

interface SupportingImage {
  label: string
  thumbnailSrc: string
  fullSrc: string
  alt: string
}

interface DesignMove {
  number: string
  title: string
  description: string
}

interface InteractiveComparisonContent {
  title: string
  beforeTitle: string
  beforeSubtitle: string
  afterTitle: string
  afterSubtitle: string
  caption: string
}

const DEFAULT_PROCESS_OVERVIEW_STEPS: ProcessOverviewStep[] = [
  {
    title: "Research & Discovery",
    description:
      "I conducted interviews across stakeholder groups and time zones to understand how content moved through the organization in practice.",
  },
  {
    title: "Workflow Modeling",
    description:
      "I translated findings into user flows and future-state workflows that could be validated with stakeholders.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "I started with low-fidelity wireframes and then created Figma prototypes tailored to the realities of PowerApps.",
  },
  {
    title: "Familiarity Without Chaos",
    description:
      "The interface needed to feel more structured than Excel, but not so unfamiliar that adoption became its own barrier.",
  },
  {
    title: "Documentation & Handoff",
    description:
      "I created detailed design specifications and worked closely with engineering and QA to ensure the experience translated accurately into the shipped product.",
  },
]

const DEFAULT_WHOS_WHO_TITLE = "Who's Who (And What They Needed)"

const DEFAULT_WHOS_WHO_STAKEHOLDERS: WhosWhoStakeholder[] = [
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

const DEFAULT_WHOS_WHO_IMAGE_SRC = "/images/case-studies/coca-cola/whoswho.webp"

const DEFAULT_SUPPORTING_IMAGES: SupportingImage[] = [
  {
    label: "WORKFLOW DIAGRAM",
    thumbnailSrc: "/images/case-studies/coca-cola/workflowdiagram.png",
    fullSrc: "/images/case-studies/coca-cola/workflowdiagramfull.png",
    alt: "Workflow diagram showing content creation and approval process",
  },
  {
    label: "CONTENT CREATION",
    thumbnailSrc: "/images/case-studies/coca-cola/contentcreation.png",
    fullSrc: "/images/case-studies/coca-cola/contentcreationfull.png",
    alt: "Content creation interface screenshot",
  },
  {
    label: "FINAL UI / PUBLISHER VIEW",
    thumbnailSrc: "/images/case-studies/coca-cola/finalui.png",
    fullSrc: "/images/case-studies/coca-cola/finaluifull.png",
    alt: "Final publisher view of the CMS interface",
  },
]

const DEFAULT_COMPARISON_BEFORE_SRC =
  "/images/case-studies/coca-cola/comparisonbefore.webp"
const DEFAULT_COMPARISON_AFTER_SRC =
  "/images/case-studies/coca-cola/comparisonafter.webp"

const DEFAULT_DESIGN_MOVES: DesignMove[] = [
  {
    number: "1",
    title: "Mapped the Existing Workflow",
    description:
      "I created before-and-after workflow models to visualize how survey content moved through the organization and where delays and handoff failures were happening.",
  },
  {
    number: "2",
    title: "Designed a Modular Survey Builder",
    description:
      "I designed a structured content system that preserved useful Excel familiarity while eliminating version chaos and manual workarounds.",
  },
  {
    number: "3",
    title: "Created Role-Based Experiences",
    description:
      "I tailored workflows and interfaces for creators, approvers, translators, publishers, and leadership so each group had the right information and controls.",
  },
  {
    number: "4",
    title: "Introduced AI-Assisted Translation",
    description:
      "I incorporated AI-assisted translation as a first-draft mechanism with human review built into the workflow.",
  },
  {
    number: "5",
    title: "Aligned Design with Platform Constraints",
    description:
      "I designed the system to work within PowerApps limitations while still improving usability, structure, and clarity.",
  },
  {
    number: "6",
    title: "Partnered Closely Through Delivery",
    description:
      "I collaborated with development and QA throughout implementation and created detailed specifications to support accurate delivery.",
  },
]

const DEFAULT_BEFORE_AFTER_ITEMS = {
  before: [
    "Survey requests started informally",
    "Creators built content manually in spreadsheets",
    "Approvals moved through scattered email threads",
    "Translation had no formal workflow",
    "Publishing required developer intervention",
    "Surveys could be printed, mailed, scanned, or faxed",
    "Facility managers completed mismatched or unclear forms",
    "Leadership received fragmented data with little actionable clarity",
  ],
  after: [
    "Survey content moved through a structured CMS",
    "Creators built modules using templates and defined inputs",
    "Approvers reviewed content through visible queues",
    "Translation became a supported step in the workflow",
    "Publishing became a controlled user action, not a developer task",
    "Surveys were distributed digitally and matched to facility context",
    "Facility managers completed relevant content in the appropriate language",
    "Leadership gained centralized visibility into trends and priorities",
  ],
}

const DEFAULT_INTERACTIVE_COMPARISON_CONTENT: InteractiveComparisonContent = {
  title: "Interactive Comparison",
  beforeTitle: "Admin-Only Tool",
  beforeSubtitle: "Not accessible to end users",
  afterTitle: "Shared Web Interface",
  afterSubtitle: "Accessible to creators, approvers, and publishers",
  caption:
    "Previously, publishing required access to an internal admin tool. The redesigned system introduces a shared web interface that enables creators, approvers, and publishers to manage the workflow independently.",
}

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
export function DetailedProcessSection({
  introText = DEFAULT_INTRO_TEXT,
  processOverviewSteps = DEFAULT_PROCESS_OVERVIEW_STEPS,
  whosWhoTitle = DEFAULT_WHOS_WHO_TITLE,
  whosWhoStakeholders = DEFAULT_WHOS_WHO_STAKEHOLDERS,
  whosWhoImageSrc = DEFAULT_WHOS_WHO_IMAGE_SRC,
  supportingImages = DEFAULT_SUPPORTING_IMAGES,
  comparisonBeforeSrc = DEFAULT_COMPARISON_BEFORE_SRC,
  comparisonAfterSrc = DEFAULT_COMPARISON_AFTER_SRC,
  designMoves = DEFAULT_DESIGN_MOVES,
  beforeAfterItems = DEFAULT_BEFORE_AFTER_ITEMS,
  interactiveComparisonContent = DEFAULT_INTERACTIVE_COMPARISON_CONTENT,
}: DetailedProcessSectionProps = {}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [underlineAnimated, setUnderlineAnimated] = useState(false)
  const [hasUserScrolled, setHasUserScrolled] = useState(false)
  const [accordionFocusVisible, setAccordionFocusVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const expandedContentRef = useRef<HTMLDivElement>(null)

  // Require at least one scroll interaction before allowing underline animation.
  useEffect(() => {
    if (hasUserScrolled) return

    const onScrollStart = () => setHasUserScrolled(true)
    const onKeyScroll = (event: KeyboardEvent) => {
      const scrollKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]
      if (scrollKeys.includes(event.key)) {
        setHasUserScrolled(true)
      }
    }

    window.addEventListener("scroll", onScrollStart, { passive: true })
    window.addEventListener("wheel", onScrollStart, { passive: true })
    window.addEventListener("touchmove", onScrollStart, { passive: true })
    window.addEventListener("keydown", onKeyScroll)

    return () => {
      window.removeEventListener("scroll", onScrollStart)
      window.removeEventListener("wheel", onScrollStart)
      window.removeEventListener("touchmove", onScrollStart)
      window.removeEventListener("keydown", onKeyScroll)
    }
  }, [hasUserScrolled])

  // Intersection Observer for scroll-triggered underline animation (run once).
  useEffect(() => {
    if (!hasUserScrolled || underlineAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setUnderlineAnimated(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: [0, 0.25, 0.35],
        rootMargin: "0px 0px -8% 0px",
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasUserScrolled, underlineAnimated])

  // Keep collapsed content out of keyboard and assistive-tech flow.
  useEffect(() => {
    const panel = expandedContentRef.current
    if (!panel) return

    if (isExpanded) {
      panel.removeAttribute("inert")
      return
    }

    panel.setAttribute("inert", "")
  }, [isExpanded])

  return (
    <section
      id="detailed-process"
      ref={sectionRef}
      className="relative"
      style={{
        paddingTop: "var(--space-14)",
        paddingBottom: 0,
        backgroundColor: "var(--color-blue-50)",
      }}
    >
      <Container style={{ paddingBottom: "var(--space-10)" }}>
        {/* Section Title */}
        <h2
          className="font-heading clr-text-primary"
          data-reveal
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
          data-reveal
          data-reveal-delay="80"
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: 1.7,
            maxWidth: "var(--layout-content-max)",
          }}
        >
          {introText}
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
            className="relative w-full"
            style={{
              maxWidth: "var(--layout-content-max)",
              height: "var(--stroke-02)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "var(--color-border-subtle)",
                borderRadius: "var(--radius-full)",
              }}
            />
            <div
              className="absolute top-0 bottom-0 left-0 max-w-full motion-reduce:transition-none"
              style={{
                width: "100%",
                backgroundColor: "var(--color-cyan-500)",
                borderRadius: "var(--radius-full)",
                transform: underlineAnimated ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left center",
                willChange: "transform",
                transitionProperty: "transform",
                transitionDuration:
                  "calc(var(--motion-duration-07) + var(--motion-duration-04))",
                transitionTimingFunction: "var(--motion-easing-premium)",
              }}
            />
          </div>
        </div>

        {/* Accordion Toggle Button */}
        <div
          className="flex justify-center"
          data-reveal
          data-reveal-delay="140"
          style={{ marginBottom: isExpanded ? "var(--space-06)" : "0" }}
        >
          <button
            id="detailed-process-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            onFocus={(event) =>
              setAccordionFocusVisible(event.currentTarget.matches(":focus-visible"))
            }
            onBlur={() => setAccordionFocusVisible(false)}
            onKeyDown={() => setAccordionFocusVisible(true)}
            onPointerDown={() => setAccordionFocusVisible(false)}
            aria-expanded={isExpanded}
            aria-controls="detailed-process-expanded-content"
            className={`flex items-center gap-[var(--space-03)] font-ui cursor-pointer rounded-[var(--radius-03)] focus-ring-standard outline-none active:scale-[0.98] ${
              isExpanded 
                ? "bg-[var(--action-primary)] text-[var(--text-inverse)] hover:bg-[var(--action-primary-hover)] active:bg-[var(--action-primary-active)]" 
                : "text-[var(--color-text-primary)]"
            }`}
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: 500,
              height: "var(--button-height-md)",
              padding: "0 var(--button-pad-x-md)",
              backgroundColor: isExpanded
                ? undefined
                : "color-mix(in srgb, var(--color-blue-50) 48%, var(--color-bg-surface))",
              border: isExpanded
                ? undefined
                : "var(--stroke-01) solid color-mix(in srgb, var(--color-blue-200) 38%, var(--color-border-subtle))",
              boxShadow: accordionFocusVisible
                ? "0 0 0 2px color-mix(in srgb, var(--color-neutral-0) 70%, transparent), 0 0 0 4px var(--color-border-focus)"
                : isExpanded
                  ? undefined
                  : "var(--elevation-00)",
              transitionProperty:
                "background-color, border-color, box-shadow, color, transform",
              transitionDuration:
                "var(--motion-duration-03), var(--motion-duration-03), var(--motion-duration-03), var(--motion-duration-03), var(--motion-duration-02)",
              transitionTimingFunction:
                "var(--motion-easing-premium), var(--motion-easing-premium), var(--motion-easing-premium), var(--motion-easing-premium), var(--motion-easing-standard)",
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
        id="detailed-process-expanded-content"
        ref={expandedContentRef}
        role="region"
        aria-labelledby="detailed-process-toggle"
        aria-hidden={!isExpanded}
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
          <ProcessOverviewBand steps={processOverviewSteps} />

          {/* Process Subsection 2: Who's Who - White Band */}
          <WhosWhoBand
            title={whosWhoTitle}
            stakeholders={whosWhoStakeholders}
            imageSrc={whosWhoImageSrc}
          />

          {/* Process Subsection 3: My Design Moves - Blue Tinted Band */}
          <MyDesignMovesBand
            designMoves={designMoves}
            supportingImages={supportingImages}
          />

          {/* Process Subsection 4: Before → After - Light Gray Band */}
          <BeforeAfterBand
            beforeItems={beforeAfterItems.before}
            afterItems={beforeAfterItems.after}
            interactiveComparisonContent={interactiveComparisonContent}
            comparisonBeforeSrc={comparisonBeforeSrc}
            comparisonAfterSrc={comparisonAfterSrc}
          />
        </div>
      </div>
    </section>
  )
}

/**
 * Before → After Band Component
 * Full-width light gray band with comparison panels and interactive screenshot
 */
function BeforeAfterBand({
  beforeItems,
  afterItems,
  interactiveComparisonContent,
  comparisonBeforeSrc,
  comparisonAfterSrc,
}: {
  beforeItems: string[]
  afterItems: string[]
  interactiveComparisonContent: InteractiveComparisonContent
  comparisonBeforeSrc: string
  comparisonAfterSrc: string
}) {
  return (
    <div
      data-reveal
      className="relative overflow-hidden"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-blue-50) 48%, var(--color-bg-page))",
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
      }}
    >
      {/* Architectural background panels */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: "4.2%",
            left: "-8.9%",
            width: "56.9%",
            height: "91.6%",
            backgroundColor: "rgba(37, 99, 235, 0.02)",
            borderRadius: "var(--radius-04)",
            transform: "rotate(-1.1deg)",
            transformOrigin: "center center",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "7.5%",
            right: "-12.1%",
            width: "51.3%",
            height: "86%",
            backgroundColor: "rgba(37, 99, 235, 0.02)",
            borderRadius: "var(--radius-04)",
            transform: "rotate(1deg)",
            transformOrigin: "center center",
          }}
        />
      </div>

      <Container>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            backgroundColor: "transparent",
            borderRadius: "var(--radius-05)",
            border:
              "var(--stroke-01) solid color-mix(in srgb, var(--color-border-subtle) 70%, transparent)",
            padding: "var(--space-08)",
            boxShadow: "var(--elevation-00)",
            WebkitBackdropFilter: "blur(4px)",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Section Header */}
          <h3
            className="font-heading clr-text-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-03)",
              fontSize: "var(--text-heading-02)",
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: "var(--space-10)",
            }}
          >
            <span>Before</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>After</span>
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
                  color: "var(--color-blue-500)",
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
                        color: "var(--color-blue-500)",
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
              {interactiveComparisonContent.title}
            </span>

            {/* Screenshot Comparison */}
            <div
              className="relative"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-blue-100) 24%, transparent)",
                borderRadius: "var(--radius-04)",
                padding: "var(--space-06)",
                border:
                  "var(--stroke-01) solid color-mix(in srgb, var(--color-border-subtle) 68%, transparent)",
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
                  {interactiveComparisonContent.beforeTitle}
                </h4>
                <p
                  className="font-body clr-text-tertiary"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  {interactiveComparisonContent.beforeSubtitle}
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
                  {interactiveComparisonContent.afterTitle}
                </h4>
                <p
                  className="font-body clr-text-tertiary"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  {interactiveComparisonContent.afterSubtitle}
                </p>
              </div>
            </div>

            {/* Interactive Comparison Slider */}
            <InteractiveComparisonSlider
              comparisonBeforeSrc={comparisonBeforeSrc}
              comparisonAfterSrc={comparisonAfterSrc}
            />

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
                {interactiveComparisonContent.caption}
              </p>
            </div>
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
function InteractiveComparisonSlider({
  comparisonBeforeSrc,
  comparisonAfterSrc,
}: {
  comparisonBeforeSrc: string
  comparisonAfterSrc: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isSliderHovered, setIsSliderHovered] = useState(false)
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

  const handleSliderKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 2

    if (event.key === "ArrowLeft") {
      event.preventDefault()
      setSliderPosition((prev) => Math.max(0, prev - step))
      return
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      setSliderPosition((prev) => Math.min(100, prev + step))
      return
    }

    if (event.key === "Home") {
      event.preventDefault()
      setSliderPosition(0)
      return
    }

    if (event.key === "End") {
      event.preventDefault()
      setSliderPosition(100)
    }
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
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.10)",
        cursor: isDragging ? "grabbing" : "ew-resize",
        aspectRatio: "16/9",
      }}
      onClick={handleContainerClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsSliderHovered(true)}
      onMouseLeave={() => {
        setIsSliderHovered(false)
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before Image (Bottom Layer) */}
      <img
        src={comparisonBeforeSrc}
        alt="Legacy admin-only tool interface"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* After Image (Top Layer - Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      >
        <img
          src={comparisonAfterSrc}
          alt="New shared web interface"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
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
          backgroundColor: "var(--color-blue-500)",
          color: "#FFFFFF",
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
          backgroundColor:
            isSliderHovered || isDragging
              ? "var(--color-blue-500)"
              : "var(--color-blue-500)",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
          transform: "translateX(-50%)",
          transition:
            "background-color 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
        }}
      />

      {/* Draggable Handle */}
      <div
        className="absolute top-1/2 flex items-center justify-center"
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuetext={`${Math.round(sliderPosition)}% toward after view`}
        style={{
          left: `${sliderPosition}%`,
          transform: `translate(-50%, -50%) scale(${
            isDragging || isSliderHovered ? 1.05 : 1
          })`,
          width: "44px",
          height: "44px",
          backgroundColor:
            isSliderHovered || isDragging
              ? "var(--color-blue-600)"
              : "var(--color-blue-500)",
          borderRadius: "var(--radius-full)",
          boxShadow: isDragging ? "0 4px 16px rgba(0, 0, 0, 0.25)" : "0 2px 12px rgba(0, 0, 0, 0.2)",
          border: "2px solid var(--color-border-subtle)",
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: 10,
          transition:
            "background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, color 160ms ease",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleSliderKeyDown}
      >
        <svg
          style={{
            width: "20px",
            height: "20px",
            color:
              isSliderHovered || isDragging
                ? "var(--color-neutral-0)"
                : "var(--color-neutral-0)",
            transition: "color 160ms ease",
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
function MyDesignMovesBand({
  designMoves,
  supportingImages,
}: {
  designMoves: DesignMove[]
  supportingImages: SupportingImage[]
}) {
  const [activeMoveIndex, setActiveMoveIndex] = useState(0)
  const [contentHoverIndex, setContentHoverIndex] = useState<number | null>(null)
  const [thumbnailHoverIndex, setThumbnailHoverIndex] = useState<number | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const hoverResetTimeoutRef = useRef<number | null>(null)
  const lightboxDialogRef = useRef<HTMLDivElement>(null)
  const lightboxCloseButtonRef = useRef<HTMLButtonElement>(null)
  const lightboxLastTriggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const interactiveItemCount = supportingImages.length

  const formatImageLabel = (label: string) =>
    label
      .split(" ")
      .map((word) => {
        if (word === "/") return word
        const alphanumeric = word.replace(/[^A-Za-z0-9]/g, "")
        if (
          alphanumeric.length <= 2 &&
          alphanumeric.length > 0 &&
          alphanumeric.toUpperCase() === alphanumeric
        ) {
          return word.toUpperCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(" ")

  const clearHoverResetTimeout = () => {
    if (hoverResetTimeoutRef.current !== null) {
      window.clearTimeout(hoverResetTimeoutRef.current)
      hoverResetTimeoutRef.current = null
    }
  }

  const scheduleHoverReset = (source: "content" | "thumbnail") => {
    clearHoverResetTimeout()
    hoverResetTimeoutRef.current = window.setTimeout(() => {
      if (source === "content") setContentHoverIndex(null)
      if (source === "thumbnail") setThumbnailHoverIndex(null)
      hoverResetTimeoutRef.current = null
    }, 45)
  }

  const handleContentEnter = (index: number) => {
    clearHoverResetTimeout()
    setContentHoverIndex(index)
    setActiveMoveIndex(index)
  }

  const handleThumbnailEnter = (index: number) => {
    clearHoverResetTimeout()
    setThumbnailHoverIndex(index)
    setActiveMoveIndex(index)
  }

  const activePairedIndex =
    thumbnailHoverIndex ?? contentHoverIndex ?? activeMoveIndex

  const showPreviousImage = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex(
      (selectedImageIndex - 1 + supportingImages.length) % supportingImages.length
    )
  }

  const showNextImage = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex((selectedImageIndex + 1) % supportingImages.length)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const currentLightboxImage =
    selectedImageIndex !== null ? supportingImages[selectedImageIndex] : null

  const currentLightboxLabel = currentLightboxImage
    ? formatImageLabel(currentLightboxImage.label)
    : ""

  useEffect(() => {
    if (selectedImageIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox()
        return
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        showPreviousImage()
        return
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        showNextImage()
        return
      }

      if (event.key === "Tab") {
        const dialog = lightboxDialogRef.current
        if (!dialog) return
        const focusableElements = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        )

        if (focusableElements.length === 0) {
          event.preventDefault()
          return
        }

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]
        const activeElement = document.activeElement as HTMLElement | null

        if (event.shiftKey && activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
          return
        }

        if (!event.shiftKey && activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex])

  useEffect(() => {
    if (selectedImageIndex !== null) {
      const raf = window.requestAnimationFrame(() => {
        lightboxCloseButtonRef.current?.focus()
      })
      return () => window.cancelAnimationFrame(raf)
    }

    lightboxLastTriggerRef.current?.focus()
  }, [selectedImageIndex])

  useEffect(() => {
    return () => clearHoverResetTimeout()
  }, [])

  return (
    <div
      data-reveal
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-blue-50) 55%, var(--color-bg-page))",
        paddingTop: "var(--space-12)",
        paddingBottom: "var(--space-12)",
        borderTop: "var(--stroke-01) solid var(--color-blue-100)",
      }}
    >
      <Container>
        <div
          className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.15fr)_minmax(300px,400px)] gap-[var(--space-05)] sm:gap-[var(--space-06)]"
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
                  onPointerEnter={
                    index < interactiveItemCount
                      ? () => handleContentEnter(index)
                      : undefined
                  }
                  onPointerLeave={
                    index < interactiveItemCount
                      ? () => scheduleHoverReset("content")
                      : undefined
                  }
                  className="transition-standard"
                  style={{
                    marginBottom: index === designMoves.length - 1 ? "0" : "var(--space-07)",
                    backgroundColor:
                      index < interactiveItemCount && activePairedIndex === index
                        ? "var(--color-blue-50)"
                        : "transparent",
                    borderLeft:
                      index < interactiveItemCount && activePairedIndex === index
                        ? "2px solid var(--color-blue-500)"
                        : "2px solid transparent",
                    paddingLeft: "var(--space-04)",
                    paddingTop: "var(--space-02)",
                    paddingBottom: "var(--space-02)",
                    transitionProperty:
                      index < interactiveItemCount
                        ? "background-color, border-color"
                        : undefined,
                    transitionDuration:
                      index < interactiveItemCount
                        ? "var(--motion-duration-03)"
                        : undefined,
                    transitionTimingFunction:
                      index < interactiveItemCount
                        ? "var(--motion-easing-premium)"
                        : undefined,
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
          <div className="flex w-full max-w-[400px] flex-col gap-[var(--space-05)] sm:justify-self-end">
            {supportingImages.map((image, index) => {
              const isActive = activePairedIndex === index

              return (
              <div key={image.label}>
                <button
                  type="button"
                  onClick={(event) => {
                    lightboxLastTriggerRef.current = event.currentTarget
                    setSelectedImageIndex(index)
                  }}
                  onPointerEnter={() => handleThumbnailEnter(index)}
                  onPointerLeave={() => scheduleHoverReset("thumbnail")}
                  onFocus={() => handleThumbnailEnter(index)}
                  onBlur={() => scheduleHoverReset("thumbnail")}
                  className="block w-full cursor-pointer text-left focus-ring-standard outline-none"
                  aria-label={`Open ${formatImageLabel(image.label)} image, ${index + 1} of ${supportingImages.length}`}
                  aria-haspopup="dialog"
                >
                  <div
                    className="relative transition-standard"
                    style={{
                      borderRadius: "var(--radius-03)",
                      overflow: "hidden",
                      boxShadow: isActive
                        ? "0 8px 20px rgba(0, 0, 0, 0.12)"
                        : "0 4px 12px rgba(0, 0, 0, 0.08)",
                      border: isActive
                        ? "var(--stroke-01) solid var(--color-blue-500)"
                        : "var(--stroke-01) solid var(--color-border-subtle)",
                      backgroundColor: "var(--color-bg-page)",
                      transform:
                        prefersReducedMotion || !isActive ? "scale(1)" : "scale(1.012)",
                      opacity: isActive ? 1 : 0.84,
                      transitionProperty:
                        "transform, box-shadow, opacity, filter, border-color",
                      transitionDuration: "var(--motion-duration-03)",
                      transitionTimingFunction: "var(--motion-easing-premium)",
                      filter: isActive ? "saturate(1)" : "saturate(0.9)",
                    }}
                  >
                    <img
                      src={image.thumbnailSrc}
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      style={{ 
                        aspectRatio: "16/10",
                        transform:
                          prefersReducedMotion || !isActive ? "scale(1)" : "scale(1.028)",
                        transformOrigin: "center center",
                        transitionProperty: "transform",
                        transitionDuration: "var(--motion-duration-03)",
                        transitionTimingFunction: "var(--motion-easing-premium)",
                      }}
                    />
                    <span
                      className="font-body inline-block"
                      style={{
                        position: "absolute",
                        left: "var(--space-03)",
                        bottom: "var(--space-03)",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: isActive ? "#FFFFFF" : "var(--color-neutral-600)",
                        backgroundColor: isActive
                          ? "var(--color-blue-500)"
                          : "var(--color-neutral-100)",
                        border: "var(--stroke-01) solid",
                        borderColor: isActive
                          ? "var(--color-blue-500)"
                          : "var(--color-neutral-200)",
                        borderRadius: "var(--radius-02)",
                        padding: "6px 10px",
                        lineHeight: 1,
                        transitionProperty: "background-color, color, border-color",
                        transitionDuration: "var(--motion-duration-03)",
                        transitionTimingFunction: "var(--motion-easing-premium)",
                      }}
                    >
                      {image.label}
                    </span>
                  </div>
                </button>
              </div>
            )})}
          </div>
        </div>
      </Container>

      {selectedImageIndex !== null &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[1200] flex items-center justify-center"
            ref={lightboxDialogRef}
            style={{ backgroundColor: "rgba(15, 23, 42, 0.72)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="my-design-moves-lightbox-title"
            aria-describedby="my-design-moves-lightbox-caption"
            onClick={closeLightbox}
          >
            <h2
              id="my-design-moves-lightbox-title"
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0,
              }}
            >
              My Design Moves image preview
            </h2>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showPreviousImage()
              }}
              className="flex items-center justify-center focus-ring-standard outline-none"
              style={{
                position: "absolute",
                left: "var(--space-04)",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(15, 23, 42, 0.52)",
                border: "var(--stroke-01) solid rgba(255, 255, 255, 0.22)",
                color: "rgba(248, 250, 252, 0.94)",
                backdropFilter: "blur(6px)",
                zIndex: 4,
                transition: "background-color 180ms var(--motion-easing-standard), transform 180ms var(--motion-easing-standard), border-color 180ms var(--motion-easing-standard)",
              }}
              aria-label="Show previous image"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showNextImage()
              }}
              className="flex items-center justify-center focus-ring-standard outline-none"
              style={{
                position: "absolute",
                right: "var(--space-04)",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(15, 23, 42, 0.52)",
                border: "var(--stroke-01) solid rgba(255, 255, 255, 0.22)",
                color: "rgba(248, 250, 252, 0.94)",
                backdropFilter: "blur(6px)",
                zIndex: 4,
                transition: "background-color 180ms var(--motion-easing-standard), transform 180ms var(--motion-easing-standard), border-color 180ms var(--motion-easing-standard)",
              }}
              aria-label="Show next image"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>

            <div
              className="relative w-[min(92vw,1200px)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={lightboxCloseButtonRef}
                type="button"
                onClick={closeLightbox}
                className="flex items-center justify-center focus-ring-standard outline-none"
                style={{
                  position: "absolute",
                  top: "var(--space-03)",
                  right: "var(--space-03)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(15, 23, 42, 0.52)",
                  border: "var(--stroke-01) solid rgba(255, 255, 255, 0.22)",
                  color: "rgba(248, 250, 252, 0.94)",
                  backdropFilter: "blur(6px)",
                  lineHeight: 1,
                  zIndex: 5,
                  transition: "background-color 180ms var(--motion-easing-standard), transform 180ms var(--motion-easing-standard), border-color 180ms var(--motion-easing-standard)",
                }}
                aria-label="Close image preview"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <img
                src={supportingImages[selectedImageIndex].fullSrc}
                alt={supportingImages[selectedImageIndex].alt}
                className="w-full h-auto"
                loading="lazy"
                style={{
                  borderRadius: "var(--radius-03)",
                  boxShadow: "0 12px 36px rgba(0, 0, 0, 0.35)",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  backgroundColor: "var(--color-neutral-900)",
                }}
              />

              <p
                id="my-design-moves-lightbox-caption"
                className="font-body"
                style={{
                  marginTop: "var(--space-04)",
                  textAlign: "center",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 500,
                  color: "color-mix(in srgb, var(--color-neutral-0) 84%, transparent)",
                  lineHeight: 1.4,
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    opacity: 0.85,
                  }}
                >
                  {currentLightboxLabel}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: "var(--space-03)",
                  }}
                />
                <span
                  style={{
                    color: "#FFFFFF",
                    opacity: 0.6,
                  }}
                >
                  {`${selectedImageIndex + 1} / ${supportingImages.length}`}
                </span>
              </p>
            </div>
          </div>,
          document.body
        )}
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
function WhosWhoBand({
  title,
  stakeholders,
  imageSrc,
}: {
  title: string
  stakeholders: WhosWhoStakeholder[]
  imageSrc: string
}) {
  return (
    <div
      data-reveal
      style={{
        backgroundColor: "var(--color-bg-page)",
        paddingTop: "var(--space-12)",
        paddingBottom: "var(--space-12)",
        borderTop: "var(--stroke-01) solid var(--color-border-subtle)",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--grid-gap-lg)]">
          {/* Left Column: Image */}
          <div
            className="w-full max-w-[320px] sm:max-w-none"
            style={{
              borderRadius: "var(--radius-04)",
              overflow: "hidden",
              aspectRatio: "4/5",
              backgroundColor: "var(--color-neutral-100)",
            }}
          >
            <img
              src={imageSrc}
              alt="Two colleagues celebrating with a high-five during a collaborative planning session"
              className="w-full h-full object-cover"
              loading="lazy"
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
              {title}
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
function ProcessOverviewBand({ steps }: { steps: ProcessOverviewStep[] }) {
  return (
    <div
      data-reveal
      style={{
        paddingBottom: "var(--space-10)",
      }}
    >
      <Container>
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "var(--color-bg-page)",
            border: "var(--stroke-01) solid var(--color-border-subtle)",
            borderRadius: "var(--radius-05)",
            padding: "var(--space-07)",
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


