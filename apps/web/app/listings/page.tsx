import type { Metadata } from 'next'
import ListingsClient from './ListingsClient'

export const metadata: Metadata = {
  title: 'Listings',
  description:
    'Browse available homes for sale in Lumberton, NC and Eastern North Carolina. Find your dream property with Justafort Realty.',
}

export default function ListingsPage() {
  return <ListingsClient />
}
