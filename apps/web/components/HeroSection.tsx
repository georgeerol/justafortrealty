'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import HeroCMAForm from './HeroCMAForm'

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
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden -mt-14 lg:-mt-20">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, opacity: bgOpacity }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundColor: '#1B2A4A',
          }}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-realty-navy/85 via-realty-navy/65 to-realty-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-realty-navy/60 via-transparent to-realty-navy/30" />

      {/* Animated accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #2AABB3 0%, transparent 70%)' }}
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-24 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A049 0%, transparent 70%)' }}
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0"
        style={{ y: contentY }}
      >
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
              className="font-body text-realty-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4"
            >
              Eastern North Carolina
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1]"
            >
              I&apos;ll Get You The{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-realty-gold via-realty-warm to-realty-gold bg-clip-text text-transparent">
                  BEST DEAL
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-realty-gold to-realty-warm rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                />
              </span>{' '}
              on the market!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-lg md:text-xl text-white/85 mt-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Your Trusted Real Estate Expert with 16+ years of experience. USMC veteran. Bilingual service.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <Link href="/#cma" className="btn-primary text-base px-8 py-4 shadow-lg shadow-realty-teal/20">
                Get Free Analysis
              </Link>
              <Link href="/listings" className="group inline-flex items-center justify-center px-8 py-4 rounded-[10px] font-body font-semibold border-2 border-white/30 text-white cursor-pointer transition-all duration-300 ease-out hover:bg-white/10 hover:border-white/60 hover:shadow-lg hover:shadow-white/5">
                View Listings
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 mt-10 justify-center lg:justify-start"
            >
              {[
                { label: '16+ Years', sublabel: 'Experience' },
                { label: 'USMC', sublabel: 'Veteran' },
                { label: '3 Languages', sublabel: 'Spoken' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-realty-gold animate-pulse" />
                  <div>
                    <span className="font-body text-sm text-white font-medium block leading-tight">
                      {badge.label}
                    </span>
                    <span className="font-body text-[11px] text-white/50">{badge.sublabel}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: CMA Form (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -5 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block perspective-1000"
          >
            <HeroCMAForm />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-body text-xs text-white/50 tracking-wider uppercase">Discover</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-white/50 to-transparent" />
          <ChevronDown size={18} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
