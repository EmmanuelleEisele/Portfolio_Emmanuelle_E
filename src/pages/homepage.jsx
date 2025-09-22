import { LuArrowDown, LuCircleChevronDown } from "react-icons/lu";

export default function Home() {
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
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-8xl text-gray-800 font-bold font-fascinate drop-shadow-xl">
            EMMANUELLE EISELE
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-300 font-lavishly">
            Emmanuelle Eiselé
          </h2>
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
        className="bg-gray-600 min-h-screen p-8 flex flex-col justify-center items-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          <section className="pt-12">
            <div className="bg-[#b4ccf063] mx-auto w-full relative flex justify-center items-center rounded-2xl h-[500px]">
              <img src="/src/assets/IMG-20250922-WA0013.png" alt="photo de Emmanuelle Eiselé"  className="w-fill h-[500px] object-cover rounded-[3px]" />
              <div className="w-fill h-[447px] rounded-[3px]">
                <h2 className=" text-[rgb(34,42,79)] text-3xl font-bold font-['Poppins'] leading-[60px]">
                  Developpeuse Web & Mobile
                </h2>
                <p className="w-auto text-[rgb(34,42,79)] text-base font-medium font-['Poppins'] leading-9">
                  Je suis une développeuse web et mobile passionnée par la création
                  d'expériences numériques innovantes et intuitives.
                </p>
                <div className="flex gap-9 my-10 font-['Poppins'] justify-center">
                  <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-[rgb(34,42,79)] text-md font-semibold flex items-center justify-center flex-col hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[1000ms]">
                     <p className="inline">REACT</p>
                     <p className="inline">JS</p>
                  </div>
                  <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-[rgb(34,42,79)] text-md font-semibold flex items-center justify-center flex-col hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[1000ms]">
                      <p className="inline">NODE.JS</p>
                      <p className="inline">EXPRESS</p>
                  </div>
                  <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-2xl shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-[rgb(34,42,79)] text-md font-semibold flex items-center justify-center flex-col hover:rounded-[40%_60%_30%_70%/60%_30%_70%_40%] transition-all ease-in-out duration-[1000ms]">
                      <p className="inline">PSQL</p>
                      <p className="inline">SEQUELIZE</p>
                  </div>
                </div>
                <button className=" px-16 py-5   bg-[rgb(34,42,79)] rounded-md shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]   text-white text-xl font-medium font-['Poppins'] uppercase" onClick={scrollToProjects}>
                  Les projets
                </button>
              </div>
            </div>
          </section> 
        </div>
        {/* Section Projects */ }
        <div id="projects-section"
                className="bg-gray-600 min-h-screen p-8 flex flex-col justify-center items-center"
 >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Mes Projets</h2>  
          </div>
        </div>
      </div>
    </>
  );
}
