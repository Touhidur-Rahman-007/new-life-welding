'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const faqs = [
  {
    question: 'What are the prerequisites for enrollment?',
    answer: 'Most of our programs require a high school diploma or GED. Some advanced programs may require prior welding experience or certifications. We offer a free skills assessment to help determine the best starting point for you.',
  },
  {
    question: 'How long does it take to complete a program?',
    answer: 'Program durations vary from 6 weeks for basic courses to 20 weeks for specialized programs like underwater welding. Most students complete their certifications within 3-6 months, depending on the program and schedule chosen.',
  },
  {
    question: 'What certifications will I earn?',
    answer: 'Upon completion, you\'ll earn industry-recognized certifications from AWS (American Welding Society), ASME, API, and OSHA. Specific certifications depend on your chosen program and may include CW, CWI, D1.1, Section IX, and more.',
  },
  {
    question: 'Do you offer financial aid or payment plans?',
    answer: 'Yes! We offer multiple financing options including federal financial aid, private loans, payment plans, and veteran benefits. Our financial aid team works with you to find the best solution for your situation.',
  },
  {
    question: 'What is your job placement rate?',
    answer: 'We maintain a 98% job placement rate within 6 months of graduation. Our career services team provides resume assistance, interview prep, and direct connections to hiring partners in the welding industry.',
  },
  {
    question: 'Can I attend part-time or evening classes?',
    answer: 'Absolutely! We offer flexible scheduling with full-time day programs, part-time evening classes, and weekend options to accommodate working professionals and those with family obligations.',
  },
  {
    question: 'What equipment will I use during training?',
    answer: 'Students train on professional-grade equipment from Lincoln Electric, Miller, ESAB, and Hypertherm. We also feature VR welding simulators and robotic welding systems for advanced training.',
  },
  {
    question: 'Do you provide safety gear?',
    answer: 'Yes, we provide all necessary safety equipment during training including helmets, gloves, jackets, and protective gear. Upon enrollment, you\'ll receive a starter kit with essential personal protective equipment.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-dark-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold">
              FAQs
            </span>
          </motion.div>
          <h2 className="heading-large text-dark-900 mb-6">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
            Everything you need to know about our welding programs
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-dark-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left hover:bg-dark-50:bg-dark-800 transition-all"
              >
                <span className="text-lg md:text-xl font-bold text-dark-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-600" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-dark-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
