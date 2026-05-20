import type { Transition, Variants } from 'framer-motion'

export const springSnappy: Transition = { type: 'spring', stiffness: 380, damping: 28 }
export const springSoft: Transition = { type: 'spring', stiffness: 120, damping: 22 }
export const springBouncy: Transition = { type: 'spring', stiffness: 260, damping: 18 }
export const springFluid: Transition = { type: 'spring', stiffness: 80, damping: 20 }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSoft },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: springSoft },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: springSnappy },
}

// Clip-path reveal — text slides up from behind a mask
export const clipReveal: Variants = {
  hidden: { y: '115%', opacity: 0 },
  visible: (i: number = 0) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

// Horizontal slide-in
export const slideIn = (dir: 'left' | 'right' = 'left'): Variants => ({
  hidden: { opacity: 0, x: dir === 'left' ? -48 : 48 },
  visible: { opacity: 1, x: 0, transition: springSoft },
})

// Draw a line (scaleX)
export const drawLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}
