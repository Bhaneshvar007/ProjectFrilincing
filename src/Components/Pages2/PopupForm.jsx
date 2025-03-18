import { MdCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import SucessPopup from "./SucessPopup";

export default function PopupForm({ isOpen, setIsOpen }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "fdfa3a9e-376d-4374-b075-6ef806e16e48");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                event.target.reset();
                setIsOpen(false);
                setShowSuccessPopup(true); // Show success popup after form is closed
            } else {
                console.log("Error", data);
                alert("Error: " + data.message);
                setIsOpen(false);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Something went wrong. Please check your internet connection.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            {/* Success Popup - Always in DOM but conditionally visible */}
            <SucessPopup showPopup={showSuccessPopup} setShowPopup={setShowSuccessPopup} />
            
            {/* Main Form Popup */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-20">
                    <div className="bg-white rounded-lg p-6 w-full max-w-[700px] relative shadow-lg">
                        {/* Close Button */}
                        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-8 text-gray-600 hover:text-gray-900">
                            <MdCancel className="text-2xl" />
                        </button>

                        {/* Form Title */}
                        <h2 className="text-gray-800 text-2xl text-center font-semibold mb-6 mt-10">
                            Fill the necessary details in the form and we will connect with you to discuss the investment options in detail.
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* First Name & Last Name */}
                            <div className="flex flex-col gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-gray-700 mb-2">Phone Number</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        placeholder="XX XXX XXXX"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-4 capitalize bg-[#000] hover:bg-[#000] text-white font-medium rounded-md transition-colors"
                            >
                                book your free site visit now
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}