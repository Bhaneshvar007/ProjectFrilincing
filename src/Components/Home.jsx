import React, { useRef } from 'react'
import HeroSection from './Pages/HeroSection'
import EnquiryForm01 from './Pages/EnquiryForm01'
import FAQPage from './Pages/FAQPage'
import PropertySlider from './Pages/PropertySlider'
import LocaltionMap from './Pages/LocaltionMap'
import EnquiryForm02 from './Pages/EnquiryForm02'
import Footer from './Pages/Footer'
import PopupForm from './Pages/PopupForm'
import Navbar from './Pages/Navbar'
import CommonBtn from './Pages/CommonBtn'
import CottageTimer from './Pages/CottageTimer'

const Home = () => {
  const enquiryRef = useRef(null);

  const scrollToEnquiry = () => {
    enquiryRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar scrollToEnquiry={scrollToEnquiry} />

      <HeroSection />

      <div ref={enquiryRef}>
        <EnquiryForm01 />
      </div>

      <CottageTimer scrollToEnquiry={scrollToEnquiry} />

      <PropertySlider />

      <CommonBtn scrollToEnquiry={scrollToEnquiry} />

      <FAQPage />

      <CommonBtn scrollToEnquiry={scrollToEnquiry} />

      <LocaltionMap />

      <div className="mb-8">
        <CommonBtn scrollToEnquiry={scrollToEnquiry} />
      </div>

      <CottageTimer scrollToEnquiry={scrollToEnquiry} />
      
      <EnquiryForm02 />

      <Footer />

      <PopupForm />
    </>
  )
}

export default Home
