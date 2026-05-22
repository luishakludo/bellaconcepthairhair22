"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const links = [
  { label: "Método", href: "#method" },
  { label: "Transformações", href: "#transformations" },
  { label: "Serviços", href: "#services" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled ? "bg-purple-deep/10 backdrop-blur-xl shadow-sm" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10 md:py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Bella Concept Hair">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-deep/20 bg-white/70 backdrop-blur-md">
              <Image
                src="/images/logo-bela.png"
                alt="Bela Concept Hair"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
            </div>
            <span className="hidden font-serif text-lg tracking-[0.18em] leading-none text-purple-deep sm:block">
              BELLA
              <span className="ml-1 text-[10px] tracking-[0.3em] text-muted-foreground">CONCEPT</span>
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-purple-deep"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-deep/20 bg-white/70 text-purple-deep backdrop-blur-md md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.4} />
          </button>

          <a
            href="https://wa.me/5541992654942"
            className="hidden items-center gap-2 rounded-full bg-purple-deep px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-primary-foreground transition-all duration-500 hover:bg-purple-mid md:inline-flex"
          >
            Agendar
            <span className="h-1 w-1 rounded-full bg-gold" />
          </a>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-all duration-700 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-purple-deep" />
        <div className="relative flex h-full flex-col px-8 py-7 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/70 backdrop-blur-md">
              <Image
                src="/images/logo-bela.png"
                alt="Bela Concept Hair"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>

          <ul className="mt-20 flex flex-col gap-8">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl leading-none tracking-tight"
                  style={{
                    transition: "all 700ms cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: open ? `${150 + i * 80}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 text-sm text-white/70">
            <a href="https://wa.me/5541992654942" className="text-gold">
              41 99265-4942
            </a>
            <span>Av. Senador Salgado Filho 2071 — Curitiba</span>
          </div>
        </div>
      </div>
    </>
  )
}

export function BellaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 4c0 6-4 10-10 12 6 2 10 6 10 12 0-6 4-10 10-12-6-2-10-6-10-12Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="20" cy="20" r="2.4" fill="#D4B06A" />
    </svg>
  )
}
