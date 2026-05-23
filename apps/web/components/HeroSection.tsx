'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import HeroCMAForm from './HeroCMAForm'
import { agentInfo } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-14 lg:-mt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundColor: '#2d3748',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-realty-navy/80 via-realty-navy/60 to-realty-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-realty-navy/50 via-transparent to-realty-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="font-body text-realty-gold font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Eastern North Carolina
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              I&apos;ll Get You The{' '}
              <span className="text-realty-gold">BEST DEAL</span>{' '}
              on the market!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-lg md:text-xl text-slate-200 mt-6 max-w-lg mx-auto lg:mx-0"
            >
              Your Trusted Real Estate Expert with 16+ years of experience. USMC veteran. Bilingual service.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <Link href="/#cma" className="btn-primary text-base px-8 py-4">
                Get Free Analysis
              </Link>
              <Link href="/listings" className="inline-flex items-center justify-center px-8 py-4 rounded-[10px] font-body font-semibold border-2 border-white/30 text-white cursor-pointer transition-all duration-250 ease-out hover:bg-white/10 hover:border-white/60">
                View Listings
              </Link>
            </motion.div>

            {/* Trust badges inline */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start text-sm text-slate-300 font-body"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-realty-gold" />
                16+ Years
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-realty-gold" />
                USMC Veteran
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-realty-gold" />
                3 Languages
              </span>
            </motion.div>
          </motion.div>

          {/* Right: CMA Form (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block"
          >
            <HeroCMAForm />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/60"
        >
          <span className="font-body text-xs">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
