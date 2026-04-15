import type { Metadata } from "next"
import { AppBackground } from "@/components/app-background"
import { SiteHeader } from "@/components/site-header"
import { CaseStudySectionNav } from "@/components/case-study/case-study-section-nav"
import { CaseStudyMotionController } from "@/components/case-study/case-study-motion-controller"
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero"
import { ExecutiveSummarySection } from "@/components/case-study/executive-summary-section"
import { BusinessOutcomesSection } from "@/components/case-study/business-outcomes-section"
import { SystemTransformationSection } from "@/components/case-study/system-transformation-section"
import { StructuralBottlenecksSection } from "@/components/case-study/structural-bottlenecks-section"
import { DetailedProcessSection } from "@/components/case-study/detailed-process-section"
import { WhatILearnedSection } from "@/components/case-study/what-i-learned-section"
import { CaseStudyFooter } from "@/components/case-study/case-study-footer"

export const metadata: Metadata = {
  title: "Coca-Cola Case Study | Steininger UX",
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

        <CaseStudyHero />

        {/* Executive Summary Section */}
        <ExecutiveSummarySection
          introduction={[
            "Coca-Cola operates a global supply chain with hundreds of bottling facilities, each with its own equipment, workflows, and reporting needs. But the system used to collect benchmarking data across those facilities was far less sophisticated than the operation it supported. Surveys were created in spreadsheets, reviewed through email threads, translated inconsistently, and in some cases printed, mailed, scanned, or faxed back.",
            "What should have been a structured operational process had become a fragile collection of workarounds.",
            "I was brought in to design a content management system that could bring order to that complexity. The goal was to help teams create, approve, translate, and publish surveys more efficiently, while giving leadership a centralized way to understand how facilities were performing and where action was needed.",
            "Built in PowerApps, the solution had to work within platform constraints while still feeling intuitive to users who were deeply accustomed to Excel-based workflows. The challenge was not just to improve the interface. It was to replace an unreliable process with a system people could actually trust.",
          ]}
          problemDescription="Coca-Cola lacked a centralized, scalable way to manage benchmarking surveys across its global bottling network. Content was created and maintained through spreadsheets, emails, and manual publishing steps, which created version confusion, slowed approvals, and made multilingual distribution difficult. At the user level, creators, approvers, translators, and facility managers were all working through disconnected processes that introduced friction, delays, and avoidable errors."
          solutionDescription="I designed an enterprise CMS in PowerApps that transformed a fragmented survey process into a structured, role-based workflow. The platform enabled teams to build modular surveys, route them through approval queues, support translation workflows, and publish content without relying on developers for every update."
          roleDescription="I led UX strategy, interaction design, workflow modeling, and usability validation across the product. I worked closely with stakeholders, developers, and QA to align the system around real operational needs while ensuring the final solution could be implemented effectively within the chosen platform."
          impactDescription="The new CMS replaced ad hoc manual processes with a structured system for survey creation, approval, translation, and publication. It reduced dependency on engineering, improved clarity across user roles, and created a more scalable foundation for collecting global operational data."
          metrics={[
            { value: "40%", label: "Reduction in survey publishing time" },
            { value: "100+", label: "Global facilities rollout" },
          ]}
        />

        {/* Business Outcomes Section */}
        <BusinessOutcomesSection />

        {/* System Transformation Section */}
        <SystemTransformationSection />

        {/* Structural Bottlenecks Section */}
        <StructuralBottlenecksSection />

        {/* Detailed Process Section */}
        <DetailedProcessSection />

        {/* What I Learned Section */}
        <WhatILearnedSection />

        {/* Footer */}
        <CaseStudyFooter
          nextStudy={{
            title: "Next Case Study",
            subtitle: "Walgreens Pharmacy Workflow",
            href: "/case-studies/walgreens",
          }}
        />
      </main>
    </div>
  )
}
