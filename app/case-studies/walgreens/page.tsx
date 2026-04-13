// TODO: Replace Coca-Cola content with Walgreens content
import type { Metadata } from "next"
import { AppBackground } from "@/components/app-background"
import { SiteHeader } from "@/components/site-header"
import { CaseStudySectionNav } from "@/components/case-study/case-study-section-nav"
import { CaseStudyMotionController } from "@/components/case-study/case-study-motion-controller"
import { WalgreensCaseStudyHero } from "@/components/case-study/WalgreensCaseStudyHero"
import { ExecutiveSummarySection } from "@/components/case-study/executive-summary-section"
import { WalgreensBusinessOutcomesSection } from "@/components/case-study/walgreens-business-outcomes-section"
import { WalgreensSystemTransformationSection } from "@/components/case-study/walgreens-system-transformation-section"
import { WalgreensStructuralBottlenecksSection } from "@/components/case-study/walgreens-structural-bottlenecks-section"
import { DetailedProcessSection } from "@/components/case-study/detailed-process-section"
import { WhatILearnedSection } from "@/components/case-study/what-i-learned-section"
import { CaseStudyFooter } from "@/components/case-study/case-study-footer"

export const metadata: Metadata = {
  title: "Walgreens Case Study | Steininger UX",
  description: "Enterprise Survey & Benchmarking CMS for global bottling operations.",
}

/**
 * Coca-Cola Case Study Page
 * 
 * Structure:
 * - SiteHeader (global, sticky)
 * - AppBackground layer (z-0, fixed)
 * - Main content layer (z-10, relative)
 */
