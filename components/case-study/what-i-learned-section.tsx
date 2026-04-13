/**
 * WhatILearnedSection
 * 
 * A minimal, editorial closing section for the case study.
 * Features a clean heading and reflective paragraphs with generous spacing.
 */
export function WhatILearnedSection() {
  return (
    <section
      id="what-i-learned"
      style={{
        backgroundColor: "var(--color-bg-page)",
        paddingTop: "var(--space-12)",
        paddingBottom: "var(--space-14)",
      }}
    >
      {/* Centered editorial column */}
      <div
        style={{
          maxWidth: "820px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "var(--space-06)",
          paddingRight: "var(--space-06)",
        }}
      >
        {/* Section Heading - left-aligned within centered column */}
        <h2
          className="font-heading clr-text-primary"
          data-reveal
          style={{
            fontSize: "var(--text-heading-01)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "var(--space-07)",
          }}
        >
          What I Learned
        </h2>

        {/* Body Paragraphs */}
        <div
          className="flex flex-col"
          style={{
            gap: "var(--space-05)",
          }}
        >
          <p
            className="font-body clr-text-secondary"
            data-reveal
            data-reveal-delay="80"
            style={{
              fontSize: "var(--text-body-md)",
              lineHeight: 1.75,
            }}
          >
            This project reinforced that enterprise design is often less about novelty and more about replacing fragile habits with systems people can trust.
          </p>

          <p
            className="font-body clr-text-secondary"
            data-reveal
            data-reveal-delay="140"
            style={{
              fontSize: "var(--text-body-md)",
              lineHeight: 1.75,
            }}
          >
            The best solution was not the one with the most dramatic interface. It was the one that gave each role a clearer path forward without asking users to completely reinvent how they worked overnight.
          </p>

          <p
            className="font-body clr-text-secondary"
            data-reveal
            data-reveal-delay="200"
            style={{
              fontSize: "var(--text-body-md)",
              lineHeight: 1.75,
            }}
          >
            It also reminded me that operational complexity tends to hide inside familiar tools. A spreadsheet can look harmless on the surface, but when an entire workflow depends on it, it is often carrying far more risk than anyone wants to admit.
          </p>
        </div>
      </div>
    </section>
  )
}
