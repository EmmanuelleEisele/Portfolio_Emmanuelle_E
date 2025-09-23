import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <div className="mb-2">
              <Link href="https://github.com/EmmanuelleEisele" target="_blank">
      <FaGithub className="inline-block mr-2" size={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/emmanuelle-eiselé-b5560a341" target="_blank">
      <SiLinkedin className="inline-block mr-2" size={24} />
      </Link>

      </div>
      <p>© 2025 Mon Site Web. Tous droits réservés.</p>
    </footer>
  )
}