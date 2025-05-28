import { MdOutlineConstruction } from "react-icons/md";
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
function Landing() {
     const [showModal, setShowModal] = useState(true); // State to control modal visibility
      const navigate = useNavigate(); 
    const handleCloseModal = () => {
      navigate('/home');
      window.scrollTo(0, 0);
    };


  
  return (
    <>
    {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="w-full h-full bg-BGModal bg-cover bg-center rounded-lg relative overflow-hidden">
      {/* Overlay to darken the background slightly and apply blur */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        
        {/* Content Box */}
        <div className="text-center text-white space-y-6 px-6 md:px-12">
          
          {/* Icon and Text at the top with slide-in from the bottom animation */}
          <div className="flex justify-center items-center space-x-4 mb-6 animate-slide-top">
            <div className="bg-black/30 text-white p-4 rounded-lg flex items-center space-x-3">
              <MdOutlineConstruction className="w-8 h-8" />
              <p className="text-lg font-semibold">Ultimates Construction Materials Trading</p>
            </div>
          </div>

          {/* Main Text with slide-in from the top animation */}
          <h2 className="text-7xl font-bold mb-6 animate-slide-bottom">
            <span className="underline decoration-blue-400">Premium</span> Quality    <span className="underline decoration-yellow-400">Construction Materials</span>,<br />Building Your Future with our <span className="underline decoration-blue-400">Reliable</span>   and <span className="underline decoration-yellow-400">Durable</span> Steel Products

          </h2>

          {/* Proceed Button with fade-in animation */}
          <div className="flex justify-center animate-fade-in">
            <button 
              onClick={handleCloseModal} 
              className="w-44 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-300">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


</>
  )
}

export default Landing
