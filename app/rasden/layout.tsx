import type { Metadata } from "next"

import { RasdenFooter } from "@/components/rasden/rasden-footer"
import { RasdenHeader } from "@/components/rasden/rasden-header"

const RASDEN_DESCRIPTION =
  "Rasden develops ventures internally through a shared system of structure, operations, and digital infrastructure."

const RASDEN_OG_IMAGE = "/rasden/og-image.png"

export const metadata: Metadata = {
  title: "Rasden",
  description: RASDEN_DESCRIPTION,
  openGraph: {
    title: "Rasden",
    description: RASDEN_DESCRIPTION,
    url: "/rasden",
    siteName: "Rasden",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: RASDEN_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Rasden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasden",
    description: RASDEN_DESCRIPTION,
    images: [RASDEN_OG_IMAGE],
  },
}

export default function RasdenLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div id="top" className="flex min-h-screen flex-col clr-bg-page clr-text-primary">
      <RasdenHeader />
      <main className="flex-1">{children}</main>
      <RasdenFooter />
    </div>
  )
}
