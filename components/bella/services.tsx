"use client"

import Image from "next/image"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const services = [
  { name: "Cortes", img: "/images/service-cuts.jpg", caption: "Geometria do rosto.", category: "hair" },
  { name: "Escovas", img: "/images/service-blowout.jpg", caption: "Movimento, sob medida.", category: "hair" },
  { name: "Mechas", img: "/images/service-highlights.jpg", caption: "Luz, desenhada à mão.", category: "hair" },
  { name: "Tintura", img: "/images/service-coloring.jpg", caption: "Tons que pertencem a você.", category: "hair" },
  { name: "Penteados", img: "/images/service-style.jpg", caption: "Para as suas noites marcantes.", category: "hair" },
  { name: "Tratamento capilar", img: "/images/service-treatment.jpg", caption: "Restauração como ritual.", category: "hair" },
  { name: "Nail Design", img: "/images/service-nail-design.jpg", caption: "Arte que nasce nas pontas dos dedos.", category: "nails" },
  { name: "Manicure", img: "/images/service-manicure.jpg", caption: "Mãos impecáveis, cuidado artesanal.", category: "nails" },
  { name: "Pedicure", img: "/images/service-pedicure.jpg", caption: "Pés renovados, conforto absoluto.", category: "nails" },
]

export function Services() {
  const [active, setActive] = useState<number | null>(null)
  const [filter, setFilter] = useState<"all" | "hair" | "nails">("all")

  const filteredServices = filter === "all" 
    ? services 
    : services.filter(s => s.category === filter)

  return (
    <section id="services" className="relative w-full overflow-hidden bg-background py-24 md:min-h-screen md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-purple-deep/70">
                <span className="h-px w-8 bg-purple-deep/40" />
                Capítulo 04 — Serviços
              </div>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
                Feito sob medida, nunca <em className="italic text-purple-deep">em série.</em>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-foreground/70">
              Uma pequena coleção de serviços, cada um executado com o tempo e a atenção que ele exige.
            </p>
          </div>
        </Reveal>

        {/* Filtros de categoria */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center gap-3 md:mt-14">
            <span className="mr-2 text-xs uppercase tracking-widest text-foreground/50">Filtrar:</span>
            {[
              { key: "all", label: "Todos" },
              { key: "hair", label: "Cabelo" },
              { key: "nails", label: "Unhas" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setFilter(item.key as "all" | "hair" | "nails")
                  setActive(null)
                }}
                className={cn(
                  "relative rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-500",
                  filter === item.key
                    ? "border-purple-deep bg-purple-deep text-primary-foreground shadow-lg shadow-purple-deep/20"
                    : "border-purple-deep/20 bg-transparent text-foreground/70 hover:border-purple-deep/40 hover:text-foreground"
                )}
              >
                {item.label}
                {filter === item.key && (
                  <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {filteredServices.map((s, i) => {
            const isOpen = active === i
            return (
              <Reveal key={s.name} delay={(i % 3) * 100}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : i)}
                  className={cn(
                    "group relative block w-full overflow-hidden rounded-3xl bg-purple-soft text-left transition-all duration-700",
                    isOpen ? "shadow-[0_30px_80px_-30px_rgba(42,16,61,0.4)]" : "hover:shadow-[0_20px_60px_-25px_rgba(42,16,61,0.25)]",
                  )}
                  aria-expanded={isOpen}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={s.img || "/placeholder.svg"}
                      alt={s.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/30 via-transparent to-transparent" />
                    <span className="absolute right-5 top-5 font-serif text-xs italic text-white/80">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-6 py-5 md:px-7 md:py-6">
                    <div>
                      <h3 className="font-serif text-2xl leading-tight text-foreground">{s.name}</h3>
                      <p
                        className={cn(
                          "overflow-hidden text-sm text-foreground/60 transition-all duration-700",
                          isOpen ? "mt-2 max-h-20 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        {s.caption}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "flex h-10 w-10 flex-none items-center justify-center rounded-full border border-purple-deep/20 text-purple-deep transition-all duration-500",
                        isOpen && "rotate-45 bg-purple-deep text-primary-foreground",
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.4} />
                    </span>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
