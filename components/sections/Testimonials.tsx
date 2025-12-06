'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

const testimonials = [
  {
    name: 'Michael Rodriguez',
    nameBn: 'মাইকেল রদ্রিগেজ',
    role: 'Pipeline Welder',
    roleBn: 'পাইপলাইন ওয়েল্ডার',
    company: 'Energy Transfer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 5,
    text: 'The training I received here completely transformed my career. Within 3 months of graduation, I was earning $85k annually working on major pipeline projects. The instructors are incredibly knowledgeable and patient.',
    textBn: 'এখানে যে প্রশিক্ষণ পেয়েছি তা আমার ক্যারিয়ারকে সম্পূর্ণ বদলে দিয়েছে। স্নাতকের ৩ মাসের মধ্যে আমি বড় পাইপলাইন প্রকল্পে কাজ করে বার্ষিক $৮৫k উপার্জন করছিলাম। প্রশিক্ষকরা অবিশ্বাস্যভাবে জ্ঞানী এবং ধৈর্যশীল।',
  },
  {
    name: 'Sarah Chen',
    nameBn: 'সারা চেন',
    role: 'Aerospace Welder',
    roleBn: 'এয়ারোস্পেস ওয়েল্ডার',
    company: 'Boeing',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    rating: 5,
    text: 'Coming from a non-traditional background, I was nervous about starting welding school. The supportive environment and hands-on approach made all the difference. Now I work on aircraft components and love what I do.',
    textBn: 'অপ্রচলিত পটভূমি থেকে এসে ওয়েল্ডিং স্কুল শুরু করতে আমি নার্ভাস ছিলাম। সহায়ক পরিবেশ এবং হাতে-কলমে পদ্ধতি সব পার্থক্য তৈরি করেছে। এখন আমি বিমানের যন্ত্রাংশে কাজ করি এবং আমি যা করি তা ভালোবাসি।',
  },
  {
    name: 'James Thompson',
    nameBn: 'জেমস থম্পসন',
    role: 'Welding Supervisor',
    roleBn: 'ওয়েল্ডিং সুপারভাইজার',
    company: 'Chevron',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 5,
    text: 'Best investment I ever made. The comprehensive curriculum and industry connections led me to my dream job in the oil and gas sector. The certifications I earned here opened doors nationwide.',
    textBn: 'আমার জীবনের সেরা বিনিয়োগ। ব্যাপক পাঠ্যক্রম এবং শিল্প সংযোগ আমাকে তেল ও গ্যাস সেক্টরে আমার স্বপ্নের চাকরিতে নিয়ে গেছে। এখানে অর্জিত সার্টিফিকেট দেশব্যাপী দরজা খুলে দিয়েছে।',
  },
]

export default function Testimonials() {
  const { language, t } = useLanguage()

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
            {language === 'bn' ? 'আমাদের' : 'Hear From Our'} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{language === 'bn' ? 'স্নাতকদের কথা শুনুন' : 'Graduates'}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'প্রকৃত শিক্ষার্থীদের প্রকৃত গল্প যারা ওয়েল্ডিংয়ের মাধ্যমে তাদের জীবন পরিবর্তন করেছে' : 'Real stories from real students who transformed their lives through welding'}
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl p-8 border border-emerald-200 hover:border-emerald-500/50 transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`text-dark-600 leading-relaxed mb-6 flex-grow ${language === 'bn' ? 'font-bengali' : ''}`}>
                  "{language === 'bn' ? testimonial.textBn : testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-emerald-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-emerald-500/50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className={`text-dark-900 font-bold ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? testimonial.nameBn : testimonial.name}</h4>
                    <p className={`text-dark-400 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? testimonial.roleBn : testimonial.role}</p>
                    <p className="text-emerald-500 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
