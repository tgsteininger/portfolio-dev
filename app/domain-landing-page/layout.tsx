import type { Metadata } from 'next'

import { getDomainLandingMetadata } from '@/lib/metadata/domain-landing'

export const metadata: Metadata = getDomainLandingMetadata(
  '/domain-landing-page'
)

export default function DomainLandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
