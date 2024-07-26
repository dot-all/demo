import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

import PortfolioCard from "../components/portfolio/PortfolioCard";

interface Project {
  name: string;
  img: string;
  stack: string[];
}

const textVariants: Variants = {
  init: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1 }
}



const projects: Project[] = [
  {
    name: 'Shortie',
    img: 'img/project-1.webp',
    stack: ['React', 'NodeJS', 'Shadcn'],
  },
  {
    name: 'Project B',
    img: 'img/project-2.png',
    stack: ['React', 'NodeJS', 'Shadcn'],
  },
  {
    name: 'Project C',
    img: 'img/project-3.png',
    stack: ['React', 'NodeJS', 'Shadcn'],
  },
  {
    name: 'Project D',
    img: 'img/project-4.png',
    stack: ['React', 'NodeJS', 'Shadcn'],
  },
];



const Portfolio: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section className="min-h-svh w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 justify-center my-28 max-w-[1300px]">
      <motion.h2
        ref={ref}
        initial= "init"
        variants={textVariants}
        animate={ isInView ? "show": "init"}
        className="col-span-1 xl:col-span-2 flex"
        transition={{ duration: 0.45, type: "tween", ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 352l64-64-64-64"/><path d="M448 288H154c-58.76 0-106-49.33-106-108v-20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
        <span className="ml-4 text-2xl">P R O Y E C T O S</span>
      </motion.h2>
      {projects.map((project, index) => (
        <PortfolioCard 
          key={index}
          project={project}
          isHovered={hoveredIndex === index}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        />
      ))}
    </section>
  );
};

export default Portfolio;