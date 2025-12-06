'use client'

import { motion } from 'framer-motion'
import { Users, GraduationCap, Award, TrendingUp } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Graduates',
    labelBn: 'স্নাতক',
    description: 'Success stories across industries',
    descriptionBn: 'বিভিন্ন শিল্পে সাফল্যের গল্প',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: GraduationCap,
    value: 98,
    suffix: '%',
    label: 'Job Placement',
    labelBn: 'চাকরি নিয়োগ',
    description: 'Students employed within 6 months',
    descriptionBn: '৬ মাসের মধ্যে শিক্ষার্থীদের চাকরি',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Certifications',
    labelBn: 'সার্টিফিকেট',
    description: 'Industry-recognized credentials',
    descriptionBn: 'শিল্প-স্বীকৃত সনদপত্র',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: 'K',
    prefix: '$',
    label: 'Avg Starting Salary',
    labelBn: 'গড় প্রারম্ভিক বেতন',
    description: 'Competitive entry-level wages',
    descriptionBn: 'প্রতিযোগিতামূলক প্রবেশ-স্তরের বেতন',
    color: 'from-emerald-600 to-teal-600',
  },
]

export default function Stats() {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'প্রমাণিত উৎকর্ষ' : 'Proven Excellence'}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'ফলাফল যা বলে' : 'Results That Speak'} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{language === 'bn' ? 'সবকিছু' : 'Volumes'}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'উৎকর্ষের প্রতি আমাদের প্রতিশ্রুতি আমাদের স্নাতকদের সাফল্যে প্রতিফলিত' : 'Our commitment to excellence is reflected in the success of our graduates'}
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-dark-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-50`} />
              </div>

              {/* Content */}
              <div className="relative p-8 flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-dark-900 font-display">
                    {inView && (
                      <>
                        {stat.prefix}
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          separator=","
                        />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <h3 className={`text-xl font-semibold text-dark-800 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? stat.labelBn : stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-sm text-dark-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? stat.descriptionBn : stat.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
                  initial={{ width: '0%' }}
                  whileInView={{ width: '50%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
