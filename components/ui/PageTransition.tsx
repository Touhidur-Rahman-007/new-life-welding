'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

// Type for cubic bezier easing
type CubicBezier = [number, number, number, number]

// Premium transition effects - each route gets a different one
const transitionEffects = {
  // 1. Diagonal Wipe with Color Morph
  diagonalWipe: {
    overlay: {
      initial: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      animate: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as CubicBezier }
    },
    content: {
      initial: { opacity: 0, x: -100, rotateY: -15 },
      animate: { opacity: 1, x: 0, rotateY: 0 },
      exit: { opacity: 0, x: 100, rotateY: 15 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-emerald-500 via-teal-500 to-green-500'
  },

  // 2. Circular Reveal with Scale
  circularReveal: {
    overlay: {
      initial: { clipPath: 'circle(150% at 50% 50%)' },
      animate: { clipPath: 'circle(0% at 50% 50%)' },
      transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] as CubicBezier }
    },
    content: {
      initial: { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
      animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-blue-600 via-purple-600 to-indigo-600'
  },

  // 3. Venetian Blinds Effect
  blinds: {
    overlay: {
      initial: { scaleY: 1 },
      animate: { scaleY: 0 },
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as CubicBezier, staggerChildren: 0.05 }
    },
    content: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -30 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
  },

  // 4. Split Screen Curtain
  splitCurtain: {
    overlay: {
      initial: { scaleX: 1 },
      animate: { scaleX: 0 },
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as CubicBezier }
    },
    content: {
      initial: { opacity: 0, scale: 1.2, rotateX: 10 },
      animate: { opacity: 1, scale: 1, rotateX: 0 },
      exit: { opacity: 0, scale: 0.9, rotateX: -10 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-green-500 via-emerald-500 to-teal-500'
  },

  // 5. Wave Morph Effect
  waveMorph: {
    overlay: {
      initial: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      animate: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] as CubicBezier }
    },
    content: {
      initial: { opacity: 0, y: -80, skewY: 3 },
      animate: { opacity: 1, y: 0, skewY: 0 },
      exit: { opacity: 0, y: 80, skewY: -3 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600'
  },

  // 6. Pixelate Dissolve
  pixelate: {
    overlay: {
      initial: { opacity: 1 },
      animate: { opacity: 0 },
      transition: { duration: 0.5, ease: 'easeOut' as const }
    },
    content: {
      initial: { opacity: 0, filter: 'blur(30px) saturate(0)' },
      animate: { opacity: 1, filter: 'blur(0px) saturate(1)' },
      exit: { opacity: 0, filter: 'blur(20px) saturate(2)' },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-teal-500 via-emerald-500 to-green-500'
  },

  // 7. Slide with Rotate 3D
  slide3D: {
    overlay: {
      initial: { x: '0%' },
      animate: { x: '100%' },
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as CubicBezier }
    },
    content: {
      initial: { opacity: 0, rotateY: -90, transformOrigin: 'left center' },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: 90, transformOrigin: 'right center' },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-sky-500 via-blue-600 to-indigo-700'
  },

  // 8. Diamond Reveal
  diamondReveal: {
    overlay: {
      initial: { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
      animate: { clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' },
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] as CubicBezier }
    },
    content: {
      initial: { opacity: 0, scale: 0.5, rotate: 45 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      exit: { opacity: 0, scale: 1.5, rotate: -45 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as CubicBezier }
    },
    gradient: 'from-lime-500 via-green-500 to-emerald-600'
  }
}

// Get effect based on route
const getTransitionEffect = (pathname: string) => {
  const effects = Object.values(transitionEffects)
  const effectKeys = Object.keys(transitionEffects) as (keyof typeof transitionEffects)[]

  // Map specific routes to specific effects
  const routeEffects: Record<string, keyof typeof transitionEffects> = {
    '/': 'circularReveal',
    '/about': 'diagonalWipe',
    '/programs': 'splitCurtain',
    '/gallery': 'diamondReveal',
    '/contact': 'waveMorph',
    '/success-stories': 'blinds',
  }

  // Check if it's a specific route
  if (routeEffects[pathname]) {
    return transitionEffects[routeEffects[pathname]]
  }

  // For dynamic routes or other pages, use hash-based selection
  let hash = 0
  for (let i = 0; i < pathname.length; i++) {
    hash = ((hash << 5) - hash) + pathname.charCodeAt(i)
    hash = hash & hash
  }
  const index = Math.abs(hash) % effectKeys.length
  return transitionEffects[effectKeys[index]]
}

// Blinds component for venetian effect
const BlindStrip = ({ index, total }: { index: number; total: number }) => (
  <motion.div
    initial={{ scaleY: 1 }}
    animate={{ scaleY: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.03,
      ease: [0.76, 0, 0.24, 1] as CubicBezier
    }}
    className="h-full bg-gradient-to-b from-emerald-500 to-teal-600"
    style={{ width: `${100 / total}%`, transformOrigin: 'top' }}
  />
)

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const effect = useMemo(() => getTransitionEffect(pathname), [pathname])
  const isBlinds = effect === transitionEffects.blinds
  const isSplit = effect === transitionEffects.splitCurtain

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
        style={{ perspective: '1200px' }}
      >
        {/* Page Transition Overlay - Dark neutral animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-slate-900 pointer-events-none"
        />

        {/* Page Content with Effect-specific Animation */}
        <motion.div
          initial={effect.content.initial}
          animate={effect.content.animate}
          exit={effect.content.exit}
          transition={effect.content.transition}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
