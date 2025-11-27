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
  const [selectedProgram, setSelectedProgram] = useState(programs[0])
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'outcomes'>('overview')
  const router = useRouter()

  return (
    <section id="programs" className="relative py-20 md:py-32 bg-white dark:bg-dark-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-white to-white dark:from-primary-950/20 dark:via-dark-950 dark:to-dark-950" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
              Training Programs
            </span>
          </motion.div>
          <h2 className="heading-large text-dark-900 dark:text-white mb-6">
            Comprehensive <span className="gradient-text">Welding Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
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
              onClick={() => setSelectedProgram(program)}
              className={`relative cursor-pointer group ${
                selectedProgram.id === program.id ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-dark-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
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
                  <p className="text-dark-600 dark:text-dark-400 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-dark-700 dark:text-dark-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-lg font-bold">{program.price}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <motion.button
                    onClick={(event) => {
                      event.stopPropagation()
                      setSelectedProgram(program)
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

        {/* Detailed View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-dark-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className={`relative bg-gradient-to-r ${selectedProgram.color} p-8 md:p-12`}>
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {selectedProgram.title}
                    </h3>
                    <p className="text-xl text-white/90">{selectedProgram.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-white mb-2">
                      {selectedProgram.price}
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Clock className="w-5 h-5" />
                      <span className="text-lg">{selectedProgram.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/90 max-w-3xl">
                  {selectedProgram.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Tabs */}
            <div className="border-b border-dark-200 dark:border-dark-800">
              <div className="flex">
                {(['overview', 'curriculum', 'outcomes'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 px-6 font-semibold capitalize transition-all ${
                      activeTab === tab
                        ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600'
                        : 'text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                        What You'll Learn
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProgram.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                            <span className="text-dark-700 dark:text-dark-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                        Certifications Earned
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProgram.certifications.map((cert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
                          >
                            <Award className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                            <span className="text-sm font-medium text-dark-900 dark:text-white">
                              {cert}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'curriculum' && (
                  <motion.div
                    key="curriculum"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    {selectedProgram.modules.map((module, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 pb-8 border-l-2 border-primary-300 dark:border-primary-700 last:border-0 last:pb-0"
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gradient-to-br from-primary-500 to-primary-600" />
                        <h5 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                          {module.title}
                        </h5>
                        <div className="text-dark-600 dark:text-dark-400 whitespace-pre-line leading-relaxed text-sm md:text-base">
                          {module.description}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'outcomes' && (
                  <motion.div
                    key="outcomes"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                        Learning Outcomes
                      </h4>
                      <div className="space-y-4">
                        {selectedProgram.outcomes.map((outcome, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 bg-dark-50 dark:bg-dark-800 rounded-xl"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedProgram.color} flex items-center justify-center flex-shrink-0`}>
                              <Check className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-dark-700 dark:text-dark-300 font-medium">
                              {outcome}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                        Career Opportunities
                      </h4>
                      <p className="text-lg text-dark-700 dark:text-dark-300 mb-6">
                        {selectedProgram.career}
                      </p>
                      <Link href="#contact">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                        >
                          Enroll Now
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
