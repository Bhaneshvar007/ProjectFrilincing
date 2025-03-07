import React from 'react'
import HeroSection from './Pages/HeroSection'
import EnquiryForm01 from './Pages/EnquiryForm01'
import FAQPage from './Pages/FAQPage'
import PropertySlider from './Pages/PropertySlider'
import LocaltionMap from './Pages/LOcaltionMap'
import EnquiryForm02 from './Pages/EnquiryForm02'
import Footer from './Pages/Footer'
import PopupForm from './Pages/PopupForm'

const Home = () => {
  return (
    <>
      <HeroSection />
      <EnquiryForm01 />
      <PropertySlider />
      <FAQPage />
      <LocaltionMap />
      <EnquiryForm02 />
      <Footer />
      <PopupForm />
    </>
  )
}

export default Home
