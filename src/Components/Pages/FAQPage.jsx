import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from '../../assets/Faq.jpeg';

const FAQPage = () => {
    const faqs = [
        {
            question: "What is the Ramuji Water Park Premium Cottage?",
            answer: "The Ramuji Water Park Premium Cottage is a fully furnished, ready-to-move-in residential unit with modern amenities like an LCD TV, mini fridge, AC, electric kettle, and geyser."
        },
        {
            question: "Is bank financing available for purchasing a cottage?",
            answer: "Yes, bank financing is available with easy installment options, making it convenient for buyers to own a premium cottage."
        },
        {
            question: "Can the cottage be used for both residential and commercial purposes?",
            answer: "Absolutely! Owners can live in their cottage or use it for business purposes like setting up a hotel, guest house, or vacation rental."
        },
        {
            question: "What makes this location special?",
            answer: "The cottages are situated in a prime location within Ramuji Water Park, offering access to world-class entertainment, a marriage garden, and resort-like amenities."
        },
        {
            question: "Can I buy multiple cottages for business purposes?",
            answer: "Yes, entrepreneurs can purchase 5 or 10 cottages to start a hotel or hospitality business. The company will also provide support and guidance in setting up the business."
        }
    ];
    

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col w-full lg:flex-row min-h-screen p-8">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 w-full flex justify-center items-center rounded-xl overflow-hidden">
                <img
                    src="/Images/DJI_0747.JPG"
                    alt="FAQ Section"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            {/* Right Side - FAQ */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center items-start lg:p-6 lg:mt-0 mt-5">
                <h2 className="text-3xl font-bold mb-6">General FAQs</h2>
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                className="w-full text-left font-semibold bg-white p-2 md:p-4 rounded-lg shadow flex justify-between items-center transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 p-4 rounded-lg' : 'max-h-0 opacity-0'}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
