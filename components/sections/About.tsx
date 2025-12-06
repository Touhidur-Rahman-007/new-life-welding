'use client'

import { motion } from 'framer-motion'
import { BookOpen, Lightbulb } from 'lucide-react'
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
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
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

        {/* Chairman Quote */}
        <AnimatedSection className="mt-24">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-emerald-100 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
            <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-emerald-100 blur-3xl opacity-60" />
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-teal-100 blur-3xl opacity-60" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-white">“</span>
              </div>
              <div className="flex-1 space-y-4">
                <span className={`inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('about.quote.badge')}
                </span>
                <h4 className={`text-2xl md:text-3xl font-bold text-dark-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('about.quote.title')}
                </h4>
                <p className={`text-lg md:text-xl text-dark-700 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('about.quote.text')}
                </p>
                <div className="pt-2">
                  <p className={`text-lg font-semibold text-emerald-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('about.quote.name')}
                  </p>
                  <p className={`text-sm text-dark-500 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {t('about.quote.role')}
                  </p>
                </div>
              </div>
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden border-4 border-emerald-100 shadow-lg bg-white/80">
                <Image
                  src="/images/team/chairman.png"
                  alt="Abdur Rahman Jony"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
