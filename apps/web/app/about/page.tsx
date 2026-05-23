import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Benoit Justafort — 16+ years of real estate experience in Eastern North Carolina, USMC veteran, and bilingual agent dedicated to getting you the best deal.',
}

export default function AboutPage() {
  return <AboutClient />
}
