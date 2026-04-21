import type { Metadata } from 'next'

const defaultTitle = 'Thomas Steininger | UX Portfolio'
const defaultDescription =
  'Senior UX designer focused on complex enterprise systems, workflow transformation, and scalable product design.'

/** Default home + site-wide Open Graph / Twitter defaults (portfolio). */
export const portfolioHomeMetadata: Pick<
  Metadata,
  'title' | 'description' | 'openGraph' | 'twitter'
> = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: '/',
    siteName: 'Steininger UX',
    images: [
      {
        url: '/og/portfolio-preview.jpg',
        width: 1200,
        height: 630,
        alt: "Preview of Thomas Steininger's UX portfolio homepage",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og/portfolio-preview.jpg'],
  },
}
