import { FaClock, FaGithub, FaLaptopCode, FaMapPin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { PiPhoneBold } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5}}
      exit={{ opacity: 0, y: -100 }}
      className="contact-page max-w-4xl mx-auto bg-gray-700 min-h-screen gap-4 text-white p-4 pt-20 font-poppins leading-snug"
    >
      <BackButton />
      <section className="flex flex-col gap-4 mt-2">
        <div className="contact flex flex-col items-start bg-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8">Contactez-moi</h1>
          <p className="text-lg mb-2">Prêt(e) à donner vie à vos idées ?</p>
          <p className="text-lg">
            Un message suffit pour qu’on démarre quelque chose de grand
            ensemble.
          </p>
          <p className="text-lg mb-2">
            Pour me contacter, un mail, un coup de fil ou un message sur
            LinkedIn et le tour est joué.
          </p>
        </div>
        <div className="message flex flex-col gap-2 bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Disponibilités</h2>
          <p className="text-lg">
            <FaMapPin
              className="inline-block mr-2 hover:animate-bounce ease-in-out duration-300"
              size={24}
            />{" "}
            Disponible sur <strong>Lyon</strong> et ses environs en présentiel
          </p>
          <p className="text-lg">
            <FaLaptopCode
              className="inline-block mr-2 hover:animate-pulse ease-in-out duration-300"
              size={24}
            />{" "}
            Ouverte au remote partiel ou total
          </p>

          <p className="text-lg font-semibold text-green-400">
            <FaClock
              className="inline-block mr-2 animate-spin ease-in-out text-green-400"
              size={24}
            />{" "}
            Disponible immédiatement
          </p>
        </div>
        <div className="coordonnees flex flex-col gap-4 md:flex-row md:gap-10 bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold mb-4">Mes coordonnées</h2>
            <Link
              to="mailto:emmanuelle.eisele@outlook.com"
              className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
            >
              <IoMailOutline size={24} /> emmanuelle.eisele@outlook.com
            </Link>
            <Link
              to="tel:+33 7 81 40 13 71"
              className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
            >
              <PiPhoneBold size={24} /> {""} +33 7 81 40 13 71
            </Link>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <Link
              to="https://www.linkedin.com/in/emmanuelle-eiselé-b5560a341"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
            >
              <SiLinkedin size={24} /> LinkedIn
            </Link>
            <Link
              to="https://github.com/emmanuelleeisele"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:underline flex flex-row items-center gap-2"
            >
              <FaGithub size={24} /> GitHub
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
