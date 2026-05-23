'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'

const valueProps = [
  'Know your home\'s true market value',
  'Data-driven pricing insights',
  'No obligation — completely free',
  'Results within 24 hours',
]

export default function CMAFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('CMA Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', address: '' })
  }

  return (
    <section id="cma" className="py-20 bg-realty-light relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-realty-teal to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Value Props */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">
              Get a <span className="text-realty-teal">FREE</span> Comparative Market Analysis
            </h2>
            <div className="gold-divider mt-4 !mx-0" />
            <p className="font-body text-slate-600 mt-6 leading-relaxed">
              Whether you&apos;re thinking about selling or simply curious about your home&apos;s current value, our complimentary market analysis provides the insights you need.
            </p>

            <ul className="mt-8 space-y-4">
              {valueProps.map((prop, i) => (
                <motion.li
                  key={prop}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 font-body text-slate-700"
                >
                  <CheckCircle size={20} className="text-realty-teal flex-shrink-0" />
                  {prop}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-soft-xl border border-slate-100">
              <h3 className="font-heading text-lg font-semibold text-realty-navy text-center">
                Request Your Free Analysis
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="cma-name" className="sr-only">Name</label>
                  <input
                    id="cma-name"
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="cma-email" className="sr-only">Email</label>
                  <input
                    id="cma-email"
                    type="email"
                    inputMode="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="cma-phone" className="sr-only">Phone</label>
                  <input
                    id="cma-phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="cma-address" className="sr-only">Property Address</label>
                  <input
                    id="cma-address"
                    type="text"
                    placeholder="Property Address (optional)"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-primary w-full text-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitted ? 'Sent! We\'ll contact you soon.' : 'Get My Free Analysis'}
                </button>
              </form>

              <p className="font-body text-xs text-slate-400 text-center mt-4">
                No obligation. Your information is kept confidential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
