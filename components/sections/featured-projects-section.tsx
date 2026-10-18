"use client"

import { useCallback, useState } from "react"
import type { FocusEvent, MouseEvent } from "react"
import { Section, Container, Grid } from "@/components/layout"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Project data type for FeaturedProjectsSection
 */
interface Project {
  slug: string
  company: string
  projectTitle: string
  projectSubtitle: string
  shortDescription: string
  summary: string
  tags: string[]
  metrics: {
    direction: "up" | "down"
    value: string
    label: string
  }[]
  additionalOutcome?: string
}

/**
 * Sample project data - can be replaced with CMS data
 */
const featuredProjects: Project[] = [
  {
    slug: "coca-cola",
    company: "Coca-Cola",
    projectTitle: "Global Supply Chain Governance",
    projectSubtitle: "Workflow Transformation",
    shortDescription: "Global manufacturing content operations",
    summary:
      "Replaced fragmented Excel and manual publishing processes with modular content architecture and role-based governance.",
    tags: ["Supply Chain", "Governance", "Localization"],
    metrics: [
      { direction: "down", value: "52%", label: "reduction in content turnaround time" },
    ],
    additionalOutcome: "Centralized visibility across global performance metrics",
  },
  {
    slug: "walgreens",
    company: "Walgreens",
    projectTitle: "Pharmacy Data Review Workflow",
    projectSubtitle: "Pharmacy System",
    shortDescription: "High-volume prescription review",
    summary:
      "Modernized prescription verification with keyboard-first navigation, inline exception handling, and contextual data comparison.",
    tags: ["Healthcare", "Role-Based", "Design System"],
    metrics: [
      { direction: "down", value: "20%", label: "faster task completion" },
      { direction: "down", value: "25%", label: "clarification errors" },
    ],
  },
  {
    slug: "mediaplatform",
    company: "MediaPlatform",
    projectTitle: "Enterprise Broadcast Collaboration",
    projectSubtitle: "Enterprise Platform",
    shortDescription: "Live enterprise broadcasting",
    summary:
      "Re-architected a legacy webcasting product around role-based backstage control, multi-camera production, and real-time engagement.",
    tags: ["Real-Time", "Modular UX", "Multi-Device"],
    metrics: [
      { direction: "up", value: "27%", label: "improvement in live production efficiency" },
    ],
    additionalOutcome: "Reduced setup friction during global executive broadcasts",
  },
]

/** Selected Work `article`: sole source of card surface motion (transform + shadow). */
const CARD_SURFACE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
const CARD_SURFACE_TRANSFORM_DURATION = "700ms"
const CARD_SURFACE_SHADOW_DURATION = "760ms"

/** Metric underline: fill animates on pointer hover or keyboard focus (independent of default resting emphasis). */
const METRIC_UNDERLINE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
const METRIC_UNDERLINE_DURATION = "570ms"

const SELECTED_WORK_CARD_SELECTOR = "[data-selected-work-card]"

/** Case study hero art for Selected Work thumbnails (same sources as mega menu). */
const SELECTED_WORK_HERO_IMAGES: Record<Project["slug"], string> = {
  "coca-cola": "/images/case-studies/coca-cola/coca-cola-hero.webp",
  walgreens: "/images/case-studies/walgreens/walgreens-hero.webp",
  mediaplatform: "/images/case-studies/mediaplatform/mediaplatform-hero.webp",
}

/** Background focal point per hero so key UI/workflow regions read at 3:2 crop. */
const SELECTED_WORK_HERO_OBJECT_POSITION: Record<Project["slug"], string> = {
  "coca-cola": "68% 48%",
  walgreens: "50% 44%",
  mediaplatform: "50% 36%",
}

function pointerEnteredAnotherSelectedWorkCard(relatedTarget: EventTarget | null) {
  return (
    relatedTarget instanceof Element &&
    relatedTarget.closest(SELECTED_WORK_CARD_SELECTOR) != null
  )
}

/**
 * FeaturedProjectsSection - Grid of featured case studies.
 * Matches Figma design with hero images, tags, metrics, and structured layout.
 */
