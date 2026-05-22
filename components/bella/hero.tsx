"use client"

import Image from "next/image"
import { ChevronRight, Scissors } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-background pt-28 md:pt-32"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 85% 30%, rgba(212,176,106,0.10), transparent 60%), linear-gradient(180deg, #faf7fb 0%, #f5effa 100%)",
      }}
    >
      {/* Decorative thin curved line */}
      <svg
        aria-hidden
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      >
        <path
          d="M -50 520 Q 380 220 760 360 T 1500 280"
          stroke="rgba(42,16,61,0.18)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Decorative sparkles */}
      <Sparkle className="absolute left-[7%] top-[18%] hidden h-4 w-4 text-purple-deep md:block" />
      <Sparkle className="absolute left-[42%] bottom-[12%] hidden h-5 w-5 text-purple-deep md:block" />
      <Sparkle className="absolute left-[48%] bottom-[6%] hidden h-3 w-3 text-purple-deep md:block" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 md:grid-cols-12 md:gap-8 md:px-10 md:pb-28">
        {/* LEFT — Headline */}
        <div className="relative md:col-span-6">
          <Sparkle className="mb-6 h-4 w-4 text-purple-deep" />

          <h1 className="animate-fade-up font-serif text-[44px] leading-[1.02] tracking-[-0.02em] text-foreground sm:text-[64px] md:text-[80px] lg:text-[96px]">
            A beleza do
            <br />
            <span className="text-purple-deep">seu cabelo</span>
          </h1>

          <p className="animate-fade-up delay-200 mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Técnica avançada, design personalizado e o cuidado de quem entende a sua história.
          </p>

          {/* Three circular thumbnails */}
          <div className="animate-fade-up delay-400 mt-10 flex items-center gap-4">
            <Thumb src="/images/transform-1.jpg" alt="Balayage natural" />
            <Thumb src="/images/transform-2.jpg" alt="Mechas caramelo" />
            <Thumb src="/images/transform-3.jpg" alt="Corte sofisticado" />
          </div>

          {/* Ver Galeria link */}
          <a
            href="#transformations"
            className="animate-fade-up delay-600 mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-all hover:gap-3"
          >
            Ver galeria
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/20">
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.6} />
            </span>
          </a>
        </div>

        {/* RIGHT — Arched portrait + play button */}
        <div className="relative md:col-span-6">
          <div className="relative mx-auto w-full max-w-[440px] md:ml-auto md:mr-0">
            {/* Outer arch outline */}
            <div
              aria-hidden
              className="absolute -inset-x-2 -top-6 bottom-0 rounded-t-full border border-purple-deep/15 md:-inset-x-4 md:-top-10"
            />

            {/* Arched image frame */}
            <div className="animate-reveal delay-200 relative aspect-[4/5] w-full overflow-hidden rounded-t-full border border-purple-deep/10 bg-purple-soft">
              <Image
                src="/images/hero-hair.jpg"
                alt="Retrato editorial de mulher com cabelo perfeito"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Circular SERVIÇOS badge */}
            <a
              href="#services"
              aria-label="Ver serviços"
              className="animate-fade-up delay-600 absolute -left-2 top-12 flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-[0_20px_60px_-15px_rgba(42,16,61,0.25)] md:-left-8 md:top-16 md:h-32 md:w-32"
            >
              {/* Curved text around the circle */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]">
                <defs>
                  <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-purple-deep" style={{ fontSize: "9px", letterSpacing: "0.28em" }}>
                  <textPath href="#circlePath">SERVIÇOS · SERVIÇOS · </textPath>
                </text>
              </svg>

              {/* Inner icon circle */}
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-purple-deep md:h-16 md:w-16">
                <Scissors className="h-4 w-4 fill-gold text-gold md:h-5 md:w-5" strokeWidth={1.5} />
              </span>
            </a>

            {/* Sparkle accent top */}
            <Sparkle className="absolute right-8 -top-4 h-5 w-5 text-foreground md:right-10 md:-top-6" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Thumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-purple-deep/10 shadow-sm md:h-20 md:w-20">
      <Image src={src || "/placeholder.svg"} alt={alt} fill sizes="80px" className="object-cover" />
    </div>
  )
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 0 L13.6 9.2 L24 12 L13.6 14.8 L12 24 L10.4 14.8 L0 12 L10.4 9.2 Z" />
    </svg>
  )
}
