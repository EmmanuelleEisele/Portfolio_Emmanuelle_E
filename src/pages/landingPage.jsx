
import { LuCircleChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();

  const [exit, setExit] = useState(false);

  const handleClick = () => {
    setExit(true);
    setTimeout(() => {
      navigate('/home');
    }, 500); // Délai pour permettre l'animation de sortie
  };
  return (
      <motion.div 
      className="bg-gray-700 min-h-screen flex flex-col justify-center items-center relative"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: exit ? -500 : 0, opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="relative">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-8xl text-gray-900 font-bold font-fascinate drop-shadow-xl p-4  rounded-xl hover:scale-105 transition-transform ease-in-out duration-300">
            EMMANUELLE EISELÉ
          </h1>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p
            className="text-gray-100 text-center animate-bounce cursor-pointer"
            onClick= {handleClick}
          >
            <LuCircleChevronDown
              size={40}
              className="hover:scale-125 transition-transform ease-in-out duration-400"
            />
          </p>
        </div>
      </motion.div>
  )
};