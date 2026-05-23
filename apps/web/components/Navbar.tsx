'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { navLinks, businessInfo } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/50 shadow-soft-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <span className="font-heading text-xl lg:text-2xl font-bold text-realty-navy">
            Justafort
          </span>
          <span className="font-heading text-xl lg:text-2xl font-light text-realty-gold">
            Realty
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-body text-sm font-medium text-slate-700 hover:text-realty-teal cursor-pointer transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-realty-teal transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Phone CTA */}
        <a
          href={`tel:${businessInfo.phone.replace(/[^\d]/g, '')}`}
          className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-realty-teal/10 text-realty-teal font-body font-semibold text-sm hover:bg-realty-teal hover:text-white transition-all duration-200 cursor-pointer"
        >
          <Phone size={16} />
          <span>{businessInfo.phone}</span>
        </a>
      </nav>
    </motion.header>
  )
}
