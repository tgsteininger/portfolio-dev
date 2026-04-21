import {
  RasdenEcosystem,
  RasdenGovernance,
  RasdenHero,
  RasdenInquiries,
  RasdenPhilosophy,
  RasdenStructure,
} from "@/components/rasden"

export default function RasdenPage() {
  return (
    <>
      <RasdenHero />
      <RasdenPhilosophy />
      <RasdenStructure />
      <RasdenEcosystem />
      <RasdenGovernance />
      <RasdenInquiries />
    </>
  )
}
