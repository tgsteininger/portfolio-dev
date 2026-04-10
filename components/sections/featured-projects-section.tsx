"use client"

import { useCallback, useState } from "react"
import type { FocusEvent, MouseEvent } from "react"
import { Section, Container, Grid } from "@/components/layout"
import Link from "next/link"
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
  tags: string[]
  metrics: {
    direction: "up" | "down"
    value: string
    label: string
  }[]
  additionalOutcome?: string
  imageLabel?: string
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
    shortDescription: "Enterprise CMS for Global Manufacturing",
    tags: ["Supply Chain Systems", "Enterprise CMS", "AI-Assisted Localization"],
    metrics: [
      { direction: "down", value: "52%", label: "reduction in content turnaround time" },
    ],
    additionalOutcome: "Centralized visibility across global performance metrics",
    imageLabel: "Enterprise CMS",
  },
  {
    slug: "walgreens",
    company: "Walgreens",
    projectTitle: "Pharmacy Data Review Workflow",
    projectSubtitle: "Pharmacy System",
    shortDescription: "Workflow Optimization & Role-Based UX",
    tags: ["Healthcare UX", "Clinical Workflow", "Design System Expansion"],
    metrics: [
      { direction: "down", value: "20%", label: "faster task completion" },
      { direction: "down", value: "25%", label: "clarification errors" },
    ],
    imageLabel: "Enterprise System",
  },
  {
    slug: "mediaplatform",
    company: "MediaPlatform",
    projectTitle: "Enterprise Broadcast Collaboration",
    projectSubtitle: "Enterprise Platform",
    shortDescription: "Workflow Optimization & UX Modernization",
    tags: ["Enterprise SaaS", "Real-Time Systems", "Modular UX Architecture"],
    metrics: [
      { direction: "up", value: "27%", label: "improvement in live production efficiency" },
    ],
    additionalOutcome: "Reduced setup friction during global executive broadcasts",
    imageLabel: "Enterprise Platform",
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
        "group selected-work-card-link transition-fast ease-[var(--motion-easing-decelerate)] block h-full min-h-0 outline-none rounded-[var(--radius-04)] active:scale-[0.99]",
        isEmphasized && "relative z-[1]"
      )}
    >
      <article
        className={cn(
          "flex h-full min-h-0 flex-col overflow-hidden rounded-[var(--radius-04)]",
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
        {/* Hero: full-bleed to card edges; top radii match card (article overflow clips) */}
        <div
          className="relative w-full shrink-0 overflow-hidden"
          style={{
            aspectRatio: "3 / 2",
            borderTopLeftRadius: "var(--radius-04)",
            borderTopRightRadius: "var(--radius-04)",
          }}
        >
          {/* Dark gradient background */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, var(--color-neutral-800) 0%, var(--color-neutral-900) 100%)`,
            }}
          />
          
          {/* Image label badge */}
          {project.imageLabel && (
            <div 
              className="absolute clr-text-inverse"
              style={{
                top: "var(--space-05)",
                left: "var(--space-05)",
                fontSize: "var(--text-caption)",
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                padding: "var(--space-02) var(--space-03)",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "var(--radius-02)",
                backdropFilter: "blur(8px)",
              }}
            >
              {project.imageLabel}
            </div>
          )}
          
          {/* Decorative UI elements in the image */}
          <div className="absolute inset-0 opacity-20">
            {/* Abstract UI representation */}
            <div 
              className="absolute"
              style={{
                top: "30%",
                right: "var(--space-08)",
                width: "60%",
                height: "50%",
                background: "rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            />
            <div 
              className="absolute"
              style={{
                top: "40%",
                right: "var(--space-06)",
                width: "50%",
                height: "40%",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "var(--radius-03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            />
          </div>
          
          {/* Bottom overlay with project info */}
          <div 
            className="absolute bottom-0 left-0 right-0"
            style={{
              padding: "var(--space-05)",
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
            }}
          >
            <p 
              className="clr-text-inverse"
              style={{
                fontSize: "var(--text-body-md)",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
            >
              {project.company}
            </p>
            <p 
              className="clr-text-inverse"
              style={{
                fontSize: "var(--text-body-sm)",
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                opacity: 0.9,
              }}
            >
              {project.projectSubtitle}
            </p>
            <p 
              className="clr-text-inverse"
              style={{
                fontSize: "var(--text-caption)",
                fontFamily: "var(--font-body)",
                opacity: 0.7,
                marginTop: "var(--space-01)",
              }}
            >
              {project.shortDescription}
            </p>
          </div>
        </div>

        <div
          className="flex min-h-0 flex-1 flex-col"
          style={{
            paddingInline: "var(--space-06)",
            paddingBlock: "var(--space-06)",
          }}
        >
        {/* Tags */}
        <div
          className="flex flex-wrap gap-[var(--space-03)]"
          style={{ marginBottom: "var(--space-06)" }}
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
                paddingBlock: "var(--space-02)",
                paddingInline: "var(--space-04)",
                minHeight: "calc(1lh + var(--space-02) + var(--space-02))",
                color: "var(--color-blue-grey-500)",
                backgroundColor: "var(--color-neutral-100)",
                borderRadius: "var(--radius-02)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3
          className="font-heading clr-text-primary group-hover:clr-text-accent group-focus-visible:clr-text-accent motion-reduce:transition-none"
          style={{
            fontSize: "var(--text-heading-04)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: "var(--space-01)",
            transitionProperty: "color",
            transitionDuration: CARD_SURFACE_TRANSFORM_DURATION,
            transitionTimingFunction: CARD_SURFACE_EASE,
          }}
        >
          {project.projectTitle}
        </h3>

        {/* Company Name */}
        <p 
          className="clr-text-tertiary"
          style={{
            fontSize: "var(--text-body-sm)",
            fontFamily: "var(--font-body)",
            marginBottom: "var(--space-06)",
          }}
        >
          {project.company}
        </p>

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
          Enterprise Survey & Benchmarking CMS for global bottling operations. 
          Replaced fragmented Excel and manual publishing workflows with modular 
          content architecture and role-based governance.
        </p>

        {/* Metric block: anchored toward card bottom; underline + metrics stay grouped */}
        <div
          className="mt-auto flex w-full min-w-0 flex-col"
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

          {/* Metrics */}
          <div
            className="flex flex-col"
            style={{ gap: "var(--space-03)" }}
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
