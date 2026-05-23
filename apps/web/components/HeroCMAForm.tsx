'use client'

import { useState } from 'react'

export default function HeroCMAForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('CMA Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '' })
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-soft-xl border border-slate-100">
      <h2 className="font-heading text-xl font-semibold text-realty-navy text-center">
        Get a <span className="text-realty-teal">FREE</span> comparative market analysis!
      </h2>
      <p className="font-body text-sm text-slate-500 text-center mt-2">
        Know your home&apos;s true value in today&apos;s market
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="hero-name" className="sr-only">Name</label>
          <input
            id="hero-name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="hero-email" className="sr-only">Email</label>
          <input
            id="hero-email"
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
          <label htmlFor="hero-phone" className="sr-only">Phone</label>
          <input
            id="hero-phone"
            type="tel"
            inputMode="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input"
          />
        </div>

        <button
          type="submit"
          disabled={submitted}
          className="btn-primary w-full text-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitted ? 'Sent! We\'ll be in touch.' : 'Get My Analysis'}
        </button>
      </form>

      <p className="font-body text-xs text-slate-400 text-center mt-4">
        No obligation. Results within 24 hours.
      </p>
    </div>
  )
}
