import { LuArrowDown, LuCircleChevronDown } from "react-icons/lu";
import Carousel from "../components/Carousel";
import futurProjectsData from "../data/futurProjects";

export default function Home() {
  // scrolling
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Section Hero */}
      <div className="bg-gray-700 min-h-screen flex flex-col justify-center items-center relative">
        <div className="relative">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-8xl text-gray-900 font-bold font-fascinate drop-shadow-xl p-4  rounded-xl hover:scale-105 transition-transform ease-in-out duration-300">
            EMMANUELLE EISELÉ
          </h1>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p
            className="text-gray-100 text-center animate-bounce cursor-pointer"
            onClick={scrollToAbout}
          >
            <LuCircleChevronDown
              size={24}
              className="hover:scale-125 transition-transform ease-in-out duration-400"
            />
          </p>
        </div>
      </div>
      {/* Section About */}
      <div
        id="about-section"
        className="bg-gray-700 min-h-screen md:p-8 flex flex-col justify-center items-center"
      >
        <section className="max-w-4xl mx-auto text-center pt-12 flex justify-center items-center w-11/12 md:w-full">
          <div className="bg-gray-900 p-8 rounded-2xl w-11/12 md:w-full h-fit">
            <div className="bg-[#b4ccf063] mx-auto w-11/12 md:w-full relative flex flex-col justify-center sm:flex-row items-end rounded-2xl md:h-[500px]">
              <img
                src="/src/assets/IMG-20250922-WA0013.png"
                alt="photo de Emmanuelle Eiselé"
                className="hidden md:block md:w-3/4 md:h-[500px] object-cover object-top "
              />
              <div className="w-full h-1/2 md:h-fit rounded-[3px]">
                <h2 className=" text-gray-900 text-3xl font-bold font-['Poppins'] leading-[60px]">
                  Developpeuse Web & Mobile
                </h2>
                <p className="w-auto text-gray-900 text-base font-medium font-['Poppins'] leading-9">
                  Je suis une développeuse web et mobile passionnée par la
                  création d'expériences numériques innovantes et intuitives.
                </p>
                <div className="flex gap-2 md:gap-9 my-4 md:my-10 font-['Poppins'] justify-center">
                  <div className="w-[100px] h-[100px] text-center ml-2  md:py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-gray-900 text-md font-semibold flex items-center justify-center flex-col hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[500ms]">
                    <p className="inline">REACT</p>
                    <p className="inline">JS</p>
                  </div>
                  <div className="w-[100px] h-[100px] text-center md:py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-gray-900 text-md font-semibold flex items-center justify-center flex-col hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[500ms]">
                    <p className="inline">NODE.JS</p>
                    <p className="inline">EXPRESS</p>
                  </div>
                  <div className="w-[100px] h-[100px] text-center mr-2 md:py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-gray-900 text-md font-semibold flex items-center justify-center flex-col hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[500ms]">
                    <p className="inline">PSQL</p>
                    <p className="inline">SEQUELIZE</p>
                  </div>
                </div>
                <button
                  className="hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[500ms] px-16 py-4 bg-[rgb(34,42,79)] rounded-md shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]   text-white text-xl font-medium font-['Poppins'] uppercase m-4  "
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
      </div>
      {/* Section Projects */}
      <div
        id="projects-section"
        className="bg-gray-700 min-h-screen p-4 flex flex-col justify-center items-center font-['Poppins']"
      >
        <div className="max-w-8xl mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-4 text-white">Mes Projets</h2>
          <Carousel />
        </div>
      </div>
      {/* Section Projet en cours */}
      <div
        id="ongoing-projects-section"
        className="bg-gray-700 min-h-screen p-4 flex flex-col justify-center items-center font-['Poppins']"
      >
        <div className="max-w-8xl mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Les projets à venir
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Actuellement, je travaille sur plusieurs projets passionnants qui
            seront bientôt disponibles. Restez à l'écoute pour découvrir mes
            prochaines réalisations !
          </p>
          <div className="bg-gray-300 mx-auto p-8 rounded-2xl w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-fit">
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
    </>
  );
}
