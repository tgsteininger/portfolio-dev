import { Section, Container } from "@/components/layout"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

/**
 * AboutSection - Introduction section with enterprise systems focus.
 * Uses the same Container + 12-col grid as the hero (7/6 span) for alignment;
 * text block capped ~760px for readability, left-aligned (CTASection below stays centered).
 */
export function AboutSection() {
  return (
    <Section id="about" background="subtle">
      <Container>
        <div
          className="grid grid-cols-1 lg:grid-cols-12 text-left"
          style={{ gap: "var(--grid-gap-lg)" }}
        >
          <div className="lg:col-span-7 xl:col-span-6">
            <div
              className="flex flex-col items-start"
              style={{
                gap: "var(--space-07)",
                maxWidth: "min(100%, 47.5rem)",
              }}
            >
              {/* Section Heading */}
              <h2
                className="clr-text-primary font-heading"
                style={{
                  fontSize: "var(--text-heading-02)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                About
              </h2>

              {/* Body Content */}
              <div
                className="flex flex-col"
                style={{ gap: "var(--space-06)" }}
              >
                <p
                  className="clr-text-secondary font-body"
                  style={{
                    fontSize: "var(--text-body-md)",
                    lineHeight: 1.7,
                  }}
                >
                  I design enterprise systems and product architectures for organizations navigating operational complexity. My work focuses on aligning user needs, data, and workflows into structured, scalable experiences.
                </p>
                <p
                  className="clr-text-secondary font-body"
                  style={{
                    fontSize: "var(--text-body-md)",
                    lineHeight: 1.7,
                  }}
                >
                  I operate at the intersection of design, engineering, and business, translating complexity into systems that support clarity, speed, and informed decision-making.
                </p>
              </div>

              {/* CTA Link — inline, left-aligned vs centered CTASection below */}
              <div style={{ marginTop: "var(--space-03)" }}>
                <Link
                  href="/work"
                  className="group inline-flex items-center clr-text-accent font-ui transition-fast rounded-[var(--radius-02)] focus-visible:focus-ring-standard outline-none hover:underline underline-offset-4"
                  style={{
                    fontSize: "var(--text-body-md)",
                    fontWeight: 500,
                    gap: "var(--space-02)",
                    padding: "var(--space-02) var(--space-03)",
                    margin: "calc(var(--space-02) * -1) calc(var(--space-03) * -1)",
                  }}
                >
                  <span>Explore My Work</span>
                  <ChevronRight
                    className="arrow-shift-right"
                    style={{
                      width: "var(--icon-md)",
                      height: "var(--icon-md)",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
