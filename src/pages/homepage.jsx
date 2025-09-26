import { LuArrowDown } from "react-icons/lu";
import Carousel from "../components/Carousel";
import futurProjectsData from "../data/futurProjects";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBriefcase, FaHandshake } from "react-icons/fa";

export default function Home() {
  // scrolling to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Section About */}
      <motion.div
        id="about-section"
        className="bg-gray-700 min-h-screen md:p-8 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <section className="w-full md:max-w-6xl mx-auto text-center pt-12 flex justify-center items-center ">
          <div className="bg-gray-900 p-4 md:p-8 rounded-2xl w-11/12 md:w-full h-fit">
            <div className="bg-[#b4ccf063] mx-auto w-11/12 md:w-full relative flex flex-col justify-center sm:flex-row items-end rounded-2xl md:h-[500px]">
              <img
                src="/src/assets/IMG-20250922-WA0013.png"
                alt="photo de Emmanuelle Eiselé"
                className="hidden md:block md:h-[470px] object-cover object-top "
              />
              <div className="w-full h-1/2 md:h-fit rounded-[3px]">
                <h2 className=" text-gray-900 p-2 md:p-0 text-lg md:text-3xl font-bold font-['Poppins'] md:leading-[60px]">
                  Developpeuse Web & Mobile
                </h2>
                <p className="w-auto text-gray-900 text-base font-medium font-['Poppins'] md:leading-9 px-1">
                  Je suis une développeuse web et mobile passionnée par la
                  création d'expériences numériques innovantes et intuitives.
                </p>
                <div className="flex flex-col justify-center items-center md:flex-row gap-2 md:gap-9 my-4 md:my-10 font-['Poppins']">
                  <motion.div
                    animate={{
                      borderRadius: [
                        "40% 60% 30% 70% / 60% 30% 70% 40%", // Forme organique 1
                        "60% 40% 40% 60% / 60% 60% 60% 40%", // Forme organique 2
                        "30% 50% 50% 50% / 50% 30% 70% 50%", // Forme organique 3
                        "40% 60% 30% 70% / 60% 30% 70% 40%", // Forme organique 4
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "loop",
                    }}
                    className="w-[100px] h-[100px] text-center  md:py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-gray-900 text-md font-semibold flex items-center justify-center flex-col"
                  >
                    <p className="inline">REACT</p>
                    <p className="inline">JS</p>
                  </motion.div>
                  <motion.div
                    animate={{
                      borderRadius: [
                        "40% 60% 30% 70% / 60% 30% 70% 40%", // Forme organique 1
                        "60% 40% 40% 60% / 50% 60% 40% 40%", // Forme organique 2
                        "30% 70% 50% 50% / 50% 30% 70% 50%", // Forme organique 3
                        "40% 60% 30% 70% / 60% 30% 70% 40%", // Forme organique 4
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "loop",
                      delay: 1,
                    }}
                    className="w-[100px] h-[100px] text-center md:py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-gray-900 text-md font-semibold flex items-center justify-center flex-col">
                    <p className="inline">NODE.JS</p>
                    <p className="inline">EXPRESS</p>
                  </motion.div>
                  <motion.div
                    animate={{
                      borderRadius: [
                        "40% 60% 30% 70% / 40% 30% 70% 40%", // Forme organique 1
                        "30% 70% 50% 50% / 50% 30% 70% 60%", // Forme organique 3
                        "60% 40% 40% 60% / 50% 60% 60% 40%", // Forme organique 2
                        "45% 60% 30% 70% / 40% 30% 70% 45%", // Forme organique 4
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "loop",
                      delay: 2,
                    }}
                    className="w-[100px] h-[100px] text-center md:py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-gray-900 text-md font-semibold flex items-center justify-center flex-col"
                  >
                    <p className="inline">PSQL</p>
                    <p className="inline">SEQUELIZE</p>
                  </motion.div>
                </div>
                <button
                  className="hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[500ms] px-8 md:px-16 py-2 md:py-4 bg-[rgb(34,42,79)] rounded-md shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-white text-lg md:text-xl font-medium font-['Poppins'] uppercase mb-2 md:m-4"
                  onClick={scrollToProjects}
                >
                  Mes projets
                  <br />
                  <LuArrowDown className="inline ml-2 animate-bounce " />
                </button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      {/* Section Projects */}
      <div
        id="projects-section"
        className="bg-gray-700 min-h-screen p-4 flex flex-col justify-center items-center font-['Poppins']"
      >
        <div className="w-full md:w-[70%] xl:max-w-6xl mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-4 text-white">Mes Projets</h2>
          <Carousel />
        </div>
      </div>
      {/* Section Projet en cours */}
      <div
        id="ongoing-projects-section"
        className="bg-gray-700 min-h-screen p-4 flex flex-col justify-center items-center font-['Poppins']"
      >
        <div className="w-full md:w-[70%] mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Les projets à venir
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Actuellement, je travaille sur plusieurs projets passionnants qui
            seront bientôt disponibles. Restez à l'écoute pour découvrir mes
            prochaines réalisations !
          </p>
          <div className="bg-gray-300 mx-auto p-4 rounded-2xl w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-fit">
            <div className="flex flex-col gap-8">
              {futurProjectsData.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 p-4 rounded-lg shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-40 mx-auto object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techno.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="flex justify-center flex-col items-center my-8 bg-gray-800 text-white p-8 mx-4 rounded-2xl">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], opacity: [1, 0.7, 0.7, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
            className="mb-8"
          >
            <FaHandshake className="text-blue-300 text-3xl" size={45} />
          </motion.div>
          <p className="text-lg md:text-xl mb-4 text-center max-w-3xl">
            Découvrez mon parcours et mes compétences sur la page{" "}
            <a href="/about" className="hover:underline hover:text-blue-300">
              À propos
            </a>
            .
          </p>
          <p className="text-lg md:text-xl mb-4 text-center max-w-3xl">
            Je suis ouverte à de nouvelles opportunités professionnelles :
            recruteurs, n’hésitez pas à me contacter pour échanger !
          </p>
        </div>
      </section>
    </>
  );
}
