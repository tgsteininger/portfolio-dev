import type { Metadata } from 'next'

const UX_SERVER_TITLE = 'UX Server'
const UX_SERVER_DESCRIPTION =
  'An interface to a structured system of work, process, and evolving design.'

/** Static OG / Twitter card (same pattern as `/og/portfolio-preview.jpg`). */
export const DOMAIN_LANDING_OG_IMAGE_PATH = '/og/ux-server-preview.jpg' as const

export function getDomainLandingMetadata(canonicalPath: string): Metadata {
  return {
    title: UX_SERVER_TITLE,
    description: UX_SERVER_DESCRIPTION,
    openGraph: {
      title: UX_SERVER_TITLE,
      description: UX_SERVER_DESCRIPTION,
      url: canonicalPath,
      siteName: 'Steininger UX',
      images: [
        {
          url: DOMAIN_LANDING_OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: 'UX Server — system interface preview',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: UX_SERVER_TITLE,
      description: UX_SERVER_DESCRIPTION,
      images: [DOMAIN_LANDING_OG_IMAGE_PATH],
    },
  }
}
