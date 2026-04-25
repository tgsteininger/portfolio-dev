import { Container } from "@/components/layout"
import { cn } from "@/lib/utils"

const linkClass = cn(
  "focus-ring-standard font-ui font-medium uppercase tracking-[0.1em] outline-none transition-fast",
  "whitespace-nowrap text-[length:var(--text-body-sm)] text-[var(--color-neutral-700)]",
  "hover:text-[var(--color-neutral-900)] focus-visible:underline"
)

export function RasdenFooter() {
  return (
    <footer className="mt-auto border-t clr-border-subtle clr-bg-page">
      <Container className="py-[var(--space-12)]">
        <div
          className={cn(
            "flex w-full min-w-0 flex-col items-start gap-y-[var(--space-06)] text-left",
            "min-[40rem]:flex-row min-[40rem]:items-center min-[40rem]:justify-between min-[40rem]:gap-y-0"
          )}
        >
          <div className="shrink-0">
            <p
              className="font-heading font-medium uppercase tracking-[0.06em] clr-text-primary"
              style={{ fontSize: "var(--text-heading-05)" }}
            >
              <span>RASDEN</span>
              <span
                className="font-ui font-normal normal-case tracking-[0.02em]"
                style={{
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-neutral-600)",
                  marginLeft: "var(--space-04)",
                }}
              >
                © 2025
              </span>
            </p>
          </div>

          <div
            className={cn(
              "flex w-full max-w-full flex-col flex-nowrap items-start gap-y-[var(--space-04)]",
              "min-[40rem]:w-auto min-[40rem]:flex-row min-[40rem]:flex-wrap min-[40rem]:justify-end",
              "min-[40rem]:gap-x-[var(--space-08)] min-[40rem]:gap-y-0 lg:gap-x-[var(--space-10)]"
            )}
          >
            <a href="#top" className={linkClass}>
              Back to top
            </a>
            <a href="#inquiries" className={linkClass}>
              Inquiries
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
