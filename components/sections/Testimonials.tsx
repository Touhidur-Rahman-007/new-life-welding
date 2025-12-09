'use client'

import { motion } from 'framer-motion'
import { Star, Quote, User } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

const testimonials = [
  {
    name: 'Md. Rahim Uddin',
    nameBn: 'মো: রহিম উদ্দিন',
    role: 'Welder',
    roleBn: 'ওয়েল্ডার',
    company: 'সৌদি আরব',
    rating: 5,
    text: 'New Life থেকে ট্রেনিং নিয়ে এখন সৌদিতে ভালো কাজ করছি। মাসে ৭০-৮০ হাজার টাকা পাঠাতে পারছি পরিবারকে। জনি স্যার আর সাজ্জাদ ভাইয়ের কাছে চিরকৃতজ্ঞ।',
    textBn: 'New Life থেকে ট্রেনিং নিয়ে এখন সৌদিতে ভালো কাজ করছি। মাসে ৭০-৮০ হাজার টাকা পাঠাতে পারছি পরিবারকে। জনি স্যার আর সাজ্জাদ ভাইয়ের কাছে চিরকৃতজ্ঞ।',
  },
  {
    name: 'Kamal Hossain',
    nameBn: 'কামাল হোসেন',
    role: 'Pipe Welder',
    roleBn: 'পাইপ ওয়েল্ডার',
    company: 'কুয়েত',
    rating: 5,
    text: 'গ্রামের ছেলে ছিলাম, কিছুই জানতাম না। ৩ মাসের কোর্স করে এখন কুয়েতে আছি। স্বপ্নেও ভাবিনি এত তাড়াতাড়ি বিদেশে আসতে পারব।',
    textBn: 'গ্রামের ছেলে ছিলাম, কিছুই জানতাম না। ৩ মাসের কোর্স করে এখন কুয়েতে আছি। স্বপ্নেও ভাবিনি এত তাড়াতাড়ি বিদেশে আসতে পারব।',
  },
  {
    name: 'Jahangir Alam',
    nameBn: 'জাহাঙ্গীর আলম',
    role: 'TIG Welder',
    roleBn: 'টিআইজি ওয়েল্ডার',
    company: 'সিঙ্গাপুর',
    rating: 5,
    text: 'এখানে হাতে-কলমে শিখেছি বলে কাজে কোনো সমস্যা হয় না। সিঙ্গাপুরে বস সবাইকে বলেন বাংলাদেশি ওয়েল্ডার সেরা। গর্ব লাগে শুনতে।',
    textBn: 'এখানে হাতে-কলমে শিখেছি বলে কাজে কোনো সমস্যা হয় না। সিঙ্গাপুরে বস সবাইকে বলেন বাংলাদেশি ওয়েল্ডার সেরা। গর্ব লাগে শুনতে।',
  },
  {
    name: 'Abdul Karim',
    nameBn: 'আব্দুল করিম',
    role: 'Structural Welder',
    roleBn: 'স্ট্রাকচারাল ওয়েল্ডার',
    company: 'মালয়েশিয়া',
    rating: 5,
    text: 'New Life-এ ভর্তি হওয়ার আগে দিনমজুর ছিলাম। এখন মালয়েশিয়ায় বড় কোম্পানিতে চাকরি। জীবনটাই বদলে গেছে আলহামদুলিল্লাহ।',
    textBn: 'New Life-এ ভর্তি হওয়ার আগে দিনমজুর ছিলাম। এখন মালয়েশিয়ায় বড় কোম্পানিতে চাকরি। জীবনটাই বদলে গেছে আলহামদুলিল্লাহ।',
  },
  {
    name: 'Mizanur Rahman',
    nameBn: 'মিজানুর রহমান',
    role: 'MIG Welder',
    roleBn: 'মিগ ওয়েল্ডার',
    company: 'দুবাই',
    rating: 5,
    text: 'প্রথমে ভেবেছিলাম ওয়েল্ডিং কঠিন কাজ, পারব না। কিন্তু স্যারদের গাইডেন্সে সব সহজ হয়ে গেছে। এখন দুবাইতে মাশাল্লাহ ভালো আছি।',
    textBn: 'প্রথমে ভেবেছিলাম ওয়েল্ডিং কঠিন কাজ, পারব না। কিন্তু স্যারদের গাইডেন্সে সব সহজ হয়ে গেছে। এখন দুবাইতে মাশাল্লাহ ভালো আছি।',
  },
  {
    name: 'Shahinur Islam',
    nameBn: 'শাহিনুর ইসলাম',
    role: 'Welder',
    roleBn: 'ওয়েল্ডার',
    company: 'ওমান',
    rating: 5,
    text: 'ভাই, সত্যি বলছি এখানে যা শিখেছি তা কোথাও পেতাম না। প্র্যাক্টিক্যাল ট্রেনিং একদম জব রেডি করে দেয়। এখন ওমানে সুন্দর করে আছি।',
    textBn: 'ভাই, সত্যি বলছি এখানে যা শিখেছি তা কোথাও পেতাম না। প্র্যাক্টিক্যাল ট্রেনিং একদম জব রেডি করে দেয়। এখন ওমানে সুন্দর করে আছি।',
  },
  {
    name: 'Faruk Ahmed',
    nameBn: 'ফারুক আহমেদ',
    role: 'Welder Supervisor',
    roleBn: 'ওয়েল্ডার সুপারভাইজার',
    company: 'কাতার',
    rating: 5,
    text: 'শুরুতে সাধারণ ওয়েল্ডার ছিলাম, এখন সুপারভাইজার। New Life-এর সার্টিফিকেট দেখে কোম্পানি প্রমোশন দিয়েছে। ধন্যবাদ নিউ লাইফ পরিবার।',
    textBn: 'শুরুতে সাধারণ ওয়েল্ডার ছিলাম, এখন সুপারভাইজার। New Life-এর সার্টিফিকেট দেখে কোম্পানি প্রমোশন দিয়েছে। ধন্যবাদ নিউ লাইফ পরিবার।',
  },
]

