import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { PiPhoneBold } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-center items-center text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Contactez-moi</h1>
      <p className="text-lg mb-4">
        Interressé par mon profil ? 
      </p>
      <p>Vous pouvez me joindre via les moyens suivants :</p>
      
      <Link
        to="mailto:emmanuelle.eisele@outlook.com"
        className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
      >
       <IoMailOutline/> emmanuelle.eisele@outlook.com
      </Link>
      <Link
        to="tel:+33 7 81 40 13 71"
        className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
      >
      <PiPhoneBold /> {''} +33 7 81 40 13 71
      </Link>
      <Link
        to="https://www.linkedin.com/in/emmanuelle-eiselé-b5560a341"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
      >
       <SiLinkedin /> LinkedIn 
      </Link>
      <Link
        to="https://github.com/emmanuelleeisele"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
      >
       <FaGithub /> GitHub 
      </Link>
    </div>
  );
}
