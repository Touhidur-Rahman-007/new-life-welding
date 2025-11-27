'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Flame, ArrowRight, Sparkles, Shield, Award } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import ParticleBackground from '@/components/ui/ParticleBackground'
import AnimatedText from '@/components/ui/AnimatedText'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const features = [
    { icon: Shield, text: 'AWS Certified Programs', delay: 0.4 },
    { icon: Award, text: 'Industry-Leading Instructors', delay: 0.5 },
    { icon: Sparkles, text: 'State-of-the-Art Equipment', delay: 0.6 },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 mesh-gradient" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect border border-primary-500/30 mb-8 group hover:border-primary-500/60 transition-all"
          >
            <Flame className="w-5 h-5 text-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-white">
              Ignite Your Welding Career Today
            </span>
            <Sparkles className="w-4 h-4 text-primary-400 group-hover:rotate-12 transition-transform" />
          </motion.div>

          {/* Main Heading */}
          <div className="mb-8">
            <AnimatedText
              text="Master The Art of"
              className="heading-massive gradient-text mb-4"
              delay={0.3}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative inline-block"
            >
              <h1 className="heading-massive text-white relative z-10">
                Welding
              </h1>
              <motion.div
                className="absolute -inset-4 bg-primary-500/20 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-2xl lg:text-3xl text-dark-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Transform your future with{' '}
            <span className="text-primary-400 font-semibold">industry-leading</span>{' '}
            welding certification programs. Expert instruction, cutting-edge facilities,
            and a proven path to{' '}
            <span className="text-primary-400 font-semibold">career success</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link href="#programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold text-lg shadow-2xl shadow-primary-500/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect text-white rounded-full font-semibold text-lg border border-primary-500/50 hover:border-primary-500 transition-all"
              >
                Schedule a Tour
              </motion.button>
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full border border-white/10 hover:border-primary-500/50 transition-all cursor-pointer"
              >
                <feature.icon className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-medium text-white">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-500/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 border-2 border-accent-500/30 rounded-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-dark-950 to-transparent" />
    </section>
  )
}
