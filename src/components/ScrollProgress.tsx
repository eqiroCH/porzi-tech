import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduce ? 400 : 140,
    damping: reduce ? 60 : 28,
    restDelta: 0.001,
  })

  if (reduce) {
    return null
  }

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-accent origin-left shadow-[0_0_12px_rgba(232,135,42,0.45)]"
      style={{ scaleX }}
    />
  )
}
