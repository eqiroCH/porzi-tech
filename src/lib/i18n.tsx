import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from './content'

const STORAGE_KEY = 'porzi-lang'

interface LangValue {
  lang: Lang
  setLang: (lang: Lang) => void
  c: Content
}

const LangContext = createContext<LangValue | null>(null)

function initialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'de' || saved === 'en') return saved
  } catch {
    /* storage blocked: fall through */
  }
  return 'de'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'de' ? 'de-CH' : 'en'
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, c: content[lang] }), [lang, setLang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangValue {
  const v = useContext(LangContext)
  if (!v) throw new Error('useLang outside LangProvider')
  return v
}
