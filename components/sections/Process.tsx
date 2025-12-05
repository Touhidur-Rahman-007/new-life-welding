'use client'

import { motion } from 'framer-motion'
import { ClipboardList, UserCheck, BookOpen, Wrench, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Consultation & Assessment',
    description: 'Schedule a free consultation to discuss your goals, experience level, and career aspirations.',
    details: [
      'One-on-one career counseling',
      'Skills assessment test',
      'Program recommendation',
      'Financial aid guidance',
    ],
    duration: '1-2 hours',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Enrollment & Setup',
    description: 'Complete registration, receive your starter kit, and prepare for your welding journey.',
    details: [
      'Easy online enrollment',
      'Welcome kit delivery',
      'Safety gear fitting',
      'Facility orientation',
    ],
    duration: '1 week',
    color: 'from-primary-500 to-primary-600',
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'Foundational Learning',
    description: 'Master safety protocols, equipment handling, and fundamental welding theory.',
    details: [
      'OSHA safety certification',
      'Equipment operation training',
      'Metallurgy basics',
      'Blueprint reading',
    ],
    duration: '2-4 weeks',
    color: 'from-accent-500 to-accent-600',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Hands-On Practice',
    description: 'Apply your knowledge with supervised practice sessions on real projects.',
    details: [
      'Individual workstation access',
      'Project-based learning',
      'Instructor feedback',
      'Portfolio development',
    ],
    duration: '8-12 weeks',
    color: 'from-orange-500 to-orange-600',
  },
  {
    number: '05',
    icon: GraduationCap,
    title: 'Certification Testing',
    description: 'Demonstrate your skills through comprehensive practical and written examinations.',
    details: [
      'AWS certification prep',
      'Mock testing sessions',
      'Written exams',
      'Practical demonstrations',
    ],
    duration: '2-3 weeks',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '06',
    icon: Briefcase,
    title: 'Career Placement',
    description: 'Leverage our industry connections for job placement and career advancement.',
    details: [
      'Resume building workshop',
      'Interview preparation',
      'Industry job fairs',
      'Lifetime placement support',
    ],
    duration: 'Ongoing',
    color: 'from-green-500 to-green-600',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-600 text-sm font-semibold border border-primary-500/30">
              Step-by-Step Process
            </span>
          </motion.div>
          <h2 className="heading-large text-dark-900 mb-6">
            Your Path to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
            A structured, comprehensive approach that takes you from beginner to certified professional
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
                    className="relative bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl p-8 md:p-10 border border-orange-200 hover:border-orange-500/50 transition-all duration-500"
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
                    <h3 className="text-3xl font-bold text-dark-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-3 mb-6 px-4 py-2 bg-orange-100 rounded-full inline-flex">
                      <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                      <span className="text-sm font-medium text-dark-700">
                        Duration: {step.duration}
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
                          <ArrowRight className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-dark-600">{detail}</span>
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
                    className="relative"
                  >
                    {/* Decorative Elements */}
                    <div className={`relative w-full aspect-square max-w-md mx-auto`}>
                      {/* Outer Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30 blur-xl`}
                      />
                      
                      {/* Middle Ring */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-8 rounded-full border-4 border-dashed border-gray-800 opacity-60"
                      />
                      
                      {/* Inner Content */}
                      <div className="absolute inset-16 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl border-4 border-white`}
                        >
                          <step.icon className="w-24 h-24 text-white drop-shadow-lg" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-1 h-20 bg-gradient-to-b from-primary-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
