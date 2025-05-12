import Logo from '../assets/Logo.png'
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
      ULTIMATES CONSTRUCTION TRADING CORP.  
    </p>
    <p>243 Aster St. cor. Magnolia St. De Castro Subd. <br/> Paso De Blas Valenzuela City, Valenzuela, Philippines</p>

    <p className="mt-5 text-md"> Terms & Conditions | Privacy Policy
      <br/>
      <span>© 2025 UCMT CORP.</span>
      </p>
  </aside>
  <nav>
    <h6 className="font-bold text-yellow-500 text-lg">ABOUT US</h6>
    <a className="link link-hover">Steel Product</a>
    <a className="link link-hover">Location</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">FAQs</a>
  </nav>
  <nav>
    <h6 className="font-bold text-yellow-500 text-lg">CONTACT US</h6>
      <p>UCMT VALENZUELA</p>
      <p>Tel No:</p>
      <p>Mobile No:</p>
      <p>Email:</p>
  </nav>
  <nav>
    <h6 className="font-bold text-yellow-500 text-lg">CUSTOMER SERVICE</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>

</footer>

        </>
    )
}

export default Footer