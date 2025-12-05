'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plane, Globe, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
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
    <section id="visa" className="relative py-20 md:py-32 bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-200/30 via-transparent to-transparent" />
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-sky-400/20 to-blue-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 text-sky-700 mb-6 shadow-sm"
          >
            <Plane className="w-4 h-4" />
            <span className="text-sm font-semibold">International Opportunities</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visa Processing <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sky-100 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-14 relative mb-4 rounded-lg overflow-hidden shadow-lg group-hover:shadow-sky-200 transition-shadow">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors">
                  {country.name}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-sky-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Available</span>
                </div>
              </div>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            { icon: Globe, title: 'Global Network', description: 'Partnerships with employers in 8+ countries', color: 'from-emerald-400 to-emerald-500' },
            { icon: CheckCircle, title: 'Full Support', description: 'Complete documentation and interview preparation', color: 'from-teal-400 to-teal-500' },
            { icon: Plane, title: 'Quick Processing', description: 'Streamlined visa application process', color: 'from-cyan-400 to-cyan-500' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-start gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
