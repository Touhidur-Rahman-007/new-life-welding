'use client'

import { motion } from 'framer-motion'
import { ClipboardList, UserCheck, BookOpen, Wrench, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Process() {
  const { language, t } = useLanguage()

  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: t('process.steps.consultation.title'),
      description: t('process.steps.consultation.description'),
      details: [
        t('process.steps.consultation.details.0'),
        t('process.steps.consultation.details.1'),
        t('process.steps.consultation.details.2'),
        t('process.steps.consultation.details.3'),
      ],
      duration: t('process.steps.consultation.duration'),
      color: 'from-emerald-500 to-emerald-600',
      borderColor: 'border-emerald-500',
      iconColor: 'text-emerald-500',
    },
    {
      number: '02',
      icon: UserCheck,
      title: t('process.steps.enrollment.title'),
      description: t('process.steps.enrollment.description'),
      details: [
        t('process.steps.enrollment.details.0'),
        t('process.steps.enrollment.details.1'),
        t('process.steps.enrollment.details.2'),
        t('process.steps.enrollment.details.3'),
      ],
      duration: t('process.steps.enrollment.duration'),
      color: 'from-teal-500 to-teal-600',
      borderColor: 'border-teal-500',
      iconColor: 'text-teal-500',
    },
    {
      number: '03',
      icon: BookOpen,
      title: t('process.steps.foundational.title'),
      description: t('process.steps.foundational.description'),
      details: [
        t('process.steps.foundational.details.0'),
        t('process.steps.foundational.details.1'),
        t('process.steps.foundational.details.2'),
        t('process.steps.foundational.details.3'),
      ],
      duration: t('process.steps.foundational.duration'),
      color: 'from-cyan-500 to-cyan-600',
      borderColor: 'border-cyan-500',
      iconColor: 'text-cyan-500',
    },
    {
      number: '04',
      icon: Wrench,
      title: t('process.steps.practice.title'),
      description: t('process.steps.practice.description'),
      details: [
        t('process.steps.practice.details.0'),
        t('process.steps.practice.details.1'),
        t('process.steps.practice.details.2'),
        t('process.steps.practice.details.3'),
      ],
      duration: t('process.steps.practice.duration'),
      color: 'from-sky-500 to-sky-600',
      borderColor: 'border-sky-500',
      iconColor: 'text-sky-500',
    },
    {
      number: '05',
      icon: GraduationCap,
      title: t('process.steps.certification.title'),
      description: t('process.steps.certification.description'),
      details: [
        t('process.steps.certification.details.0'),
        t('process.steps.certification.details.1'),
        t('process.steps.certification.details.2'),
        t('process.steps.certification.details.3'),
      ],
      duration: t('process.steps.certification.duration'),
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500',
      iconColor: 'text-blue-500',
    },
    {
      number: '06',
      icon: Briefcase,
      title: t('process.steps.career.title'),
      description: t('process.steps.career.description'),
      details: [
        t('process.steps.career.details.0'),
        t('process.steps.career.details.1'),
        t('process.steps.career.details.2'),
        t('process.steps.career.details.3'),
      ],
      duration: t('process.steps.career.duration'),
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500',
      iconColor: 'text-amber-500',
    },
  ]
  return (
    <section id="process" className="relative py-20 md:py-32 bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-600 text-sm font-semibold border border-emerald-500/30 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('process.badge')}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('process.title')} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{t('process.titleHighlight')}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('process.subtitle')}
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-20 last:mb-0"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl p-8 md:p-10 border border-emerald-200 hover:border-emerald-500/50 transition-all duration-500"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-6 -left-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className={`text-3xl font-bold text-dark-900 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {step.title}
                    </h3>
                    <p className={`text-lg text-dark-600 mb-6 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-3 mb-6 px-4 py-2 bg-emerald-100 rounded-full inline-flex">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className={`text-sm font-medium text-dark-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {t('process.duration')}: {step.duration}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <ArrowRight className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className={`text-dark-600 ${language === 'bn' ? 'font-bengali' : ''}`}>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Visual Side */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Simple Icon Circle - Only colored border, no lines */}
                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                      {/* Soft glow background */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-15 blur-xl`} />
                      
                      {/* Main Icon Circle */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className={`relative w-full h-full rounded-full bg-white flex items-center justify-center shadow-xl border-4 ${step.borderColor}`}
                      >
                        <step.icon className={`w-20 h-20 md:w-24 md:h-24 ${step.iconColor} drop-shadow-md`} strokeWidth={1.5} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-1 h-20 bg-gradient-to-b from-emerald-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
