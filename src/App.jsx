import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import ProductIntro from './components/ProductIntro'
import WhatIsAmeora from './components/WhatIsAmeora'
import IngredientsCards from './components/IngredientsCards'
import UnlockSection from './components/UnlockSection'
import ConfidenceSection from './components/ConfidenceSection'
import BenefitsSection from './components/BenefitsSection'
import Testimonials from './components/Testimonials'
import ProductBenefits from './components/ProductBenefits'
import UniqueProps from './components/UniqueProps'
import Footer from './components/Footer'
import Disclaimer from './pages/Disclaimer'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Cart from './pages/Cart'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Home() {
  return (
    <div className="bg-white min-h-screen pt-10">
      <Hero />
      <StatsSection />
      <ProductIntro />
      <WhatIsAmeora />
      <IngredientsCards />
      <UnlockSection />
      <ConfidenceSection />
      <BenefitsSection />
      <Testimonials />
      <ProductBenefits />
      <UniqueProps />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}
