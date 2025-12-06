'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
    const { language, t } = useLanguage()
    const [status, setStatus] = useState<'idle' | 'success'>('idle')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        console.log('Contact submission', Object.fromEntries(formData.entries()))
        setStatus('success')
        form.reset()
        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000)
    }

    return (
        <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Floating Orbs */}
            <div className="absolute -left-20 top-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
            <div className="absolute -right-20 bottom-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className={`px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-600 text-sm font-semibold border border-emerald-500/30 ${language === 'bn' ? 'font-bengali' : ''}`}>
                            {t('contact.badge')}
                        </span>
                    </motion.div>
                    <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {t('contact.title')} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{t('contact.titleHighlight')}</span>
                    </h2>
                    <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {t('contact.description')}
                    </p>
                </AnimatedSection>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Address Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-emerald-100 hover:border-emerald-300 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-dark-900 mb-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {t('contact.address')}
                                        </h3>
                                        <p className={`text-dark-600 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {language === 'bn' ? 'বাড়ি # ৫৩৭২, দক্ষিণখান বাজার, ঢাকা ১২৩০, বাংলাদেশ' : 'House # 5372, Dakshinkhan Bazar, Dhaka 1230, Bangladesh'}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone Card */}
                            <motion.a
                                href="tel:+8801712577508"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="block p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-emerald-100 hover:border-emerald-300 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-dark-900 mb-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {t('contact.callUs')}
                                        </h3>
                                        <p className="text-dark-600 text-sm">01712-577508, 01748-003338</p>
                                    </div>
                                </div>
                            </motion.a>

                            {/* Email Card */}
                            <motion.a
                                href="mailto:newlifeweldingtrainingcenter@gmail.com"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="block p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-emerald-100 hover:border-emerald-300 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-dark-900 mb-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {t('contact.emailUs')}
                                        </h3>
                                        <p className="text-dark-600 text-sm break-all">newlifeweldingtrainingcenter@gmail.com</p>
                                    </div>
                                </div>
                            </motion.a>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-100 p-8 md:p-10 relative overflow-hidden">
                                {/* Form Background Decoration */}
                                <div className="absolute -left-16 -top-16 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-60" />
                                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-teal-100 rounded-full blur-3xl opacity-60" />

                                <form onSubmit={handleSubmit} className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-1">
                                        <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {t('contact.name')}
                                        </label>
                                        <input
                                            name="name"
                                            required
                                            className="w-full rounded-xl border border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {t('contact.email')}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full rounded-xl border border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {t('contact.phone')}
                                        </label>
                                        <input
                                            name="phone"
                                            required
                                            className="w-full rounded-xl border border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                                            {t('contact.message')}
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full rounded-xl border border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm resize-none transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex flex-col gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all ${language === 'bn' ? 'font-bengali' : ''}`}
                                        >
                                            <Send className="w-5 h-5" />
                                            {t('contact.send')}
                                        </motion.button>
                                        {status === 'success' && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`text-emerald-700 font-semibold text-center ${language === 'bn' ? 'font-bengali' : ''}`}
                                            >
                                                {language === 'bn' ? 'ধন্যবাদ! আমরা আপনার বার্তা পেয়েছি।' : 'Thanks! We received your message.'}
                                            </motion.p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
