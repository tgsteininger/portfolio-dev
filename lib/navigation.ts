export interface NavItem {
  label: string
  href: string
  description?: string
}

export interface CaseStudyItem {
  title: string
  client: string
  description: string
  metric: string
  href: string
  thumbnail?: string
}

export interface NavGroup {
  label: string
  items?: NavItem[]
  caseStudies?: CaseStudyItem[]
}

export const caseStudies: CaseStudyItem[] = [
  {
    title: "Global Supply Chain CMS",
    client: "Coca-Cola",
    description: "Global survey platform for bottling operations",
    metric: "90%+ user adoption",
    href: "/case-studies/coca-cola",
    thumbnail: "/images/case-studies/coca-cola/coca-cola-hero.webp",
  },
  {
    title: "Retail Rx Fulfillment",
    client: "Walgreens",
    description: "Pharmacy workflow redesign across 9,000+ stores",
    metric: "200% efficiency gain",
    href: "/case-studies/walgreens",
    thumbnail: "/images/case-studies/walgreens/walgreens-hero.webp",
  },
  {
    title: "Video Broadcasting Platform",
    client: "MediaPlatform",
    description: "Enterprise live streaming and control platform",
    metric: "80% faster setup",
    href: "/case-studies/mediaplatform",
    thumbnail: "/images/case-studies/mediaplatform/mediaplatform-hero.webp",
  },
]

export const mainNavigation: (NavItem | NavGroup)[] = [
  {
    label: "Case Studies",
    caseStudies: caseStudies,
  },
]

export const footerNavigation = {
  work: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Selected Work", href: "/#featured-projects" },
    { label: "Clients", href: "/#clients" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/#approach" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
}
