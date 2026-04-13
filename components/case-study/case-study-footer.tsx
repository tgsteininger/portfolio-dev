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
  const navLinkBaseClass = "group flex items-center gap-[var(--space-02)] font-body clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-blue-50)] hover:-translate-y-px active:translate-y-0 active:bg-[var(--color-blue-100)] active:scale-[0.98] rounded-[var(--radius-02)] transition-slow focus-ring-standard outline-none"
  
  const navLinkStyle = {
    fontSize: "var(--text-body-sm)",
    fontWeight: 500,
    padding: "var(--space-02) var(--space-03)",
    margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
  }

  const desktopCaseStudyBlockClass =
    "group flex flex-col rounded-[var(--radius-02)] transition-slow focus-ring-standard outline-none hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.98]"

  return (
    <>
      {/* Spacer to prevent fixed footer covering page content */}
      <div aria-hidden="true" className="h-[77px] lg:h-[94px]" />

      <footer
        className="fixed inset-x-0 bottom-0 z-50 border-t clr-border-subtle"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-bg-page) 95%, transparent)",
          minHeight: "77px",
          WebkitBackdropFilter: "blur(6px)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Container className="h-full">
        {/* Desktop layout (lg and up) - Full horizontal spread */}
        <div
          className="hidden lg:flex items-center justify-between"
          style={{
            minHeight: "94px",
          }}
        >
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-[var(--space-02)] font-body clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.98] cursor-pointer rounded-[var(--radius-02)] transition-slow focus-ring-standard outline-none"
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
                className={desktopCaseStudyBlockClass}
                style={{
                  padding: "var(--space-02) var(--space-03)",
                  margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                }}
              >
                <div className="text-right">
                  <div
                    className="flex items-center gap-[var(--space-02)] font-body clr-text-secondary group-hover:clr-text-primary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 500,
                    }}
                  >
                    <ArrowLeft 
                      className="arrow-shift-left"
                      style={{ 
                        width: "var(--icon-sm)", 
                        height: "var(--icon-sm)",
                      }} 
                    />
                    <span>{previousStudy.title}</span>
                  </div>
                  <p
                    className="font-body clr-text-tertiary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      marginTop: "var(--space-01)",
                    }}
                  >
                    {previousStudy.subtitle}
                  </p>
                </div>
              </Link>
            )}

            {/* Next Case Study */}
            {nextStudy && (
              <Link
                href={nextStudy.href}
                prefetch={false}
                className={desktopCaseStudyBlockClass}
                style={{
                  padding: "var(--space-02) var(--space-03)",
                  margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                }}
              >
                <div className="text-left">
                  <div
                    className="flex items-center gap-[var(--space-02)] font-body clr-text-secondary group-hover:clr-text-primary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 500,
                    }}
                  >
                    <span>{nextStudy.title}</span>
                    <ArrowRight 
                      className="arrow-shift-right"
                      style={{ 
                        width: "var(--icon-sm)", 
                        height: "var(--icon-sm)",
                      }} 
                    />
                  </div>
                  <p
                    className="font-body clr-text-tertiary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      marginTop: "var(--space-01)",
                    }}
                  >
                    {nextStudy.subtitle}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Tablet layout (md to lg) - Condensed horizontal with tighter spacing */}
        <div
          className="hidden md:flex lg:hidden items-center justify-between"
          style={{
            minHeight: "77px",
          }}
        >
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-[var(--space-02)] font-body clr-text-secondary hover:clr-text-primary hover:bg-[var(--color-blue-50)] active:bg-[var(--color-blue-100)] active:scale-[0.98] cursor-pointer rounded-[var(--radius-02)] transition-slow focus-ring-standard outline-none"
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
        <div
          className="flex md:hidden items-center justify-between"
          style={{
            minHeight: "77px",
          }}
        >
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
    </>
  )
}
