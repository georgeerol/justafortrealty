'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { businessInfo, agentInfo } from '@/lib/data'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="section-heading text-3xl md:text-4xl">
            Get In Touch
          </h1>
          <div className="gold-divider mt-4" />
          <p className="section-subheading mx-auto mt-3">
            Ready to buy or sell? Have questions? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-14">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-heading text-xl font-semibold text-realty-navy">
              Contact Information
            </h2>
            <p className="font-body text-slate-600 mt-3 leading-relaxed">
              Feel free to reach out by phone, email, or use the form. I typically respond within a few hours during business days.
            </p>

            <div className="mt-8 space-y-6">
              <a
                href={`tel:${businessInfo.phone.replace(/\D/g, '')}`}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-realty-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-realty-teal/20 transition-colors">
                  <Phone size={20} className="text-realty-teal" />
                </div>
                <div>
                  <p className="font-body font-semibold text-realty-navy text-sm">Phone</p>
                  <p className="font-body text-slate-600 mt-0.5">{businessInfo.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-realty-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-realty-teal/20 transition-colors">
                  <Mail size={20} className="text-realty-teal" />
                </div>
                <div>
                  <p className="font-body font-semibold text-realty-navy text-sm">Email</p>
                  <p className="font-body text-slate-600 mt-0.5">{businessInfo.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-realty-teal/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-realty-teal" />
                </div>
                <div>
                  <p className="font-body font-semibold text-realty-navy text-sm">Location</p>
                  <p className="font-body text-slate-600 mt-0.5">
                    {businessInfo.city}, {businessInfo.state} {businessInfo.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-realty-teal/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-realty-teal" />
                </div>
                <div>
                  <p className="font-body font-semibold text-realty-navy text-sm">Availability</p>
                  <p className="font-body text-slate-600 mt-0.5">
                    Mon–Fri: 8AM–7PM<br />
                    Sat: 9AM–5PM<br />
                    Sun: By appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin size={32} className="text-slate-300 mx-auto" />
                <p className="font-body text-sm text-slate-400 mt-3">
                  {businessInfo.city}, {businessInfo.state}
                </p>
                <p className="font-body text-xs text-slate-300 mt-1">
                  Map integration coming soon
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-realty-light rounded-2xl p-8 border border-slate-100">
              <h2 className="font-heading text-xl font-semibold text-realty-navy">
                Send a Message
              </h2>
              <p className="font-body text-sm text-slate-500 mt-2">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="font-body text-sm font-medium text-realty-navy block mb-1.5">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="font-body text-sm font-medium text-realty-navy block mb-1.5">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="font-body text-sm font-medium text-realty-navy block mb-1.5">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="font-body text-sm font-medium text-realty-navy block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="How can I help you?"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-primary w-full text-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Quick Call CTA */}
            <div className="mt-6 p-6 bg-realty-navy rounded-2xl text-center">
              <p className="font-body text-white/80 text-sm">
                Prefer to talk? Give me a call:
              </p>
              <a
                href={`tel:${businessInfo.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 font-heading text-xl font-semibold text-realty-gold mt-2 hover:text-white transition-colors cursor-pointer"
              >
                <Phone size={20} />
                {agentInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
