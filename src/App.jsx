import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import Products from './Pages/Products'
import { BrowserRouter, Route, Routes } from "react-router"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
