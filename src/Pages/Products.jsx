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
import AccordionPlate from '../assets/PRODUCTS/Accordion-Plate.jpg'
import BarbedWires from '../assets/PRODUCTS/Barbed-Wires.jpg'
import BasePlate from '../assets/PRODUCTS/Base-Plate.jpg'
import BIZPurlins from '../assets/PRODUCTS/BI-Z-Purlins.jpg'
import ChannelBar from '../assets/PRODUCTS/Channel-Bar.jpg'
import ChecheredPlates from '../assets/PRODUCTS/Checkered-Plates.jpg'
import GISheets from '../assets/PRODUCTS/GI-Sheets.jpg'
import MSPlates from '../assets/PRODUCTS/MS-Plates.jpg'
import PlainRoundBar from '../assets/PRODUCTS/Plain-Round-Bar.jpg'
import SquareBars from '../assets/PRODUCTS/Square-Bars.jpg'
import SteelMatting from '../assets/PRODUCTS/Steel-Matting.jpg'
import CarryingChannel from '../assets/PRODUCTS/Carrying-Channel.jpg'
import CombatWires from '../assets/PRODUCTS/Combat-Wires.jpg'
import CycloneWires from '../assets/PRODUCTS/Cyclone-Wires.jpg'
import FurringClip from '../assets/PRODUCTS/Furring-Clip.jpg'
import GICorrugatedSheets from '../assets/PRODUCTS/GI-Corrugated-Sheets.jpg'
import MetalFurring from '../assets/PRODUCTS/Metal-Furring.jpg'
import MetalStuds from '../assets/PRODUCTS/Metal-Studs.jpg'
import MetalTracks from '../assets/PRODUCTS/Metal-Tracks.jpg'
import SteelWeldingRod from '../assets/PRODUCTS/Steel-Welding-Rod.jpg'
import ToolSteelShafting from '../assets/PRODUCTS/Tool-Steel-Shafting.jpg'
import WallAngle from '../assets/PRODUCTS/Wall-Angle.jpg'
import ConcreteNail from '../assets/PRODUCTS/Concrete-Nail.jpg'
import CWNails from '../assets/PRODUCTS/CW-Nails.jpg'
import DoorTrack from '../assets/PRODUCTS/Door-Track.jpg'
import ExpandedMetal from '../assets/PRODUCTS/Expanded-Metal.jpg'
import GIBIFittings from '../assets/PRODUCTS/GI-BI-Fittings.jpg'
import GIBIFittings2 from '../assets/PRODUCTS/GI-BI-Fittings-2.jpg'
import GIWire from '../assets/PRODUCTS/GI-Wire.jpg'
import IBars from '../assets/PRODUCTS/I-Bars.jpg'
import PerforatedSheet from '../assets/PRODUCTS/Perforated-Sheet.jpg'
import Phenolic from '../assets/PRODUCTS/Phenolic.jpg'
import TBars from '../assets/PRODUCTS/T-bars.jpg'
import ZBars from '../assets/PRODUCTS/Z-bars.jpg'
import FixedClamp from '../assets/PRODUCTS/Fixed-Clamp.jpg'
import PurlinsConnector from '../assets/PRODUCTS/Purlins-Connector.jpg'
import GIRectangularTube from '../assets/PRODUCTS/Rectangular-Tubing-2.jpg'
import SSteelPipesRound from '../assets/PRODUCTS/Stainless-Steel-Pipes-Round.jpg'
import SSteelPipesFlat from '../assets/PRODUCTS/Stainless-Steel-Pipes-Flat.jpg'
import SSteelShafting from '../assets/PRODUCTS/Stainless-Steel-Shafting.jpg'
import SSteelSheets from '../assets/PRODUCTS/Stainless-Steel-Sheets-2.jpg'
import SSteelWeldingRod from '../assets/PRODUCTS/Stainless-Steel-Welding-Rod.jpg'
import SwivelClamp from '../assets/PRODUCTS/Swivel-Clamp.jpg'

import { Link } from 'react-router-dom'


