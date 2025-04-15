import { useState } from 'react'
import Guarantee from '../assets/guarantee.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import WideFlange from '../assets/PRODUCTS/Wide-Flange.jpg'
import SquareTubing from '../assets/PRODUCTS/Square-Tubing.jpg'
import Sheetpile from '../assets/PRODUCTS/Sheetpile.jpg'
import DeformedBars from '../assets/PRODUCTS/Deformed-Bars.jpg'
import RectangularTubing from '../assets/PRODUCTS/Rectangular-Tubing.jpg'
import BIRoundTubing from '../assets/PRODUCTS/BI-Round-Tubing.jpg'
import AngleBars from '../assets/PRODUCTS/Angle-Bars.jpg'
import BISheet from '../assets/PRODUCTS/Stainless-Steel-Sheets.jpg'
import GIPipes from '../assets/PRODUCTS/Galvanized-Iron-Pipe.jpg'
import FlatBars from '../assets/PRODUCTS/Flat-Bars.jpg'
import BIPipes2 from '../assets/PRODUCTS/BI-Pipes-2.jpg'

const products = [
  { name: "Wide Flange", image: WideFlange },
  { name: "Sheet Pile", image: Sheetpile },
  { name: "Deformed Bar", image: DeformedBars},
  { name: "B.I. Rectangular Tube", image: RectangularTubing},
  { name: "G.I. Square Tube", image: SquareTubing },
  { name: "B.I. Square Tube", image: SquareTubing },
  { name: "B.I Round Tube", image: BIRoundTubing },
  { name: "Equal Angle Bar", image: AngleBars },
  { name: "Flat Bar", image: FlatBars },
  { name: "B.I Pipe", image: BIPipes2 },
  { name: "G.I Pipe", image: GIPipes },
  { name: "B.I Sheet", image: BISheet },
];


function Products() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-white py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-44 gap-10">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-green-900">THE UCMT</span><br />
              <span className="text-green-500">GUARANTEE</span>
            </h1>
            <div className="w-32 h-1 bg-green-500 my-4 mx-auto lg:mx-0" />
            <p className="text-lg text-green-950 font-medium">
              We make sure our products fit the high standards of TKL<br />
              because your business and your safety matter to us.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <img src={Guarantee} alt="TKL Guarantee" className="rounded shadow-lg" />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#f5f8f3] px-4 py-12">
      <h1 className="text-5xl font-bold text-center text-[#1f3c1f] mb-12">
        OUR PRODUCTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded shadow-md"
            />
            <h2 className="mt-4 text-lg font-semibold text-[#1f3c1f] text-center">
              {product.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Products
