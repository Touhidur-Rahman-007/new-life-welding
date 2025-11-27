'use client'

import { motion } from 'framer-motion'
import { Play, Youtube, Award, Users, TrendingUp, Eye } from 'lucide-react'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import { useState } from 'react'

const videos = [
  {
    id: 'bUaJz5cMzBE',
    title: 'Professional Welding Training',
    description: 'Discover our state-of-the-art training programs and facilities',
    thumbnail: 'https://i.ytimg.com/vi/bUaJz5cMzBE/hqdefault.jpg',
    duration: '5:23',
    category: 'Training',
    icon: Award,
  },
  {
    id: 'WOetqX3Q5UU',
    title: 'Student Success Stories',
    description: 'Real stories from graduates achieving their welding career goals',
    thumbnail: 'https://i.ytimg.com/vi/WOetqX3Q5UU/hqdefault.jpg',
    duration: '4:15',
    category: 'Success',
    icon: Users,
  },
  {
    id: 'pEEo7hg-McQ',
    title: 'Advanced Techniques Demo',
    description: 'Watch our expert instructors demonstrate advanced welding methods',
    thumbnail: 'https://i.ytimg.com/vi/pEEo7hg-McQ/hqdefault.jpg',
    duration: '6:42',
    category: 'Tutorial',
    icon: TrendingUp,
  },
  {
    id: 'KYRJvsAOKyI',
    title: 'Campus Tour & Facilities',
    description: 'Take a virtual tour of our world-class training center',
    thumbnail: 'https://i.ytimg.com/vi/KYRJvsAOKyI/hqdefault.jpg',
    duration: '3:58',
    category: 'Campus',
    icon: Eye,
  },
]

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="videos" className="relative py-20 md:py-32 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600/20 via-primary-600/20 to-red-600/20 border border-red-500/30 text-red-400 text-sm font-bold flex items-center gap-2 backdrop-blur-sm">
              <Youtube className="w-5 h-5 animate-pulse" />
              Video Gallery
            </span>
          </motion.div>
          <h2 className="heading-large text-white mb-6">
            Watch Our <span className="gradient-text">Training in Action</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-400 max-w-3xl mx-auto">
            Get an inside look at New Life Welding Training Center through our video showcases
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
              <div className="relative bg-dark-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-dark-800 hover:border-primary-500/50 transition-all duration-500 shadow-2xl">
                {/* Video Container */}
                {activeVideo === video.id ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative aspect-video bg-black"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                    />
                  </motion.div>
                ) : (
                  <div 
                    className="relative aspect-video cursor-pointer group/thumb bg-dark-800"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
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
                      <div className="flex items-center gap-2 px-4 py-2 bg-dark-900/80 backdrop-blur-lg rounded-full border border-primary-500/30">
                        <video.icon className="w-4 h-4 text-primary-400" />
                        <span className="text-sm font-semibold text-primary-400">{video.category}</span>
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
                          className="absolute inset-0 w-24 h-24 rounded-full border-4 border-primary-500/30 border-t-primary-500"
                        />
                        
                        {/* Play Button */}
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-red-600 flex items-center justify-center shadow-2xl group-hover/thumb:shadow-primary-500/50 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-primary-400/20 animate-ping" />
                          <Play className="w-10 h-10 text-white ml-1 relative z-10" fill="white" />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/0 via-primary-500/0 to-primary-500/10 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors"
                  >
                    {video.title}
                  </motion.h3>
                  <p className="text-dark-400 leading-relaxed">
                    {video.description}
                  </p>

                  {/* Watch Button */}
                  {activeVideo !== video.id && (
                    <motion.button
                      onClick={() => setActiveVideo(video.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group/btn"
                    >
                      <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Watch Now
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
