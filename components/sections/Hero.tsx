'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Phone, ArrowRight } from 'lucide-react';
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
      {/* Background Image Slider */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1080,
              opacity: 0.6
            }}
            animate={{
              y: -10,
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          />
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-orange-500/80 hover:border-orange-500 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-orange-500/80 hover:border-orange-500 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">ISO Certified Training Center</span>
          </motion.div>
          {/* Bangla Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-4"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            আপনার ওয়েল্ডিং ক্যারিয়ার শুরু করুন
          </motion.h1>
          {/* English Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Master the Art of
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Professional Welding
            </span>
          </motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            Join Bangladesh''s premier welding training institute. Get internationally recognized 
            certifications and secure high-paying jobs in Europe, Japan, and the Middle East.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+8801712577508"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
            <button
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-orange-500/50 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Video
            </button>
          </motion.div>
          {/* Bangla Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 bg-gradient-to-r from-dark-900/80 to-dark-800/80 backdrop-blur-sm rounded-2xl border border-orange-500/20"
          >
            <p 
              className="text-xl md:text-2xl lg:text-3xl text-orange-400 font-medium italic text-center"
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
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </section>
  );
}