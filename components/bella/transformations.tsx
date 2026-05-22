"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "./reveal"

const items = [
  {
    img: "/images/transform-1.jpg",
    title: "Leve, vivido.",
    sub: "Balayage · Mel · Natural",
  },
  {
    img: "/images/transform-2.jpg",
    title: "Calor, refinado.",
    sub: "Caramelo · Dimensão · Castanho",
  },
  {
    img: "/images/transform-3.jpg",
    title: "Forma encontrada.",
    sub: "Long Bob · Brilho · Esculpido",
  },
]

export function Transformations() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i: number) => {
    const el = scrollerRef.current
    if (!el) return
    const target = el.children[i] as HTMLElement
    if (target) {
      el.scrollTo({ left: target.offsetLeft - 24, behavior: "smooth" })
      setIndex(i)
    }
  }

  const onScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    const w = el.clientWidth
    const i = Math.round(el.scrollLeft / (w * 0.86))
    setIndex(Math.min(items.length - 1, Math.max(0, i)))
  }

  return (
    <section id="transformations" className="relative w-full overflow-hidden bg-background py-24 md:min-h-screen md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-purple-deep/70">
                <span className="h-px w-8 bg-purple-deep/40" />
                Capítulo 02 — Transformações reais
              </div>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
                Resultado silencioso, <em className="italic text-purple-deep">confiança que fala alto.</em>
              </h2>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => scrollTo(Math.max(0, index - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-purple-deep hover:text-primary-foreground"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.4} />
              </button>
              <button
                onClick={() => scrollTo(Math.min(items.length - 1, index + 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-purple-deep hover:text-primary-foreground"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mt-16 md:gap-8 md:px-10"
        >
          {items.map((it, i) => (
            <article
              key={it.title}
              className="relative w-[86%] flex-none snap-center overflow-hidden rounded-[28px] bg-purple-soft md:w-[68%] lg:w-[58%]"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5]">
                <Image
                  src={it.img || "/placeholder.svg"}
                  alt={it.title}
                  fill
                  sizes="(max-width: 768px) 86vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/40 via-transparent to-transparent" />

                <div className="absolute left-6 top-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/90">
                  <span className="h-px w-6 bg-gold" />
                  Bella · № 0{i + 1}
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <h3 className="font-serif text-3xl text-primary-foreground md:text-4xl">{it.title}</h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-gold/90">{it.sub}</p>
                  </div>
                  <span className="font-serif text-2xl italic text-gold">/{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </article>
          ))}
          <div className="w-6 flex-none md:w-10" aria-hidden />
        </div>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className="h-px w-10 transition-all duration-500"
              style={{
                backgroundColor: index === i ? "var(--purple-deep)" : "rgba(28,26,31,0.2)",
                height: index === i ? "2px" : "1px",
              }}
            />
          ))}
        </div>
        <span className="font-serif text-sm italic text-foreground/50">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  )
}
