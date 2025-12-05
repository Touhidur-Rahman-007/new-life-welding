'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

// Cloudy particles for transition effect
const CloudParticle = ({ delay, x, size }: { delay: number; x: number; size: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 100, x, scale: 0 }}
    animate={{ 
      opacity: [0, 0.8, 0.8, 0],
      y: [100, 0, -100, -200],
      scale: [0.5, 1.2, 1, 0.5],
    }}
    transition={{
      duration: 1.2,
      delay,
      ease: 'easeInOut',
    }}
    className="absolute rounded-full blur-xl"
    style={{
      width: size,
      height: size,
      background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,220,255,0.6) 50%, transparent 70%)',
    }}
  />
)

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const cloudParticles = [
    { delay: 0, x: -150, size: 120 },
    { delay: 0.05, x: 50, size: 80 },
    { delay: 0.1, x: 200, size: 100 },
    { delay: 0.08, x: -50, size: 60 },
    { delay: 0.12, x: 150, size: 90 },
    { delay: 0.03, x: -200, size: 70 },
    { delay: 0.15, x: 0, size: 110 },
    { delay: 0.07, x: 100, size: 85 },
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
      >
        {/* Cloudy Transition Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex items-center justify-center"
        >
          {/* Cloud particles */}
          {cloudParticles.map((particle, i) => (
            <CloudParticle key={i} {...particle} />
          ))}
          
          {/* Main cloud wave */}
          <motion.div
            initial={{ scaleY: 1, opacity: 1 }}
            animate={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/80 to-transparent origin-top"
          />
        </motion.div>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
