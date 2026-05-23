import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import FeaturedListings from '@/components/sections/FeaturedListings'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BottomCTASection from '@/components/sections/BottomCTASection'
import CMAFormSection from '@/components/sections/CMAFormSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <ServicesSection />
      <StatsSection />
      <FeaturedListings />
      <TestimonialsSection />
      <BottomCTASection />
      <CMAFormSection />
    </>
  )
}
