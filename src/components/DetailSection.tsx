import { useInView } from '../hooks/useInView'

interface DetailItem {
  title: string
  description: string
}

interface DetailSectionProps {
  id: string
  tag: string
  title: string
  lead: string
  items: DetailItem[]
  visual: React.ReactNode
  reverse?: boolean
  alt?: boolean
}

export default function DetailSection({ id, tag, title, lead, items, visual, reverse, alt }: DetailSectionProps) {
  const { ref: contentRef, isVisible: contentVisible } = useInView()
  const { ref: visualRef, isVisible: visualVisible } = useInView()

  return (
    <section id={id} className={`py-24 md:py-32 ${alt ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:[direction:rtl]' : ''}`}>
          <div
            ref={visualRef}
            className={`lg:[direction:ltr] transition-all duration-700
              ${visualVisible ? 'opacity-100 translate-x-0' : reverse ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="aspect-square bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center text-white/60 p-[20%]">
              {visual}
            </div>
          </div>

          <div
            ref={contentRef}
            className={`lg:[direction:ltr] transition-all duration-700
              ${contentVisible ? 'opacity-100 translate-x-0' : reverse ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'}`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {tag}
            </span>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-primary mb-5">
              {title}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {lead}
            </p>
            <ul className="flex flex-col gap-5">
              {items.map((item, i) => (
                <li key={i} className="pl-6 relative">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent" />
                  <strong className="block text-primary font-semibold mb-0.5">{item.title}</strong>
                  <span className="text-[0.95rem] text-gray-500">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
