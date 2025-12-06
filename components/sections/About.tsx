'use client'

import { motion } from 'framer-motion'
import { BookOpen, Lightbulb, Quote } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Tilt from 'react-parallax-tilt'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { language, t } = useLanguage()

  const milestones = [
    { year: '1995', title: t('about.milestones.founded.title'), description: t('about.milestones.founded.description') },
    { year: '2005', title: t('about.milestones.expansion.title'), description: t('about.milestones.expansion.description') },
    { year: '2015', title: t('about.milestones.recognition.title'), description: t('about.milestones.recognition.description') },
    { year: '2023', title: t('about.milestones.innovation.title'), description: t('about.milestones.innovation.description') },
  ]
  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('about.badge')}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('about.title')} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{t('about.titleHighlight')}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('about.subtitle')}
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left: Image with 3D Tilt */}
          <AnimatedSection animation="slide" direction="left">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={2000}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mix-blend-overlay" />
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                  alt="Welding Training Facility"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent flex items-end p-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      State-of-the-Art Facility
                    </h3>
                    <p className="text-dark-200">
                      20,000 sq ft of professional training space
                    </p>
                  </div>
                </motion.div>
              </div>
            </Tilt>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection animation="slide" direction="right">
            <div className="space-y-8">
              <div>
                <h3 className={`text-3xl md:text-4xl font-bold text-dark-900 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('about.content.heading')}
                </h3>
                <p className={`text-lg text-dark-600 mb-6 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('about.content.paragraph1')}
                </p>
                <p className={`text-lg text-dark-600 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('about.content.paragraph2')}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-6 py-3 bg-emerald-100 rounded-full"
                >
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span className={`font-semibold text-dark-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('about.content.tag1')}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-6 py-3 bg-teal-100 rounded-full"
                >
                  <Lightbulb className="w-5 h-5 text-teal-600" />
                  <span className={`font-semibold text-dark-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('about.content.tag2')}
                  </span>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <AnimatedSection>
          <h3 className={`text-3xl md:text-4xl font-bold text-center text-dark-900 mb-12 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('about.journey.heading')} <span className="text-emerald-500">{t('about.journey.headingHighlight')}</span>
          </h3>
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-green-600" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <h4 className={`text-xl font-bold text-dark-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {milestone.title}
                      </h4>
                      <p className={`text-dark-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg z-10 flex items-center justify-center"
                  >
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </motion.div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Chairman Quote - Premium Design */}
        <AnimatedSection className="mt-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
            {/* Left: Chairman Image with 3D Tilt Effects */}
            <AnimatedSection animation="slide" direction="left" className="h-full">
              <div className="space-y-6 h-full flex flex-col">
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  scale={1.0}
                  transitionSpeed={2000}
                  className="flex-1 min-h-[400px] md:min-h-[500px]"
                >
                  <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group border-[6px] border-white/90">
                    {/* Image Background & Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 via-transparent to-transparent z-10" />
                    <Image
                      src="/images/team/chairman-jony-new.png"
                      alt="Chairman Jony Sir"
                      width={600}
                      height={700}
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                      priority
                    />
                  </div>
                </Tilt>

                {/* Info Card Below Image */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative mx-4 shrink-0"
                >
                  <div className="bg-white rounded-2xl shadow-xl shadow-emerald-900/5 border border-emerald-100 p-6 text-center relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-bl-[100px] -z-0 opacity-60" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-50 to-teal-50 rounded-tr-[50px] -z-0 opacity-60" />

                    <div className="relative z-10">
                      <h3 className={`text-2xl md:text-3xl font-bold text-dark-900 mb-2 bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {t('about.quote.name').replace('— ', '')}
                      </h3>

                      <div className="flex items-center justify-center gap-3 my-3">
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-300" />
                        <p className={`text-emerald-600 font-bold text-lg uppercase tracking-wide px-2 py-1 rounded-md bg-emerald-50/50 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {t('about.quote.designation')}
                        </p>
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-300" />
                      </div>

                      <p className={`text-dark-500 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {t('about.quote.company')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right: Quote Content */}
            <AnimatedSection animation="slide" direction="right" className="h-full">
              <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
                <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-emerald-100 blur-3xl opacity-60" />
                <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-teal-100 blur-3xl opacity-60" />

                {/* Top Quote Mark - Elegant Typography */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-4 left-6 z-0 select-none pointer-events-none"
                >
                  <motion.span
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="block text-[8rem] md:text-[10rem] leading-none text-emerald-100/80 font-serif"
                  >
                    ❝
                  </motion.span>
                </motion.div>

                <div className="relative z-10 space-y-6 pt-8">
                  {/* Badge */}
                  <div className="relative inline-block">
                    <span className={`relative z-10 inline-flex px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm text-emerald-700 text-sm font-semibold shadow-sm border border-emerald-200 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {t('about.quote.badge')}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 leading-tight relative ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('about.quote.title')}
                  </h4>

                  {/* Quote Text */}
                  <p className={`text-base md:text-lg text-dark-600 leading-relaxed italic relative ${language === 'bn' ? 'font-bengali not-italic leading-loose' : ''}`}>
                    {t('about.quote.text')}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                </div>

                {/* Bottom Quote Mark - Elegant Typography */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-4 right-6 z-0 select-none pointer-events-none"
                >
                  <motion.span
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="block text-[8rem] md:text-[10rem] leading-none text-emerald-100/80 font-serif"
                  >
                    ❞
                  </motion.span>
                </motion.div>

              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
