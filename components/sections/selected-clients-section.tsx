"use client"

import { Section, Container } from "@/components/layout"
import { cn } from "@/lib/utils"

/**
 * LG/XL (1024+): fixed two flex rows — row 2 always starts with DaVita.
 * MD (768–1023): 3-column `max-content` grid, fixed gaps, centered block (≥3 rows).
 * SM/XS (&lt;768): 2-column `max-content` grid, fixed gaps, centered block (≥3 rows).
 */
interface ClientEntry {
  id: string
  name: string
  src: string
}

const clientsRowOne: ClientEntry[] = [
  { id: "walgreens", name: "Walgreens", src: "/images/clients/walgreens.svg" },
  { id: "coca-cola", name: "The Coca-Cola Company", src: "/images/clients/coca-cola.svg" },
  { id: "ucla", name: "UCLA", src: "/images/clients/ucal.svg" },
  { id: "xerox", name: "Xerox", src: "/images/clients/xerox.svg" },
]

const clientsRowTwo: ClientEntry[] = [
  { id: "davita", name: "DaVita Kidney Care", src: "/images/clients/davita.svg" },
  { id: "nasa", name: "NASA", src: "/images/clients/nasa.svg" },
  { id: "avery-dennison", name: "Avery Dennison", src: "/images/clients/averydennison.svg" },
  { id: "unfi", name: "UNFI", src: "/images/clients/unfi.svg" },
  { id: "sephora", name: "Sephora", src: "/images/clients/sephora.svg" },
]

const clientsAll: ClientEntry[] = [...clientsRowOne, ...clientsRowTwo]

/**
 * Hidden ≥1024px. Sub-1024 grids (≥3 rows): centered `max-content` tracks + fixed column-gap (no 1fr stretch).
 */
const logoGridClass = cn(
  "m-0 min-w-0 w-full list-none overflow-visible p-0 min-[1024px]:hidden",
  "grid justify-center justify-items-center",
  "grid-cols-[repeat(2,max-content)]",
  /* SM / XS: fixed gutters */
  "max-[767px]:gap-x-[var(--space-06)] max-[767px]:gap-y-[var(--space-06)]",
  "max-[479px]:gap-x-[var(--space-05)] max-[479px]:gap-y-[14px]",
  /* MD: three max-content columns + fixed gutters */
  "min-[768px]:max-[1023px]:grid-cols-[repeat(3,max-content)]",
  "min-[768px]:max-[1023px]:gap-x-[var(--space-08)] min-[768px]:max-[1023px]:gap-y-[var(--space-07)]"
)

/** Vertical gap between row 1 and row 2 (MD / LG / XL). */
const desktopStackClass = cn(
  "hidden w-full min-[1024px]:flex min-[1024px]:flex-col min-[1024px]:items-center overflow-visible",
  "min-[1024px]:max-[1279px]:gap-y-10",
  "min-[1280px]:max-[1439px]:gap-y-12",
  "min-[1440px]:gap-y-[56px]"
)

/** MD / LG / XL: same column gap on row 1 and row 2 — breathable, matched rhythm. */
const desktopRowHorizontalGapClass = cn(
  "min-[1024px]:max-[1279px]:gap-x-[56px]",
  "min-[1280px]:max-[1439px]:gap-x-[72px]",
  "min-[1440px]:gap-x-[88px]"
)

const logoWrapperClass = cn(
  "flex min-w-0 items-center justify-center",
  "max-[479px]:h-[44px]",
  "min-[480px]:max-[767px]:h-12",
  "min-[768px]:max-[1023px]:h-[52px]",
  "min-[1024px]:max-[1279px]:h-14",
  "min-[1280px]:max-[1439px]:h-[60px]",
  "min-[1440px]:h-16"
)

const logoImgClass = cn(
  "h-auto w-auto max-w-full object-contain",
  "max-[479px]:max-h-6 max-[479px]:max-w-[112px]",
  "min-[480px]:max-[767px]:max-h-7 min-[480px]:max-[767px]:max-w-[124px]",
  "min-[768px]:max-[1023px]:max-h-[30px] min-[768px]:max-[1023px]:max-w-[136px]",
  "min-[1024px]:max-[1279px]:max-h-[34px] min-[1024px]:max-[1279px]:max-w-[150px]",
  "min-[1280px]:max-[1439px]:max-h-9 min-[1280px]:max-[1439px]:max-w-[164px]",
  "min-[1440px]:max-h-10 min-[1440px]:max-w-[180px]"
)

