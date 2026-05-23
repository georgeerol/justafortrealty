import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Benoit Justafort, your Eastern North Carolina real estate expert. Call, email, or fill out our contact form.',
}

export default function ContactPage() {
  return <PageTransition><ContactClient /></PageTransition>
}
