import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  HeroSection,
  FeaturedProjectsSection,
  SelectedClientsSection,
  ApproachSection,
  StatsSection,
  AboutSection,
  CTASection,
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProjectsSection />
        <SelectedClientsSection />
        <ApproachSection />
        <StatsSection />
        <AboutSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  )
}
