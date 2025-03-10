import CommonBtn from "./CommonBtn"

const locations = [
  {
    name: "Al Maktoum Airport",
    time: "12 Mins",
    image: "https://www.andyluxury.com/wp-content/uploads/2024/11/Landmark-Icons-07-780x780.png?height=80&width=80",
    alt: "Airport Icon",
  },
  {
    name: "Dubai Marina",
    image: "https://www.andyluxury.com/wp-content/uploads/2024/11/Landmark-Icons-01-780x780.png?height=80&width=80",
    time: "15 Mins",
    alt: "Marina Icon",
  },
  {
    name: "Emirates Road",
    time: "5 Mins",
    image: "https://www.andyluxury.com/wp-content/uploads/2024/11/07.webp?height=80&width=80",
    alt: "Road Icon",
  },
  {
    name: "Palm Jebel Ali",
    time: "15 Mins",
    image: "https://www.andyluxury.com/wp-content/uploads/2024/11/Landmark-Icons-08-780x780.png?height=80&width=80",
    alt: "Palm Icon",
  },
]

export default function LocationMap({ scrollToEnquiry }) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen w-full">
      <div>
        <title>Location - Bengaluru</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-2 text-gray-800 tracking-tight">LOCATION</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Strategically positioned for convenient access to Dubai's key destinations
          </p>
        </div>

        {/* Enhanced Location Cards with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>

              <div className="relative p-8 flex flex-col items-center">
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300 w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={loc.image || "/placeholder.svg"}
                    alt={loc.alt}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="w-12 h-0.5 bg-gray-200 mb-4"></div>
                <p className="text-2xl font-bold text-gray-800 mb-1">{loc.time}</p>
                <p className="text-gray-600 text-center font-medium">{loc.name}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Location Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Prime Location</h3>
              <p className="text-gray-600">
                Situated in a strategic area with easy access to major attractions and business hubs.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-0.5 md:h-16 bg-gray-100 md:mx-6 my-4 md:my-0 "></div>
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellent Connectivity</h3>
              <p className="text-gray-600">
                Well-connected to major highways and transportation networks for seamless travel.
              </p>
            </div>
          </div>
        </div>


        {/* Btn */}
        <div className="mb-5 -mt-5">
          <CommonBtn scrollToEnquiry={scrollToEnquiry} />
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
  )
}

