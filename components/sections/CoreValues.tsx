"use client"

import { motion } from 'framer-motion'
import { Target, Users2, Zap, Shield } from 'lucide-react'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CoreValues() {
  const { language, t } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      bgColor: 'bg-emerald-500',
      shadowColor: 'shadow-emerald-400/60',
      bottomLine: 'bg-emerald-500',
    },
    {
      icon: Users2,
      title: t('about.values.community.title'),
      description: t('about.values.community.description'),
      bgColor: 'bg-teal-500',
      shadowColor: 'shadow-teal-400/60',
      bottomLine: 'bg-teal-500',
    },
    {
      icon: Zap,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      bgColor: 'bg-cyan-500',
      shadowColor: 'shadow-cyan-400/60',
      bottomLine: 'bg-cyan-500',
    },
    {
      icon: Shield,
      title: t('about.values.safety.title'),
      description: t('about.values.safety.description'),
      bgColor: 'bg-lime-500',
      shadowColor: 'shadow-lime-400/60',
      bottomLine: 'bg-lime-500',
    },
  ]

  return (
    <section id="core-values" className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('about.values.heading')}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('about.values.heading')} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{t('about.values.headingHighlight')}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('about.subtitle')}
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className={`relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl ${value.shadowColor} transition-all duration-500 border border-gray-100 overflow-hidden`}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${value.bgColor}`} />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-14 h-14 rounded-xl ${value.bgColor} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className={`relative text-xl font-bold text-dark-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {value.title}
                </h4>
                <p className={`relative text-dark-600 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {value.description}
                </p>
                <div className={`absolute bottom-0 left-8 right-8 h-1 ${value.bottomLine} rounded-full`} />
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
