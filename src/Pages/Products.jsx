import { useState, useEffect, useRef } from "react";
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
import Scafolding from '../assets/PRODUCTS/Scafolding.jpg'
import HFrame from '../assets/PRODUCTS/H-Frame.jpg'
import Plywood from '../assets/PRODUCTS/Plywood.jpg'
import Insulation from '../assets/PRODUCTS/Insulation.jpg'
import CPurlins from '../assets/PRODUCTS/GI-C-Purlins.jpg'
import Turnbuckle from '../assets/PRODUCTS/Turnbuckle.jpg'
import BaseJack from '../assets/PRODUCTS/Base-Jack.jpg'
import UHead from '../assets/PRODUCTS/UHead.jpg'
import ShoringJack from '../assets/PRODUCTS/ShoringJack.jpg'
import { Link } from 'react-router-dom'


const products = [
   {
  name: "Deformed Bar G33",
  image: DeformedBars,
  description: "DeformedBars is a cutting-edge concept that challenges traditional bar structures by introducing innovative designs that incorporate unique shapes and functionalities. These bars are specifically crafted to meet modern aesthetic and structural demands, offering both visual appeal and enhanced performance.",
  sizes: [
    "1/2 x 2.8Kg x 6mtrs S20 1.0mm",
"10mm x 6m",
"12mm x 6m",
"16mm x 6m",
"20mm x 6m",
"25mm x 6m",
  ]
},
 {
  name: "Deformed Bar G40",
  image: DeformedBars,
  description: "DeformedBars is a cutting-edge concept that challenges traditional bar structures by introducing innovative designs that incorporate unique shapes and functionalities. These bars are specifically crafted to meet modern aesthetic and structural demands, offering both visual appeal and enhanced performance.",
  sizes: [
    "1/2 x 2.8Kg x 6mtrs S20 1.0mm",
"10mm x 6m",
"12mm x 6m",
"16mm x 6m",
"20mm x 6m",
"25mm x 6m",
  ]
},
{
  name: "Deformed Bar G60",
  image: DeformedBars,
  description: "DeformedBars is a cutting-edge concept that challenges traditional bar structures by introducing innovative designs that incorporate unique shapes and functionalities. These bars are specifically crafted to meet modern aesthetic and structural demands, offering both visual appeal and enhanced performance.",
  sizes: [
    "1/2 x 2.8Kg x 6mtrs S20 1.0mm",
"10mm x 6m",
"12mm x 6m",
"16mm x 6m",
"20mm x 6m",
"25mm x 6m",
"28mm x 6m",
"32mm x 6m",
  ]
},
  { name: "G.I Tubular 6m 1.5mm", image: RectangularTubing,
    description: "G.I. Tubular 6m 1.5mm is a galvanized iron pipe, designed for construction and industrial use. Its 6-meter length and 1.5mm thickness offer durability and resistance to corrosion, making it ideal for plumbing, framing, and structural applications.",
    sizes: [
      "3/4 x 3/4 x 4.2kg",
    "1 x 1 x 5.2kg",
    "1 1/2 x 1 1/2 x 8kg",
    "1 x 2 x 8kg",
    "1 x 3 x 10.5kg",
    "2 x 2 x 10.5kg",
    "2 x 3 x 13.5kg",
    "2 x 4 x 14.5kg",
    "2 x 6 x 22kg",
    "4 x 4 x 29kg",
    ],
  },
  { name: "G.I Tubular 6m 1.2mm", image: SquareTubing ,
    description: "G.I. Tubular 6m 1.5mm is a galvanized iron pipe, designed for construction and industrial use. Its 6-meter length and 1.2mm thickness offer durability and resistance to corrosion, making it ideal for plumbing, framing, and structural applications. ",
    sizes: [
      "3/4 x 3/4 x 3.2kg",
    "1 x 1 x 4.2kg",
    "1 1/2 x 1 1/2 x 6.2kg",
    "1 x 2 x 6.2kg",
    "1 x 3 x 8.5kg",
    "2 x 2 x 8.5kg",
    "2 x 3 x 10.5kg",
    "2 x 4 x 12.5kg",
    "2 x 6 x 19kg",
    ],
  },
  { name: "G.I Tubular 6m 2.0mm", image: SquareTubing,
    description: "G.I Tubular 6m 2.0mm refers to a galvanized iron (G.I) steel tube, specifically with a length of 6 meters and a wall thickness of 2.0 millimeters. This type of tubular steel is commonly used in various construction and industrial applications due to its strength, durability, and resistance to corrosion. ",
    sizes: [
      "1 x 1 x 7kg",
    "1 1/2 x 1 1/2 x 11kg",
    "1 x 2 x 10.5kg",
    "2 x 2 x 14.5kg",
    "2 x 3 x 18kg",
    "2 x 4 x 21.5kg",
    "2 x 6 x 29kg",
    "3 x 3 x 26kg",
    "4 x 4 x 37kg",
    ],
   },
   { name: "Scaffolding Set S20", image: Scafolding,
    description: "a basic scaffolding kit or system, likely for small to medium-sized projects. It would typically include components for building a simple, supported scaffolding structure, possibly for light to medium-duty tasks. The 'S2' likely indicates a specific model or size designation within a scaffolding manufacturer's product line.",
    sizes: [
      "1.7m x 1.2m (21kgs)",
    "1.2m x 1.2m (16kgs)",
    "0.9m x 1.2m (14kgs)",
    "1.5m x 1.2m (20kgs)",
    ],
  },
  { name: "Scaffolding Set S40", image: Scafolding,
    description: "a basic scaffolding kit or system, likely for small to medium-sized projects. It would typically include components for building a simple, supported scaffolding structure, possibly for light to medium-duty tasks. The 'S2' likely indicates a specific model or size designation within a scaffolding manufacturer's product line.",
    sizes: [
      "1.7m x 1.2m (25kgs)",
    "1.2m x 1.2m (19.5kgs)",
    "0.9m x 1.2m (16kgs)",
    ],
  },
  { name: "H Frame Only S20", image: HFrame,
    description: "The H Frame is a durable structural component used in scaffolding systems. Designed for easy assembly, it provides strong support and stability for various construction projects, ensuring safety and reliability during work at height.",
    sizes: [
      "1.7m x 1.2m ",
    "1.2m x 1.2m ",
    "0.9m x 1.2m ",
    "1.5m x 1.2m ",
    ],
  },
  { name: "H Frame Only S40", image: HFrame,
    description: "The H Frame is a durable structural component used in scaffolding systems. Designed for easy assembly, it provides strong support and stability for various construction projects, ensuring safety and reliability during work at height.",
    sizes: [
      "1.7m x 1.2m  ",
    "1.2m x 1.2m ",
    "0.9m x 1.2m  ",
    "Catwalk 169cm x 40cm",
    "Ladder 239cm x 47 cm (7 steps)",
    "Crossbrace 1.7 Plain",
    "Crossbrace 1.2 YLW",
    "Crossbrace 0.9 RED",
    "Joint Pin",
    "Caster Wheel 6 inch",
    "Caster Wheel 8 inch",
    ],
  },
  {
    name: "Insulation",
    image: Insulation,
    description: "Insulation is a high-quality material used to regulate temperature and reduce energy loss. Ideal for construction, it helps maintain indoor comfort by preventing heat transfer, enhancing energy efficiency, and ensuring soundproofing in buildings.",
    sizes: [
  "5mm Single Face",
  "5mm Double Face",
  "10mm Single Face",
  "10mm Double Face",
    ]
  },
  { name: "Angle Bar 1 x 1", image: AngleBars,
    description: "Angle Bar is a versatile structural steel component with a right-angle shape, commonly used in construction and fabrication. It provides strength and stability for various applications, including framing, supports, and reinforcements in both residential and industrial projects.",
    sizes: [
  "2mm 4.4kgs",
  "2.5mm 5.4kgs",
  "3mm 6.4kgs",
  "4mm 8.4kgs",
  "5mm 10.4kgs",
    ],
   },
   { name: "Angle Bar 1 1/2 x 1 1/2", image: AngleBars,
    description: "Angle Bar is a versatile structural steel component with a right-angle shape, commonly used in construction and fabrication. It provides strength and stability for various applications, including framing, supports, and reinforcements in both residential and industrial projects.",
    sizes: [
  "2.5mm 8.5kgs",
  "3mm 10kgs",
  "3.5mm 11.5kgs",
  "4mm 13kgs",
  "4.5mm 14.5kgs",
  "5mm 16kgs",
  "6mm 19kgs",
    ],
   },
   { name: "Angle Bar 2 x 2", image: AngleBars,
    description: "Angle Bar is a versatile structural steel component with a right-angle shape, commonly used in construction and fabrication. It provides strength and stability for various applications, including framing, supports, and reinforcements in both residential and industrial projects.",
    sizes: [
  "2.5mm 11.5kgs",
  "3mm 13.5kgs",
  "3.5mm 15.5kgs",
  "4mm 17.5kgs",
  "4.5mm 19.5kgs",
  "5mm 21.5kgs",
  "6mm 25.5kgs",
    ],
   },
   { name: "Angle Bar 2 1/2 x 2 1/2", image: AngleBars,
    description: "Angle Bar is a versatile structural steel component with a right-angle shape, commonly used in construction and fabrication. It provides strength and stability for various applications, including framing, supports, and reinforcements in both residential and industrial projects.",
    sizes: [
  "4mm 22.5kgs",
  "5mm 27.6kgs",
  "6mm 33kgs",
    ],
   },
   { name: "Angle Bar 3 x 3", image: AngleBars,
    description: "Angle Bar is a versatile structural steel component with a right-angle shape, commonly used in construction and fabrication. It provides strength and stability for various applications, including framing, supports, and reinforcements in both residential and industrial projects.",
    sizes: [
  "4mm 26.5kgs",
  "6mm 39.2kgs",
  "8mm 51.5kgs",
  "9mm",
  "ANGLE BAR 4 x 4 6mm",
    ],
   },
  { name: "Flat Bar", image: FlatBars,
    description: "Angle Bar is a versatile structural steel component with a right-angle shape, commonly used in construction and fabrication. It provides strength and stability for various applications, including framing, supports, and reinforcements in both residential and industrial projects.",
    sizes: [
  "1 x 3/16 2mm",
  "1 x 3/4 3mm",
  "1 x 1/4 4mm",
  "1 x 3/8 5mm",
  "1 1/2 x 3/16 2mm",
  "1 1/2 x 1/4 3mm",
  "1 1/2 x 1/4 4mm",
  "1 1/2 x 1/4 5mm",
  "2 x 3/16 2mm",
  "2 x 1/4 3mm",
  "2 x 1/4 4mm",
  "2 x 3/8 5mm",
  "3mm",
  "5mm",
  "3mm",
  "5mm",
  
    ],
   },
  {
  name: "G.I Pipe",
  image: GIPipes,
  description: "High-quality galvanized iron pipes ideal for plumbing and structural applications.",
  sizes: [
    "1/2 x 2.8Kg x 6mtrs S20 1.0mm",
  "1/2 x 3.8Kg x 6mtrs S20 1.2mm",
  "1/2 x 4.2Kg x 6mtrs S40 1.5mm",
  "3/4 x 3.9Kg x 6mtrs S20 1.0mm",
  "3/4 x 4.8Kg x 6mtrs S20 1.3mm",
  "3/4 x 5.5Kg x 6mtrs S40 1.5mm",
  "3/4 x 7Kg x 6mtrs S40 2.0mm",
  "1 inch x 5.5Kg x 6mtrs S20 1.2mm",
  "1 inch x 6Kg x 6mtrs S20 1.3mm",
  "1 inch x 7Kg x 6mtrs S20 1.5mm",
  "1 inch x 9Kg x 6mtrs S40 2.0mm",
  "1 1/4 x 8Kg x 6mtrs S20 1.3mm",
  "1 1/4 x 9Kg x 6mtrs S20 1.4mm",
  "1 1/4 x 10.7Kg x 6mtrs S40 1.7mm",
  "1 1/4 x 11.6Kg x 6mtrs S40 2.0mm",
  "1 1/2 x 7Kg x 6mtrs S20 1.0mm",
  "1 1/2 x 8Kg x 6mtrs S20 1.2mm",
  "1 1/2 x 9Kg x 6mtrs S20 1.3mm",
  "1 1/2 x 11Kg x 6mtrs S20 1.5mm",
  "1 1/2 x 13Kg x 6mtrs S40 1.7mm",
  "1 1/2 x 14Kg x 6mtrs S40 1.9mm",
  "1 1/2 x 16Kg x 6mtrs S40 2.3mm",
  "2 inch x 16kg x 6mtrs S20 1.7mm",
  "2 inch x 19kg x 6mtrs S40 2.3mm",
  "2 inch x 20kg x 6mtrs S40 2.8mm",
  "2 1/2 x 17kg x 6mtrs S20 1.7mm",
  "3 inch x 26kg x 6mtrs S20 2.0mm",
  "3 inch x 32kg x 6mtrs S40 2.3mm",
  "4 inch x 33kg x 6mtrs S20 2.0mm",
  "4 inch x 42kg x 6mtrs S40 2.3mm",
    ]
  },
  { name: "Barbed Wires", image: BarbedWires,
    description: "Barbed Wires are a strong and durable fencing material, designed to deter trespassing and enhance security. Featuring sharp, pointed edges, they are ideal for use in agricultural, industrial, and military applications to create effective barriers.",
    sizes: [
  "21KG 50 meters",
  "25KG 75 meters",
  "GI WIRE #16 x 25KG/ROLL",
    ],
   },
  { name: "Base Plate", image: BasePlate },
     { name: "Base Jack", image: BaseJack,
    description: "A Base Plate is a flat, sturdy metal component used to distribute the load of structural elements such as columns or beams. It provides stability and support in construction projects, ensuring proper alignment and load transfer to the foundation.",
    sizes: [
  "27 x 400mm 2.2kg",
  "27 x 600mm 3.0kg",
  "32 x 400mm 2.7kg",
  "32 x 600mm 3.5kg",
    ],
   },
  { name: "G.I C-Purins", image: CPurlins,
    description: "G.I. C-Purlins are galvanized steel components used in roofing and structural systems. These C-shaped purlins offer strong support and durability, providing a reliable framework for roofs, walls, and other building structures, while resisting corrosion for long-lasting performance.",
    sizes: [
  "2 x 3 x 1.0mm 6.5kg",
  "2 x 3 x 1.2mm 8kg",
  "2 x 3 x 1.5mm 10kg",
  "2 x 3 x 1.8mm 12kg",
  "2 x 3 x 2.0mm 14kg",
  "2 x 4 x 1.0mm 7.6kg",
  "2 x 4 x 1.2mm 9.5kg",
  "2 x 4 x 1.5mm 11kg",
  "2 x 4 x 1.8mm 14kg",
  "2 x 4 x 2.0mm 17kg",
  "2 x 6 x 1.0mm 9.5kg",
  "2 x 6 x 1.2mm 11.9kg",
  "2 x 6 x 1.5mm 14 kg",
  "2 x 6 x 1.8mm 17kg",
  "2 x 6 x 2.0mm 21kg",

    ],

   },
  { name: "Channel Bar 2 x 3", image: ChannelBar,
    description: "Channel Bar is a structural steel component with a `C` shaped cross-section, commonly used in construction and fabrication. It provides excellent strength and support for frameworks, supports, and reinforcements in both commercial and industrial applications.",
    sizes: [
  "3mm",
  "4mm",
  "5mm",
  "6mm",
    ],
   },
   { name: "Channel Bar 2 x 4", image: ChannelBar,
    description: "Channel Bar is a structural steel component with a `C` shaped cross-section, commonly used in construction and fabrication. It provides excellent strength and support for frameworks, supports, and reinforcements in both commercial and industrial applications.",
    sizes: [
  "3.5mm",
  "4mm",
  "5mm",
  "6mm",
    ],
   },
   { name: "Channel Bar 2 x 5", image: ChannelBar,
    description: "Channel Bar is a structural steel component with a `C` shaped cross-section, commonly used in construction and fabrication. It provides excellent strength and support for frameworks, supports, and reinforcements in both commercial and industrial applications.",
    sizes: [
  "3mm",
  "5mm",
    ],
   },
   { name: "Channel Bar 2 x 6", image: ChannelBar,
    description: "Channel Bar is a structural steel component with a `C` shaped cross-section, commonly used in construction and fabrication. It provides excellent strength and support for frameworks, supports, and reinforcements in both commercial and industrial applications.",
    sizes: [
  "3mm",
  "5mm",
    ],
   },
   { name: "Turnbuckle", image: Turnbuckle,
    description: "A Turnbuckle is a mechanical device used to adjust the tension or length of cables, ropes, or wires. It features two threaded ends that can be screwed in or out to tighten or loosen, making it ideal for applications requiring precise adjustments in construction, rigging, and structural support.",
    sizes: [
  "8",
  "10",
  "12",
  "16",
  "20",
  "22",
  "24",
  "I BAR",
  "T BAR",
  "Z BAR",
    ],
   },
  { name: "Round Bar", image: PlainRoundBar,
    description: "Round Bar is a cylindrical steel bar used in construction, manufacturing, and machining. Known for its strength and versatility, it is commonly used for making structural supports, shafts, pins, and other custom components requiring durability and precise dimensions.",
    sizes: [
  "9mm PRB-ORN / SQB-BLU",
  "10mm PRB-GRN / SQB-WHT",
  "12mm PRB-WHT / SQB-RED",
  "16mm PRB-GRN / SQB-GRN",
  "20mm PRB-WHT / SQB-WHT",
  "25mm",
    ],
   },
  { name: "Square Bar", image: SquareBars,
    description: "Square Bar is a solid, square-shaped metal bar widely used in construction, fabrication, and machining. It provides excellent strength and support for structural applications, including framing, reinforcements, and custom projects that require durability and precise cuts.",
    sizes: [
  "9mm PRB-ORN / SQB-BLU",
  "10mm PRB-GRN / SQB-WHT",
  "12mm PRB-WHT / SQB-RED",
  "16mm PRB-GRN / SQB-GRN",
  "20mm PRB-WHT / SQB-WHT",
  "25mm",
    ],
   },
  { name: "Steel Matting 4X8 (W) 2x2", image: SteelMatting,
    description: "Steel Matting is a strong, grid-like steel mesh used in construction for reinforcement purposes. It is commonly used in concrete flooring, walls, and foundations to provide structural strength, enhance durability, and prevent cracking by evenly distributing loads.",
    sizes: [
  "GI 2mm",
  "GI 4mm",
  "BI 2mm",
  "BI 4mm",
    ],
   },
      { name: "Shoring Jack", image: ShoringJack,
    description: "A Shoring Jack is a portable, adjustable support device used in construction to stabilize structures or formwork. It provides temporary support to prevent shifting or collapsing during construction, ensuring safety and stability in areas like foundations, walls, and ceilings.",
    sizes: [
  "3.4m full ext S20 (10kgs)",
  "3.4m full ext S40 (10.5kgs)",
   "3.8m full ext S40 (11kgs)",
  "4.5m full ext S40 (14kgs)",
   "5.5m full ext S40 (16.5kgs)",
    ],
   },
  { name: "Cyclone Wires", image: CycloneWires,
    description: "Cyclone Wires are strong, durable fencing materials designed to protect properties from external threats. Made from galvanized steel, they are commonly used for security fencing, agricultural enclosures, and perimeter barriers, offering excellent resistance to harsh weather conditions and tampering.",
    sizes: [
  "2 x 2 x 3ft x 5m",
  "42 x 2 x 4ft x 5mmm",
  "2 x 2 x 4ft x 6m",
  "2 x 2 x 5ft x 5m",
  "2 x 2 x 5ft x 6m",
  "2 x 2 x 6ft x 5m",
  "2 x 2 x 6ft x 6m",
    ],

   },
    { name: "U Head Jack", image: UHead,
    description: "A Head Jack is a support device used in scaffolding systems to adjust the height of the structure. It provides stability and safety by supporting and securing formwork or scaffolding during construction, allowing for precise adjustments and reliable load-bearing capacity.",
    sizes: [
  "27 x 400mm 2.4kg",
  "27 x 600mm 3.1kg",
  "32 x 400mm 2.8kg",
  "32 x 600mm 3.8kg",
    ],
   },
  { name: "Phenolic Board", image: Phenolic,
    description: "Phenolic Board is a high-performance material made from resin-impregnated paper, offering excellent durability and moisture resistance. It is commonly used in construction and industrial applications for formwork, insulation, and surface finishes, providing a strong, long-lasting solution for demanding environments.",
  sizes: [
    "CLASS A 3/4",
  "CLASS A 1/2",
  "CLASS B 3/4",
  "CLASS B 1/2",
  ],
   },
   { name: "Plywoods", image: Plywood,
    description: "Plywoods are versatile, multi-layered wood panels used in construction and furniture-making. Made by bonding thin sheets of wood veneer together, they offer strength, flexibility, and resistance to warping, making them ideal for structural support, cabinetry, flooring, and paneling.",
  sizes: [
    "Ordinary Plywood (MIC) 1/4",
  "Ordinary Plywood (MIC) 1/2",
  "Ordinary Plywood (MIC) 3/4",
  "Marine Plywood (MIC) 1/4",
  "Marine Plywood (MIC) 1/2",
  "Marine Plywood (MIC) 3/4",
  "ORD Plywood Local Made 1/4",
  "ORD Plywood Local Made 1/2",
  "ORD Plywood Local Made 3/4",
  "Marine Plywood Local Made 1/4",
  "Marine Plywood Local Made 1/2",
  "Marine Plywood Local Made 3/4",
  "ALUMINUM PLASTIC BOARDS 1/2",
  "PLYBOARD CHINA 3/4",
  "PLYBOARD LOCAL 3/4",
  ],
   },
  { name: "G.I Plain Sheet 4X8 ORD", image: SSteelSheets,
    description: "G.I. Plain Sheet is a galvanized steel sheet, commonly used in construction, roofing, and manufacturing. Coated with zinc for enhanced corrosion resistance, it provides durability, strength, and a long-lasting solution for various industrial and structural applications.",
    sizes: [
  "0.5mm",
  "0.6mm",
  "0.7mm",
  "0.9mm",
  "1mm",
  "1.1mm",
  "1.2mm",
  "1.3mm",
  "1.5mm",
  "5mm",
  "1.8mm",
  "2mm",
    ],
   },
   { name: "G.I Plain Sheet 4X8 STD", image: SSteelSheets,
    description: "G.I. Plain Sheet is a galvanized steel sheet, commonly used in construction, roofing, and manufacturing. Coated with zinc for enhanced corrosion resistance, it provides durability, strength, and a long-lasting solution for various industrial and structural applications.",
    sizes: [
  "0.4mm",
  "0.6mm",
  "0.7mm",
  "0.9mm",
  "1mm",
  "1.1mm",
  "1.2mm",
  "1.5mm",
  "1.8mm",
  "2mm",
    ],
   },
];

