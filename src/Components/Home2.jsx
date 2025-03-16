import React, { useRef, useState } from 'react'
import HeroSection from './Pages2/HeroSection'
import EnquiryForm01 from './Pages2/EnquiryForm01'
import FAQPage from './Pages2/FAQPage'
import PropertySlider from './Pages2/PropertySlider'
import LocaltionMap from './Pages2/LocaltionMap'
import EnquiryForm02 from './Pages2/EnquiryForm02'
import Footer from './Pages2/Footer'
import PopupForm from './Pages2/PopupForm'
import Navbar from './Pages2/Navbar'
import CommonBtn from './Pages2/CommonBtn'
import CottageTimer from './Pages2/CottageTimer'

const Home2 = () => {
      const [isOpen, setIsOpen] = useState(false);
  
  const enquiryRef = useRef(null);

  const scrollToEnquiry = () => {
    enquiryRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar scrollToEnquiry={scrollToEnquiry} />

      <HeroSection />

      <div ref={enquiryRef}>
        <EnquiryForm01 setIsOpen={setIsOpen}/>
      </div>

      <div className=''>
        <CottageTimer scrollToEnquiry={scrollToEnquiry}
          heading1="Time is Running Out - Don’t Miss!"
          heading2="Book a free visit at the location Today!" />
      </div>

      <PropertySlider />

      <CommonBtn scrollToEnquiry={scrollToEnquiry} />

      <FAQPage />

      <CommonBtn scrollToEnquiry={scrollToEnquiry} />

      <LocaltionMap scrollToEnquiry={scrollToEnquiry} />

      <div className="mb-8">
        <CommonBtn scrollToEnquiry={scrollToEnquiry} />
      </div>

      <CottageTimer
        scrollToEnquiry={scrollToEnquiry}
        heading1="Own Lifetime Relaxation With Never before Offer"
        heading2="Your Cottage Awaits – Schedule a Tour Today"
      />

      <EnquiryForm02 />

      <Footer />

      <PopupForm isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Home2
