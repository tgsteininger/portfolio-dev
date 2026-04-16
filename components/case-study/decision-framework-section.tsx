import { Container } from "@/components/layout/container"

/**
 * DecisionFrameworkSection
 *
 * Walgreens-only native section for decision framework and constraints.
 */
export function DecisionFrameworkSection() {
  const operatingConstraints = [
    {
      title: "Existing System Architecture",
      detail:
        "The solution needed to integrate into a multi-application ecosystem rather than replace it.",
    },
    {
      title: "High-Interruption Work Environment",
      detail:
        "Pharmacists frequently switch context mid-task, requiring strong state persistence across interactions.",
    },
    {
      title: "Speed and Accuracy Requirements",
      detail:
        "Workflows needed to be faster without introducing risk at prescription validation points.",
    },
    {
      title: "Cross-Role Dependency",
      detail:
        "Pharmacists and technicians rely on each other to complete workflows efficiently. Communication design was critical.",
    },
    {
      title: "Nationwide Rollout Considerations",
      detail:
        "Changes needed to minimize disruption and support adoption at scale across 9,000+ locations.",
    },
  ]

  const keyDesignDecisions = [
    {
      number: "1",
      title: "Shift from Record-Based to Task-Based Workflow",
      problem: "Users were forced to process entire records regardless of task scope.",
      decision:
        "Break workflows into modular, task-oriented components with progressive disclosure.",
      impact: "Reduced unnecessary reprocessing and improved task efficiency.",
    },
    {
      number: "2",
      title: "Introduce Keyboard-First Interaction Model",
      problem: "Mouse-heavy interactions slowed throughput in time-critical environments.",
      decision:
        "Design keyboard-driven navigation and confirmation patterns throughout the workflow.",
      impact: "Improved speed of interaction and reduced repetitive strain.",
    },
    {
      number: "3",
      title: "Embed Source Data Directly into Workflow",
      problem: "Users had to switch between applications to validate prescriptions.",
      decision:
        "Display prescription data and source image side-by-side within a unified interface.",
      impact: "Eliminated context switching and improved verification speed and accuracy.",
    },
    {
      number: "4",
      title: "Implement Contextual Exception Handling",
      problem: "Error communication lacked clarity and context.",
      decision:
        "Introduce inline, field-level commenting tied directly to specific data points.",
      impact: "Reduced ambiguity and improved first-pass resolution by technicians.",
    },
    {
      number: "5",
      title: "Add Persistent Visual Progress Indicators",
      problem: "Users lost track of workflow progress after interruptions.",
      decision:
        "Introduce visual markers to indicate reviewed vs. pending workflow sections.",
      impact: "Improved task continuity and reduced redundant work after interruptions.",
    },
  ]

  const tradeoffs = [
    {
      title: "Speed vs. Accuracy",
      context:
        "Increasing speed in prescription workflows introduces clinical risk.",
      rationale:
        "Optimize low-risk interactions (navigation, confirmation) while preserving safeguards at validation points.",
    },
    {
      title: "Flexibility vs. Standardization",
      context:
        "Pharmacy workflows vary slightly across locations and user preferences.",
      rationale:
        "Standardize core interaction patterns while allowing limited flexibility in task handling.",
    },
    {
      title: "System Replacement vs. Incremental Improvement",
      context: "A full system rebuild was not feasible within the engagement scope.",
      rationale:
        "Focus on workflow optimization within existing system constraints for maximum near-term impact.",
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
            The redesign operated within several critical constraints. Each major design
            decision was made with awareness of those boundaries and required explicit
            tradeoffs.
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
                color: "var(--color-blue-600)",
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
                        color: "var(--color-blue-600)",
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
                          color: "var(--color-blue-600)",
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
                        color: "var(--color-blue-600)",
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
