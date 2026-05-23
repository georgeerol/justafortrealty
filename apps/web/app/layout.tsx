import type { Metadata, Viewport } from 'next'
import { Cinzel, Josefin_Sans } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Justafort Realty | Real Estate Agent in Eastern North Carolina',
    template: '%s | Justafort Realty',
  },
  description:
    'Buy or sell your home in Lumberton, NC and Eastern North Carolina. 16+ years experience, USMC veteran, bilingual agent. Free comparative market analysis.',
  keywords: [
    'real estate agent Lumberton NC',
    'Eastern North Carolina homes',
    'Robeson County realtor',
    'buy home Lumberton',
    'sell home Lumberton',
    'Benoit Justafort',
    'bilingual realtor',
  ],
  openGraph: {
    title: 'Justafort Realty | Real Estate Agent in Eastern North Carolina',
    description:
      'Buy or sell your home in Lumberton, NC and Eastern North Carolina. 16+ years experience, USMC veteran, bilingual agent.',
    url: 'https://justafortrealty.com',
    siteName: 'Justafort Realty',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefinSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
