'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

const faqsEn = [
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
    question: 'Do you offer job placement assistance?',
    answer: 'Yes! We maintain a 98% job placement rate within 6 months of graduation. Our career services team provides resume assistance, interview prep, and direct connections to hiring partners in the welding industry both locally and internationally.',
  },
  {
    question: 'Can I attend part-time or evening classes?',
    answer: 'Absolutely! We offer flexible scheduling with full-time day programs, part-time evening classes, and weekend options to accommodate working professionals and those with family obligations.',
  },
]

const faqsBn = [
  {
    question: 'ভর্তির জন্য পূর্বশর্ত কী?',
    answer: 'আমাদের বেশিরভাগ প্রোগ্রামে এইচএসসি বা সমমান পাস প্রয়োজন। কিছু উন্নত প্রোগ্রামে পূর্ব ওয়েল্ডিং অভিজ্ঞতা বা সার্টিফিকেশন প্রয়োজন হতে পারে। আপনার জন্য সেরা শুরুর পয়েন্ট নির্ধারণে আমরা বিনামূল্যে দক্ষতা মূল্যায়ন অফার করি।',
  },
  {
    question: 'একটি প্রোগ্রাম সম্পূর্ণ করতে কতক্ষণ সময় লাগে?',
    answer: 'প্রোগ্রামের সময়কাল বেসিক কোর্সের জন্য ৬ সপ্তাহ থেকে বিশেষায়িত প্রোগ্রামের জন্য ২০ সপ্তাহ পর্যন্ত ভিন্ন হয়। বেশিরভাগ শিক্ষার্থী তাদের বেছে নেওয়া প্রোগ্রাম এবং সময়সূচির উপর নির্ভর করে ৩-৬ মাসের মধ্যে তাদের সার্টিফিকেশন সম্পূর্ণ করে।',
  },
  {
    question: 'আমি কোন সার্টিফিকেশন অর্জন করব?',
    answer: 'সম্পূর্ণ হওয়ার পর, আপনি AWS (আমেরিকান ওয়েল্ডিং সোসাইটি), ASME, API এবং OSHA থেকে শিল্প-স্বীকৃত সার্টিফিকেশন অর্জন করবেন। নির্দিষ্ট সার্টিফিকেশন আপনার বেছে নেওয়া প্রোগ্রামের উপর নির্ভর করে এবং CW, CWI, D1.1, Section IX এবং আরও অনেক কিছু অন্তর্ভুক্ত হতে পারে।',
  },
  {
    question: 'আপনারা কি চাকরি নিয়োগে সহায়তা করেন?',
    answer: 'হ্যাঁ! স্নাতকের ৬ মাসের মধ্যে আমরা ৯৮% চাকরি নিয়োগ হার বজায় রাখি। আমাদের ক্যারিয়ার সার্ভিস টিম দেশীয় এবং আন্তর্জাতিকভাবে ওয়েল্ডিং শিল্পে নিয়োগকারী অংশীদারদের সাথে সরাসরি সংযোগ, জীবনবৃত্তান্ত সহায়তা এবং ইন্টারভিউ প্রস্তুতি প্রদান করে।',
  },
  {
    question: 'আমি কি পার্ট-টাইম বা সন্ধ্যার ক্লাসে যোগ দিতে পারি?',
    answer: 'অবশ্যই! আমরা ফুল-টাইম দিনের প্রোগ্রাম, পার্ট-টাইম সন্ধ্যার ক্লাস এবং সপ্তাহান্তের অপশন সহ নমনীয় সময়সূচি অফার করি যা কর্মজীবী পেশাদার এবং পারিবারিক বাধ্যবাধকতাযুক্তদের জন্য উপযুক্ত।',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { language, t } = useLanguage()
  
  const faqs = language === 'bn' ? faqsBn : faqsEn

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
            <span className={`px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('faq.badge')}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('faq.title')} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{t('faq.titleHighlight')}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('faq.subtitle')}
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
                <span className={`text-lg md:text-xl font-bold text-dark-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-emerald-600" />
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
                    <div className={`px-6 md:px-8 pb-6 md:pb-8 text-dark-600 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
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
