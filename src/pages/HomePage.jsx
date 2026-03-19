import { useState } from 'react'
import PromoModal from '@/components/common/PromoModal'
import HeroSection from '@/sections/HeroSection'
import OverviewSection from '@/sections/OverviewSection'
import PaymentSection from '@/sections/PaymentSection'
import ProductsSection from '@/sections/ProductsSection'
import StatsSection from '@/sections/StatsSection'

const PROMO_KEY = 'mre-hunter-promo-dismissed'

export default function HomePage() {
  const [isPromoOpen, setIsPromoOpen] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return !window.sessionStorage.getItem(PROMO_KEY)
  })

  const handleClosePromo = () => {
    window.sessionStorage.setItem(PROMO_KEY, 'true')
    setIsPromoOpen(false)
  }

  return (
    <>
      <PromoModal open={isPromoOpen} onClose={handleClosePromo} />
      <HeroSection />
      <OverviewSection />
      <ProductsSection />
      <StatsSection />
      <PaymentSection />
    </>
  )
}
