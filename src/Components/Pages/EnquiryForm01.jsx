import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";


export default function EnquiryForm01() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className=" p-4 md:p-12 flex flex-col md:flex-row items-start justify-between">
      {/* Registration Form Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-8">Register Your Interest</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="firstName" className="block mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
                <span className="text-sm text-gray-400 mt-1 block">First</span>
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border bg-white text-black rounded"
                  required
                />
                <span className="text-sm text-gray-400 mt-1 block">Last</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex border rounded-sm ">
              <div className="bg-white text-gray-700 px-2 flex focus:ring-1  items-center border-r border-gray-300">
               +91
              </div>  
              <input
                type="tel"
                id="phone"
                name="phone" placeholder="9681452851"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white text-black active:border-none outline-none  focus:outline-none focus:ring-1 focus:ring-amber-500"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email" placeholder="your@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white text-black border  rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#000] hover:bg-[#111] text-sm text-white font-medium py-2 md:py-3 px-8 transition-colors rounded-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Property Information Section */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-2">Dubai's First RiverSide Community</h2>
        <h3 className="text-2xl font-bold mb-6">Luxury Studio 1, 2 & 3 Bedroom in Dubai</h3>

        <p className="mb-6">
          Experience luxurious waterfront living at DAMAC Riverside Views, where urban living meets tranquility. Immerse
          yourself in a sanctuary inspired by wellness, seamlessly blending nature with vibrant community life. DAMAC
          Riverside Views combines Dubai's imaginative, world-class amenities with a lifestyle that celebrates
          rejuvenation and meaningful experiences.
        </p>

        <p className="mb-8">
          With upscale designs, beautifully reflect the surrounding nature. Expansive windows blend the interior with
          the exterior, highlighting the breathtaking water views and flowing waterfalls. Choose from a range of{" "}
          <span className="font-semibold">apartments, including Studios, and 1 to 3-bedroom units</span>. These homes
          redefine apartment living, crafted for discerning individuals.
        </p>

        <button className="bg-[#000] hover:bg-[#111] text-[12px] lg:text-xl text-white font-medium py-2 lg:py-3 px-8 flex gap-2 items-center justify-center transition-colors rounded-full">
          <IoCallOutline className="lg:text-xl text-base" />
          ENQUIRE NOW
        </button>
      </div>

      {/*
      <div className="fixed bottom-6 right-6">
        <a
          href="#"
          className="bg-[#25D366] p-3 rounded-full flex items-center justify-center hover:bg-[#1fba58] transition-colors"
        >
          <WhatsappIcon className="w-6 h-6 text-white" />
        </a>
      </div> */}
    </div>
  );
}
