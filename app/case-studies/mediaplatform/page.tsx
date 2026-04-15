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
            "Producers were forced to navigate complex setup flows, manually adjust layouts in real time, and coordinate across fragmented tools. This introduced friction, increased cognitive load, and created unnecessary risk during critical moments.",
            "Over the course of the engagement, I led the end-to-end UX transformation of the platform. The approach focused on restructuring the product into a modular, role-based system designed for speed, clarity, and real-time control.",
            "The result was a more resilient and intuitive production environment that reduced setup time, improved operator confidence, and enabled teams to run high-quality broadcasts with fewer resources.",
          ]}
          problemDescription="MediaPlatform lacked a scalable, user-friendly system for managing enterprise webcasts. The platform required deep technical knowledge, relied on manual configuration, and forced teams to coordinate across fragmented workflows. During live events, these limitations increased stress, slowed execution, and introduced avoidable risk."
          solutionDescription="I redesigned the platform as a modular, role-based production system aligned with real-world broadcasting workflows. The solution reduced setup friction, introduced preconfigured scenes, enabled real-time control, and integrated audience engagement directly into the experience."
          roleDescription="I led UX strategy, interaction design, and workflow modeling across the full product lifecycle. I conducted research across users and live production environments, designed scalable interaction patterns, and partnered closely with engineering and QA to deliver a production-ready system."
          impactDescription="The redesigned platform enabled a shift from multi-person production teams to streamlined, single-operator workflows, improving efficiency and reducing operational complexity."
          metrics={[
            { value: "80%", label: "Faster event setup" },
            { value: "40-60%", label: "Increase in audience engagement" },
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
          whosWhoImageSrc="/images/case-studies/walgreens/whoswho.webp"
          comparisonBeforeSrc="/images/case-studies/walgreens/comparisonbefore.webp"
          comparisonAfterSrc="/images/case-studies/walgreens/comparisonafter.webp"
          supportingImages={[
            {
              label: "WORKFLOW ORCHESTRATION",
              thumbnailSrc: "/images/case-studies/walgreens/workflowdiagram.webp",
              fullSrc: "/images/case-studies/walgreens/workflowdiagram.webp",
              alt: "Workflow orchestration model for enterprise webcast production",
            },
            {
              label: "ROLE-BASED WORKSPACES",
              thumbnailSrc: "/images/case-studies/walgreens/accessibledesign.webp",
              fullSrc: "/images/case-studies/walgreens/accessibledesignfull.webp",
              alt: "Role-based workspace design for producers and presenters",
            },
            {
              label: "LIVE PRODUCTION CONTROLS",
              thumbnailSrc: "/images/case-studies/walgreens/sourcedatacomparison.webp",
              fullSrc: "/images/case-studies/walgreens/sourcedatacomparisonfull.png",
              alt: "Scene-based control model for live broadcast switching",
            },
          ]}
          whosWhoStakeholders={[
            {
              role: "Corporate Communications Managers",
              coreJob: "Launch branded events quickly",
              painPoint:
                "Branding and setup required engineering support",
            },
            {
              role: "Executive Presenters",
              coreJob: "Deliver confidently with minimal complexity",
              painPoint:
                "Overwhelming interface, lack of preview, latency concerns",
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
              title: "Start Fast with Minimal Setup",
              description:
                "Reduced barriers to entry by allowing immediate access to the production canvas with progressive configuration.",
            },
            {
              number: "2",
              title: "Introduce Role-Based Workspaces",
              description:
                "Separated interfaces by user role to reduce cognitive load and improve operational clarity.",
            },
            {
              number: "3",
              title: "Enable Real-Time Control Through Scene-Based Design",
              description:
                "Introduced preconfigured scenes and one-click switching to support rapid decisions during live events.",
            },
            {
              number: "4",
              title: "Simplify the Interaction Model",
              description:
                "Removed technical language and aligned the interface with real-world broadcasting workflows.",
            },
            {
              number: "5",
              title: "Integrate Engagement as a Core Feature",
              description:
                "Embedded Q&A, polling, and reactions directly into the platform to increase participation.",
            },
            {
              number: "6",
              title: "Enable Self-Service Branding and Configuration",
              description:
                "Provided tools for teams to manage branding and layouts without relying on engineering.",
            },
          ]}
          beforeAfterItems={{
            before: [
              "Fragmented tools and manual coordination across workflows",
              "Jargon-heavy onboarding and rigid setup requirements",
              "Shared workspaces with competing controls and responsibilities",
              "Manual layout manipulation during live events",
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
          interactiveComparisonContent={{
            title: "Interactive Comparison",
            beforeTitle: "Fragmented Broadcast Workflow",
            beforeSubtitle: "Manual coordination across disconnected tools",
            afterTitle: "Unified Production Workspace",
            afterSubtitle: "Role-based control with real-time scene switching",
            caption:
              "Legacy broadcast operations required switching between disconnected systems and manual live adjustments. The redesigned platform unifies setup, control, and engagement into a single production workspace.",
          }}
          processOverviewSteps={[
            {
              title: "Workflow Immersion & Contextual Inquiry",
              description:
                "Observed live production environments and backstage workflows to identify breakdowns during high-pressure scenarios.",
            },
            {
              title: "Task Decomposition & Flow Restructuring",
              description:
                "Rebuilt the experience around modular workflows aligned with setup, live production, and post-event analysis.",
            },
            {
              title: "Interaction Model Design (Speed & Clarity First)",
              description:
                "Designed for rapid decision-making with minimal cognitive overhead, prioritizing visibility and control.",
            },
            {
              title: "Constraint-Aware Prototyping",
              description:
                "Developed Axure prototypes to validate workflows while ensuring feasibility within technical constraints.",
            },
            {
              title: "Cross-Functional Collaboration & Iteration",
              description:
                "Partnered with engineering, QA, and stakeholders to refine interactions and ensure scalable implementation.",
            },
          ]}
        />

        {/* What I Learned Section */}
        <WhatILearnedSection
          paragraphs={[
            "Speed is a feature. Reducing friction creates momentum and improves outcomes.",
            "Design for stress, not ideal use. Live environments amplify every usability flaw.",
            "Clarity beats flexibility. Too many options slow decision-making under pressure.",
            "Engagement drives value. Interaction transforms passive viewing into participation.",
            "Data must tell a story. Dashboards should communicate insight, not raw information.",
            "Systems thinking scales impact. Modular architectures enable long-term growth and consistency.",
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
