// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div className="project-detail-page max-w-4xl mx-auto bg-gray-700 min-h-screen gap-4 text-white p-4 pt-20">
      <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full text-center flex flex-col gap-4 mb-4">
        <h1 className="text-4xl font-bold">Mon Profil</h1>
        <h2 className="text-xl">Emmanuelle Eiselé</h2>
        <h2 className="text-xl">Développeuse Web & Web Mobile</h2>
      </section>
      <section className="mb-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full  flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
          <p>
            Je suis une développeuse web et mobile passionnée par la création
            d'expériences numériques innovantes et intuitives. Mon parcours
            atypique m'a permis de développer de nombreux softs skills, tels que
            la créativité, la résolution de problèmes et la collaboration. Mais
            aussi l'indépendance, la gestion du temps et la communication.
          </p>
          <h2 className="text-2xl font-bold mb-4">Mon parcours</h2>
          <p>
            Diplomée d'un Baccalauréat Littéraire, j'ai dû arrêter mes études
            pour des raisons personnelles. Cependant, j'ai toujours souhaité
            reprendre mon parcours academique un jour. J'ai travaillé dans un
            metier alimentaire pendant un an, puis après quelques petits jobs,
            je me suis lancée en tant qu'indépendante dans le nettoyage pendant
            6 ans.
          </p>
          <p>
            2024 c'était mon année, il fallait que je me reconvertisse. Alors
            après une formation intense, un stage et un examen passé avec
            succès, j'ai obtenu ma certification. Aujourd'hui, je suis prête à
            me lancer dans une nouvelle aventure professionnelle en tant que
            développeuse web!
          </p>
          <p>
            Alors si vous cherchez une développeuse web{" "}
            <span className="font-bold">passionnée, créative</span> et plus que
            tout <span className="font-bold">déterminée</span>, n'hésitez pas à
            me contacter!
          </p>  
          <h2 className="text-2xl font-bold my-4">
            Soft Skills
          </h2>
          {/* Soft Skills Section */}
          <div className="flex flex-wrap gap-2">
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Collaboration
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Indépendance
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Résolution de problèmes
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Gestion de projet
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Communication
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Créativité
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Curiosité
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Proposition d'idées
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Autonomie
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Esprit d'équipe
            </span>
          </div>
          <h2 className="text-2xl font-bold my-4">Hard Skills</h2>
          {/* Hard Skills Section */}
          <div className="flex flex-wrap gap-2 ">
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              HTML5
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              CSS3
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              JavaScript
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              React
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Node.js
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Express
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              SQL & NoSQL
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Git & GitHub
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              API REST
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Sequelize
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              TailwindCSS
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Next.js
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              TypeScript
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Agile & Scrum 
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              CI/CD
            </span>
            <span className=" bg-blue-50 text-[rgb(34,42,79)] px-3 py-1 rounded-lg text-[0.8rem] md:text-sm font-semibold w-fit">
              Deploiement (Vercel, Render)
            </span>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full  flex flex-col gap-4 ">
          <h2 className="text-2xl font-bold mb-4 text-center">Expériences clés</h2>          <div class="p-4 mt-4 " id="timeline">
            <div class="container ">
              <div class="flex flex-col md:grid grid-cols-12 text-black">
                <div class="flex md:contents ">
                  <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                      <i class="fas fa-check-circle text-white"></i>
                    </div>
                  </div>
                  <div class="bg-gray-50  col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 class="font-semibold text-lg mb-1">
                      Obtention du Titre professionnel DWWM - niveau 5
                    </h3>
                    <p class="leading-tight text-justify ">Septembre 2025</p>
                  </div>
                </div>
                <div class="flex md:contents">
                  <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300  shadow text-center">
                      <i class="fas fa-check-circle text-white"></i>
                    </div>
                  </div>
                  <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 class="font-semibold text-lg mb-1">
                      Stage Analyste Développeur front-end
                    </h3>
                    <p class="leading-tight text-justify w-full">
                      Juin-Juillet 2025
                    </p>
                  </div>
                </div>
                <div class="flex md:contents">
                  <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                      <i class="fas fa-exclamation-circle text-gray-400"></i>
                    </div>
                  </div>
                  <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 class="font-semibold text-lg mb-1">
                      Formation Développeur Web & Web Mobile - École O'Clock
                    </h3>
                    <p class="leading-tight text-justify ">
                      Nov 2024 - Juil 2025
                    </p>
                  </div>
                </div>
                <div class="flex md:contents">
                  <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                      <i class="fas fa-exclamation-circle text-gray-400"></i>
                    </div>
                  </div>
                  <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 class="font-semibold text-lg mb-1">
                      Eiselé Service - Auto-entrepreneuse dans le nettoyage
                    </h3>
                    <p class="leading-tight text-justify ">
                      Nov 2018 - Juil 2025
                    </p>
                  </div>
                </div>
                <div class="flex md:contents">
                  <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                      <i class="fas fa-exclamation-circle text-gray-400"></i>
                    </div>
                  </div>
                  <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 class="font-semibold text-lg mb-1">
                      Cheffe caisse Intermarché
                    </h3>
                    <p class="leading-tight text-justify ">
                      Août 2016 - Août 2017
                    </p>
                  </div>
                </div>
               
                <div class="flex md:contents">
                  <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                      <i class="fas fa-exclamation-circle text-gray-300"></i>
                    </div>
                  </div>
                  <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 class="font-semibold text-lg mb-1">
                      Bac Littéraire
                    </h3>
                    <p class="leading-tight text-justify ">
                      2013-2014
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
