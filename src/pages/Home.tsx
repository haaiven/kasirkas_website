import HeroSection from '../sections/HeroSection'
import StatsSection from '../sections/StatsSection'
import FeatureCards3D from '../sections/FeatureCards3D'
import HowItWorks from '../sections/HowItWorks'
import BusinessTypesSection from '../sections/BusinessTypesSection'
import VideoPreviewSection from '../sections/VideoPreviewSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import PricingPreviewSection from '../sections/PricingPreviewSection'
import FAQSection from '../sections/FAQSection'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureCards3D />
      <HowItWorks />
      <BusinessTypesSection />
      <VideoPreviewSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
