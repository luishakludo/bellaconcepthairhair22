import { Nav } from "@/components/bella/nav"
import { Hero } from "@/components/bella/hero"
import { EmotionalIdentification } from "@/components/bella/emotional-identification"
import { Transformations } from "@/components/bella/transformations"
import { Method } from "@/components/bella/method"
import { Services } from "@/components/bella/services"
import { Experience } from "@/components/bella/experience"
import { Information } from "@/components/bella/information"
import { FinalCTA } from "@/components/bella/final-cta"
import { StickyWhatsApp } from "@/components/bella/sticky-whatsapp"

export default function Page() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <EmotionalIdentification />
      <Transformations />
      <Method />
      <Services />
      <Experience />
      <Information />
      <FinalCTA />
      <StickyWhatsApp />
    </main>
  )
}
