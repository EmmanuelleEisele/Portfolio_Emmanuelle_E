import { LuArrowDown, LuCircleChevronDown } from "react-icons/lu";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Section Hero */}
      <div className="bg-gray-700 min-h-screen flex flex-col justify-center items-center relative">
        <div className="relative">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-8xl text-gray-800 font-bold font-fascinate drop-shadow-xl">EMMANUELLE EISELE</h1>
          <h2 className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-300 font-lavishly">Emmanuelle Eiselé</h2>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-100 text-center animate-bounce cursor-pointer" onClick={scrollToAbout}>
            <LuCircleChevronDown size={24} className="hover:scale-125 transition-transform ease-in-out duration-400"/>
          </p>
        </div>
      </div>

      {/* Section Informations */}
      <div id="about-section" className="bg-gray-600 min-h-screen p-8 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">À propos de moi</h3>
          <p className="text-gray-200 text-lg leading-relaxed">
            {/* Ajoutez ici vos informations personnelles */}
            Voici mes informations et mon parcours...
          </p>
        </div>
      </div>
    </>
  )
}