"use client"

import { Section, Container } from "@/components/layout"

/**
 * Client logo data with brand-specific styling
 */
interface ClientLogo {
  name: string
  id: string
}

const clients: ClientLogo[] = [
  { name: "Walgreens", id: "walgreens" },
  { name: "The Coca-Cola Company", id: "cocacola" },
  { name: "UCLA", id: "ucla" },
  { name: "Xerox", id: "xerox" },
  { name: "Avery Dennison", id: "avery" },
  { name: "NASA", id: "nasa" },
  { name: "UNFI", id: "unfi" },
  { name: "DaVita", id: "davita" },
  { name: "Sephora", id: "sephora" },
]

/**
 * SVG Logo Components - Faithful wordmark representations
 * All logos use --color-neutral-500 for consistent muted gray appearance
 */

function WalgreensLogo() {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-08)] w-auto"
      aria-label="Walgreens"
    >
      <text
        x="0"
        y="30"
        fill="var(--color-neutral-500)"
        fontFamily="Georgia, serif"
        fontSize="28"
        fontStyle="italic"
        fontWeight="400"
      >
        Walgreens
      </text>
    </svg>
  )
}

function CocaColaLogo() {
  return (
    <svg
      viewBox="0 0 240 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-08)] w-auto"
      aria-label="The Coca-Cola Company"
    >
      <text
        x="0"
        y="26"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-ui)"
        fontSize="11"
        fontWeight="400"
        letterSpacing="0.05em"
      >
        THE
      </text>
      <text
        x="32"
        y="30"
        fill="var(--color-neutral-500)"
        fontFamily="Brush Script MT, cursive"
        fontSize="26"
        fontWeight="400"
        fontStyle="italic"
      >
        Coca-Cola
      </text>
      <text
        x="150"
        y="26"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-ui)"
        fontSize="11"
        fontWeight="400"
        letterSpacing="0.05em"
      >
        COMPANY
      </text>
    </svg>
  )
}

function UCLALogo() {
  return (
    <svg
      viewBox="0 0 90 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-08)] w-auto"
      aria-label="UCLA"
    >
      <text
        x="0"
        y="32"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-heading)"
        fontSize="32"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        UCLA
      </text>
    </svg>
  )
}

function XeroxLogo() {
  return (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-08)] w-auto"
      aria-label="Xerox"
    >
      <text
        x="0"
        y="32"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-heading)"
        fontSize="32"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        xerox
      </text>
    </svg>
  )
}

function AveryDennisonLogo() {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-10)] w-auto"
      aria-label="Avery Dennison"
    >
      {/* Triangle icon */}
      <path
        d="M20 8 L35 38 L5 38 Z"
        fill="none"
        stroke="var(--color-neutral-500)"
        strokeWidth="2"
      />
      {/* AVERY text */}
      <text
        x="45"
        y="22"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-ui)"
        fontSize="12"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        AVERY
      </text>
      {/* DENNISON text */}
      <text
        x="45"
        y="38"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-ui)"
        fontSize="12"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        DENNISON
      </text>
    </svg>
  )
}

function NASALogo() {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-10)] w-auto"
      aria-label="NASA"
    >
      {/* Circular meatball outline */}
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="var(--color-neutral-500)"
      />
      {/* NASA text */}
      <text
        x="25"
        y="30"
        fill="white"
        fontFamily="var(--font-heading)"
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="0.02em"
      >
        NASA
      </text>
    </svg>
  )
}

function UNFILogo() {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-10)] w-auto"
      aria-label="UNFI"
    >
      {/* UNFI text */}
      <text
        x="0"
        y="26"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-heading)"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        UNFI
      </text>
      {/* Tagline */}
      <text
        x="0"
        y="42"
        fill="var(--color-neutral-400)"
        fontFamily="var(--font-ui)"
        fontSize="6"
        fontWeight="500"
        letterSpacing="0.02em"
      >
        BETTER FOOD. BETTER FUTURE.
      </text>
    </svg>
  )
}

function DaVitaLogo() {
  return (
    <svg
      viewBox="0 0 90 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-10)] w-auto"
      aria-label="DaVita"
    >
      {/* DaVita script text */}
      <text
        x="0"
        y="28"
        fill="var(--color-neutral-500)"
        fontFamily="Georgia, serif"
        fontSize="24"
        fontWeight="400"
        fontStyle="italic"
      >
        DaVita
      </text>
      {/* Tagline */}
      <text
        x="0"
        y="42"
        fill="var(--color-neutral-400)"
        fontFamily="var(--font-ui)"
        fontSize="8"
        fontWeight="400"
      >
        Kidney Care
      </text>
    </svg>
  )
}

function SephoraLogo() {
  return (
    <svg
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--space-08)] w-auto"
      aria-label="Sephora"
    >
      <text
        x="0"
        y="28"
        fill="var(--color-neutral-500)"
        fontFamily="var(--font-ui)"
        fontSize="20"
        fontWeight="400"
        letterSpacing="0.25em"
      >
        SEPHORA
      </text>
    </svg>
  )
}

/**
 * Logo renderer component
 */
function ClientLogoRenderer({ id }: { id: string }) {
  switch (id) {
    case "walgreens":
      return <WalgreensLogo />
    case "cocacola":
      return <CocaColaLogo />
    case "ucla":
      return <UCLALogo />
    case "xerox":
      return <XeroxLogo />
    case "avery":
      return <AveryDennisonLogo />
    case "nasa":
      return <NASALogo />
    case "unfi":
      return <UNFILogo />
    case "davita":
      return <DaVitaLogo />
    case "sephora":
      return <SephoraLogo />
    default:
      return null
  }
}

/**
 * Props for SelectedClientsSection
 */
interface SelectedClientsSectionProps {
  /** Section heading - defaults to "Selected Clients" */
  heading?: string
  /** Custom client list - defaults to internal client data */
  clientList?: ClientLogo[]
}

/**
 * SelectedClientsSection - Displays client logos in a restrained enterprise style
 * Each logo uses SVG with brand-appropriate wordmark treatments
 */
export function SelectedClientsSection({
  heading = "Selected Clients",
  clientList = clients,
}: SelectedClientsSectionProps) {
  return (
    <Section
      id="clients"
      spacing="default"
      background="default"
    >
      <Container>
        {/* Section Eyebrow */}
        <div className="mb-[var(--space-10)]">
          <p className="font-ui font-medium text-[length:var(--text-overline)] clr-text-tertiary uppercase tracking-[0.15em]">
            {heading}
          </p>
        </div>

        {/* Client Logos Grid - Flexible wrap layout */}
        <div className="flex flex-wrap items-center gap-x-[var(--space-10)] gap-y-[var(--space-08)] md:gap-x-[var(--space-12)] lg:gap-x-[var(--space-14)]">
          {clientList.map((client) => (
            <div
              key={client.id}
              className="flex items-center transition-fast opacity-70 hover:opacity-100"
            >
              <ClientLogoRenderer id={client.id} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
