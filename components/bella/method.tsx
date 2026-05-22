import { Reveal } from "./reveal"

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Cada fio revela sua história. Lemos essa história — porosidade, elasticidade, química anterior — antes de qualquer decisão.",
  },
  {
    n: "02",
    title: "Design",
    body: "Cor e forma são desenhadas em torno do seu rosto, do seu tom de pele, da sua rotina e da versão de você que estamos construindo.",
  },
  {
    n: "03",
    title: "Técnica",
    body: "Aplicação avançada. Tempo personalizado. Nada improvisado, nada com pressa. A técnica decide o resultado.",
  },
  {
    n: "04",
    title: "Transformação",
    body: "Um acabamento que parece inevitável. O espelho devolve uma mulher que se parece ainda mais com ela mesma.",
  },
]

export function Method() {
  return (
    <section id="method" className="relative w-full overflow-hidden bg-purple-deep py-24 text-primary-foreground md:min-h-screen md:py-32">
      {/* Atmospheric glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(212,176,106,0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,176,106,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold/80">
              <span className="h-px w-8 bg-gold/60" />
              O Método Bella
              <span className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Quatro momentos. <br />
              <em className="italic text-gold">Uma certeza silenciosa.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/70">
              Autoridade não se anuncia. Ela se sente na forma como cada passo é conduzido.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <ol className="relative mt-20 flex flex-col gap-16 md:mt-28 md:gap-24">
          {/* Center gold line */}
          <div
            aria-hidden
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          {steps.map((s, i) => {
            const right = i % 2 === 1
            return (
              <Reveal key={s.n} delay={i * 100}>
                <li
                  className={`relative grid grid-cols-[auto_1fr] items-center gap-6 md:grid-cols-2 md:gap-16 ${
                    right ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Marker */}
                  <div className="relative flex items-center gap-4 md:justify-end">
                    <span className="font-serif text-6xl italic text-gold md:text-7xl">{s.n}</span>
                  </div>

                  {/* Node */}
                  <div
                    aria-hidden
                    className="absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/2"
                  >
                    <span className="block h-3 w-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(212,176,106,0.15)]" />
                  </div>

                  <div className={right ? "md:pr-12 md:text-right" : "md:pl-12"}>
                    <h3 className="font-serif text-3xl leading-tight md:text-4xl">{s.title}</h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                      {s.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
