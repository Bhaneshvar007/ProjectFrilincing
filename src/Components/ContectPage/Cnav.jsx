import { Home } from 'lucide-react'
import React from 'react'

const Cnav = () => {
    return (
        <main className="flex justify-between items-center h-[65px] px-5 border-b fixed top-0 inset-0 w-full">
            {/* Logo */}
            <div className="flex items-center">
                <div className="mr-2 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded border">
                    <Home className="h-4 w-4" />
                </div>
                <span className="text-sm sm:text-lg font-semibold">Hanshika Farms</span>
            </div>

        
            {/* Get Started Button - Desktop */}
            <button className="rounded-full bg-black px-4 py-[6px] sm:px-6 sm:py-3 text-sm md:text-[17px] font-medium text-white shadow-md transition hover:bg-[#111]">
                Get Enquiry
            </button>

      

        </main>
    )
}

export default Cnav
