// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -100 }}
      className="not-found-page overflow-hidden bg-gray-700 min-h-screen md:p-8 flex flex-col justify-center items-center font-poppins text-white p-4 pt-20"
    >
      <div className="relative mb-8">
        <motion.h1
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            x: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop", // Changé de "spring" à "loop"
              ease: "easeInOut",
              delay: 1.8
            },
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop", // Changé de "spring" à "loop"
              ease: "easeInOut",
              delay: 1.8
            },
          }}
          className="text-8xl sm:text-[10rem] font-bold text-blue-200/30 absolute"
        >
          404
        </motion.h1>
        
        <motion.h1
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            x: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop", // Changé de "spring" à "loop"
              ease: "easeInOut",
            },
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop", // Changé de "spring" à "loop"
              ease: "easeInOut",
            },
          }}
          className="text-8xl sm:text-[10rem] font-bold text-blue-500 absolute"
        >
          404
        </motion.h1>
        
        <motion.h1
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            x: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop", // Changé de "spring" à "loop"
              ease: "easeInOut",
              delay: 0.8
            },
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop", // Changé de "spring" à "loop"
              ease: "easeInOut",
              delay: 0.8
            },
          }}
          className="text-8xl sm:text-[10rem] font-bold text-blue-300/30 absolute"
        >
          404
        </motion.h1>
        
        {/* 404 invisible pour maintenir l'espace */}
        <h1 className="text-8xl sm:text-[10rem] font-bold opacity-0">404</h1>
      </div>

      <motion.h2 className="text-xl pb-4 text-center mt-12">Cette page n'existe pas… encore 😅</motion.h2>
      <p className="text-center max-w-xl mb-8">
        Mais pas d'inquiétude, les vrais projets sont juste à portée de clic.
      </p>

      <button
        onClick={handleGoHome}
        className="bg-blue-50 rounded-lg p-5 mt-8 font-bold text-gray-900 hover:bg-blue-500/70 hover:text-white transition-colors"
      >
        <IoArrowBackOutline className="inline-block mr-2" /> 
        Retourner à l'accueil
      </button>
    </motion.div>
  );
}