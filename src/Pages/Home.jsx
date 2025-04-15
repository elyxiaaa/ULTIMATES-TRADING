import { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { GrNext, GrPrevious } from "react-icons/gr";
import Slide1 from '../assets/SLIDES/consultative.jpg'
import Slide2 from '../assets/SLIDES/delivered.jpg'
import Slide3 from '../assets/SLIDES/competitive.jpg'
import Slide4 from '../assets/SLIDES/superior.jpg'
import angleBar from '../assets/angle-bar.jpg';
import giPipe from '../assets/galvanized-iron.jpg';
import deformedBar from '../assets/deformed-bar.jpg';
import wideFlange from '../assets/wide-flange.jpg';
import sheetPile from '../assets/sheet-pile.jpg';

const items = [
  { title: "Deformed Bar", image: deformedBar },
  { title: "Angle Bar", image: angleBar },
  { title: "G.I. Pipe", image: giPipe },
  { title: "Wide Flange", image: wideFlange },
  { title: "Sheet Pile", image: sheetPile },
];

const slides = [
  {
    title: "CONSULTATIVE TEAM",
    description:
      "We assist in every step of the process, making sure that our customer has confidence transacting with us from product selection until pick-up or delivery.",
    imgSrc: Slide1,
  },
  {
    title: "DELIVERED PROMISES",
    description:
      "We assist in every step of the process, making sure that our customer has confidence transacting with us from product selection until pick-up or delivery.",
    imgSrc: Slide2,
  },
  {
    title: "COMPETITIVE PRICE",
    description:
      "We assist in every step of the process, making sure that our customer has confidence transacting with us from product selection until pick-up or delivery.",
    imgSrc: Slide3,
  },
  {
    title: "SUPERIOR QUALITY",
    description:
      "Your safety and reputation are our concern, which is why we make sure every piece of steel passes our company’s quality standard.",
    imgSrc: Slide4,
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="w-full h-full bg-BG1 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative z-10 flex flex-col text-white py-20 px-6 md:px-16 lg:px-36">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            BUILDING <br />
            EXCELLENCE AND <br />
            INTEGRITY.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-6">
            At our core, we are dedicated to delivering top-tier steel solutions. Our unwavering commitment to quality and customer satisfaction ensures that every project you undertake is built on a foundation of trust and reliability.
          </p>
          <button className="w-44 font-bold bg-green-400 text-green-900 hover:text-white hover:bg-green-500 py-4 px-6 rounded-md">
            Learn More
          </button>
        </div>
      </div>

{/* SLIDE SECTION */}
<div className="w-full py-10 bg-BG2 bg-cover bg-center bg-no-repeat">
  <div className="flex justify-center lg:justify-start  px-4 sm:px-12 md:px-16 lg:px-24 xl:px-44">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left leading-tight">
      <span className="text-green-900 font-bold">MORE THAN</span> <br />
      <span className="text-green-500 font-bold">JUST STEEL</span>
    </h1>
  </div>

  {/* SLIDER */}
  <div className="flex flex-col-reverse lg:flex-row items-center gap-10 px-6 md:px-12 lg:px-24 xl:px-44 mt-12">
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-green-900 font-bold mb-6">
        {slides[activeSlide].title}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-black">
        {slides[activeSlide].description}
      </p>
    </div>

    <div className="relative w-full lg:w-1/2">
      <button
        onClick={() =>
          setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-green-500 text-white ml-2 p-3 rounded-full hover:bg-green-700 transition"
      >
        <GrPrevious size={24} />
      </button>

      <img
        src={slides[activeSlide].imgSrc}
        alt={slides[activeSlide].title}
        className="w-full rounded-lg shadow-lg"
      />

      {/* NEXT */}
      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-green-500 text-white mr-2 p-3 rounded-full hover:bg-green-700 transition"
      >
        <GrNext size={24} />
      </button>
    </div>
  </div>
</div>


      {/* PRODUCT SHOWCASE */}
      <div className="w-full bg-white py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-44 gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-green-900">VARIABILITY &</span> <br />
              <span className="text-green-500">AVAILABILITY</span>
            </h1>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
              You can find everything that you need all coming from a brand with a guarantee of good quality.
            </p>
            <button className="mt-6 w-56 font-bold bg-green-400 text-green-900 hover:text-white hover:bg-green-500 py-4 px-6 rounded-md transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>

        <div className="w-full mt-12 px-4 md:px-12">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative min-w-[260px] sm:min-w-[300px] h-[200px] transition-all duration-500 flex-shrink-0 rounded-xl overflow-hidden 
                  ${index === activeIndex ? 'scale-105 z-10' : 'opacity-60'}
                `}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-lg">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex justify-center gap-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${activeIndex === index ? 'bg-green-600 scale-125' : 'bg-gray-400'}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PLACEHOLDER FINAL SECTION */}
      <div className="h-fit  w-full bg-BG3 bg-cover bg-center bg-no-repeat relative">
      <div className="relative z-10 flex flex-col text-white py-20 px-6 md:px-16 lg:px-36">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Having trouble choosing <br/>
            the right product?
          </h1>
          <button className="w-44 font-bold bg-green-400 text-green-900 hover:text-white hover:bg-green-500 py-4 px-6 rounded-md">
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
