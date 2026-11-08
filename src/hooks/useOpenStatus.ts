import { useEffect, useState } from 'react'
import { officeHours } from '../lib/site'
import type { Content } from '../lib/content'
import { useLang } from '../lib/i18n'

export interface OpenStatus {
  open: boolean
  /** One short sentence, e.g. "Jetzt erreichbar, bis 17:30." */
  text: string
}

const hhmm = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`

/** Office hours (see officeHours), read in Swiss time whatever the visitor's clock says. */
function statusAt(date: Date, s: Content['status']): OpenStatus {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Zurich',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const minutes = Number(get('hour')) * 60 + Number(get('minute'))
  const workday = day >= 1 && day <= 5
  const first = officeHours[0].from

  if (workday) {
    const now = officeHours.find((h) => minutes >= h.from && minutes < h.to)
    if (now) {
      const left = now.to - minutes
      return { open: true, text: left < 60 ? s.closingSoon(left) : s.open(hhmm(now.to)) }
    }
    const next = officeHours.find((h) => minutes < h.from)
    if (next) {
      return { open: false, text: next.from === first ? s.laterToday(hhmm(next.from)) : s.lunch(hhmm(next.from)) }
    }
  }
  const nextDay = day === 5 || day === 6 ? 1 : (day + 1) % 7
  const isTomorrow = nextDay === (day + 1) % 7
  return { open: false, text: isTomorrow ? s.tomorrow(hhmm(first)) : s.onDay(s.days[nextDay], hhmm(first)) }
}

export function useOpenStatus(): OpenStatus {
  const { c } = useLang()
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(id)
  }, [])
  return statusAt(now, c.status)
}
