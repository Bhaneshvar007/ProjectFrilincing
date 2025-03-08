import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const properties = [
  {
    id: 1,
    title: "Ramuji Premium Cottage",
    description:
      "Experience luxury living with our fully furnished premium cottages inside Ramuji Water Park. These cottages offer a perfect blend of comfort and modern amenities, including LCD TVs, mini fridges, AC, and a private garden view.",
    image: '/Images/DJI_0743.JPG',
  },
  {
    id: 2,
    title: "Modern Riverside Cottage",
    description:
      "Located in the heart of nature, this cottage offers a serene escape with access to world-class entertainment, marriage gardens, and resort-like amenities.",
    image: '/Images/DJI_0768.JPG',
  },
  {
    id: 3,
    title: "Elegant Retreat Cottage",
    description:
      "A perfect combination of elegance and modern architecture, our retreat cottages provide a peaceful living experience with top-notch furnishings and breathtaking surroundings.",
    image: "/Images/DJI_0747.JPG",
  },
  {
    id: 4,
    title: "Luxury Garden Villa",
    description:
      "These spacious cottages offer a lavish lifestyle with an exclusive garden area, perfect for both residential and commercial purposes such as vacation rentals or boutique stays.",
    image: '/Images/DJI_0804.JPG',
  },
  {
    id: 5,
    title: "Exclusive Business Cottages",
    description:
      "Ideal for entrepreneurs, these cottages provide an excellent opportunity to set up a hospitality business with company support, making them a profitable investment in the growing tourism sector.",
    image: '/Images/DJI_0770.JPG',
  },
];


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

