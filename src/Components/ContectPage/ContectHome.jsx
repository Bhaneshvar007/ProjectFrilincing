import React from 'react'
import Navbar from '../Pages/Navbar';
import EnquiryForm02 from '../Pages/EnquiryForm02';
import Footer from '../Pages/Footer';
import Cnav from './Cnav';

const ContectHome = () => {
    return (
        <div>
            <Cnav />
            <div className="mt-[76px]">
                <EnquiryForm02 />
            </div>
            <Footer />
        </div>
    )
}

export default ContectHome
