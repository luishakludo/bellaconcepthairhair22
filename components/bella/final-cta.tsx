import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"
import { BellaMark } from "./nav"

export function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-purple-deep py-24 text-primary-foreground md:min-h-screen md:py-32">
      {/* Atmospheric background */}
      <div aria-hidden className="absolute inset-0 opacity-40">
        <Image
          src="/images/cta-hair.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-purple-deep/70" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(212,176,106,0.18), transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-6 text-center md:px-10">
        <Reveal>
          <BellaMark className="mx-auto h-10 w-10 text-gold" />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold/80">
            <span className="h-px w-8 bg-gold/60" />
            Capítulo 07 — Sua próxima versão
            <span className="h-px w-8 bg-gold/60" />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <h2 className="mt-10 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            Sua próxima versão <br />
            <em className="italic text-gold">já existe.</em>
          </h2>
        </Reveal>

        <Reveal delay={450}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70 md:text-xl">
            Talvez ela comece pelo seu cabelo.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <a
            href="https://wa.me/5541992654942"
            className="animate-glow group relative mt-14 inline-flex items-center gap-4 rounded-full bg-background px-10 py-5 text-base font-medium text-purple-deep transition-all duration-500 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 rounded-full border border-gold/40" aria-hidden />
            Falar no WhatsApp
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.6} />
          </a>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-16 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/40">
            <span>Bella Concept Hair</span>
            <span className="text-gold/60">Curitiba — Paraná</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
