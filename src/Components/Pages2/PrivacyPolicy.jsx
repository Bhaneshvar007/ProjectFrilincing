import React, { useRef, useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to Hanshika Farms' Privacy Policy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or inquire about our luxury cottages at Ramuji Water Park, Jabalpur. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."
    },
    {
      title: "Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our luxury cottages, when you participate in activities on our site or otherwise contact us. The personal information we collect may include your name, email address, telephone number, and other information you choose to provide. We also automatically collect certain information when you visit, use, or navigate our website. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, and referring URLs."
    },
    {
      title: "How We Use Your Information",
      content: "We use personal information collected via our site for a variety of business purposes, including to process your inquiries, respond to your requests, send you information about our cottages and investment opportunities, and fulfill any other purpose for which you provide it. We may also use your information to improve our website, marketing, and your experience."
    },
    {
      title: "Disclosure of Your Information",
      content: "We may share information with business partners, service providers, and contractors who work on our behalf to provide services. We may disclose your personal information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations."
    },
    {
      title: "Security of Your Information",
      content: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure."
    },
    {
      title: "Your Privacy Rights",
      content: "You have the right to review, change, or terminate your account at any time. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. You can contact us to request access to, correct, or delete any personal information that you have provided to us."
    },
    {
      title: "Policy Updates",
      content: `We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.`
    },
    {
        title: "Contact Us",
        content: (
          <>
            <p>If you have questions or comments about this policy, you may contact us at:</p>
            <p className="mt-3 font-semibold">Hanshika Farms</p>
            <p>2nd floor, Roopali Chambar, New Medicine Complex, Shastri Bridge, Jabalpur (M.P.)</p>
            <p className="mt-3">
              Call us at:{" "}
              <a href="tel:7999599875" className="text-blue-600 font-medium hover:underline">
                7999599875
              </a>
            </p>
          </>
        ),
      }
      
  ];

  // Initialize refs for all sections
  useEffect(() => {
    sectionRefs.current = sections.map((_, i) => sectionRefs.current[i] || React.createRef());
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (index) => {
    setActiveSection(index);
    
    if (sectionRefs.current[index] && sectionRefs.current[index].current) {
      const yOffset = -20; // Add a little offset from the top
      const element = sectionRefs.current[index].current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">The Hanshika Farms Privacy Policy</h1>
           
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar Navigation - Fixed Position */}
          <div className="w-full md:w-64 md:mr-8 mb-8 md:mb-0 md:sticky md:top-4 md:self-start md:max-h-screen md:overflow-auto">
            <nav>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(index)}
                      className={`w-full text-left py-2 px-3 rounded transition-all duration-200 
                        ${activeSection === index 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'}`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Scrollable Content Area */}
          <div className="flex-1 bg-white">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  ref={sectionRefs.current[index]} 
                  className="border-b pb-8 last:border-b-0"
                  id={`section-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-black">{section.title}</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                  
                  {index === 0 && (
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
                      <p className="mb-4">
                        At Hanshika Farms, we are committed to protecting your privacy and ensuring the security of your personal information. Our luxury cottages at Ramuji Water Park offer you a private and secure stay while we handle your data with the utmost care.
                      </p>
                      
                      <h3 className="text-xl font-bold mb-4 mt-6">Your Responsibilities</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Read this Privacy Policy carefully</li>
                        <li>Contact us if you have any questions or concerns about how we handle your data</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-600">
          <p>&copy; 2025 Hanshika Farms. All rights reserved. These luxury cottages are located inside Ramuji Water Park campus, Mukunwara Road, Ghat Pipariya, near Sukh Sagar Medical College, Jabalpur.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;