import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import { useReveal } from '../hooks/useReveal'
import { useLang } from '../lib/i18n'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const { lang, c } = useLang()
  // Re-run on language change too: some elements remount with the new text
  useReveal(`${pathname}|${lang}`)

  return (
    <>
      <a href="#inhalt" className="sr-only-focusable fixed left-3 top-3 z-50 bg-paper px-4 py-2 font-display font-bold">
        {c.ui.skip}
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="inhalt">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
