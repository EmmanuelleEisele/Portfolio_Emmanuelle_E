import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projects";
import { FiExternalLink } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail-page">
        <h1>Project Not Found</h1>
        <p>This project does not exist.</p>
      </div>
    );
  }

  return (
    <motion.div className="project-detail-page max-w-6xl mx-auto bg-gray-700 min-h-screen flex justify-center gap-4 text-white p-4 pt-20">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full  ">
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p>{project.description}</p>
        <h2 className="py-2 text-xl font-bold">Le contexte</h2>
        <p>{project.objectif}</p>
        <h2 className="py-2 text-xl font-bold">
          C'est quoi "{project.title}" ?
        </h2>
        <p>{project.detail}</p>
        {/**Technologies Section */}
        <section>
          <div className="flex flex-col gap-4 my-4">
            <h2 className="font-bold text-xl">Technologies utilisées:</h2>
            <div className="flex flex-wrap gap-2">
              {project.techno.map((tech, index) => (
                <span
                  key={index}
                  className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-4 my-4">
          <h2 className="py-2 text-xl font-bold">Ce que j'ai fais:</h2>
          <p>{project.functions}</p>
          <div className="flex flex-wrap gap-2">
            {project.role.map((role, index) => (
              <span
                key={index}
                className=" bg-blue-50/50  hover:bg-blue-50/90 font-semibold text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm w-fit"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
        {/* Action buttons */}
        <div className="flex gap-4 mt-auto">
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[rgb(34,42,79)] hover:bg-[rgb(52,65,122)] hover:scale-105 ease-in-out transition-transform duration-200 text-white px-4 py-2 rounded-lg"
          >
            <FiExternalLink className="w-4 h-4" />
            Voir le projet
          </Link>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex flex-col gap-4 justify-center w-full ">
        <img
          src={project.image}
          alt={project.title}
          className="w-full mx-auto object-cover rounded h-full object-center"
        />
      </div>
    </motion.div>
  );
}
