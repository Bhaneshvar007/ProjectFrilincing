import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 text-center py-6 border-t mt-10">
            <div className="flex justify-center space-x-6 mb-4">
                <FaInstagram className="text-gray-500 hover:text-gray-900 text-2xl" />
                <FaTwitter className="text-gray-500 hover:text-gray-900 text-2xl" />
                <FaFacebook className="text-gray-500 hover:text-gray-900 text-2xl" />
            </div>
            <nav className="flex justify-center space-x-4 text-sm mb-2">
                <a href="#" className="hover:text-gray-900">Home</a>
                <a href="#" className="hover:text-gray-900">Services</a>
                <a href="#" className="hover:text-gray-900">About</a>
                <a href="#" className="hover:text-gray-900">Terms</a>
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            </nav>
            <p className="text-gray-500 text-xs flex justify-center items-center">
                <FaRegCopyright className="mr-1" /> Future Coders © 2021
            </p>
        </footer>

    );
};

export default Footer;