const itemsPerPage = 8;

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

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
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
    <title>High Quality Products</title>
      <Navbar />
 <div ref={sectionRef} className="w-full bg-white py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-44 gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 ${
              isInView ? 'animate-slide-right animate-fade-in' : ''
            }`}
          >
            <span className="text-indigo-950">
              <strong>THE U.C.M.T</strong>
            </span>
            <br />
            <span className="text-yellow-500">
              <strong>GUARANTEE</strong>
            </span>
          </h1>
          <div className={`w-32 h-1 bg-indigo-950 my-4 mx-auto lg:mx-0 ${
              isInView ? 'animate-slide-right animate-fade-in' : ''
            }`} />
          <p
            className={`text-lg text-indigo-950 font-medium transition-all duration-1000 ${
              isInView ? 'animate-slide-right animate-fade-in' : ''
            }`}
          >
            We ensure that our products meet UCMT's exacting
            <br /> standards because we care about your safety and business.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <img
            src={Guarantee}
            alt="TKL Guarantee"
            className={`rounded shadow-lg transition-all duration-1000`}
          />
        </div>
      </div>
    </div>

      <div className="min-h-screen bg-[#f5f8f3] px-4 py-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap mb-8 px-2">
          <h1 className="text-6xl sm:text-7xl font-bold text-indigo-950">
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
            className="mt-4 sm:mt-0 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64 md:w-80"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {currentItems.length > 0 ? (
            currentItems.map((product, index) => (
              <div 
              key={product.name} 
              onClick={() => setSelectedProduct(product)} 
              className="cursor-pointer transition hover:scale-105 duration-200"
            >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-[999px] h-[200px] object-cover rounded shadow-md " 
            />
              <p className="mt-2 text-center font-medium">{product.name}</p>
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
              className="px-3 py-1 text-sm font-medium text-indigo-900 border border-indigo-900 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 text-sm font-medium rounded ${
                  currentPage === i + 1
                    ? 'bg-indigo-900 text-white'
                    : 'text-indigo-900 border border-indigo-900'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm font-medium text-indigo-900 border border-indigo-900 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {selectedProduct && (
  <dialog id="product_modal" className="modal modal-open backdrop-blur-lg" onClick={() => setSelectedProduct(null)}>
    <div className="modal-box max-w-6xl transition-all duration-300 ease-in-out p-6" onClick={(e) => e.stopPropagation()}>
      <h3 className="font-bold text-4xl text-indigo-800  mb-4 text-center"><strong>{selectedProduct.name}</strong></h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Image + Description */}
        <div className="w-full md:w-1/2">
          <img
  src={selectedProduct.image}
  alt={selectedProduct.name}
  className="rounded mb-2 w-full object-contain max-h-[400px]"
/>
        <p className="text-indigo-900 font-bold">Product Description:</p>
           <p className="text-gray-600 mt-2 text-md text-justify leading-relaxed">
  {selectedProduct.description}
</p>
       
        </div>

        {/* Right Column: Sizes with Left Border */}
       <div className="w-full md:w-1/2 gap-6">
          {selectedProduct.sizes && (
           <div className=" border-l border-gray-300 pl-6">
              <h4 className="font-semibold text-indigo-900">Available Sizes:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 max-h-60 overflow-y-auto">
                {selectedProduct.sizes.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="modal-action mt-6">
        <button className="btn btn-sm btn-outline" onClick={() => setSelectedProduct(null)}>
          Close
        </button>
      </div>
    </div>
  </dialog>
)}




      <Footer />
    </>
  );
}

export default Products;
