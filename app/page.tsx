import { headers } from 'next/headers'

import { DomainLandingView } from '@/components/rootdomain/DomainLandingView'
import { PortfolioHomeView } from '@/components/portfolio/PortfolioHomeView'
import { isDomainLandingHost } from '@/lib/domain-landing-hosts'

export default async function Home() {
  const host = (await headers()).get('host')
  if (isDomainLandingHost(host)) {
    return <DomainLandingView />
  }
  return <PortfolioHomeView />
}
