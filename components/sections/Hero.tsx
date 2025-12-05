'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1920&auto=format&fit=crop',
    alt: 'Professional Welder at Work'
  },
  {
    url: 'https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=1920&auto=format&fit=crop',
    alt: 'Welding Sparks'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop',
    alt: 'Industrial Welding'
  },
  {
    url: 'https://images.unsplash.com/photo-1573239567170-1f4a6281a5e4?q=80&w=1920&auto=format&fit=crop',
    alt: 'Welding Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop',
    alt: 'Modern Welding Facility'
  },
  {
    url: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1920&auto=format&fit=crop',
    alt: 'MIG Welding Process'
  },
  {
    url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop',
    alt: 'TIG Welding Expert'
  },
  {
    url: 'https://images.unsplash.com/photo-1597762117709-859f744b84c3?q=80&w=1920&auto=format&fit=crop',
    alt: 'Steel Fabrication Welding'
  },
  {
    url: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1920&auto=format&fit=crop',
    alt: 'Precision Welding Work'
  },
  {
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop',
    alt: 'Metal Workshop Welding'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group shadow-lg"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-2xl">
          {/* Bangla Title - Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-orange-400 font-medium mb-2"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            আপনার ওয়েল্ডিং ক্যারিয়ার শুরু করুন
          </motion.p>

          {/* English Title - Smaller */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
          >
            Master the Art of
            <span className="block mt-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
              Professional Welding
            </span>
          </motion.h1>

          {/* Description - Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-gray-200 mb-6 max-w-lg leading-relaxed"
          >
            Join Bangladesh's premier welding training institute. Get internationally recognized 
            certifications and secure high-paying jobs in Europe, Japan, and the Middle East.
          </motion.p>

          {/* Single CTA Button Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <Link
              href="#programs"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Bangla Quote - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg"
          >
            <p 
              className="text-base md:text-lg text-orange-400 font-medium italic text-center"
              style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
            >
              "দক্ষ হয়ে বিদেশ গেলে অর্থ সম্মান দুই-ই মেলে"
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
                ? 'bg-orange-500 w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
