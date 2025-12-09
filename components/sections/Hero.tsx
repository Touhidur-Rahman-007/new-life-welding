'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80',
    alt: 'Professional Welder at Work'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1920&q=80',
    alt: 'Arc Welding Sparks'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c74?auto=format&fit=crop&w=1920&q=80',
    alt: 'Industrial Welding Crew'
  },
  {
    url: 'https://images.unsplash.com/photo-1581093457984-3b8b37556c6e?auto=format&fit=crop&w=1920&q=80',
    alt: 'MIG Welding Closeup'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80',
    alt: 'Pipe Welding Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80',
    alt: 'Welding Training Facility'
  },
  {
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80',
    alt: 'Steel Fabrication Weld'
  },
  {
    url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80',
    alt: 'TIG Welding Sparks'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Full Screen Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentIndex].url})` }}
          />
          {/* Subtle overlay for text visibility - keeping images clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/30" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 group shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 group shadow-lg"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl text-center">
          {/* Bangla Title - Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg md:text-xl text-emerald-400 font-semibold mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}
          >
            {t('hero.banglaTtitle')}
          </motion.p>

          {/* English Title - Smaller */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}
          >
            {t('hero.title1')}
            <span className="block mt-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </motion.h1>

          {/* Description - Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}
          >
            {t('hero.description')}
          </motion.p>

          {/* Single CTA Button Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 flex justify-center"
          >
            <Link
              href="#programs"
              className={`group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg font-semibold rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 ${language === 'bn' ? 'font-bengali' : ''}`}
            >
              {t('hero.startJourney')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Bangla Quote - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg max-w-2xl mx-auto"
          >
            <p 
              className="text-lg md:text-xl text-emerald-400 font-semibold italic text-center font-bengali"
            >
              {t('hero.quote')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-emerald-500 w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
