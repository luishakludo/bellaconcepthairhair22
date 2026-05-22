import { Clock, Instagram, MapPin, ArrowUpRight, Phone } from "lucide-react"
import { Reveal } from "./reveal"

const address = "Av. Senador Salgado Filho, 2071"
const cityState = "Curitiba — Paraná"
const phoneDisplay = "41 99265-4942"
const phoneDigits = "5541992654942"
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ", Curitiba")}`
const waHref = `https://wa.me/${phoneDigits}`
const instagramHandle = "@bela.concept.hair"
const instagramHref = "https://instagram.com/bela.concept.hair"

type CardProps = {
  index: string
  label: string
  icon: React.ReactNode
  title: string
  subtitle?: string
  meta?: string
  href?: string
  cta?: string
  delay?: number
  className?: string
}

function ContactCard({ index, label, icon, title, subtitle, meta, href, cta, delay, className }: CardProps) {
  const Wrapper: React.ElementType = href ? "a" : "div"
  const wrapperProps = href ? { href, target: "_blank", rel: "noreferrer" } : {}

  return (
    <Reveal delay={delay} className={className}>
      <Wrapper
        {...wrapperProps}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-gold/15 bg-[#1d0d34] p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-gold/50 hover:shadow-[0_30px_80px_-30px_rgba(212,176,106,0.25)] md:p-10"
      >
        {/* Inner subtle gradient — keeps the card SOLID, not transparent */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.25) 100%)",
          }}
        />
        {/* Gold top edge accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />

        <div className="relative flex items-start justify-between">
          <span className="font-serif text-xs italic tracking-wide text-gold/80">{index}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-purple-deep text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-purple-deep">
            {icon}
          </span>
        </div>

        <div className="relative mt-12">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">{label}</div>
          <div className="mt-4 font-serif text-3xl leading-[1.05] tracking-tight text-primary-foreground md:text-[2.25rem]">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/65">{subtitle}</div>
          ) : null}
          {meta ? <div className="mt-5 text-sm leading-relaxed text-white/65">{meta}</div> : null}
        </div>

        {href && cta ? (
          <div className="relative mt-10 flex items-center justify-between border-t border-gold/20 pt-5">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/80 transition-colors group-hover:text-gold">
              {cta}
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.6}
            />
          </div>
        ) : (
          <div className="relative mt-10 border-t border-gold/20 pt-5">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/65">Atendimento com hora marcada</span>
          </div>
        )}

        {/* Hover sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gold/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />
      </Wrapper>
    </Reveal>
  )
}

export function Information() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-purple-deep py-28 text-primary-foreground md:py-36"
    >
      {/* Smooth gradient overlay transition from the light section above — TALL and multi-stop for natural blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-full h-[350px] md:h-[450px]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(42,16,61,0.03) 25%, rgba(42,16,61,0.12) 45%, rgba(42,16,61,0.35) 65%, rgba(42,16,61,0.7) 85%, #2a103d 100%)",
        }}
      />

      {/* Atmospheric gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(212,176,106,0.18), transparent 60%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(212,176,106,0.10), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Capítulo 06 — Visite
              <span className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-[1.02] tracking-tight md:text-6xl">
              A casa é aqui. <em className="italic text-gold">Venha sentir.</em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">
              Endereço, horário, WhatsApp e Instagram — escolha por onde começar a sua próxima visita.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-12 md:gap-6">
          <ContactCard
            className="md:col-span-7"
            delay={80}
            index="i."
            label="Telefone & WhatsApp"
            icon={<Phone className="h-4 w-4" strokeWidth={1.6} />}
            title={phoneDisplay}
            meta="Resposta direta, sem formulário. Mande a primeira mensagem e a gente desenha sua próxima visita."
            href={waHref}
            cta="Abrir conversa no WhatsApp"
          />

          <ContactCard
            className="md:col-span-5"
            delay={140}
            index="ii."
            label="Horário"
            icon={<Clock className="h-4 w-4" strokeWidth={1.6} />}
            title="09 — 18h"
            subtitle="Segunda a sábado"
            meta="Atendimento com hora marcada, sem corre-corre."
          />

          <ContactCard
            className="md:col-span-7"
            delay={200}
            index="iii."
            label="Endereço"
            icon={<MapPin className="h-4 w-4" strokeWidth={1.6} />}
            title={address}
            subtitle={cityState}
            href={mapsHref}
            cta="Abrir no Google Maps"
          />

          <ContactCard
            className="md:col-span-5"
            delay={260}
            index="iv."
            label="Instagram"
            icon={<Instagram className="h-4 w-4" strokeWidth={1.6} />}
            title={instagramHandle}
            meta="Bastidores, transformações e a estética da casa."
            href={instagramHref}
            cta="Seguir no Instagram"
          />
        </div>
      </div>
    </section>
  )
}
