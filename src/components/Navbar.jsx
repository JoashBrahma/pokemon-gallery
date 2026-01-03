import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="py-3">
      <ul className="flex justify-center items-center gap-8">
        <li className="text-lg font-medium"><Link to="/">Home</Link></li>
        <li className="text-lg font-medium"><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar