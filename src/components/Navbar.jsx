import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed bg-gray-700 top-0 left-0 w-full z-50 text-center p-4 text-gray-200 flex justify-center md:justify-end items-center">
      <div className="space-x-6 font-poppins font-bold md:mr-8">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}