'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

const images = [
  { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', category: 'students', title: 'Hands-On Training', titleBn: 'হাতে-কলমে প্রশিক্ষণ' },
  { src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80', category: 'facility', title: 'Modern Equipment', titleBn: 'আধুনিক সরঞ্জাম' },
  { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', category: 'students', title: 'Expert Instruction', titleBn: 'বিশেষজ্ঞ নির্দেশনা' },
  { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', category: 'projects', title: 'Student Projects', titleBn: 'শিক্ষার্থী প্রকল্প' },
  { src: 'https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&q=80', category: 'facility', title: 'Training Bays', titleBn: 'প্রশিক্ষণ বে' },
  { src: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80', category: 'projects', title: 'Fabrication Work', titleBn: 'ফ্যাব্রিকেশন কাজ' },
  { src: 'https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=800&q=80', category: 'facility', title: 'Advanced Technology', titleBn: 'উন্নত প্রযুক্তি' },
  { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', category: 'students', title: 'Certification Testing', titleBn: 'সার্টিফিকেশন পরীক্ষা' },
]

const categories = [
  { id: 'all', label: 'All', labelBn: 'সব' },
  { id: 'students', label: 'Students', labelBn: 'শিক্ষার্থী' },
  { id: 'facility', label: 'Facility', labelBn: 'সুবিধা' },
  { id: 'projects', label: 'Projects', labelBn: 'প্রকল্প' },
]

export default function Gallery() {
  const { language } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null)

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-gradient-to-b from-dark-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'গ্যালারি' : 'Gallery'}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'আমাদের' : 'See Our'} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{language === 'bn' ? 'ক্যাম্পাস দেখুন' : 'Campus in Action'}</span>
          </h2>
        </AnimatedSection>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold capitalize transition-all ${language === 'bn' ? 'font-bengali' : ''} ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg'
                  : 'bg-white text-dark-700 hover:bg-dark-50'
              }`}
            >
              {language === 'bn' ? cat.labelBn : cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={language === 'bn' ? image.titleBn : image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className={`text-white font-bold text-lg ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? image.titleBn : image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-6xl w-full aspect-video"
            >
              <Image
                src={selectedImage.src}
                alt={language === 'bn' ? selectedImage.titleBn : selectedImage.title}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
