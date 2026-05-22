import Image from "next/image"
import { Reveal } from "./reveal"

const cards = [
  {
    img: "/images/emotion-lifeless.jpg",
    label: "Loiro sem vida",
    note: "Quando a luz se torna lembrança.",
  },
  {
    img: "/images/emotion-damaged.jpg",
    label: "Medo da química",
    note: "Quando o salão virou um risco.",
  },
  {
    img: "/images/emotion-uneven.jpg",
    label: "Cor sem harmonia",
    note: "Quando os tons nunca pertencem.",
  },
  {
    img: "/images/emotion-identity.jpg",
    label: "Um cabelo que não te representa",
    note: "Quando o espelho parece distante.",
  },
]

export function EmotionalIdentification() {
  return (
    <section className="relative w-full overflow-hidden bg-purple-soft py-24 md:min-h-screen md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-purple-deep/70">
                <span className="h-px w-8 bg-purple-deep/40" />
                Capítulo 01 — Entendimento
              </div>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-purple-deep md:text-6xl">
                Você não está sozinha <br />
                em <em className="italic">como isso se sente.</em>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-foreground/70">
              Toda mulher que entra carrega uma pequena história com o próprio cabelo. Ouvimos essa história antes de
              tocar em qualquer coisa.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 md:gap-7">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 120}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-purple-deep md:aspect-[5/6]">
                <Image
                  src={c.img || "/placeholder.svg"}
                  alt={c.label}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover opacity-90 transition-all duration-[1400ms] ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-purple-deep via-purple-deep/40 to-transparent transition-opacity duration-700 group-hover:opacity-90"
                />

                {/* Number */}
                <div className="absolute left-6 top-6 font-serif text-sm italic text-gold">
                  № 0{i + 1}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-gold/90">
                    {c.note}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl leading-tight text-primary-foreground md:text-3xl">
                    {c.label}
                  </h3>
                  <div className="mt-5 h-px w-12 bg-gold/70 transition-all duration-700 group-hover:w-20" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-16 max-w-xl text-center font-serif text-2xl italic leading-snug text-purple-deep md:mt-24 md:text-3xl">
            &ldquo;Ela me entende.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  )
}
