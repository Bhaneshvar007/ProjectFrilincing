import { useState } from "react"
import img from '../../assets/Faq.jpeg';

export default function EnquiryForm02() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        countryCode: "AE", // Default to UAE
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-full max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-center">RiverSide Community Now in Dubai</h1>
            <div className="flex flex-col md:flex-row bg-white gap-8">
                {/* Left side - Image and Title */}
                <div className="lg:w-1/2 w-full flex justify-center items-center rounded-xl overflow-hidden">
                    <img
                        src={img}
                        alt="FAQ Section"
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                </div>

                {/* Right side - Form */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-2xl font-bold mb-8 text-center">Register Your Interest</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fName" className="block mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            id="fName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First"
                                            required
                                            className="w-full border px-3 py-2 rounded-md"
                                        />
                                        <span className="text-sm text-gray-500 mt-1">First</span>
                                    </div>
                                    <div>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last"
                                            required
                                            className="w-full border px-3 py-2 rounded-md"
                                        />
                                        <span className="text-sm text-gray-500 mt-1">Last</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="Phone" className="block mb-2">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <div className="flex border rounded-md">
                                    <div className=" p-3 py-2 flex items-center border">
                                        <img src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png?height=30&width=40" alt="Flag" className="w-6 h-4    mr-1" />
                                        <span>+</span>
                                    </div>
                                    <input
                                        type="tel"
                                        id="Phone"
                                        name="phone"
                                        placeholder="9685854782"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="Email" className="block mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full border px-3 py-2 rounded-md"
                                />
                            </div>

                            <button type="submit" className="w-full md:w-auto px-8 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
