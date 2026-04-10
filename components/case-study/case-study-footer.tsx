"use client"

import Link from "next/link"
import { ArrowUp, ArrowLeft, ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"

interface CaseStudyNavLink {
  title: string
  subtitle: string
  href: string
}

interface CaseStudyFooterProps {
  previousStudy?: CaseStudyNavLink
  nextStudy?: CaseStudyNavLink
}

/**
 * CaseStudyFooter - Footer for case study pages with:
 * - Back to top link
 * - Previous/Next case study navigation
 * 
 * Uses consistent interaction patterns:
 * - transition-fast (150ms)
 * - Blue-50 hover backgrounds
 * - Arrow directional shifts on hover
 * - Proper focus states
 */
export function CaseStudyFooter({ 
  previousStudy,
  nextStudy,
}: CaseStudyFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Shared styles for nav links
  const navLinkBaseClass = "group flex items-center gap-[var(--space-02)] font-body clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-blue-50)] hover:-translate-y-px active:translate-y-0 active:bg-[var(--color-blue-100)] active:scale-[0.98] rounded-[var(--radius-02)] transition-fast focus-ring-standard outline-none"
  
  const navLinkStyle = {
    fontSize: "var(--text-body-sm)",
    fontWeight: 500,
    padding: "var(--space-02) var(--space-03)",
    margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
  }

  return (
    <footer
      className="border-t clr-border-subtle"
      style={{
        backgroundColor: "var(--color-bg-page)",
        paddingTop: "var(--space-06)",
        paddingBottom: "var(--space-06)",
      }}
    >
      <Container>
        {/* Desktop layout (lg and up) - Full horizontal spread */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-[var(--space-02)] font-body clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.98] cursor-pointer rounded-[var(--radius-02)] transition-fast focus-ring-standard outline-none"
            style={{
              fontSize: "var(--text-body-sm)",
              background: "none",
              border: "none",
              padding: "var(--space-02) var(--space-03)",
              margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
            }}
          >
            <ArrowUp 
              className="arrow-shift-up"
              style={{ 
                width: "var(--icon-sm)", 
                height: "var(--icon-sm)" 
              }} 
            />
            <span>Back to Top</span>
          </button>

          {/* Case Study Navigation */}
          <div className="flex items-center gap-[var(--space-10)]">
            {/* Previous Case Study */}
            {previousStudy && (
              <Link
                href={previousStudy.href}
                prefetch={false}
                className={navLinkBaseClass}
                style={navLinkStyle}
              >
                <ArrowLeft 
                  className="arrow-shift-left"
                  style={{ 
                    width: "var(--icon-sm)", 
                    height: "var(--icon-sm)",
                  }} 
                />
                <span>Previous Case Study</span>
              </Link>
            )}

            {/* Next Case Study */}
            {nextStudy && (
              <Link
                href={nextStudy.href}
                prefetch={false}
                className={navLinkBaseClass}
                style={navLinkStyle}
              >
                <span>Next Case Study</span>
                <ArrowRight 
                  className="arrow-shift-right"
                  style={{ 
                    width: "var(--icon-sm)", 
                    height: "var(--icon-sm)",
                  }} 
                />
              </Link>
            )}
          </div>
        </div>

        {/* Tablet layout (md to lg) - Condensed horizontal with tighter spacing */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-[var(--space-02)] font-body clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.98] cursor-pointer rounded-[var(--radius-02)] transition-fast focus-ring-standard outline-none"
            style={{
              fontSize: "var(--text-body-sm)",
              background: "none",
              border: "none",
              padding: "var(--space-02) var(--space-03)",
              margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
            }}
          >
            <ArrowUp 
              className="arrow-shift-up"
              style={{ 
                width: "var(--icon-sm)", 
                height: "var(--icon-sm)" 
              }} 
            />
            <span>Back to Top</span>
          </button>

          {/* Case Study Navigation - Condensed */}
          <div className="flex items-center gap-[var(--space-05)]">
            {/* Previous Case Study */}
            {previousStudy && (
              <Link
                href={previousStudy.href}
                prefetch={false}
                className={navLinkBaseClass}
                style={navLinkStyle}
              >
                <ArrowLeft 
                  className="arrow-shift-left"
                  style={{ 
                    width: "var(--icon-sm)", 
                    height: "var(--icon-sm)",
                  }} 
                />
                <span>Previous Case Study</span>
              </Link>
            )}

            {/* Next Case Study */}
            {nextStudy && (
              <Link
                href={nextStudy.href}
                prefetch={false}
                className={navLinkBaseClass}
                style={navLinkStyle}
              >
                <span>Next Case Study</span>
                <ArrowRight 
                  className="arrow-shift-right"
                  style={{ 
                    width: "var(--icon-sm)", 
                    height: "var(--icon-sm)",
                  }} 
                />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile layout (below md) - Single row: Back to Top left, Prev/Next right */}
        <div className="flex md:hidden items-center justify-between">
          {/* Back to Top - Icon only */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center font-body clr-text-secondary active:clr-text-primary active:bg-[var(--color-blue-100)] active:scale-[0.95] cursor-pointer rounded-[var(--radius-02)] transition-fast focus-ring-standard outline-none"
            style={{
              background: "none",
              border: "none",
              padding: "var(--space-03)",
              margin: "calc(var(--space-03) * -1)",
            }}
          >
            <ArrowUp 
              style={{ 
                width: "var(--icon-md)", 
                height: "var(--icon-md)" 
              }} 
            />
          </button>

          {/* Case Study Navigation */}
          <div className="flex items-center gap-[var(--space-05)]">
            {/* Previous */}
            {previousStudy && (
              <Link
                href={previousStudy.href}
                prefetch={false}
                className="group flex items-center gap-[var(--space-02)] font-body clr-text-secondary active:clr-text-primary active:bg-[var(--color-blue-100)] active:scale-[0.98] rounded-[var(--radius-02)] transition-fast focus-ring-standard outline-none"
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 500,
                  padding: "var(--space-02) var(--space-03)",
                  margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                }}
              >
                <ArrowLeft 
                  style={{ 
                    width: "var(--icon-sm)", 
                    height: "var(--icon-sm)",
                  }} 
                />
                <span>Previous</span>
              </Link>
            )}

            {/* Next */}
            {nextStudy && (
              <Link
                href={nextStudy.href}
                prefetch={false}
                className="group flex items-center gap-[var(--space-02)] font-body clr-text-secondary active:clr-text-primary active:bg-[var(--color-blue-100)] active:scale-[0.98] rounded-[var(--radius-02)] transition-fast focus-ring-standard outline-none"
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 500,
                  padding: "var(--space-02) var(--space-03)",
                  margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                }}
              >
                <span>Next</span>
                <ArrowRight 
                  style={{ 
                    width: "var(--icon-sm)", 
                    height: "var(--icon-sm)",
                  }} 
                />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </footer>
  )
}
