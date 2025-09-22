import { LuArrowDown, LuCircleChevronDown } from "react-icons/lu";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
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
          <section class="pt-12">
            <div class="bg-[#c2d4efab] mx-auto w-full relative flex justify-around items-center rounded-2xl">
              <img src="/src/assets/IMG-20250922-WA0013.png" alt=""  className="w-fill h-[447px] object-cover rounded-[3px]" />
              <div class="w-fill h-[447px] rounded-[3px]">
                <h2 class=" text-[rgb(34,42,79)] text-3xl font-bold font-['Poppins'] leading-[60px]">
                  Developpeuse Web & Mobile
                </h2>
                <p class="w-auto text-[rgb(34,42,79)] text-base font-medium font-['Poppins'] leading-9">
                  Je suis une développeuse web et mobile passionnée par la création
                  d'expériences numériques innovantes et intuitives.
                </p>
                <div class="flex gap-9 my-10 font-['Poppins'] justify-center">
                  <div class="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-[rgb(34,42,79)] text-md font-semibold">
                      REACT
                  </div>
                  <div class="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-[rgb(34,42,79)] text-md font-semibold">
                      NODE.JS
                  </div>
                  <div class="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)] text-[rgb(34,42,79)] text-md font-semibold">
                      PSQL
                  </div>
                </div>
                <button class=" px-16 py-5   bg-[rgb(34,42,79)] rounded-md shadow-[0px_7px_30px_0px_rgba(0,0,0,0.05)]   text-white text-xl font-medium font-['Poppins'] uppercase">
                  Les projets
                </button>
              </div>
            </div>
          </section> 
        </div>
      </div>
    </>
  );
}