// Triple for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

export default function Testimonials() {
  const { language } = useLanguage()

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-gradient-to-b from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />

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
              {language === 'bn' ? 'সাফল্যের গল্প' : 'Success Stories'}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'আমাদের প্রশিক্ষণার্থীদের' : 'What Our'} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{language === 'bn' ? 'মনের কথা' : 'Students Say'}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'যারা আমাদের কাছ থেকে প্রশিক্ষণ নিয়ে জীবন বদলে দিয়েছেন, তাদের অভিজ্ঞতা শুনুন' : 'Hear from those who transformed their lives through our training'}
          </p>
        </AnimatedSection>

        {/* Auto-rotating Testimonials Slider */}
        <div className="relative overflow-hidden">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-teal-50 to-transparent z-10 pointer-events-none" />

          {/* Sliding container */}
          <motion.div
            className="flex gap-4 sm:gap-8"
            animate={{
              x: [0, -50 * testimonials.length + '%'],
            }}
            transition={{
              x: {
                duration: 280,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{ width: 'fit-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
              >
                <div className="relative bg-white backdrop-blur-lg shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-emerald-300 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
                    <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className={`text-sm sm:text-base text-dark-600 leading-relaxed mb-4 sm:mb-6 flex-grow font-bengali`}>
                    "{testimonial.textBn}"
                  </p>

                  {/* Author - No Image */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-emerald-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base text-dark-900 font-bold ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? testimonial.nameBn : testimonial.name}</h4>
                      <p className={`text-dark-400 text-xs sm:text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? testimonial.roleBn : testimonial.role}</p>
                      <p className="text-emerald-500 text-xs sm:text-sm font-medium font-bengali">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
