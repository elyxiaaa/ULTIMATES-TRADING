import { useState } from 'react'
import Guarantee from '../assets/guarantee.jpg'
import Navbar from '../Components/Navbar'


function Products() {
  return (
    <>  
        <Navbar/>
             {/* PRODUCT SHOWCASE */}
      <div className="w-full bg-gray-200 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-44 gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-green-900">THE UCMT</span> <br />
              <span className="text-green-500">GUARANTEE</span>
            </h1>
            <p className="text-lg ">We make sure our products fit the high standards of TKL because your business and your safety matter to us.</p>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
          <img src={Guarantee}></img>
          </div>
        </div>

      </div>
      <div>
        <h1>Products</h1>
        <h1>Products</h1>
        <h1>Products</h1>
      </div>
    </>
  )
}

export default Products
