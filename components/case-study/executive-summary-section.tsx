"use client"

import { Container } from "@/components/layout"
import { AlertTriangle, Users, TrendingUp } from "lucide-react"

/**
 * Executive Summary Section for Case Study Pages
 * 
 * Features a dark-themed editorial layout with:
 * - Introduction paragraphs
 * - Executive Summary heading
 * - Two-column grid with problem, solution, role, and impact blocks
 * - Key metrics at the bottom
 */

interface ExecutiveSummaryProps {
  /** Introduction paragraphs */
  introduction: string[]
  /** The business and user problem description */
  problemDescription: string
  /** The strategic solution description */
  solutionDescription: string
  /** Role and leadership scope description */
  roleDescription: string
  /** Impact description */
  impactDescription: string
  /** Key metrics to display */
  metrics: Array<{
    value: string
    label: string
  }>
  backgroundColor?: string
}

/**
 * Content block component with icon and text
 */
function ContentBlock({
  icon: Icon,
  label,
  children,
}: {
  icon?: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
}) {
  return (
    <div 
      className="flex flex-col"
      style={{ gap: "var(--space-05)" }}
    >
      {/* Label with optional icon */}
      <div 
        className="flex items-center"
        style={{ gap: "var(--space-03)" }}
      >
        {Icon && (
          <Icon 
            style={{
              width: "var(--icon-md)",
              height: "var(--icon-md)",
              color: "var(--color-neutral-400)",
            }}
          />
        )}
        <span 
          className="font-ui uppercase"
          style={{
            fontSize: "var(--text-label-sm)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--color-neutral-400)",
          }}
        >
          {label}
        </span>
      </div>
      
      {/* Content */}
      <div 
        className="font-body"
        style={{
          fontSize: "var(--text-body-md)",
          lineHeight: 1.7,
          color: "var(--color-neutral-300)",
        }}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * Metric display component
 */
function MetricBlock({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col" style={{ gap: "var(--space-03)" }}>
      <span 
        className="font-heading"
        style={{
          fontSize: "var(--text-display-lg)",
          fontWeight: 600,
          color: "var(--color-blue-400)",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span 
        className="font-ui uppercase"
        style={{
          fontSize: "var(--text-label-sm)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          color: "var(--color-neutral-400)",
        }}
      >
        {label}
      </span>
    </div>
  )
}

export function ExecutiveSummarySection({
  introduction,
  problemDescription,
  solutionDescription,
  roleDescription,
  impactDescription,
  metrics,
  backgroundColor = "var(--color-neutral-900)",
}: ExecutiveSummaryProps) {
  return (
    <section
      id="executive-summary"
      style={{
        backgroundColor,
        paddingBlock: "var(--space-14)",
      }}
    >
      <Container>
        {/* Introduction Paragraphs */}
        <div 
          className="flex flex-col"
          data-reveal
          style={{ 
            gap: "var(--space-07)",
            maxWidth: "var(--layout-content-max)",
            marginBottom: "var(--space-14)",
          }}
        >
          {introduction.map((paragraph, index) => (
            <p 
              key={index}
              className="font-body"
              data-reveal
              data-reveal-delay={String(80 + index * 80)}
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: 1.7,
                color: "var(--color-neutral-300)",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Executive Summary Heading */}
        <h2 
          className="font-heading"
          data-reveal
          data-reveal-delay="120"
          style={{
            fontSize: "var(--text-heading-01)",
            fontWeight: 500,
            color: "var(--color-text-inverse)",
            marginBottom: "var(--space-10)",
          }}
        >
          Executive Summary
        </h2>

        {/* Two-Column Content Grid */}
        <div 
          className="grid gap-[var(--grid-gap-lg)]"
          style={{
            gridTemplateColumns: "repeat(1, 1fr)",
          }}
        >
          {/* Use CSS media query via responsive classes */}
          <div 
            className="grid md:grid-cols-2"
            data-reveal
            data-reveal-delay="160"
            style={{ gap: "var(--space-10)" }}
          >
            {/* Left Column */}
            <div 
              className="flex flex-col"
              style={{ gap: "var(--space-10)" }}
            >
              <ContentBlock 
                icon={AlertTriangle}
                label="The Business Problem & The User Problem"
              >
                {problemDescription}
              </ContentBlock>

              <ContentBlock label="The Strategic Solution">
                {solutionDescription}
              </ContentBlock>
            </div>

            {/* Right Column */}
            <div 
              className="flex flex-col"
              style={{ gap: "var(--space-10)" }}
            >
              <ContentBlock 
                icon={Users}
                label="My Role & Leadership Scope"
              >
                {roleDescription}
              </ContentBlock>

              <ContentBlock 
                icon={TrendingUp}
                label="Impact"
              >
                {impactDescription}
              </ContentBlock>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div 
          data-reveal
          data-reveal-delay="220"
          style={{
            marginTop: "var(--space-12)",
            paddingTop: "var(--space-10)",
            borderTop: "var(--stroke-01) solid var(--color-neutral-700)",
          }}
        >
          <div 
            className="flex flex-wrap"
            style={{ gap: "var(--space-12)" }}
          >
            {metrics.map((metric, index) => (
              <MetricBlock 
                key={index}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
