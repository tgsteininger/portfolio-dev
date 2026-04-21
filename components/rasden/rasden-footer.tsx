import Link from "next/link"

import { Container } from "@/components/layout"
import { cn } from "@/lib/utils"

const FOOTER_LINKS: { id: string; label: string }[] = [
  { id: "philosophy", label: "Philosophy" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "structure", label: "Structure" },
  { id: "governance", label: "Governance" },
]

export function RasdenFooter() {
  return (
    <footer className="mt-auto border-t clr-border-subtle clr-bg-page">
      <Container className="py-[var(--space-12)]">
        <div
          className={cn(
            "flex w-full min-w-0 flex-col items-start gap-y-[var(--space-06)] text-left",
            "sm:flex-row sm:items-start sm:justify-between sm:gap-y-0"
          )}
        >
          <div className="shrink-0">
            <p
              className="font-heading font-medium uppercase tracking-[0.06em] clr-text-primary"
              style={{ fontSize: "var(--text-heading-05)" }}
            >
              Rasden
            </p>
            <p
              className="font-ui tracking-[0.02em]"
              style={{
                fontSize: "var(--text-body-sm)",
                color: "var(--color-neutral-600)",
                marginTop: "var(--space-03)",
              }}
            >
              © 2026
            </p>
          </div>

          <nav
            aria-label="Rasden sections"
            className={cn(
              /* Below 640px: single column, DOM order, left-aligned stack. */
              "flex w-full max-w-full flex-col flex-nowrap items-start gap-y-[var(--space-04)]",
              "min-[40rem]:min-w-0 min-[40rem]:w-auto min-[40rem]:flex-row min-[40rem]:flex-nowrap min-[40rem]:justify-end",
              "min-[40rem]:gap-x-[var(--space-08)] min-[40rem]:gap-y-0 lg:gap-x-[var(--space-10)]"
            )}
          >
            {FOOTER_LINKS.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className={cn(
                  "font-ui font-medium uppercase tracking-[0.1em] outline-none transition-fast",
                  "whitespace-nowrap",
                  "text-[length:var(--text-body-sm)] text-[var(--color-neutral-600)]",
                  "hover:text-[var(--color-neutral-900)] focus-visible:underline"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
