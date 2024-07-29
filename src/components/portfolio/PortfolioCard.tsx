import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface Project {
  name: string;
  img: string;
  stack: string[];
  url: string; // Añadido para el enlace
}

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

const imageVariants: Variants = {
  init: { scale: 1 },
  hovered: { scale: 1.1 }
};

const elVariants: Variants = {
  init: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const PortfolioCard: React.FC<ProjectCardProps> = ({ project, isHovered, onHoverStart, onHoverEnd }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <a 
      href={project.url} // Enlace al proyecto
      target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={onHoverStart} // Usa onMouseEnter para hover
      onMouseLeave={onHoverEnd} // Usa onMouseLeave para hover
      className="block" // Asegúrate de que el enlace sea un bloque para ocupar el espacio de la tarjeta
    >
      <motion.div
        ref={ref}
        variants={elVariants}
        initial="init"
        animate={isInView ? "show" : "init"}
        transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
        className="flex bg-[#DADFF7] w-full h-[480px] md:h-[620px] rounded-3xl hover:shadow-xl transition-shadow duration-700 overflow-hidden"
      >
        <motion.section 
          className="flex flex-col w-full"
          variants={elVariants}
          initial="init"
          animate={isInView ? "show" : "init"}
          transition={{ duration: 1.5, type: "tween", ease: "easeInOut" }}
        >
          <motion.img 
            alt={`Image of project ${project.name}`}
            animate={isHovered ? "hovered" : "init"}
            className="w-96 h-72 m-auto"
            initial="init"
            transition={{ duration: 0.45, type: "tween", ease: "easeInOut" }}
            src={project.img}
            variants={imageVariants}
          />
          <section className="mt-auto flex flex-col ml-10 mb-10">
            <h3 className="font-semibold text-3xl pb-3">{project.name}</h3>
            <ul className="flex flex-row gap-2">
              {project.stack.map((tech, index) => (
                <li className="rounded-full border-black border text-sm px-3 py-1 font-medium" key={index}>{tech}</li>
              ))}
            </ul>
          </section>
        </motion.section>
      </motion.div>
    </a>
  );
};

export default PortfolioCard;