function ClientLogoFrame({
  src,
  name,
  className,
}: Pick<ClientEntry, "src" | "name"> & { className?: string }) {
  return (
    <div className={cn(logoWrapperClass, className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- deliver SVG as vector */}
      <img
        src={src}
        alt={`${name} logo`}
        width={180}
        height={40}
        decoding="async"
        className={logoImgClass}
      />
    </div>
  )
}

/** Slow “balloon” hover: 3000ms + easing from `.client-logo-hover-surface` in globals.css. */
const logoHoverMotionClass = cn(
  "client-logo-hover-surface",
  "origin-center cursor-default overflow-visible",
  "scale-100 opacity-[0.88]",
  "hover:scale-105 hover:opacity-100"
)

function LogoListItem({
  client,
  gridMode = false,
}: {
  client: ClientEntry
  /** Sub-1024 grid: intrinsic cell width, fixed gutters; block centered via grid `justify-center`. */
  gridMode?: boolean
}) {
  return (
    <li
      className={cn(
        "flex min-h-0 overflow-visible",
        gridMode
          ? "max-[1023px]:min-w-0 max-[1023px]:w-auto max-[1023px]:items-center max-[1023px]:justify-center"
          : "min-w-0 min-[1024px]:w-auto min-[1024px]:shrink-0 items-center justify-center"
      )}
    >
      <div
        className={cn(
          logoHoverMotionClass,
          "flex",
          gridMode
            ? "max-[1023px]:w-auto max-[1023px]:justify-center"
            : "min-[1024px]:w-auto justify-center"
        )}
      >
        <ClientLogoFrame src={client.src} name={client.name} />
      </div>
    </li>
  )
}

/** Flat grid for &lt;1024px (2- or 3-column). */
function LogoGridMobile({ items }: { items: ClientEntry[] }) {
  return (
    <ul role="list" className={logoGridClass}>
      {items.map((client) => (
        <LogoListItem key={client.id} client={client} gridMode />
      ))}
    </ul>
  )
}

/** MD+ — two fixed rows, centered; no flex-wrap. */
function LogoDesktopTwoRows({
  rowOne,
  rowTwo,
}: {
  rowOne: ClientEntry[]
  rowTwo: ClientEntry[]
}) {
  return (
    <div className={desktopStackClass}>
      <ul
        role="list"
        className={cn(
          "m-0 flex w-full list-none flex-row flex-nowrap justify-center overflow-visible p-0",
          desktopRowHorizontalGapClass
        )}
      >
        {rowOne.map((client) => (
          <LogoListItem key={client.id} client={client} />
        ))}
      </ul>
      <ul
        role="list"
        className={cn(
          "m-0 flex w-full list-none flex-row flex-nowrap justify-center overflow-visible p-0",
          desktopRowHorizontalGapClass
        )}
      >
        {rowTwo.map((client) => (
          <LogoListItem key={client.id} client={client} />
        ))}
      </ul>
    </div>
  )
}

function resolveRows(clientList: ClientEntry[] | undefined): {
  rowOne: ClientEntry[]
  rowTwo: ClientEntry[]
  flat: ClientEntry[]
} {
  if (!clientList?.length) {
    return {
      rowOne: clientsRowOne,
      rowTwo: clientsRowTwo,
      flat: clientsAll,
    }
  }
  if (clientList.length >= 9) {
    return {
      rowOne: clientList.slice(0, 4),
      rowTwo: clientList.slice(4, 9),
      flat: clientList.slice(0, 9),
    }
  }
  const mid = Math.ceil(clientList.length / 2)
  return {
    rowOne: clientList.slice(0, mid),
    rowTwo: clientList.slice(mid),
    flat: clientList,
  }
}

interface SelectedClientsSectionProps {
  heading?: string
  clientList?: ClientEntry[]
}

export function SelectedClientsSection({
  heading = "Selected Clients",
  clientList,
}: SelectedClientsSectionProps) {
  const { rowOne, rowTwo, flat } = resolveRows(clientList)

  return (
    <Section id="clients" spacing="default" background="default" className="pt-0">
      <Container>
        <div
          className={cn(
            "mb-[var(--space-10)]",
            "max-[767px]:mb-[var(--space-07)] max-[479px]:mb-[var(--space-06)]"
          )}
        >
          <p className="font-ui font-medium text-[length:var(--text-overline)] clr-text-tertiary uppercase tracking-[0.15em]">
            {heading}
          </p>
        </div>

        <div
          role="region"
          aria-label="Selected client logos"
          className={cn(
            "overflow-visible",
            "max-[767px]:-mt-1 max-[479px]:-mt-0.5",
            "max-[767px]:pb-0"
          )}
        >
          <LogoGridMobile items={flat} />
          <LogoDesktopTwoRows rowOne={rowOne} rowTwo={rowTwo} />
        </div>
      </Container>
    </Section>
  )
}

export type { ClientEntry }
