import type { Metadata } from "next"
import { AppBackground } from "@/components/app-background"
import { SiteHeader } from "@/components/site-header"
import { CaseStudySectionNav } from "@/components/case-study/case-study-section-nav"
import { CaseStudyMotionController } from "@/components/case-study/case-study-motion-controller"
import { MediaPlatformCaseStudyHero } from "@/components/case-study/MediaPlatformCaseStudyHero"
import { ExecutiveSummarySection } from "@/components/case-study/executive-summary-section"
import { MediaPlatformBusinessOutcomesSection } from "@/components/case-study/mediaplatform-business-outcomes-section"
import { MediaPlatformSystemTransformationSection } from "@/components/case-study/mediaplatform-system-transformation-section"
import { MediaPlatformStructuralBottlenecksSection } from "@/components/case-study/mediaplatform-structural-bottlenecks-section"
import { MediaPlatformDecisionFrameworkSection } from "@/components/case-study/mediaplatform-decision-framework-section"
import { DetailedProcessSection } from "@/components/case-study/detailed-process-section"
import { WhatILearnedSection } from "@/components/case-study/what-i-learned-section"
import { CaseStudyFooter } from "@/components/case-study/case-study-footer"

export const metadata: Metadata = {
  title: "MediaPlatform Case Study | Steininger UX",
  description:
    "Designing a real-time production system for high-stakes global communication.",
}

/**
 * MediaPlatform Case Study Page
 *
 * Structure:
 * - SiteHeader (global, sticky)
 * - AppBackground layer (z-0, fixed)
 * - Main content layer (z-10, relative)
 */
export default function MediaPlatformCaseStudyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Global Header - scrolls away on case study pages */}
      <SiteHeader scrollAway />

      {/* Case Study Section Navigation - reveals on scroll */}
      <CaseStudySectionNav />

      {/* Background Layer */}
      <AppBackground showStructuralGrid />

      {/* Main Content Layer */}
      <main
        className="relative"
        style={{
          zIndex: 10,
          paddingTop: "var(--space-13)",
        }}
      >
        <CaseStudyMotionController />

        <MediaPlatformCaseStudyHero />

        {/* Executive Summary Section */}
        <ExecutiveSummarySection
          backgroundColor="color-mix(in srgb, var(--color-blue-900) 48%, var(--color-neutral-900))"
          introduction={[
            "High-stakes enterprise broadcasts such as CEO town halls and investor presentations require precision, coordination, and reliability under pressure. MediaPlatform's legacy system was technically capable but operationally fragile, optimized for expert users and difficult to manage during live events.",
            "Producers navigated complex setup flows, adjusted layouts manually in real time, and coordinated across fragmented tools. This introduced friction, increased cognitive load, and created unnecessary risk during critical moments.",
            "Over the course of the engagement, I led the end-to-end UX transformation of the platform, restructuring the product into a modular, role-based system designed for speed, clarity, and real-time control. The result was a more resilient production environment that reduced setup time, improved operator confidence, and enabled teams to run high-quality broadcasts with reduced coordination overhead.",
          ]}
          problemDescription="MediaPlatform lacked a scalable, user-friendly system for managing enterprise webcasts. The platform required deep technical knowledge, relied on manual configuration, and required teams to coordinate across fragmented workflows. During live events, these limitations increased stress, slowed execution, and introduced avoidable risk."
          solutionDescription="I redesigned the platform as a modular, role-based production system aligned with real-world broadcasting workflows. The solution reduced setup friction, introduced preconfigured scenes, enabled real-time control, and integrated audience engagement directly into the experience."
          roleDescription="I led UX strategy, interaction design, and workflow modeling across the full product lifecycle. I conducted research across users and live production environments, designed scalable interaction patterns, and partnered closely with engineering and QA to deliver a production-ready system."
          impactDescription="Across pilots and production releases, teams saw faster preparation, stronger live participation, and fewer in-event support escalations, reflected in the metrics below."
          metrics={[
            { value: "80%", label: "Faster event setup" },
            { value: "40–60%", label: "Increase in audience engagement" },
            { value: "60%", label: "Reduction in support tickets during live events" },
          ]}
        />

        {/* Business Outcomes Section */}
        <MediaPlatformBusinessOutcomesSection />

        {/* System Transformation Section */}
        <MediaPlatformSystemTransformationSection />

        {/* Structural Bottlenecks Section */}
        <MediaPlatformStructuralBottlenecksSection />

        {/* Decision Framework & Constraints Section */}
        <MediaPlatformDecisionFrameworkSection />

        {/* Detailed Process Section */}
        <DetailedProcessSection
          introText="I redesigned the platform to support real-world production workflows, focusing on reducing friction, improving coordination, and enabling confident decision-making under pressure."
          whosWhoTitle="Who's Who (And What They Needed)"
          whosWhoImageSrc="/images/case-studies/mediaplatform/whoswho.webp"
          whosWhoImageAlt="Who's Who stakeholder illustration"
          comparisonBeforeSrc="/images/case-studies/mediaplatform/comparisonbefore.webp"
          comparisonAfterSrc="/images/case-studies/mediaplatform/comparisonafter.webp"
          comparisonBeforeAlt="Interactive comparison — before (MediaPlatform)"
          comparisonAfterAlt="Interactive comparison — after (MediaPlatform)"
          supportingImages={[
            {
              label: "WORKFLOW ORCHESTRATION",
              thumbnailSrc: "/images/case-studies/mediaplatform/workflowdiagram.webp",
              fullSrc: "/images/case-studies/mediaplatform/workflowdiagram.webp",
              alt: "Workflow orchestration model for enterprise webcast production",
            },
            {
              label: "ROLE-BASED WORKSPACES",
              thumbnailSrc: "/images/case-studies/mediaplatform/accessibledesign.webp",
              fullSrc: "/images/case-studies/mediaplatform/accessibledesignfull.webp",
              alt: "Role-based workspace design for producers and presenters",
            },
            {
              label: "SELF-SERVICE CONFIGURATION",
              thumbnailSrc: "/images/case-studies/mediaplatform/sourcedatacomparison.webp",
              fullSrc: "/images/case-studies/mediaplatform/sourcedatacomparisonfull.webp",
              alt: "Scene-based control model for live broadcast switching",
            },
          ]}
          whosWhoStakeholders={[
            {
              role: "Corporate Communications Managers",
              coreJob: "Launch branded events efficiently",
              painPoint:
                "Branding and setup required engineering support",
            },
            {
              role: "Executive Presenters",
              coreJob: "Deliver confidently with minimal complexity",
              painPoint:
                "Overwhelming interface, lack of confidence in preview and timing",
            },
            {
              role: "Producers",
              coreJob: "Run a smooth, controlled live broadcast",
              painPoint:
                "Shared layouts, manual adjustments, high stress under time pressure",
            },
            {
              role: "Audience",
              coreJob: "Watch and engage seamlessly across devices",
              painPoint:
                "Poor playback quality, limited interaction, lack of responsiveness",
            },
          ]}
          designMoves={[
            {
              number: "1",
              title: "Identify Workflow Friction Points",
              description:
                "Mapped the end-to-end broadcast workflow to surface structural bottlenecks, including mandatory setup steps, fragmented configuration, and delayed access to the production canvas.",
            },
            {
              number: "2",
              title: "Introduce Role-Based Workspaces",
              description:
                "Separated interfaces by user role to reduce cognitive load and improve operational clarity.",
            },
            {
              number: "3",
              title: "Enable Self-Service Branding and Configuration",
              description:
                "Equipped teams with tools to handle branding, layouts, and event setup on their own, reducing reliance on engineering and speeding turnaround.",
            },
            {
              number: "4",
              title: "Enable Real-Time Control Through Scene-Based Design",
              description:
                "Introduced preconfigured scenes and one-click switching to support rapid decisions during live events.",
            },
            {
              number: "5",
              title: "Simplify the Interaction Model",
              description:
                "Removed technical language and aligned the interface with real-world broadcasting workflows.",
            },
            {
              number: "6",
              title: "Centralize Planning and Visibility",
              description:
                "Created an integrated dashboard that surfaces upcoming webcasts, recent activity, and key performance data, replacing disconnected planning tools with a shared system-wide view.",
            },
          ]}
          beforeAfterItems={{
            before: [
              "Fragmented tools and manual coordination across workflows",
              "Jargon-heavy onboarding and rigid setup requirements",
              "Shared workspaces with competing controls and responsibilities",
              "Manual layout adjustments during live events",
              "Limited audience engagement and fragmented analytics",
              "Branding and configuration required engineering support",
            ],
            after: [
              "Streamlined, role-based production workflows",
              "Immediate access to the broadcast canvas with minimal setup",
              "Personalized workspaces for producers, presenters, and administrators",
              "Preconfigured scenes with one-click switching",
              "Integrated engagement tools and narrative-driven analytics",
              "Self-service branding and reusable templates",
            ],
          }}
          useSharedComparisonCard
          showBeforeAfterChecklists={false}
          interactiveComparisonContent={{
            title: "Interactive Comparison",
            beforeTitle: "Mandatory Setup Workflow",
            beforeSubtitle: "Multi-step event configuration with required inputs before entry",
            afterTitle: "Centralized Planning Dashboard",
            afterSubtitle: "Shared visibility into upcoming webcasts, activity, and performance",
            caption:
              "The legacy system relied on an event-level entry point, requiring users to initiate workflows through individual setup rather than a shared team context. The redesigned system introduces a centralized dashboard that provides team-level visibility into upcoming webcasts, recent activity, and performance data.",
          }}
          processOverviewSteps={[
            {
              title: "Understanding Live Production Realities",
              description:
                "Observed live event environments and backstage workflows to understand how teams coordinate under time pressure and shifting conditions.",
            },
            {
              title: "Designing for Production Flow",
              description:
                "Restructured the platform around the natural rhythm of events—setup, live execution, and post-event wrap—so operators could stay oriented without constant context switching.",
            },
            {
              title: "Interfaces for Real-Time Decision Making",
              description:
                "Designed interaction patterns that support fast, confident decisions during live broadcasts, prioritizing clarity, timing awareness, and immediate feedback.",
            },
            {
              title: "Validating Within System Constraints",
              description:
                "Developed Axure prototypes to test workflows in realistic scenarios while ensuring alignment with technical and performance limitations.",
            },
            {
              title: "Aligning Across Production Teams",
              description:
                "Collaborated with engineering, QA, and stakeholders to refine interactions and ensure the system could support different roles without introducing friction during live events.",
            },
          ]}
        />

        {/* What I Learned Section */}
        <WhatILearnedSection
          paragraphs={[
            "Live production is where interface decisions become operational risk. This project reinforced that speed is earned by reducing hesitation: clearer defaults, stronger preview and timing confidence, and scene-based control so operators could execute without rebuilding layouts mid-event.",
            "Role separation mattered as much as any single interaction pattern. Producers, presenters, and administrators each needed different guardrails, and the product had to keep engagement and analytics legible enough to use after the broadcast, not only while it was live.",
            "Engineering dependency was a hidden tax on iteration. Self-service configuration, reusable templates, and a modular architecture helped the organization sustain measured gains (including faster setup, materially higher engagement, and fewer live-event support tickets) without reopening the same bottlenecks for every event.",
          ]}
        />

        {/* Footer */}
        <CaseStudyFooter
          previousStudy={{
            title: "Previous Case Study",
            subtitle: "Walgreens Retail Pharmacy Workflow Transformation",
            href: "/case-studies/walgreens",
          }}
        />
      </main>
    </div>
  )
}