export default function CocaColaCaseStudyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Global Header - scrolls away on case study pages */}
      <SiteHeader scrollAway />
      
      {/* Case Study Section Navigation - reveals on scroll */}
      <CaseStudySectionNav />
      
      {/* Background Layer */}
      <AppBackground />
      
      {/* Main Content Layer */}
      <main 
        className="relative"
        style={{ 
          zIndex: 10,
          paddingTop: "var(--space-13)",
        }}
      >
        <CaseStudyMotionController />

        <WalgreensCaseStudyHero />

        {/* Executive Summary Section */}
        <ExecutiveSummarySection
          introduction={[
            "Walgreens' in-store prescription review workflow was slow, fragmented, and heavily dependent on inefficient interaction patterns. Pharmacists were required to navigate multiple disconnected systems, reprocess large amounts of data for minor edits, and manage unclear communication loops with technicians — all in a high-interruption, time-critical environment.",
            "These inefficiencies increased cognitive load, slowed prescription throughput, and introduced avoidable errors in a high-stakes setting.",
            "Over a 16-week engagement, I led the redesign of the Data Review workflow — one of seven core system verticals. The approach focused on restructuring workflows around real-world pharmacy behavior, reducing context switching across systems, and introducing interaction patterns optimized for speed and accuracy.",
            "The result was a more cohesive and efficient workflow system that reduced friction and improved task completion speed across the prescription lifecycle.",
          ]}
          problemDescription="Walgreens lacked a cohesive prescription review workflow. Pharmacists navigated multiple disconnected systems, reprocessed entire records for minor corrections, relied on mouse-heavy input with limited keyboard support, and managed unclear communication loops with technicians. At scale across 9,000+ locations, these inefficiencies directly impacted operational throughput, staff productivity, and patient service speed."
          solutionDescription="I redesigned the Data Review workflow within a multi-application pharmacy ecosystem, shifting from a record-based model to a task-based, modular structure. The solution introduced keyboard-first interaction patterns, embedded source data directly into the review interface, and added contextual exception handling — reducing friction and improving accuracy without replacing the broader system."
          roleDescription="I led UX design for the Data Review workflow — one of seven core system verticals. I translated complex pharmacy workflows into structured user flows, conducted workflow shadowing and co-design sessions with pharmacists, designed interaction patterns optimized for speed and accuracy, and contributed reusable components to the broader design system."
          impactDescription="The redesigned workflow delivered a reported ~200% improvement in efficiency, reduced task completion time through optimized interaction patterns, decreased clarification errors between pharmacists and technicians, and established design patterns that scaled across additional workflow verticals within the system."
          metrics={[
            { value: "~200%", label: "Workflow efficiency improvement" },
            { value: "9,000+", label: "Retail locations impacted" },
          ]}
        />

        {/* Business Outcomes Section */}
        <WalgreensBusinessOutcomesSection />

        {/* System Transformation Section */}
        <WalgreensSystemTransformationSection />

        {/* Structural Bottlenecks Section */}
        <WalgreensStructuralBottlenecksSection />

        {/* Detailed Process Section */}
        <DetailedProcessSection
          introText="I redesigned the underlying workflow to better support how pharmacists and technicians operate, reducing cognitive load and improving throughput across the fulfillment process."
          whosWhoTitle="Who's Who (And What They Needed)"
          whosWhoImageSrc="/images/case-studies/walgreens/whoswho.webp"
          comparisonBeforeSrc="/images/case-studies/walgreens/comparisonbefore.webp"
          comparisonAfterSrc="/images/case-studies/walgreens/comparisonafter.webp"
          supportingImages={[
            {
              label: "WORKFLOW DIAGRAM",
              thumbnailSrc: "/images/case-studies/walgreens/workflowdiagram.png",
              fullSrc: "/images/case-studies/walgreens/workflowdiagramfull.png",
              alt: "Workflow diagram showing content creation and approval process",
            },
            {
              label: "CONTENT CREATION",
              thumbnailSrc: "/images/case-studies/walgreens/contentcreation.png",
              fullSrc: "/images/case-studies/walgreens/contentcreationfull.png",
              alt: "Content creation interface screenshot",
            },
            {
              label: "FINAL UI / PUBLISHER VIEW",
              thumbnailSrc: "/images/case-studies/walgreens/finalui.png",
              fullSrc: "/images/case-studies/walgreens/finaluifull.png",
              alt: "Final publisher view of the CMS interface",
            },
          ]}
          whosWhoStakeholders={[
            {
              role: "Pharmacist",
              coreJob: "Review prescriptions and validate data accuracy",
              painPoint:
                "Navigating multiple disconnected systems to complete a single review task",
            },
            {
              role: "Pharmacy Technician",
              coreJob: "Process prescriptions and route exceptions to pharmacists",
              painPoint:
                "Unclear error communication requiring repeated back-and-forth clarification",
            },
            {
              role: "Pharmacy Manager",
              coreJob: "Oversee workflow performance and throughput across the team",
              painPoint:
                "No visibility into task progress or where bottlenecks were occurring",
            },
            {
              role: "IT / System Administrator",
              coreJob: "Maintain system integrity and the multi-application environment",
              painPoint:
                "Managing multiple applications with limited integration between them",
            },
            {
              role: "Enterprise Stakeholder",
              coreJob:
                "Ensure nationwide rollout consistency across 9,000+ locations",
              painPoint:
                "Changes needed to minimize disruption while improving measurable efficiency",
            },
          ]}
          designMoves={[
            {
              number: "1",
              title: "Shift from Record-Based to Task-Based Workflow",
              description:
                "I redesigned the review flow around discrete, modular tasks rather than forcing pharmacists to process entire records for every interaction - reducing unnecessary reprocessing and cognitive load.",
            },
            {
              number: "2",
              title: "Introduce Keyboard-First Interaction Model",
              description:
                "I designed keyboard-driven navigation and confirmation patterns throughout the workflow, replacing mouse-heavy interactions that slowed throughput in high-volume environments.",
            },
            {
              number: "3",
              title: "Embed Source Data Directly into Workflow",
              description:
                "I unified prescription data and source image into a single side-by-side interface, eliminating the context switching required between multiple applications during validation.",
            },
            {
              number: "4",
              title: "Implement Contextual Exception Handling",
              description:
                "I introduced inline, field-level commenting tied directly to specific data points, replacing generic error flags with actionable, specific context for technicians.",
            },
            {
              number: "5",
              title: "Add Persistent Visual Progress Indicators",
              description:
                "I designed visual markers that indicate reviewed vs. pending workflow sections, enabling pharmacists to resume tasks accurately after interruptions without repeated rework.",
            },
            {
              number: "6",
              title: "Contribute Patterns to the Broader Design System",
              description:
                "I collaborated with cross-functional teams to ensure the interaction patterns I introduced were reusable and scalable across additional workflow verticals within the ecosystem.",
            },
          ]}
          beforeAfterItems={{
            before: [
              "Pharmacists navigated multiple disconnected applications per task",
              "Records were processed in full regardless of task scope",
              "Error flags lacked context and specificity",
              "Mouse-heavy interactions slowed throughput in high-volume environments",
              "No indicators of progress or task completion across workflows",
              "Prescription validation required repeated context switching between systems",
              "Technicians re-analyzed entire records for minor corrections",
            ],
            after: [
              "Workflows restructured around task-based, modular components",
              "Prescription data and source image displayed side-by-side in a unified interface",
              "Inline field-level commenting tied to specific data points",
              "Keyboard-driven navigation and confirmation patterns introduced",
              "Visual markers indicate reviewed vs. pending workflow sections",
              "Context switching eliminated through unified interface design",
              "First-pass resolution improved through contextual exception handling",
            ],
          }}
          interactiveComparisonContent={{
            title: "Interactive Comparison",
            beforeTitle: "Fragmented Multi-Application Workflow",
            beforeSubtitle: "Context switching between disconnected systems",
            afterTitle: "Unified Task-Based Interface",
            afterSubtitle: "Side-by-side data view with streamlined navigation",
            caption:
              "Previously, prescription review required navigating between multiple disconnected applications. The redesigned interface unifies prescription data and source validation into a single, task-based view.",
          }}
          processOverviewSteps={[
            {
              title: "Workflow Immersion & Contextual Inquiry",
              description:
                "I led design workshops with pharmacists, technicians, and SMEs to map how prescription data moved across systems. These sessions surfaced key friction points, including redundant data entry, fragmented validation, and frequent context switching.",
            },
            {
              title: "Task Decomposition & Flow Restructuring",
              description:
                "I restructured the prescription review process into modular, task-based flows aligned with how pharmacists work. This enabled improvements such as streamlined exception handling, collapsible sections to reduce clutter, and simplified prescriber switching, transforming complex record-level tasks into guided, sequential actions.",
            },
            {
              title: "Interaction Model Design (Speed & Accuracy First)",
              description:
                "I designed interaction patterns for high-frequency use, prioritizing keyboard input, inline validation, and reduced navigation overhead. This minimized friction in the review process, allowing pharmacists to spend less time validating technician-entered data and more time on higher-value clinical and operational work.",
            },
            {
              title: "Constraint-Aware Prototyping",
              description:
                "After aligning on low-fidelity concepts with stakeholders, I developed Figma prototypes that translated approved workflows into testable interactions. These prototypes were used for usability validation while ensuring the designs remained feasible within the constraints of the existing multi-application ecosystem.",
            },
            {
              title: "Cross-Functional Alignment & Iteration",
              description:
                "I worked closely with pharmacists, product, and engineering to validate workflows and refine interactions through continuous feedback. By adhering to and contributing to the enterprise design system, the solution remained grounded in real-world use while scaling consistently across additional workflows.",
            },
          ]}
        />

        {/* What I Learned Section */}
        <WhatILearnedSection
          paragraphs={[
            "The most meaningful outcome was not just improved metrics, but a shift in how the system felt to its users.",
            "Pharmacists described the experience as lighter, faster, and easier to navigate — enabling them to focus less on managing the system and more on patient care.",
            "This project reinforced that high-stakes environments don't require dramatic redesigns. They require clear thinking about what slows people down, and disciplined solutions that remove that friction without introducing cognitive burden.",
          ]}
        />

        {/* Footer */}
        <CaseStudyFooter
          previousStudy={{
            title: "Previous Case Study",
            subtitle: "Walgreens Pharmacy Workflow",
            href: "/case-studies/walgreens",
          }}
          nextStudy={{
            title: "Next Case Study",
            subtitle: "MediaPlatform Broadcast Collaboration",
            href: "/case-studies/mediaplatform",
          }}
        />
      </main>
    </div>
  )
}
