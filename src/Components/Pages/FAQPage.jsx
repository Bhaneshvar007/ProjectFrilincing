import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from '../../assets/Faq.jpeg';

const FAQPage = () => {
    const faqs = [
        {
            question: "Does Dream House Estate provide after-sales services?",
            answer: "Yes, we offer comprehensive after-sales services including maintenance and customer support."
        },
        {
            question: "Does Dream House Estate offer financing options?",
            answer: "Yes, we collaborate with trusted financial partners to assist you in finding financing options that suit your needs. Our team will provide guidance and support throughout the financing process."
        },
        {
            question: "How long will it take to sell my house?",
            answer: "The duration varies based on market conditions, location, and pricing. On average, it can take a few weeks to a few months."
        },
        {
            question: "What documents are required for property purchase?",
            answer: "You need a valid ID, proof of income, and an initial deposit to proceed with the property purchase."
        },
        {
            question: "Does Dream House Estate provide after-sales services?",
            answer: "Yes, we offer comprehensive after-sales services including maintenance and customer support."
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
                    src={img}
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
                                className="w-full text-left font-semibold bg-white p-4 rounded-lg shadow flex justify-between items-center transition-all duration-300"
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
