'use client'

import { motion } from 'framer-motion'
import { Play, Youtube, Award, Users, TrendingUp, Eye } from 'lucide-react'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const videos = [
  {
    id: 'bUaJz5cMzBE',
    title: 'Professional Welding Training',
    titleBn: 'পেশাদার ওয়েল্ডিং প্রশিক্ষণ',
    description: 'Discover our state-of-the-art training programs and facilities',
    descriptionBn: 'আমাদের অত্যাধুনিক প্রশিক্ষণ প্রোগ্রাম এবং সুবিধাগুলি আবিষ্কার করুন',
    thumbnail: 'https://i.ytimg.com/vi/bUaJz5cMzBE/hqdefault.jpg',
    duration: '5:23',
    category: 'Training',
    categoryBn: 'প্রশিক্ষণ',
    icon: Award,
  },
  {
    id: 'WOetqX3Q5UU',
    title: 'Student Success Stories',
    titleBn: 'শিক্ষার্থীদের সাফল্যের গল্প',
    description: 'Real stories from graduates achieving their welding career goals',
    descriptionBn: 'স্নাতকদের প্রকৃত গল্প যারা তাদের ওয়েল্ডিং ক্যারিয়ার লক্ষ্য অর্জন করেছে',
    thumbnail: 'https://i.ytimg.com/vi/WOetqX3Q5UU/hqdefault.jpg',
    duration: '4:15',
    category: 'Success',
    categoryBn: 'সাফল্য',
    icon: Users,
  },
  {
    id: 'pEEo7hg-McQ',
    title: 'Advanced Techniques Demo',
    titleBn: 'উন্নত কৌশল প্রদর্শন',
    description: 'Watch our expert instructors demonstrate advanced welding methods',
    descriptionBn: 'আমাদের বিশেষজ্ঞ প্রশিক্ষকদের উন্নত ওয়েল্ডিং পদ্ধতি প্রদর্শন দেখুন',
    thumbnail: 'https://i.ytimg.com/vi/pEEo7hg-McQ/hqdefault.jpg',
    duration: '6:42',
    category: 'Tutorial',
    categoryBn: 'টিউটোরিয়াল',
    icon: TrendingUp,
  },
  {
    id: 'KYRJvsAOKyI',
    title: 'Campus Tour & Facilities',
    titleBn: 'ক্যাম্পাস ট্যুর ও সুবিধাসমূহ',
    description: 'Take a virtual tour of our world-class training center',
    descriptionBn: 'আমাদের বিশ্বমানের প্রশিক্ষণ কেন্দ্রের ভার্চুয়াল ট্যুর করুন',
    thumbnail: 'https://i.ytimg.com/vi/KYRJvsAOKyI/hqdefault.jpg',
    duration: '3:58',
    category: 'Campus',
    categoryBn: 'ক্যাম্পাস',
    icon: Eye,
  },
]

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [loadingVideos, setLoadingVideos] = useState<Record<string, boolean>>({})
  const { language, t } = useLanguage()

  const handlePlay = (videoId: string) => {
    setActiveVideo(videoId)
    setLoadingVideos((prev) => ({ ...prev, [videoId]: true }))
  }

  return (
    <section id="videos" className="relative py-20 md:py-32 bg-gradient-to-b from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-emerald-600/20 border border-emerald-500/30 text-emerald-600 text-sm font-bold flex items-center gap-2 backdrop-blur-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
              <Youtube className="w-5 h-5 animate-pulse" />
              {t('videos.badge')}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('videos.title')} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{t('videos.titleHighlight')}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('videos.subtitle')}
          </p>
        </AnimatedSection>

        {/* Video Grid */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl overflow-hidden border border-emerald-200 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
                {/* Video Container */}
                {activeVideo === video.id ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative aspect-video bg-black"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={language === 'bn' ? video.titleBn : video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      onLoad={() => setLoadingVideos((prev) => ({ ...prev, [video.id]: false }))}
                    />
                    {loadingVideos[video.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="flex flex-col items-center gap-3 text-white">
                          <div className="w-10 h-10 border-4 border-white/40 border-t-white rounded-full animate-spin" />
                          <span className={language === 'bn' ? 'font-bengali' : ''}>{language === 'bn' ? 'ভিডিও লোড হচ্ছে…' : 'Loading video…'}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <div
                    className="relative aspect-video cursor-pointer group/thumb bg-dark-800"
                    onClick={() => handlePlay(video.id)}
                  >
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={language === 'bn' ? video.titleBn : video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-4 left-4 z-10"
                    >
                      <div className={`flex items-center gap-2 px-4 py-2 bg-dark-900/80 backdrop-blur-lg rounded-full border border-emerald-500/30 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        <video.icon className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-400">{language === 'bn' ? video.categoryBn : video.category}</span>
                      </div>
                    </motion.div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-dark-900/90 backdrop-blur-lg rounded-full text-white text-sm font-bold border border-white/10">
                      {video.duration}
                    </div>

                    {/* Play Button */}
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        animate={hoveredIndex === index ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="relative"
                      >
                        {/* Outer Ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 w-24 h-24 rounded-full border-4 border-emerald-500/30 border-t-emerald-500"
                        />

                        {/* Play Button */}
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl group-hover/thumb:shadow-emerald-500/50 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
                          <Play className="w-10 h-10 text-white ml-1 relative z-10" fill="white" />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className={`text-2xl font-bold text-dark-900 mb-3 group-hover:text-emerald-500 transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}
                  >
                    {language === 'bn' ? video.titleBn : video.title}
                  </motion.h3>
                  <p className={`text-dark-600 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? video.descriptionBn : video.description}
                  </p>

                  {/* Watch Button */}
                  {activeVideo !== video.id && (
                    <motion.button
                      onClick={() => setActiveVideo(video.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-4 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group/btn ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      {language === 'bn' ? 'এখনই দেখুন' : 'Watch Now'}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="/videos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all ${language === 'bn' ? 'font-bengali' : ''}`}
          >
            {language === 'bn' ? 'আরও দেখুন' : 'See More'}
            <Eye className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
