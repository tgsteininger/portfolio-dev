import {
  RasdenApproach,
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
      <RasdenApproach />
      <RasdenPhilosophy />
      <RasdenStructure />
      <RasdenEcosystem />
      <RasdenGovernance />
      <RasdenInquiries />
    </>
  )
}
