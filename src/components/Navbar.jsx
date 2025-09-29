import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav role="navigation" aria-label="Navigation principale" className="fixed bg-gray-700 top-0 left-0 w-full z-50 text-center p-4 text-gray-200 flex justify-center md:justify-end items-center">
      <div role="menubar" className="space-x-6 font-poppins font-bold md:mr-8">
        <Link role="menuitem" to="/">Accueil</Link>
        <Link role="menuitem" to="/about">A propos</Link>
        <Link role="menuitem" to="/contact">Contact</Link>
      </div>
    </nav>
  )
}