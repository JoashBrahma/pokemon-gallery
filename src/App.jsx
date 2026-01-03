import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Gallery from "./pages/Gallery.jsx"

function App() {
  return (
    <>
      <Navbar />
      <div className="flex-1 flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </>
  )
}

export default App