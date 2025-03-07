import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../../assets/HouseImg-1.jpg"
import img2 from "../../assets/HouseImg-2.avif"
import img3 from "../../assets/HouseImg-3.jpg"
import img4 from "../../assets/HouseImg-4.jpeg"

const properties = [
  {
    id: 1,
    title: "The Modern House",
    description:
      "Our expertise ensures you get the best value your property deserves. Sell your property securely and efficiently, so you can achieve peace of mind and financial security.",
    image: img1,
  },
  {
    id: 2,
    title: "The Minimalist House",
    description:
      "Our expertise ensures you get the best value your property deserves. Sell your property securely and efficiently, so you can achieve peace of mind and financial security.",
    image: img2,
  },
  {
    id: 3,
    title: "The Elegant House",
    description:
      "Our expertise ensures you get the best value your property deserves. Sell your property securely and efficiently, so you can achieve peace of mind and financial security.",
    image: img3,
  },
  {
    id: 4,
    title: "The Luxury Villa",
    description:
      "Our expertise ensures you get the best value your property deserves. Sell your property securely and efficiently, so you can achieve peace of mind and financial security.",
    image: img4,
  },
]

const PropertySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
        Move-In Ready Gems: <br className="hidden sm:block" /> Discover Your Dream Home Today
      </h2>
      <div className="px-2">
        <Slider {...settings}>
          {properties.map((property) => (
            <div key={property.id} className="px-2 sm:px-3">
              <div className="overflow-hidden border-none shadow-sm rounded-lg bg-white h-full">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                </div>
                <div className="flex flex-row items-start gap-2 sm:gap-4 p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-500">0{property.id}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{property.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-3 sm:line-clamp-4">
                      {property.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PropertySlider

