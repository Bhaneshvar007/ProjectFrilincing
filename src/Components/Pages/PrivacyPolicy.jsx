import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState(0);

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
            content: "We may update this privacy policy from time to time. The updated version will be indicated by an updated Revised date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information."
        },

        {
            title: "Contact Us",
            content: <>
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
        },
        // {
        //   title: "Contact Us",
        //   content: "If you have questions or comments about this policy, you may contact us at: Hanshika Farms, 2nd floor, Roopali Chambar, New Medicine Complex, Shastri Bridge, Jabalpur (M.P.) or call us at 7999599875."
        // }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12 text-center">
                    <div className="relative inline-block">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
                        {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-700 rounded-full"></div> */}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                    <div className="md:flex">
                        {/* Sidebar Navigation */}
                        <div className="md:w-64 bg-gray-50 p-4 border-r border-gray-200">
                            <nav>
                                <ul>
                                    {sections.map((section, index) => (
                                        <li key={index} className="mb-2">
                                            <button
                                                onClick={() => setActiveSection(index)}
                                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === index
                                                        ? 'bg-blue-600 text-white font-medium shadow-md'
                                                        : 'text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Content Area */}
                        <div className="md:flex-1 p-6">
                            <div className="bg-white rounded-lg p-2">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{sections[activeSection].title}</h2>
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed">{sections[activeSection].content}</p>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-between">
                                <button
                                    onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                                    className={`px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors ${activeSection === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={activeSection === 0}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
                                    className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ${activeSection === sections.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={activeSection === sections.length - 1}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 border-t border-gray-200">
                        <p className="text-center text-gray-600 text-sm">
                            &copy; 2025 Hanshika Farms. All rights reserved. These luxury cottages are located inside Ramuji Water Park campus, Mukunwara Road, Ghat Pipariya, near Sukh Sagar Medical College, Jabalpur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;