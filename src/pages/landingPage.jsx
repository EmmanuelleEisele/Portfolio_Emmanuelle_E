import { LuCircleChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function LandingPage() {
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);

  const handleClick = () => {
    setExit(true);
    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  // Initialisation des particules
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center relative "
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: exit ? -500 : 0, opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}

    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-5"
        options={{
          background: {
            color: { value: "#374151" }, // gris foncé
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 0.5, max: 2 } },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.2,
              distance: 150,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 80, duration: 0.5 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-8xl text-gray-200 font-bold font-fascinate drop-shadow-xl p-4 rounded-xl hover:scale-105 transition-transform ease-in-out duration-300">
          EMMANUELLE EISELÉ
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p
          className="text-gray-100 text-center animate-bounce cursor-pointer"
          onClick={handleClick}
        >
          <LuCircleChevronDown
            size={40}
            className="hover:scale-125 transition-transform ease-in-out duration-400"
          />
        </p>
      </div>
    </motion.div>
  );
}

