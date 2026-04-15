import { Container } from "@/components/layout/container"

export function MediaPlatformDecisionFrameworkSection() {
  const operatingConstraints = [
    {
      title: "Live Broadcast Environment",
      detail: "Zero tolerance for failure during live events.",
    },
    {
      title: "Mixed User Skill Levels",
      detail:
        "Technical producers and non-technical presenters required different levels of control.",
    },
    {
      title: "Legacy Infrastructure Dependencies",
      detail:
        "Existing video protocols and system architecture limited implementation flexibility.",
    },
    {
      title: "High Presentation Standards",
      detail: "Broadcasts required polished, brand-aligned output.",
    },
    {
      title: "Enterprise Delivery Timelines",
      detail: "Solutions needed to ship within tight production schedules.",
    },
  ]

  const keyDesignDecisions = [
    {
      number: "1",
      title: "Prioritize Speed Over Configuration Depth",
      problem:
        "Users were required to configure too many parameters before accessing the production environment, creating friction and delaying event setup.",
      decision:
        "Reduce upfront configuration and enable immediate access to the broadcast canvas with quick-start defaults and progressive refinement.",
      impact:
        "Accelerated event setup and reduced friction, allowing teams to move quickly from planning to execution.",
    },
    {
      number: "2",
      title: "Separate Roles Instead of Sharing Interfaces",
      problem:
        "A single shared interface forced different user types to navigate irrelevant controls, increasing cognitive load and operational confusion.",
      decision:
        "Introduce role-based workspaces tailored to producers, presenters, and administrators.",
      impact:
        "Improved clarity, reduced cognitive overhead, and enabled each role to operate more efficiently within their context.",
    },
    {
      number: "3",
      title: "Design for Live Pressure, Not Ideal Conditions",
      problem:
        "Manual layout adjustments and complex controls created risk and hesitation during live broadcasts.",
      decision:
        "Replace manual configuration with preconfigured scenes and one-click switching to support fast, confident decision-making.",
      impact:
        "Reduced operator stress and improved reliability during high-stakes live events.",
    },
    {
      number: "4",
      title: "Shift from System-Centric to User-Centric Mental Models",
      problem:
        "The interface relied on technical terminology and system-oriented structures that did not match how users think about broadcasting workflows.",
      decision:
        "Reframe the UI around real-world production concepts and simplify language to align with user expectations.",
      impact:
        "Improved learnability, reduced onboarding time, and increased overall usability.",
    },
    {
      number: "5",
      title: "Enable Self-Service Over Dependency on Engineering",
      problem:
        "Branding, layout changes, and configuration updates required engineering support, creating bottlenecks and slowing iteration.",
      decision:
        "Introduce self-service tools for branding, templating, and layout customization.",
      impact:
        "Reduced reliance on engineering and enabled teams to operate more independently and efficiently.",
    },
  ]

  const tradeoffs = [
    {
      title: "Speed vs. Control",
      context:
        "Live broadcast environments demand immediate responsiveness, but too much flexibility in controls can slow operators under pressure.",
      rationale:
        "Prioritize rapid, one-click actions through preconfigured scenes while preserving deeper controls for advanced users when needed.",
    },
    {
      title: "Flexibility vs. Simplicity",
      context:
        "Supporting diverse use cases across enterprise broadcasts introduces complexity that can overwhelm non-technical users.",
      rationale:
        "Reduce cognitive load through role-based interfaces and constrained workflows while maintaining modular components for extensibility.",
    },
    {
      title: "Reliability vs. Feature Depth",
      context:
        "Adding advanced capabilities can introduce instability in live environments where failure is not an option.",
      rationale:
        "Favor stable, predictable interactions and proven patterns to ensure consistent performance during high-stakes events.",
    },
  ]

  return (
    <section
      id="decision-framework"
      className="relative"
      style={{
        paddingTop: "var(--space-14)",
        paddingBottom: "var(--space-14)",
        background: "color-mix(in srgb, var(--color-blue-50) 66%, transparent)",
      }}
    >
      <Container>
        <header
          className="flex flex-col"
          data-reveal
          style={{
            gap: "var(--space-05)",
            marginBottom: "var(--space-08)",
          }}
        >
          <h2
            className="font-heading clr-text-primary"
            style={{
              fontSize: "var(--text-heading-02)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Decision Framework & Constraints
          </h2>
          <p
            className="font-body clr-text-secondary"
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.6,
              maxWidth: "var(--layout-content-max)",
            }}
          >
            The redesign operated within strict technical and operational constraints.
            Each decision was made with awareness of live production risk, system
            limitations, and enterprise expectations.
          </p>
        </header>

        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ gap: "var(--grid-gap-lg)" }}
        >
          <article
            data-reveal
            data-reveal-delay="60"
            style={{
              gridColumn: "span 4 / span 4",
            }}
          >
            <h3
              className="font-ui clr-text-tertiary"
              style={{
                fontSize: "var(--text-label-sm)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "var(--space-06)",
              }}
            >
              Operating Constraints
            </h3>
            <div className="flex flex-col">
              {operatingConstraints.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    paddingTop: index === 0 ? "0" : "var(--space-05)",
                    paddingBottom:
                      index === operatingConstraints.length - 1 ? "0" : "var(--space-05)",
                    borderBottom:
                      index === operatingConstraints.length - 1
                        ? "none"
                        : "var(--stroke-01) solid var(--color-border-subtle)",
                  }}
                >
                  <h4
                    className="font-heading clr-text-primary"
                    style={{
                      fontSize: "var(--text-heading-05)",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      marginBottom: "var(--space-02)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-body clr-text-secondary"
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article
            data-reveal
            data-reveal-delay="120"
            style={{
              gridColumn: "span 4 / span 4",
            }}
          >
            <h3
              className="font-ui"
              style={{
                fontSize: "var(--text-label-sm)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "var(--space-06)",
                color: "var(--color-blue-500)",
              }}
            >
              Key Design Decisions
            </h3>
            <div className="flex flex-col">
              {keyDesignDecisions.map((item, index) => (
                <div
                  key={item.number}
                  style={{
                    paddingTop: index === 0 ? "0" : "var(--space-05)",
                    paddingBottom: "var(--space-05)",
                    borderBottom:
                      index === keyDesignDecisions.length - 1
                        ? "none"
                        : "var(--stroke-01) solid var(--color-border-subtle)",
                  }}
                >
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: "var(--space-08) minmax(0, 1fr)",
                      columnGap: "var(--space-03)",
                    }}
                  >
                    <span
                      className="flex items-center justify-center font-ui"
                      style={{
                        width: "var(--space-06)",
                        height: "var(--space-06)",
                        borderRadius: "var(--radius-full)",
                        backgroundColor:
                          "color-mix(in srgb, var(--color-blue-100) 70%, transparent)",
                        color: "var(--color-blue-500)",
                        fontSize: "var(--text-caption)",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h4
                        className="font-heading clr-text-primary"
                        style={{
                          fontSize: "var(--text-body-lg)",
                          fontWeight: 600,
                          lineHeight: 1.35,
                          marginBottom: "var(--space-02)",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="font-body clr-text-secondary"
                        style={{
                          fontSize: "var(--text-body-sm)",
                          lineHeight: 1.6,
                          marginBottom: "var(--space-02)",
                        }}
                      >
                        <span className="font-semibold clr-text-primary">Problem:</span>{" "}
                        {item.problem}
                      </p>
                      <p
                        className="font-body clr-text-secondary"
                        style={{
                          fontSize: "var(--text-body-sm)",
                          lineHeight: 1.6,
                          marginBottom: "var(--space-02)",
                        }}
                      >
                        <span className="font-semibold clr-text-primary">Decision:</span>{" "}
                        {item.decision}
                      </p>
                      <p
                        className="font-body"
                        style={{
                          fontSize: "var(--text-body-sm)",
                          lineHeight: 1.6,
                          color: "var(--color-blue-500)",
                        }}
                      >
                        <span className="font-semibold">Impact:</span> {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article
            data-reveal
            data-reveal-delay="180"
            style={{
              gridColumn: "span 4 / span 4",
            }}
          >
            <h3
              className="font-ui clr-text-tertiary"
              style={{
                fontSize: "var(--text-label-sm)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "var(--space-06)",
              }}
            >
              Tradeoffs & Rationale
            </h3>
            <div className="flex flex-col" style={{ gap: "var(--space-05)" }}>
              {tradeoffs.map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "var(--color-bg-surface)",
                    border: "var(--stroke-01) solid var(--color-border-subtle)",
                    borderRadius: "var(--radius-04)",
                    boxShadow: "var(--elevation-00)",
                    padding: "var(--space-06)",
                  }}
                >
                  <h4
                    className="font-ui clr-text-primary"
                    style={{
                      fontSize: "var(--text-label-sm)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginBottom: "var(--space-03)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-body clr-text-secondary"
                    style={{
                      fontSize: "var(--text-body-md)",
                      lineHeight: 1.6,
                      marginBottom: "var(--space-04)",
                    }}
                  >
                    {item.context}
                  </p>
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: "var(--space-05) minmax(0, 1fr)",
                      columnGap: "var(--space-02)",
                      alignItems: "start",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        color: "var(--color-blue-500)",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p
                      className="font-body clr-text-primary"
                      style={{
                        fontSize: "var(--text-body-sm)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.rationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