export function FeaturedProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const resetToDefaultEmphasis = useCallback(() => {
    setActiveIndex(0)
  }, [])

  /** When leaving a card: reset unless the pointer/focus moved onto another Selected Work card (any column / reflow). */
  const handleCardLeaveForEmphasis = useCallback(
    (e: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>) => {
      if (pointerEnteredAnotherSelectedWorkCard(e.relatedTarget)) return
      resetToDefaultEmphasis()
    },
    [resetToDefaultEmphasis]
  )

  /** When the pointer leaves the whole grid (e.g. gap → outside), ensure emphasis returns to default. */
  const handleGridMouseLeave = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const next = e.relatedTarget
      if (next instanceof Node && e.currentTarget.contains(next)) return
      resetToDefaultEmphasis()
    },
    [resetToDefaultEmphasis]
  )

  return (
    <Section id="featured-projects">
      <Container>
        {/* Section Header */}
        <h2 
          className="font-heading clr-text-primary"
          style={{
            fontSize: "var(--text-heading-02)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "var(--space-10)",
          }}
        >
          Selected Work
        </h2>

        {/* Projects Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <Grid
          cols={3}
          gap="lg"
          className="items-stretch"
          onMouseLeave={handleGridMouseLeave}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isEmphasized={activeIndex === index}
              isDefaultFeatured={index === 0}
              onCardHover={() => setActiveIndex(index)}
              onCardMouseLeave={handleCardLeaveForEmphasis}
              onCardBlur={handleCardLeaveForEmphasis}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

/**
 * ProjectCard - Surfaced card; featured state from parent (default index 0) or hover.
 */
function ProjectCard({
  project,
  isEmphasized,
  isDefaultFeatured,
  onCardHover,
  onCardMouseLeave,
  onCardBlur,
}: {
  project: Project
  isEmphasized: boolean
  /** First card: lower resting elevation; full elevation + lift only while pointer is over this card. */
  isDefaultFeatured: boolean
  onCardHover: () => void
  onCardMouseLeave: (e: MouseEvent<HTMLAnchorElement>) => void
  onCardBlur: (e: FocusEvent<HTMLAnchorElement>) => void
}) {
  const [isPointerOverCard, setIsPointerOverCard] = useState(false)
  const [isLinkFocused, setIsLinkFocused] = useState(false)

  const isFeaturedResting =
    isEmphasized &&
    isDefaultFeatured &&
    !isPointerOverCard &&
    !isLinkFocused

  const showCardHoverVisuals = isPointerOverCard || isLinkFocused

  return (
    <Link
      href={`/case-studies/${project.slug}`}
      data-selected-work-card
      onMouseEnter={() => {
        setIsPointerOverCard(true)
        onCardHover()
      }}
      onMouseLeave={(e) => {
        setIsPointerOverCard(false)
        onCardMouseLeave(e)
      }}
      onFocus={() => {
        setIsLinkFocused(true)
        onCardHover()
      }}
      onBlur={(e) => {
        setIsLinkFocused(false)
        onCardBlur(e)
      }}
      className={cn(
        "group selected-work-card-link transition-fast ease-[var(--motion-easing-decelerate)] flex h-full min-h-0 flex-col outline-none rounded-[var(--radius-04)] active:scale-[0.99]",
        isEmphasized && "relative z-[1]"
      )}
    >
      <article
        className={cn(
          "flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-[var(--radius-04)]",
          "border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]",
          "will-change-transform motion-reduce:will-change-auto"
        )}
        style={{
          transform: !isEmphasized
            ? "translateY(0px) scale(0.99)"
            : isFeaturedResting
              ? "translateY(0px) scale(1.015)"
              : "translateY(-4px) scale(1.015)",
          boxShadow: !isEmphasized
            ? "var(--elevation-01)"
            : isFeaturedResting
              ? "var(--elevation-02)"
              : "var(--elevation-03)",
          transitionProperty: "transform, box-shadow",
          transitionDuration: `${CARD_SURFACE_TRANSFORM_DURATION}, ${CARD_SURFACE_SHADOW_DURATION}`,
          transitionTimingFunction: `${CARD_SURFACE_EASE}, ${CARD_SURFACE_EASE}`,
        }}
      >
        {/* Hero: feature image + compact title plaque; top radii match card */}
        <div
          className="selected-work-thumbnail relative w-full shrink-0 overflow-hidden"
          data-project={project.slug}
          style={{
            aspectRatio: "3 / 2",
            borderTopLeftRadius: "var(--radius-md)",
            borderTopRightRadius: "var(--radius-md)",
          }}
        >
          <div
            className={cn(
              "absolute inset-0 z-0 origin-center overflow-hidden transition-transform duration-[var(--motion-duration-02)] ease-[var(--motion-easing-standard)] motion-reduce:transition-none",
              project.slug === "mediaplatform"
                ? "scale-[1.06] group-hover:scale-[1.08] group-focus-visible:scale-[1.08] motion-reduce:group-hover:scale-[1.06] motion-reduce:group-focus-visible:scale-[1.06]"
                : "scale-[1.03] group-hover:scale-[1.05] group-focus-visible:scale-[1.05] motion-reduce:group-hover:scale-[1.03] motion-reduce:group-focus-visible:scale-[1.03]"
            )}
          >
            <Image
              src={SELECTED_WORK_HERO_IMAGES[project.slug]}
              alt={`${project.company} ${project.projectTitle}: ${project.shortDescription}`}
              fill
              className="object-cover"
              style={{
                objectPosition: SELECTED_WORK_HERO_OBJECT_POSITION[project.slug],
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="selected-work-caption-veil pointer-events-none" aria-hidden />

          <div className="selected-work-caption pointer-events-none">
            <div className="selected-work-caption-panel">
              <p
                className="clr-text-primary"
                style={{
                  fontSize: "var(--text-body-md)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: "var(--leading-tight)",
                }}
              >
                {project.company}
              </p>
              <p
                className="clr-text-secondary"
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: "var(--leading-tight)",
                }}
              >
                {project.projectSubtitle}
              </p>
            </div>
          </div>
        </div>

        <p className="selected-work-image-caption">
          {project.shortDescription}
        </p>

        <div
          className="flex min-h-0 flex-1 flex-col"
          style={{
            paddingInline: "var(--space-06)",
            paddingTop: "var(--space-04)",
            paddingBottom: "var(--space-06)",
          }}
        >
        {/* Tags */}
        <div
          className="flex flex-wrap gap-[var(--space-03)]"
          style={{ marginBottom: "var(--space-05)" }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "var(--text-caption)",
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                lineHeight: "var(--leading-tight)",
                paddingBlock: "var(--space-01)",
                paddingInline: "var(--space-04)",
                minHeight: "calc(1lh + var(--space-01) + var(--space-01))",
                color: "var(--color-blue-grey-500)",
                backgroundColor: "var(--color-neutral-50)",
                borderRadius: "var(--radius-02)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex min-h-0 w-full flex-1 flex-col">
        {/* Project Title */}
        <h3
          className="font-heading clr-text-primary group-hover:clr-text-accent group-focus-visible:clr-text-accent motion-reduce:transition-none"
          style={{
            fontSize: "var(--text-heading-04)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: "var(--space-06)",
            transitionProperty: "color",
            transitionDuration: CARD_SURFACE_TRANSFORM_DURATION,
            transitionTimingFunction: CARD_SURFACE_EASE,
          }}
        >
          {project.projectTitle}
        </h3>

        {/* Description */}
        <p 
          className="clr-text-secondary min-w-0"
          style={{
            fontSize: "var(--text-body-sm)",
            fontFamily: "var(--font-body)",
            lineHeight: "var(--leading-relaxed)",
            marginBottom: 0,
          }}
        >
          {project.summary}
        </p>
        </div>

        {/* Metric block: anchored to the bottom of the card body */}
        <div
          className="mt-auto flex w-full shrink-0 flex-col"
          style={{ paddingTop: "var(--space-07)" }}
        >
          {/* Metric underline: neutral track + fill expands on hover or link focus-visible (not default resting emphasis alone) */}
          <div aria-hidden className="w-full" style={{ marginBottom: "var(--space-05)" }}>
            <div className="relative w-full" style={{ height: "var(--stroke-02)" }}>
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "var(--color-border-subtle)" }}
              />
              <div
                className="absolute top-0 bottom-0 left-0 max-w-full rounded-[1px] motion-reduce:transition-none"
                style={{
                  width: showCardHoverVisuals ? "75%" : "var(--space-09)",
                  backgroundColor: showCardHoverVisuals
                    ? "var(--color-cyan-500)"
                    : "var(--color-cyan-200)",
                  transitionProperty: "width, background-color",
                  transitionDuration: `${METRIC_UNDERLINE_DURATION}, ${METRIC_UNDERLINE_DURATION}`,
                  transitionTimingFunction: `${METRIC_UNDERLINE_EASE}, ${METRIC_UNDERLINE_EASE}`,
                }}
              />
            </div>
          </div>

          {/* Metrics: shared min-height so the cyan rule sits at one offset from the card bottom */}
          <div
            className="flex flex-col"
            style={{
              gap: "var(--space-03)",
              minHeight:
                "calc((var(--text-body-sm) * var(--leading-normal) * 4) + var(--space-03))",
            }}
          >
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="flex items-start"
                style={{ gap: "var(--space-02)" }}
              >
                {metric.direction === "down" ? (
                  <ArrowDown
                    style={{
                      width: "var(--icon-sm)",
                      height: "var(--icon-sm)",
                      color: "var(--color-blue-500)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <ArrowUp
                    style={{
                      width: "var(--icon-sm)",
                      height: "var(--icon-sm)",
                      color: "var(--color-blue-500)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                )}
                <p
                  className="clr-text-primary"
                  style={{
                    fontSize: "var(--text-body-sm)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "var(--color-blue-500)",
                    }}
                  >
                    {metric.value}
                  </span>
                  {" "}
                  {metric.label}
                </p>
              </div>
            ))}
          
            {/* Additional outcome */}
            {project.additionalOutcome && (
              <p 
                className="clr-text-secondary"
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {project.additionalOutcome}
              </p>
            )}
          </div>
        </div>
        </div>
      </article>
    </Link>
  )
}
