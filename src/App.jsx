import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Locations from "./Pages/Location";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import FAQ from "./Pages/FAQ";
import Reviews from "./Pages/Reviews";
import Landing from "./Pages/Landing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader"; // Import the loader component
import { FaTools } from "react-icons/fa";  // Using FontAwesome for tools icon
import { LuConstruction } from "react-icons/lu";

function App() {
  return (
    <BrowserRouter>
      <LoaderWithPageChange />  {/* Use the Loader with page change logic */}
  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
  
    </BrowserRouter>
  );
}

const LoaderWithPageChange = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1.5 seconds
    }, 1500);
    
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [location]);  // Only trigger when location changes (i.e., page changes)

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-100 z-50">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <FaTools className="text-6xl text-yellow-500 animate-spin mb-4" />
              <LuConstruction className="text-6xl text-yellow-500 mb-4"/>
            </div>
            <p className="text-2xl font-semibold text-indigo-800 mb-4">
              Loading the best quality products...
            </p>
            <span className="text-indigo-800 loading loading-dots loading-xl"></span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default App;
