'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, businessInfo } from '@/lib/data'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-soft-sm">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 cursor-pointer" onClick={closeMenu}>
            <span className="font-heading text-lg font-bold text-realty-navy">Justafort</span>
            <span className="font-heading text-lg font-light text-realty-gold">Realty</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Phone Icon */}
            <a
              href={`tel:${businessInfo.phone.replace(/[^\d]/g, '')}`}
              className="flex items-center justify-center w-10 h-10 rounded-full text-realty-teal cursor-pointer"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-realty-navy cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            {/* Slide Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white shadow-xl lg:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-realty-navy cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-6 py-4">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="block py-3 px-3 rounded-lg font-body text-base font-medium text-slate-700 hover:text-realty-teal hover:bg-realty-light transition-colors duration-200 cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTA area */}
              <div className="px-6 pb-8 space-y-3">
                <a
                  href={`tel:${businessInfo.phone.replace(/[^\d]/g, '')}`}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg bg-realty-teal/10 text-realty-teal font-body font-semibold cursor-pointer hover:bg-realty-teal/20 transition-colors"
                >
                  <Phone size={18} />
                  <span>{businessInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg bg-slate-50 text-slate-600 font-body cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <Mail size={18} />
                  <span>{businessInfo.email}</span>
                </a>
                <Link
                  href="/#cma"
                  onClick={closeMenu}
                  className="btn-primary w-full text-center mt-4"
                >
                  Get Free Analysis
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
