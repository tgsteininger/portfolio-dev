"use client"

import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/layout"
import { openContactEmail } from "@/lib/contact-mailto"

/**
 * CTASection - Call-to-action section with centered content.
 * Placeholder content - to be customized per project.
 */
export function CTASection() {
  return (
    <Section background="default">
      <Container size="reading">
        <div className="text-center">
          <h2 
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-heading-02)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
            }}
          >
            Have a complex system that needs clarity?
          </h2>
          <p 
            style={{
              marginTop: "var(--space-05)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-md)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            I design structured, scalable solutions for high-stakes workflows. Let&apos;s discuss how we can improve alignment, efficiency, and decision-making in your product.
          </p>
          <div style={{ marginTop: "var(--space-09)" }}>
            <Button size="lg" type="button" onClick={() => openContactEmail()}>
              Start a Conversation
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