const products = [
  { name: "Wide Flange", image: WideFlange },
  { name: "Sheet Pile", image: Sheetpile },
  { name: "Deformed Bar", image: DeformedBars},
  { name: "B.I. Rectangular Tube", image: RectangularTubing},
  { name: "G.I. Square Tube", image: SquareTubing },
  { name: "B.I. Square Tube", image: SquareTubing },
  { name: "B.I Round Tube", image: BIRoundTubing },
  { name: "Equal Angle Bar", image: AngleBars },
  { name: "B.I. Sheet", image: BISheet },
  { name: "Flat Bar", image: FlatBars },
  { name: "B.I Pipe", image: BIPipes2 },
  { name: "G.I Pipe", image: GIPipes },
  { name: "Accordion Plate", image: AccordionPlate },
  { name: "Barbed Wires", image: BarbedWires },
  { name: "Base Plate", image: BasePlate },
  { name: "B.I and G.I Z-Purlin", image: BIZPurlins },
  { name: "Channel Bar", image: ChannelBar },
  { name: "Checkered Plate", image: ChecheredPlates },
  { name: "G.I Sheet", image: GISheets },
  { name: "M.S. Plate", image: MSPlates },
  { name: "Plain Round Bar", image: PlainRoundBar },
  { name: "Square Bar", image: SquareBars },
  { name: "Steel Matting", image: SteelMatting },
  { name: "Carrying Channel", image: CarryingChannel },
  { name: "Combat Wires", image: CombatWires },
  { name: "Cyclone Wires", image: CycloneWires },
  { name: "Furring Clip", image: FurringClip },
  { name: "G.I Corrugated Sheet", image: GICorrugatedSheets},
  { name: "Metal Furring", image: MetalFurring },
  { name: "Metal Stud", image: MetalStuds },
  { name: "Metal Track", image: MetalTracks },
  { name: "Steel Welding Rod", image: SteelWeldingRod },
  { name: "Tool Steel Shafting", image: ToolSteelShafting },
  { name: "Wall Angle", image: WallAngle },
  { name: "Door Track", image: DoorTrack },
  { name: "Expanded Metal", image: ExpandedMetal },
  { name: "G.I. Fittings", image: GIBIFittings },
  { name: "B.I. Fittings", image: GIBIFittings2},
  { name: "Concrete Nails", image: ConcreteNail},
  { name: "Common Wire Nails", image: CWNails},
  { name: "G.I Wires", image: GIWire },
  { name: "I Bars", image: IBars },
  { name: "T Bars", image: TBars },
  { name: "Z Bars", image: ZBars },
  { name: "Perforated Sheet", image: PerforatedSheet },
  { name: "Phenolic Board", image: Phenolic },
  { name: "Purlins Connector", image: PurlinsConnector },
  { name: "Stainless Steel Bar", image: SSteelPipesFlat },
  { name: "Stainless Steel Pipe", image: SSteelPipesRound },
  { name: "Stainless Steel Sheet", image: SSteelSheets },
  { name: "Stainless Steel Shafting", image: SSteelShafting },
  { name: "Stainless Steel Welding Rod", image: SSteelWeldingRod },
  { name: "Fixed Clamp", image: FixedClamp },
  { name: "Swivel Clamp", image: SwivelClamp },
  { name: "G.I Rectangular Tube", image: GIRectangularTube },





    
];

const itemsPerPage = 12;

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <>
    <title>High Quality Products</title>
      <Navbar />
      <div className="w-full bg-white py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-44 gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-green-900"><strong>THE UCMT</strong></span><br />
              <span className="text-green-500"><strong>GUARANTEE</strong></span>
            </h1>
            <div className="w-32 h-1 bg-green-500 my-4 mx-auto lg:mx-0" />
            <p className="text-lg text-green-950 font-medium">
              We make sure our products fit the high standards of TKL<br />
              because your business and your safety matter to us.
            </p>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <img src={Guarantee} alt="TKL Guarantee" className="rounded shadow-lg" />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#f5f8f3] px-4 py-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap mb-8 px-2">
          <h1 className="text-6xl sm:text-7xl font-bold text-green-900">
            <strong>OUR PRODUCTS</strong>
          </h1>
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); 
            }}
            className="mt-4 sm:mt-0 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-64 md:w-80"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {currentItems.length > 0 ? (
            currentItems.map((product, index) => (
              <div key={index} className="flex flex-col items-center text-[#1f3c1f] hover:text-green-500">
                <Link to={`/product/${product.name}`} className="w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded shadow-md cursor-pointer"
                  />
                  <h2 className="mt-4 text-lg font-bold text-center">{product.name}</h2>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-gray-600">
              No products found.
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredProducts.length > itemsPerPage && (
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm font-medium text-green-900 border border-green-900 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 text-sm font-medium rounded ${
                  currentPage === i + 1
                    ? 'bg-green-900 text-white'
                    : 'text-green-900 border border-green-900'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm font-medium text-green-900 border border-green-900 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Products;
