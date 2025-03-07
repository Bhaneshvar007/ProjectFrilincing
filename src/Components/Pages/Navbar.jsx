import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Menu, X } from 'lucide-react';
import {Link} from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="flex items-center justify-between px-4 py-4 md:px-4 lg:px-14">
      {/* Logo */}
      <div className="flex items-center text-white">
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded border border-white">
          <Home className="h-4 w-4" />
        </div>
        <span className="text-lg font-semibold">DreamHouse</span>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block">
        <ul className="flex space-x-2">
          <li className="rounded-full bg-white px-5 py-2 font-medium text-gray-800">Home</li>
          <li className="rounded-full px-5 py-2 font-medium text-white hover:bg-white/10">About</li>
          <li className="rounded-full px-5 py-2 font-medium text-white hover:bg-white/10">Properties</li>
          <li className="rounded-full px-5 py-2 font-medium text-white hover:bg-white/10">News</li>
          <li className="rounded-full px-5 py-2 font-medium text-white hover:bg-white/10">Contact</li>
        </ul>
      </nav>

      {/* Get Started Button - Desktop */}
      <button className="hidden md:block rounded-full bg-white px-5 py-2 font-medium text-gray-800 shadow-md transition hover:bg-gray-100">
        Get Started
      </button>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-50 text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center space-y-6">
            <Link to="#" className="text-xl font-medium text-white">Home</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">About</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">Properties</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">News</Link>
            <Link to="#" className="text-xl font-medium text-white/80 hover:text-white">Contact</Link>
            <button className="mt-4 rounded-full bg-white px-8 py-3 font-medium text-gray-800 shadow-md transition hover:bg-gray-100">
              Get Started
            </button>
          </nav>
        </motion.div>
      )}
    </main>
  );
}
