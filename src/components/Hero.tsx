import { useInView } from '../hooks/useInView'
import { useAnimatedNumber } from '../hooks/useAnimatedNumber'

function Stat({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const { ref, isVisible } = useInView(0.5)
  const animated = useAnimatedNumber(number, 1200, isVisible)

  return (
    <div ref={ref}>
      <span className="block text-[2rem] font-extrabold text-white">
        {animated}{suffix}
      </span>
      <span className="text-sm text-white/50 font-medium">{label}</span>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(232,135,42,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(232,135,42,0.05),transparent_40%)]" />
        <div className="absolute -top-1/2 -right-[20%] w-[70%] h-[200%] bg-gradient-to-br from-transparent via-accent/[0.04] to-transparent -rotate-[15deg]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[120px] pb-20 md:pt-[140px]">
        <div className="inline-block px-5 py-2 bg-accent/15 border border-accent/30 rounded-full text-accent-light text-sm font-semibold mb-8">
          Seit 1991 – Über 35 Jahre Erfahrung
        </div>

        <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold text-white leading-[1.1] tracking-tight mb-8">
          Automation &<br />Steuerungsbau<br />
          <span className="text-accent">aus Überzeugung.</span>
        </h1>

        <p className="text-[clamp(1.05rem,2vw,1.25rem)] text-white/70 max-w-[560px] leading-relaxed mb-10">
          Von der SPS-Programmierung über Anlagenservice bis zur Fahrzeugtechnik –
          Porzi Tech ist Ihr zuverlässiger Partner in Pfäffikon SZ.
        </p>

        <div className="flex flex-wrap gap-4 mb-16 md:mb-24">
          <a
            href="#kontakt"
            onClick={(e) => scrollTo(e, '#kontakt')}
            className="px-8 py-3.5 bg-accent text-white font-semibold rounded-lg border-2 border-accent hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,135,42,0.35)] transition-all"
          >
            Kontakt aufnehmen
          </a>
          <a
            href="#dienstleistungen"
            onClick={(e) => scrollTo(e, '#dienstleistungen')}
            className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
          >
            Unsere Leistungen
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 pt-8 border-t border-white/10">
          <Stat number={35} suffix="+" label="Jahre Erfahrung" />
          <div className="hidden sm:block w-px h-10 bg-white/15" />
          <Stat number={4} suffix="" label="Fachbereiche" />
          <div className="hidden sm:block w-px h-10 bg-white/15" />
          <Stat number={100} suffix="%" label="Schweizer Qualität" />
        </div>
      </div>
    </section>
  )
}
