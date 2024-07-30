import AnimatedHeading from "../components/ui/AnimatedHeading";
import { motion } from "framer-motion";

interface ExperienceProps {
  date: string;
  place: string;
  position: string;
  desc: string;
  url?: string;
}

const experience: ExperienceProps[] = [
  {
    date: "Enero 2024 — Junio 2024",
    place: "AFISAN",
    position:"Ingeniero de software",
    desc: "Encargado de realizar análisis y levantamiento de requerimientos. Colaborador en la implementación de marcos de trabajo ágiles en el ERS, reduciendo el tiempo de ciclo en un 25% y aumentando la satisfacción del cliente al entregar software de mayor calidad de manera más rápida.",
    url: "https://www.linkedin.com/in/im-allan/",
  },
  {
    date: "Agosto 2022 — Diciembre 2022",
    place: "Alloxentric",
    position:"Desarrollador full-stack",
      desc: "Responsable de integrar el catálogo de componentes preexistentes de la empresa con el nuevo módulo, optimizando así los procesos de desarrollo. Contribuidor con el equipo de backend para implementar un endpoint en Flask de Deep Learning, enriqueciendo la experiencia del usuario con funcionalidades de reconocimiento de voz y detección de habla.",
  },
  {
    date: "Septiembre 2022 — Noviembre 2022",
    place: "Unitti",
    position:"Desarrollador full-stack",
    desc: "Encargado de modernizar la interfaz de usuario a una intuitiva y accesible utilizando React y React Router, optimizando el rendimiento para obtener una puntuación de Lighthouse de 90%. También, responsable de implementar una solución de visión por computadora utilizando Flask y OpenCV, habilitando nuevas funcionalidades y aumentando el valor de la plataforma.",
  },
]

export default function Experience() {
  return (
    <section className="min-h-svh w-11/12 xl:w-10/12 mx-auto grid gap-8 justify-center my-28 max-w-[1300px]" id="experience">
      <AnimatedHeading 
        text="E X P E R I E N C I A" 
        className="col-span-1"
      />
      <ol className="relative border-s border-[#2b2e3a]">
          {
            experience.map((exp, index) => (
              <li className="mb-10 ms-4 bg-[#f2f4f7] rounded-3xl w-[95%] md:w-[98.8%] p-10 hover:shadow-xl transition-shadow duration-500" key={index}>
                <div className="absolute w-3 h-3 bg-[#2b2e3a] rounded-full mt-1.5 -start-1.5 border border-[#2b2e3a]"></div>
                <h3 className="text-xl md:text-2xl font-medium my-2">{exp.position}</h3>
                <h4 className="text-base md:text-lg text-gray-500 my-2">{exp.place}</h4>
                <time className="text-base md:text-lg leading-none text-gray-500">{exp.date}</time>
                <p className="mt-2 mb-4 text-base md:text-lg text-black w-full text-pretty">{exp.desc}</p>
                <motion.a whileHover={{ opacity: .8 }} href={exp.url} target="_blank" className={`${ exp.url ? "inline-flex": "hidden" } items-center px-5 py-3 font-medium text-sm mt-2 rounded-full bg-[#2b2e3a] text-white`}>SABER MÁS
                  <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </motion.a>
              </li>

            ))
          }
      </ol>


    </section>
  )
}
