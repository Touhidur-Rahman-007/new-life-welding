'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plane, Globe, CheckCircle } from 'lucide-react';
const countries = [
  { name: 'Romania', code: 'ro', flag: 'https://flagcdn.com/w160/ro.png' },
  { name: 'Hungary', code: 'hu', flag: 'https://flagcdn.com/w160/hu.png' },
  { name: 'Poland', code: 'pl', flag: 'https://flagcdn.com/w160/pl.png' },
  { name: 'Croatia', code: 'hr', flag: 'https://flagcdn.com/w160/hr.png' },
  { name: 'Japan', code: 'jp', flag: 'https://flagcdn.com/w160/jp.png' },
  { name: 'Singapore', code: 'sg', flag: 'https://flagcdn.com/w160/sg.png' },
  { name: 'Malaysia', code: 'my', flag: 'https://flagcdn.com/w160/my.png' },
  { name: 'Germany', code: 'de', flag: 'https://flagcdn.com/w160/de.png' },
];
export default function VisaProcessing() {
  return (
    <section id="visa" className="relative py-20 md:py-32 bg-gradient-to-b from-dark-900 to-dark-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 mb-6">
            <Plane className="w-4 h-4" />
            <span className="text-sm font-medium">International Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visa Processing <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            We help our certified welders secure employment opportunities abroad with complete visa processing support.
          </p>
        </motion.div>
        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 border border-dark-700 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-14 relative mb-4 rounded-lg overflow-hidden shadow-lg group-hover:shadow-orange-500/20 transition-shadow">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                  {country.name}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Available</span>
                </div>
              </div>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Globe, title: 'Global Network', description: 'Partnerships with employers in 8+ countries' },
            { icon: CheckCircle, title: 'Full Support', description: 'Complete documentation and interview preparation' },
            { icon: Plane, title: 'Quick Processing', description: 'Streamlined visa application process' },
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-dark-800/30 rounded-xl border border-dark-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-dark-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}