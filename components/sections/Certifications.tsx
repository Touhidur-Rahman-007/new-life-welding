'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Star, TrendingUp, CheckCircle2, FileCheck } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'

const certifications = [
  {
    id: 'aws-cwi',
    title: 'AWS Certified Welding Inspector',
    org: 'American Welding Society',
    icon: Award,
    color: 'from-blue-600 to-blue-700',
    duration: '3 Months',
    level: 'Advanced',
    description: 'Industry-leading certification for welding inspection and quality control.',
    requirements: ['5+ years welding experience', 'High school diploma', 'Vision test'],
    benefits: ['Average salary: $75,000+', 'High demand nationwide', 'Career advancement'],
  },
  {
    id: 'aws-cwe',
    title: 'AWS Certified Welding Educator',
    org: 'American Welding Society',
    icon: Star,
    color: 'from-primary-600 to-primary-700',
    duration: '2 Months',
    level: 'Professional',
    description: 'Become a certified welding instructor and share your expertise.',
    requirements: ['Valid welding certification', 'Teaching experience preferred', 'Pass exam'],
    benefits: ['Instructor positions', 'Training center roles', 'Consulting opportunities'],
  },
  {
    id: 'asme-ix',
    title: 'ASME Section IX',
    org: 'American Society of Mechanical Engineers',
    icon: Shield,
    color: 'from-green-600 to-green-700',
    duration: '4 Weeks',
    level: 'Professional',
    description: 'Pressure vessel and piping welding certification for industrial applications.',
    requirements: ['Pipe welding skills', 'X-ray quality welds', 'Code knowledge'],
    benefits: ['Oil & gas industry access', 'Power plant opportunities', 'High-paying contracts'],
  },
  {
    id: 'api-1104',
    title: 'API 1104 Pipeline Welding',
    org: 'American Petroleum Institute',
    icon: TrendingUp,
    color: 'from-orange-600 to-orange-700',
    duration: '6 Weeks',
    level: 'Advanced',
    description: 'Essential certification for pipeline welding in the energy sector.',
    requirements: ['6G position capability', 'Field experience', 'Code welding proficiency'],
    benefits: ['Pipeline projects', 'Travel opportunities', '$80,000-$120,000 annually'],
  },
  {
    id: 'aws-d17',
    title: 'AWS D17.1 Aerospace',
    org: 'American Welding Society',
    icon: CheckCircle2,
    color: 'from-purple-600 to-purple-700',
    duration: '8 Weeks',
    level: 'Expert',
    description: 'Precision welding certification for aerospace and aviation applications.',
    requirements: ['TIG welding mastery', 'Aerospace materials knowledge', 'Microscopic quality'],
    benefits: ['Aerospace industry', 'High precision work', 'Premium compensation'],
  },
  {
    id: 'cw',
    title: 'Certified Welder (CW)',
    org: 'American Welding Society',
    icon: FileCheck,
    color: 'from-teal-600 to-teal-700',
    duration: '1 Month',
    level: 'Entry-Professional',
    description: 'Entry-level certification validating core welding competencies.',
    requirements: ['Basic welding training', 'Practical test', 'Written exam'],
    benefits: ['Industry recognition', 'Employment advantage', 'Career foundation'],
  },
]

const certificationPath = [
  { stage: 'Foundation', certs: ['Certified Welder (CW)', 'OSHA Safety'], duration: '1-3 months' },
  { stage: 'Professional', certs: ['AWS D1.1', 'ASME Section IX'], duration: '4-6 months' },
  { stage: 'Specialized', certs: ['API 1104', 'AWS D17.1'], duration: '6-12 months' },
  { stage: 'Expert', certs: ['CWI', 'CWE'], duration: '12-24 months' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-dark-50 dark:from-dark-950 dark:to-dark-900">
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
              Professional Certifications
            </span>
          </motion.div>
          <h2 className="heading-large text-dark-900 dark:text-white mb-6">
            Industry-Recognized <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Earn credentials that open doors to high-paying careers and global opportunities
          </p>
        </AnimatedSection>

        {/* Certification Cards */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-dark-100 dark:border-dark-800">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <cert.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs font-semibold">
                    {cert.level}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-4 font-medium">
                  {cert.org}
                </p>
                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  {cert.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-6 text-dark-700 dark:text-dark-300">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.duration} Program</span>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-3">
                    Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {cert.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-400">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-3">
                    Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-400">
                        <Star className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>

        {/* Certification Path */}
        <AnimatedSection>
          <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-dark-900 dark:text-white mb-12">
              Your Certification <span className="gradient-text">Journey</span>
            </h3>

            <div className="relative">
              {/* Path Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600" />

              {/* Stages */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {certificationPath.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Stage Number */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                        {stage.stage}
                      </h4>
                      <div className="space-y-2 mb-4">
                        {stage.certs.map((cert, i) => (
                          <div
                            key={i}
                            className="text-sm text-dark-600 dark:text-dark-400 px-3 py-1 bg-dark-50 dark:bg-dark-800 rounded-full inline-block mx-1"
                          >
                            {cert}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {stage.duration}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
