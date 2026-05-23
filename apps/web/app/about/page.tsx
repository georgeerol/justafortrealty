import type { Metadata } from 'next'
import AboutClient from './AboutClient'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Benoit Justafort — 16+ years of real estate experience in Eastern North Carolina, USMC veteran, and bilingual agent dedicated to getting you the best deal.',
}

export default function AboutPage() {
  return <PageTransition><AboutClient /></PageTransition>
}
