import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
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
import SSteelPipes from '../assets/Stainless-Steel-Pipes-Round.jpg'
import { MdOutlineConstruction } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { title: "Deformed Bar", image: deformedBar },
  { title: "Angle Bar", image: angleBar },
  { title: "G.I. Pipe", image: giPipe },
  { title: "Wide Flange", image: wideFlange },
  { title: "Sheet Pile", image: sheetPile },
  { title: "Stainless Steel Pipe", image: SSteelPipes}
];

const slides = [
  {
    title: "CONSULTATIVE TEAM",
    description:
      "We assist at every stage of the process, ensuring that our customers are comfortable doing business with us from product selection to pick-up or delivery.",
    imgSrc: Slide1,
  },
  {
    title: "DELIVERED PROMISES",
    description:
      "When we reach an agreement, we follow through.  Our major motivation is to help you complete your assignment.",
    imgSrc: Slide2,
  },
  {
    title: "COMPETITIVE PRICE",
    description:
      "Our prices are in line with the quality of our products.  We can offer lower prices due to our large size.  We don't overquote.",
    imgSrc: Slide3,
  },
  {
    title: "SUPERIOR QUALITY",
    description:
      "We care about your safety and reputation, so we ensure that every piece of steel meets our company's quality standards.",
    imgSrc: Slide4,
  },
];


function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
    const [showModal, setShowModal] = useState(true); // State to control modal visibility
  const [isInView, setIsInView] = useState(false);
   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // This ensures the middle slide is always in focus
    centerPadding: '0', // Prevents padding around the focused slide
    autoplay: true, // Enables auto-slide
    autoplaySpeed: 5000, // Auto transition every 3 seconds
    focusOnSelect: true, // Allows clicking on the middle slide to focus it
    afterChange: (index) => setActiveIndex(index), // Update activeIndex after each slide change
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true, // Ensures the middle item is focused on tablets and larger screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true, // Ensures the middle item is focused on small screens
        },
      },
    ],
  };
  const navigate = useNavigate(); 
    const handleProductsClick = () => {
      navigate('/products');
      window.scrollTo(0, 0);
    };

    const handleContactClick = () => {
      navigate('/contact');
      window.scrollTo(0, 0);
    };
  
  const sliderRef = useRef(null); // Create a reference for the slider

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

    // Handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
    <div ref={sectionRef} className="w-full h-full bg-BG1 bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col text-white py-20 px-6 md:px-16 lg:px-36">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isInView ? 'animate-slide-right animate-fade-in' : ''
          }`}
        >
          <strong>BUILDING <br />
            EXCELLENCE AND <br />
            INTEGRITY.</strong>
        </h1>
        <p
          className={`text-lg sm:text-xl md:text-2xl max-w-2xl mb-6 transition-all duration-1000 ${
            isInView ? 'animate-slide-right animate-fade-in' : ''
          }`}
        >
          At our core, we are dedicated to delivering top-tier steel solutions. Our unwavering commitment to quality and customer satisfaction ensures that every project you undertake is built on a foundation of trust and reliability.
        </p>
        <Link to="/reviews">
        <button
          className={`w-44 font-bold bg-indigo-900 text-white hover:text-white hover:bg-indigo-500 py-4 px-6 rounded-md transition-all duration-1000 ${
            isInView ? 'animate-slide-right animate-fade-in' : ''
          }`}
        >
          Learn More
        </button>
        </Link>
      </div>
    </div>
    
 <div className="w-full py-10 bg-BG2 bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center lg:justify-start px-4 sm:px-12 md:px-16 lg:px-24 xl:px-44">
        <h1
          ref={sectionRef}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left leading-tight transition-all duration-1000 ${
            isInView ? 'animate-fade-in' : ''
          }`}
        >
          <span className="text-indigo-950 font-bold">
            <strong>MORE THAN</strong>
          </span>
          <br />
          <span className="text-yellow-500 font-bold">
            <strong>JUST STEEL</strong>
          </span>
        </h1>
      </div>

      {/* SLIDER */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 px-6 md:px-12 lg:px-24 xl:px-44 mt-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-indigo-950 font-bold mb-6">
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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-indigo-500 text-white ml-2 p-3 rounded-full hover:bg-indigo-700 transition"
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
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-indigo-500 text-white mr-2 p-3 rounded-full hover:bg-indigo-700 transition"
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
        <span className="text-indigo-950"><strong>VARIABILITY &</strong></span> <br />
        <span className="text-yellow-500"><strong>AVAILABILITY</strong></span>
      </h1>
    </div>
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
        You can find everything that you need all coming from a brand with a guarantee of good quality.
      </p>
      <Link to="/products">
        <button
          onClick={handleProductsClick}
          className="mt-6 w-full sm:w-56 font-bold bg-indigo-900 text-white hover:text-white hover:bg-indigo-500 py-4 px-6 rounded-md transition-all duration-300"
        >
          View All Products
        </button>
      </Link>
    </div>
  </div>

  <div className="w-full mt-12 px-4 md:px-12">
    <div className="relative">
      <Slider
        {...settings}
        ref={sliderRef}
      >
        {items.map((item, index) => (
          <div key={index} className="relative px-3">
            <div
              className={`w-full h-[300px] md:h-[360px] lg:h-[400px] xl:h-[460px] overflow-hidden flex items-center justify-center rounded-lg relative transition-all duration-300
                ${activeIndex === index ? '' : 'bg-white opacity-50'}`} // Apply overlay for non-active slides
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-all duration-300`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="absolute bottom-4 left-10 text-white font-bold text-2xl drop-shadow-lg">
              {item.title}
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-6 flex justify-center gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${activeIndex === index ? 'bg-indigo-600 scale-125' : 'bg-gray-400'}`}
          />
        ))}
      </div>
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
          <button
          onClick={handleContactClick}
           className="w-44 font-bold bg-indigo-900 text-white hover:text-white hover:bg-indigo-500 py-4 px-6 rounded-md">
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
