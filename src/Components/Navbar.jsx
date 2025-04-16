import  { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaD, FaRankingStar } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom"; 
import { Link as ScrollLink } from 'react-scroll';  
import { FaList } from "react-icons/fa";
import Icon from '../assets/Logo.png'

function Navbar({ activeTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  const handleProductsClick = () => {
    navigate('/products');
    window.scrollTo(0, 0);
  };
  const handleLocationClick = () => {
    navigate('/location');
    window.scrollTo(0, 0);
  };
  const handleFarmSiteClick = () => {
    navigate('/farmsite');
    window.scrollTo(0, 0);
  };
  const handleDropListClick = () => {
    navigate('/droplist');
    window.scrollTo(0, 0);
  };
  const handleRulesClick = () => {
    navigate('/rules');
    window.scrollTo(0, 0);
  };
  
  const handleBattlepassClick = () => {
    navigate('/battlepass');
    window.scrollTo(0, 0);
  };
  
  const handleDailyQuestClick = () => {
    navigate('/dailyquest');
    window.scrollTo(0, 0);
  };

  const handleLeaderboardsClick = () => {

    navigate('/');


    setTimeout(() => {
      // Use react-scroll to scroll to the "leaderboards-section"
      const leaderboardsLink = document.getElementById('leaderboards-section');
      if (leaderboardsLink) {
        leaderboardsLink.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleCashShopClick = () => {
    navigate('/donation');
  
    setTimeout(() => {
      const cashShopLink = document.getElementById('cash-section');
      if (cashShopLink) {
        cashShopLink.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Delay to ensure the new page is fully loaded
  };

  const handlePackageClick = () => {
    navigate('/donation');
  
    setTimeout(() => {
      const packageLink = document.getElementById('package-section');
      if (packageLink) {
        packageLink.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Delay to ensure the new page is fully loaded
  };
  

  const getUnderlineClass = (tabName) =>
    activeTab === tabName
      ? "absolute left-0 top-8 inline-block w-full h-[2px] bg-red-500 shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)] transition-all duration-300"
      : "absolute left-0 top-8 inline-block w-0 h-[1px] bg-transparent group-hover:w-full group-hover:bg-red-500 group-hover:shadow-[0px_0px_10px_2px_rgba(255,0,0,0.8)] transition-all duration-300";

      const getTextClass = (tabName) =>
        activeTab === tabName ? "text-red-500" : "text-white";

  return (
    <nav className="bg-green-900 text-white font-COP1 px-6 py-10 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center relative">
      {/* Logo (Visible on large screens only) */}
      <div className="absolute left-44   top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Link to="/">
          <img
            src={Icon}
            alt="Logo"
            className="h-20 w-auto mt-3" // Adjust size as needed
          />
        </Link>
      </div>

      {/* Navigation Links - Desktop Only */}
      <div className="hidden lg:flex justify-end mr-20 flex-1">
        <ul className="flex gap-10 items-center text-xl font-medium">
          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
            <button onClick={handleHomeClick} className="flex items-center cursor-pointer">
             Home
            </button>
          </li>
          <Link to="/products">
            <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
              <button onClick={handleProductsClick} className="flex items-center cursor-pointer">
              Products
              </button>
            </li>
          </Link>
          <Link to="/location">
          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
            <button onClick={handleHomeClick} className="flex items-center cursor-pointer">
             Location
            </button>
          </li>
          </Link>

          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
            <button onClick={handleHomeClick} className="flex items-center cursor-pointer">
             Careers
            </button>
          </li>

          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
            <button onClick={handleHomeClick} className="flex items-center cursor-pointer">
             FAQs
            </button>
          </li>


          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
            <button onClick={handleHomeClick} className="flex items-center cursor-pointer">
             Contacts
            </button>
          </li>
            
          </ul>
        </div>

        

        {/* Mobile and Tablet Menu Button */}
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

      {/* Mobile and Tablet Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden bg-green-900 text-white font-COP1 mt-2 p-4 space-y-3 shadow-lg rounded">
          {/* Home Button with React Scroll */}
          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
            <button onClick={handleHomeClick} className="flex items-center w-full hover:bg-green-400 hover:text-white p-2 cursor-pointer">
             Home
            </button>
          </li>
          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
          <button onClick={handleHomeClick} className="flex items-center w-full hover:bg-green-400 hover:text-white p-2 cursor-pointer">
             Steel Products
            </button>
          </li>

          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
          <button onClick={handleHomeClick} className="flex items-center w-full hover:bg-green-400 hover:text-white p-2 cursor-pointer">
             Location
            </button>
          </li>

          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
          <button onClick={handleHomeClick} className="flex items-center w-full hover:bg-green-400 hover:text-white p-2 cursor-pointer">
             FAQs
            </button>
          </li>


          <li className="relative flex items-center gap-2 cursor-pointer hover:text-green-400 group">
          <button onClick={handleHomeClick} className="flex items-center w-full hover:bg-green-400 hover:text-white p-2 cursor-pointer">
             Contacts
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;