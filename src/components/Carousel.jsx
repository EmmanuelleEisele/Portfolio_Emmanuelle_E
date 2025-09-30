import { useState } from "react";
import projectsData from "../data/projects.js";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = projectsData;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className=" mx-auto font-['Poppins'] ">
      <p className="text-white max-w-2xl mx-auto text-center mb-4">
        Découvrez une sélection de mes projets de développement web en ligne
      </p>

      <div
        role="region"
        aria-label="Carrousel des projets"
        aria-live="polite"
        className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Navigation arrows */}
        <button
          aria-label="Projet précédent"
          aria-controls="carousel-content"
          onClick={prevSlide}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 rounded-full p-3 shadow-lg hover:shadow-xl group"
        >
          <BiChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 rounded-full p-3 shadow-lg hover:shadow-xl group"
        >
          <BiChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white" />
        </button>

        {/* Carousel content */}
        <div
          id="carousel-content"
          className="relative h-[520px] md:h-[500px] xl:h-[700px] overflow-hidden"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              {/* Carousel slide content */}
              <div className="flex flex-col h-full bg-gray-300">
                {/* Image */}
                <div className="w-full h-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 object-top"
                  />
                </div>

                {/* Content en bas */}
                <div className="px-4 md:px-8 md:pb-4 md:pt-2 h-1/2 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-md md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <FiCode className="w-5 h-5 text-gray-900 mr-2" />
                        <span className="font-semibold text-gray-900 text-sm md:text-base">
                          Technologies
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techno.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-medium border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-center gap-4 mt-auto">
                    <Link
                      to={`/project/${project.id}`}
                      rel="noopener noreferrer"
                      className="flex items-center mb-4 gap-2 bg-[rgb(34,42,79)] hover:bg-[rgb(52,65,122)] hover:scale-105 ease-in-out transition-transform duration-200 text-white px-4 py-2 rounded-lg"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Voir le projet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[rgb(34,42,79)] scale-125"
                  : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
