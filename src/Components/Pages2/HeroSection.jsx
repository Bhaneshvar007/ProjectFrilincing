"use client"

import { motion } from "framer-motion"


export default function HeroSection() {
    return (
        <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src='/Images/DJI_0783.JPG'
                    alt="Background"
                    className="h-full w-full object-cover"
                    style={{ filter: "brightness(0.8)" }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>


            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen flex-col bg-black/30">
               

                <div className="flex flex-1 flex-col items-center mt-28 md:mt-48  px-4 text-center text-white md:px-8 lg:px-16">
                    <motion.h1
                        className="mb-5 text-2xl font-bold leading-tight md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hanshika Farms 
                        <br />
                        Invest in Luxurious Cottages <br /> At The Best Location
                    </motion.h1>
                    <motion.p
                        className="mx-auto max-w-3xl text-sm md:text-base md:font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Secure Future with owned Vacation home and ROI
                        <br />
                        We bring the best of both worlds: Modern Amenities and Assured Returns from our luxurious cottages.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

