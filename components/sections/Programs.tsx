'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Clock, DollarSign, Award, ChevronRight, Check, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { programs } from '@/data/programs'

export default function Programs() {
  const router = useRouter()

  return (
    <section id="programs" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-white to-white" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold">
              Training Programs
            </span>
          </motion.div>
          <h2 className="heading-large text-dark-900 mb-6">
            Comprehensive <span className="gradient-text">Welding Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
            From beginner to expert, find the perfect program to launch or advance your welding career
          </p>
        </AnimatedSection>

        {/* Program Grid */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent`} />
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${program.color} text-white text-sm font-semibold shadow-lg`}>
                      {program.level}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {program.title}
                    </h3>
                    <p className="text-dark-200 text-sm">
                      {program.subtitle}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <p className="text-dark-600 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    onClick={(event) => {
                      event.stopPropagation()
                      router.push(`/programs/${program.id}`)
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    View Details
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
