import { useInView } from '../hooks/useInView'

export default function CtaBanner() {
  const { ref, isVisible } = useInView()

  const scrollTo = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#kontakt')
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-center">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white mb-4">
          Haben Sie ein Projekt?
        </h2>
        <p className="text-lg text-white/70 mb-8">
          Wir beraten Sie gerne – unverbindlich und kompetent.
        </p>
        <a
          href="#kontakt"
          onClick={scrollTo}
          className="inline-block px-8 py-3.5 bg-white text-primary font-semibold rounded-lg border-2 border-white hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all"
        >
          Jetzt anfragen
        </a>
      </div>
    </section>
  )
}
