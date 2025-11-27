'use client'

import { motion } from 'framer-motion'
import { Users, GraduationCap, Award, TrendingUp } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Graduates',
    description: 'Success stories across industries',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: GraduationCap,
    value: 98,
    suffix: '%',
    label: 'Job Placement',
    description: 'Students employed within 6 months',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Certifications',
    description: 'Industry-recognized credentials',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: 'K',
    prefix: '$',
    label: 'Avg Starting Salary',
    description: 'Competitive entry-level wages',
    color: 'from-green-500 to-green-600',
  },
]

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-dark-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/5 to-transparent dark:from-dark-900/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
              Proven Excellence
            </span>
          </motion.div>
          <h2 className="heading-large text-dark-900 dark:text-white mb-6">
            Results That Speak <span className="gradient-text">Volumes</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the success of our graduates
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
              <div className="absolute inset-0 bg-gradient-to-br from-white to-dark-50 dark:from-dark-900 dark:to-dark-800 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
              
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
                  <div className="text-5xl md:text-6xl font-bold text-dark-900 dark:text-white font-display">
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
                  <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  {stat.description}
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
