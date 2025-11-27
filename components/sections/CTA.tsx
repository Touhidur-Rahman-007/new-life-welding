'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 bg-dark-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-32 h-32 border-4 border-white/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-24 h-24 border-4 border-white/10 rounded-lg"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your{' '}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Welding Career?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Join thousands of successful graduates who transformed their lives through professional welding education
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-white text-primary-600 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="#programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-lg text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Explore Programs
              </motion.button>
            </Link>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/80 mb-1">Call Us</div>
                <div className="text-white font-bold">(555) 123-4567</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@newlifewelding.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/80 mb-1">Email Us</div>
                <div className="text-white font-bold">info@newlife.com</div>
              </div>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/80 mb-1">Schedule Tour</div>
                <div className="text-white font-bold">Book a Visit</div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
