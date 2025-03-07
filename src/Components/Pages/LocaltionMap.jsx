import React from "react";


const locations = [
    { name: "Al Maktoum Airport", time: "12 Mins", icon: "\u2708\ufe0f" },
    { name: "Dubai Marina", time: "15 Mins", icon: "\uD83C\uDFD9" },
    { name: "Emirates Road", time: "5 Mins", icon: "\uD83C\uDFE3" },
    { name: "Palm Jebel Ali", time: "15 Mins", icon: "\uD83C\uDF34" },
];

export default function LocationMap() {
    return (
        <div className="bg-white min-h-screen w-full">
            <div>
                <title>Location - Bengaluru</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </div>

            <div className="container mx-auto px-4 py-12">
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">LOCATION</h1>

                {/* Location Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {locations.map((loc, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="text-5xl mb-3">{loc.icon}</div>
                            <p className="text-lg font-semibold">{loc.time}</p>
                            <p className="text-gray-600 text-center">{loc.name}</p>
                        </div>
                    ))}
                </div>

                {/* Map Section (Unchanged) */}
                <div className="mb-8">
                    <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-800">Map</h2>

                    <div className="relative rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
                        <div className="w-full h-[400px] md:h-[500px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1709835400000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bengaluru Map"
                            ></iframe>

                            <div className="absolute top-4 left-4 z-10">
                                <a
                                    href="https://www.google.com/maps/place/Bengaluru,+Karnataka,+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white px-4 py-2 rounded-md shadow-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    View larger map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
