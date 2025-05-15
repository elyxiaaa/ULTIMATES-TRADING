import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Locations from './Pages/Location'
import Contact from './Pages/Contact'
import Career from './Pages/Career'
import FAQ from './Pages/FAQ'
import Reviews from './Pages/Reviews'
import { BrowserRouter, Route, Routes } from "react-router"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
