"use client"

import { Section, Container, Grid } from "@/components/layout"
import Link from "next/link"
import { ArrowDown, ArrowUp } from "lucide-react"

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

/**
 * FeaturedProjectsSection - Grid of featured case studies.
 * Matches Figma design with hero images, tags, metrics, and structured layout.
 */
export function FeaturedProjectsSection() {
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
        <Grid cols={3} gap="lg">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

/**
 * ProjectCard - Individual project card component
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className="group block transition-fast focus-visible:focus-ring-standard outline-none rounded-[var(--radius-04)]"
    >
      <article className="flex flex-col h-full">
        {/* Hero Image with Overlay */}
        <div 
          className="relative overflow-hidden transition-standard group-hover:shadow-[var(--elevation-02)] group-hover:-translate-y-1 group-active:translate-y-0 group-active:shadow-[var(--elevation-01)]"
          style={{
            aspectRatio: "16 / 10",
            borderRadius: "var(--radius-04)",
            marginBottom: "var(--space-05)",
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

        {/* Tags */}
        <div 
          className="flex flex-wrap"
          style={{
            gap: "var(--space-02)",
            marginBottom: "var(--space-04)",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="clr-text-secondary"
              style={{
                fontSize: "var(--text-caption)",
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                padding: "var(--space-02) var(--space-03)",
                background: "var(--color-bg-surface-subtle)",
                border: "var(--stroke-01) solid var(--color-border-subtle)",
                borderRadius: "var(--radius-02)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 
          className="font-heading clr-text-primary transition-standard group-hover:clr-text-accent"
          style={{
            fontSize: "var(--text-heading-04)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: "var(--space-02)",
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
            marginBottom: "var(--space-04)",
          }}
        >
          {project.company}
        </p>

        {/* Description */}
        <p 
          className="clr-text-secondary"
          style={{
            fontSize: "var(--text-body-sm)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
            marginBottom: "var(--space-05)",
          }}
        >
          Enterprise Survey & Benchmarking CMS for global bottling operations. 
          Replaced fragmented Excel and manual publishing workflows with modular 
          content architecture and role-based governance.
        </p>

        {/* Divider */}
        <div 
          style={{
            width: "var(--space-08)",
            height: "var(--stroke-02)",
            background: "var(--color-border-default)",
            marginBottom: "var(--space-04)",
          }}
        />

        {/* Metrics */}
        <div 
          className="flex flex-col mt-auto"
          style={{ gap: "var(--space-02)" }}
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
                    color: "var(--color-blue-700)",
                    marginTop: "2px",
                    flexShrink: 0,
                  }} 
                />
              ) : (
                <ArrowUp 
                  style={{ 
                    width: "var(--icon-sm)", 
                    height: "var(--icon-sm)",
                    color: "var(--color-blue-700)",
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
                    color: "var(--color-blue-700)",
                  }}
                >
                  {metric.value}
                </span>
                {" "}{metric.label}
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
                marginTop: "var(--space-01)",
              }}
            >
              {project.additionalOutcome}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}
