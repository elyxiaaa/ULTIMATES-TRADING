import Logo from '../assets/Logo.png'
import { Link, useNavigate } from "react-router-dom"; 
function Footer () {
    return (
        <>
        <footer className="footer sm:footer-horizontal bg-indigo-950 text-white p-10">
  <aside>
   <img
               src={Logo}
               alt="Logo"
               className="h-16 items-center w-auto mt-3"
             />
    <p className="text-yellow-500 font-bold">
      ULTIMATES CONSTRUCTION MATERIALS TRADING  
    </p>
    <p>243 Aster St. cor. Magnolia St. De Castro Subd. <br/> Paso De Blas Valenzuela City, Valenzuela, Philippines</p>

    <p className="mt-5 text-md"> Terms & Conditions | Privacy Policy
      <br/>
      <span>© 2025 UCMT CORP.</span>
      </p>
  </aside>
  <nav>
    <h6 className="font-bold text-yellow-500 text-lg">ABOUT US</h6>
    <Link to="/products">
    <p className="link link-hover">Steel Product</p>
    </Link>
    <Link to="/location">
    <p className="link link-hover">Location</p>
    </Link>
    <Link to="/career">
    <p className="link link-hover">Careers</p>
    </Link>
    <Link to="/faq">
    <p className="link link-hover">FAQs</p>
    </Link>
  </nav>
  <nav>
    <h6 className="font-bold text-yellow-500 text-lg">CONTACT US</h6>
      <p>ULTIMATES CONSTRUCTION MATERIALS TRADING  </p>
      <p>Tel No: 700 66162</p>
      <p>Mobile No:</p>
      <p>Email: ultimatesconstructions@gmail.com</p>
  </nav>
  <nav>
    <h6 className="font-bold text-yellow-500 text-lg">CUSTOMER SERVICE</h6>
    <p className="">Our Facebook Page :</p> 
    <a href="https://www.facebook.com/profile.php?id=100079907529122"  className=" link link-hover hover:text-blue-400">ULTIMATES CONSTRUCTION MATERIALS TRADING</a>
  </nav>

</footer>

        </>
    )
}

export default Footer