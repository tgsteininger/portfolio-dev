import { DotField } from '@/components/rootdomain/DotField'
import { EntrySignal } from '@/components/rootdomain/EntrySignal'

/** Domain landing surface (DotField + entry cluster). Used at `/` for configured hosts and at `/domain-landing-page` for testing. */
export function DomainLandingView() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <DotField />
      <EntrySignal />
    </main>
  )
}
