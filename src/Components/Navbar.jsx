import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Icon from '../assets/Logo.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Using useLocation to get the current route

  // Set active tab based on current location
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/products") return "products";
    if (path === "/location") return "location";
    if (path === "/career") return "career";
    if (path === "/contact") return "contact";
    if (path === "/faq") return "faq";
    if (path === "/reviews") return "reviews";
    return ""; // Default to empty if no match
  };

  const activeTab = getActiveTab(); // Get active tab based on current path

  const handleClick = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  // Conditional classes for underline and text color based on active tab
  const getUnderlineClass = (tabName) =>
    activeTab === tabName
      ? "absolute left-0 bottom-0 inline-block w-full h-[2px] bg-yellow-500 transition-all duration-300"
      : "absolute left-0 bottom-0 inline-block w-0 h-[2px] bg-transparent group-hover:w-full group-hover:bg-yellow-500 transition-all duration-300";

  const getTextClass = (tabName) =>
    activeTab === tabName ? "text-yellow-400" : "text-white";

  return (
    <nav className="bg-indigo-950 text-white font-COP1 px-6 py-10 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="absolute left-44 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <Link to="/">
            <img
              src={Icon}
              alt="Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex justify-end mr-20 flex-1">
          <ul className="flex gap-10 items-center text-xl font-medium">
            {/* Home Link */}
          <li className="relative flex items-center gap-2 cursor-pointer group">
              <button
                onClick={() => handleClick('/')}
                className={`flex items-center cursor-pointer ${getTextClass('home')}`}
              >
                <FaHome className="mr-1" />
                Home
              </button>
              <span className={getUnderlineClass('home')} />
            </li>

            {/* Products Link */}
            <li className="relative flex items-center gap-2 cursor-pointer group">
              <button
                onClick={() => handleClick('/products')}
                className={`flex items-center cursor-pointer ${getTextClass('products')}`}
              >
                <MdOutlineProductionQuantityLimits className="mr-1" />
                Products
              </button>
              <span className={getUnderlineClass('products')} />
            </li>

            {/* Location Link */}
            <li className="relative flex items-center gap-2 cursor-pointer group">
              <button
                onClick={() => handleClick('/location')}
                className={`flex items-center cursor-pointer ${getTextClass('location')}`}
              >
                 <FaLocationArrow className="mr-1" /> 
                Location
              </button>
              <span className={getUnderlineClass('location')} />
            </li>

            {/* Careers Link */}
            <li className="relative flex items-center gap-2 cursor-pointer group">
              <button
                onClick={() => handleClick('/career')}
                className={`flex items-center cursor-pointer ${getTextClass('career')}`}
              >
               <MdOutlineWorkHistory className="mr-1" /> 
                Careers
              </button>
              <span className={getUnderlineClass('career')} />
            </li>

            {/* FAQ Link */}
            <li className="relative flex items-center gap-2 cursor-pointer group">
              <button
                onClick={() => handleClick('/faq')}
                className={`flex items-center cursor-pointer ${getTextClass('faq')}`}
              >
               <MdQuestionMark className="mr-1" /> 
                FAQs
              </button>
              <span className={getUnderlineClass('faq')} />
            </li>

            {/* Contact Link */}
            <li className="relative flex items-center gap-2 cursor-pointer group">
              <button
                onClick={() => handleClick('/contact')}
                className={`flex items-center cursor-pointer ${getTextClass('contact')}`}
              >
              <IoIosCall className="mr-1" /> 
                Contact Us
              </button>
              <span className={getUnderlineClass('contact')} />
            </li>

            {/* Reviews Link */}
            <li className="relative flex items-center gap-2 cursor-pointer group">
              <button
                onClick={() => handleClick('/reviews')}
                className={`flex items-center cursor-pointer ${getTextClass('reviews')}`}
              >
                 <VscFeedback className="mr-1" /> 
                Reviews
              </button>
              <span className={getUnderlineClass('reviews')} />
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden bg-indigo-950 text-white font-COP1 mt-2 p-4 space-y-3 shadow-lg rounded">
          <li className="relative flex items-center gap-2 cursor-pointer group">
            <button onClick={() => handleClick('/')} className="flex items-center w-full p-2">
              Home
            </button>
          </li>

          <li className="relative flex items-center gap-2 cursor-pointer group">
            <button onClick={() => handleClick('/products')} className="flex items-center w-full p-2">
              Products
            </button>
          </li>

          <li className="relative flex items-center gap-2 cursor-pointer group">
            <button onClick={() => handleClick('/location')} className="flex items-center w-full p-2">
              Location
            </button>
          </li>

          <li className="relative flex items-center gap-2 cursor-pointer group">
            <button onClick={() => handleClick('/faq')} className="flex items-center w-full p-2">
              FAQs
            </button>
          </li>

          <li className="relative flex items-center gap-2 cursor-pointer group">
            <button onClick={() => handleClick('/contact')} className="flex items-center w-full p-2">
              Contacts
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
