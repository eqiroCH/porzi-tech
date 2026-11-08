import { useEffect } from 'react'

/**
 * Reveals every [data-reveal] and [data-shutter] element once, as it enters the viewport.
 * Elements stay visible without JavaScript: the hidden state only applies under html.js.
 *
 * A shutter starts clipped to nothing, which an IntersectionObserver never sees as visible,
 * so for shutters we watch the parent frame instead.
 */
export function useReveal(key: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in), [data-shutter]:not(.is-in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const targets = new Map<Element, HTMLElement>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            targets.get(e.target)?.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    els.forEach((el) => {
      const watch = el.hasAttribute('data-shutter') && el.parentElement ? el.parentElement : el
      targets.set(watch, el)
      io.observe(watch)
    })
    return () => io.disconnect()
  }, [key])
}
