import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import Font Awesome Icons
import Logo from '../assets/Logo.png'
import { Link } from "react-router-dom"; 

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-indigo-950 text-white p-10">
        <aside className="flex flex-col items-start">

          <h6 className="text-lg text-yellow-500 font-bold">
            ULTIMATES CONSTRUCTION MATERIALS TRADING
          </h6>
          <p>
          243 Aster St. cor. Magnolia St. De Castro Subd. <br/> Paso De Blas Valenzuela City, Valenzuela, Philippines
          </p>

          <p className="mt-5 text-md">
            Terms & Conditions | Privacy Policy
            <br />
            <span>© 2025 U.C.M.T.</span>
          </p>
        </aside>
        <nav>
          <h6 className="font-bold text-yellow-500 text-lg">ABOUT US</h6>
          <Link to="/products" className="link link-hover">Steel Products</Link>
          <Link to="/location" className="link link-hover">Locations</Link>
          <Link to="/reviews" className="link link-hover">Reviews</Link>
          <Link to="/faq" className="link link-hover">FAQs</Link>
          <Link to="/contact" className="link link-hover">Contact us</Link>
        </nav>
        <nav>
          <h6 className="font-bold text-yellow-500 text-lg">CONTACT US</h6>
          <p>Ultimates Construction Materials Trading</p>
          <p>Trunk line: (046) 700-66162</p>
          <p>Mobile: 0933-863-3444, 0933-811-6171</p>
          <p>Email: <span className="text-blue-500 cursor-pointer">ultimatesconstructions@gmail.com</span></p>
        </nav>
        <nav>
          <h6 className="font-bold text-yellow-500 text-lg">CUSTOMER SERVICE</h6>
          <p>Phone: (02) 700-66162</p>
          <p>Mobile: 0917-834-8581</p>
          <p>Email: <span className="text-blue-500 cursor-pointer">customerservice@ultimates.com.ph</span></p>
          <p>Find us on:</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100079907529122" className="text-white hover:text-blue-500">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-pink-500">
              <FaInstagram size={30} />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
