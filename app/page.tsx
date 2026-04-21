import { headers } from 'next/headers'
import type { Metadata } from 'next'

import { DomainLandingView } from '@/components/rootdomain/DomainLandingView'
import { PortfolioHomeView } from '@/components/portfolio/PortfolioHomeView'
import { isDomainLandingHost } from '@/lib/domain-landing-hosts'
import { getDomainLandingMetadata } from '@/lib/metadata/domain-landing'

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get('host')
  if (isDomainLandingHost(host)) {
    return getDomainLandingMetadata('/')
  }
  return {}
}

export default async function Home() {
  const host = (await headers()).get('host')
  if (isDomainLandingHost(host)) {
    return <DomainLandingView />
  }
  return <PortfolioHomeView />
}
