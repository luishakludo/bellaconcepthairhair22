import Image from "next/image"
import { Reveal } from "./reveal"

export function Experience() {
  return (
    <section id="experience" className="relative w-full overflow-hidden bg-purple-soft py-24 md:min-h-screen md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-purple-deep/70">
              <span className="h-px w-8 bg-purple-deep/40" />
              Capítulo 05 — O espaço
              <span className="h-px w-8 bg-purple-deep/40" />
            </div>
          </div>
        </Reveal>

        {/* Asymmetric magazine collage */}
        <div className="mt-14 grid grid-cols-12 gap-4 md:mt-20 md:gap-6">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/experience-interior.jpg"
                alt="Interior do salão de luxo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="col-span-7 md:col-span-4" delay={120}>
            <div className="flex h-full flex-col gap-4 md:gap-6">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/experience-detail.jpg"
                  alt="Detalhe elegante"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 items-center justify-center rounded-3xl bg-purple-deep p-6 text-center md:p-10">
                <p className="font-serif text-xl italic leading-snug text-primary-foreground sm:text-2xl md:text-3xl">
                  &ldquo;Beleza precisa ser <span className="text-gold">inesquecível.</span>&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-5 md:col-span-3" delay={240}>
            <div className="relative h-full overflow-hidden rounded-3xl">
              <div className="relative h-full min-h-[260px] md:aspect-auto">
                <Image
                  src="/images/experience-chair.jpg"
                  alt="Cadeira de salão premium"
                  fill
                  sizes="(max-width: 768px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl md:aspect-[2/1]">
              <Image
                src="/images/experience-products.jpg"
                alt="Estação de produtos premium"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-5" delay={240}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-purple-deep/15 bg-background p-7 md:p-10">
              <div>
                <span className="font-serif text-sm italic text-gold">№ 05</span>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-purple-deep md:text-4xl">
                  Luz, aroma, silêncio — desenhados.
                </h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-foreground/70 md:text-base">
                Cada detalhe do estúdio existe por um motivo: fazer você esquecer que está em qualquer outro lugar.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
