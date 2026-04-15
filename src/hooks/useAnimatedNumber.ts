import { useEffect, useState } from 'react'

export function useAnimatedNumber(target: number, duration: number, shouldStart: boolean) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const startTime = performance.now()
    let rafId: number

    function update(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(target * eased))
      if (progress < 1) rafId = requestAnimationFrame(update)
    }

    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, shouldStart])

  return current
}
