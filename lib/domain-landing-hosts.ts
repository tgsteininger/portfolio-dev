/** Hostnames that should render the domain landing experience at `/`. */
const DOMAIN_LANDING_HOSTS = new Set(['uxsvr.com', 'www.uxsvr.com'])

export function isDomainLandingHost(host: string | null): boolean {
  if (!host) return false
  const hostname = host.split(':')[0]?.toLowerCase() ?? ''
  return DOMAIN_LANDING_HOSTS.has(hostname)
}
