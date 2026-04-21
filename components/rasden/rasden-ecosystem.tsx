import Image from "next/image"

import { Container, Section } from "@/components/layout"
import { cn } from "@/lib/utils"

const initiatives = [
  {
    title: "Rasden Digital",
    description:
      "Design and development of scalable digital systems, built to support long-term growth and evolving needs.",
    imageSrc: "/rasden/rasden-digital.png",
    imageAlt:
      "Structured digital foundation representing scalable systems for Rasden Digital.",
  },
  {
    title: "Emerging Initiatives",
    description:
      "New ventures developed over time as part of a modular, system-driven approach.",
    imageSrc: "/rasden/emerging-initiatives.png",
    imageAlt:
      "Open-graph visual for Rasden representing emerging initiatives within the ecosystem.",
  },
] as const

export function RasdenEcosystem() {
  return (
    <Section
      id="ecosystem"
      spacing="large"
      background="subtle"
      style={{ paddingBlock: "var(--space-12)" }}
    >
      <Container>
        <p
          className="font-ui font-normal uppercase tracking-[0.12em] text-pretty"
          style={{
            fontSize: "var(--text-label-md)",
            color: "var(--color-red-800)",
            marginBottom: "var(--space-08)",
          }}
        >
          Ecosystem
        </p>
        <h2
          className={cn(
            "font-heading font-medium tracking-tight clr-text-primary text-pretty min-[40rem]:font-semibold",
            "text-[length:var(--text-heading-02)] md:text-[length:var(--text-heading-01)]",
            "lg:text-[length:var(--text-display-lg)] xl:text-[length:var(--text-heading-01)]"
          )}
          style={{
            lineHeight: 1.15,
            marginBottom: "var(--space-10)",
          }}
        >
          A focused set of initiatives developed within a common framework.
        </h2>

        <div
          className={cn(
            "clr-bg-surface rounded-[var(--radius-05)]",
            "p-[var(--space-08)] min-[40rem]:p-[var(--space-12)] lg:p-[var(--space-14)]"
          )}
        >
          <div
            className={cn(
              "grid min-w-0 grid-cols-1 gap-y-[var(--space-10)]",
              "md:grid-cols-2 md:items-stretch md:gap-x-0 md:gap-y-0",
              "md:divide-x md:divide-[var(--color-neutral-200)]/60"
            )}
          >
            {initiatives.map(({ title, description, imageSrc, imageAlt }, i) => (
              <div
                key={title}
                className={cn(
                  "flex min-w-0 flex-col",
                  i === 0 && "md:pr-[var(--space-08)]",
                  i === 1 && "md:pl-[var(--space-08)]"
                )}
              >
                <h3
                  className="font-heading font-medium clr-text-primary text-pretty"
                  style={{
                    fontSize: "var(--text-heading-05)",
                    marginBottom: "var(--space-04)",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="font-body clr-text-secondary text-pretty"
                  style={{
                    fontSize: "var(--text-body-md)",
                    lineHeight: "var(--leading-relaxed)",
                    marginBottom: 0,
                  }}
                >
                  {description}
                </p>
                <div
                  className="relative mt-[var(--space-06)] aspect-[16/9] w-full min-h-0 overflow-hidden rounded-[var(--radius-03)]"
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    draggable={false}
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="nonDraggableImage object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
