import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

import PortfolioCard from "../components/portfolio/PortfolioCard";
import AnimatedHeading from "../components/ui/AnimatedHeading";

interface Project {
  name: string;
  img: string;
  stack: string[];
  url: string;
}

const textVariants: Variants = {
  init: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1 }
}



const projects: Project[] = [
  {
    name: 'Shortie',
    img: 'img/shortie-web.webp',
    stack: ['React', 'NodeJS', 'Shadcn'],
    url: "https://shortie-urls.vercel.app/"
  },
  {
    name: 'Project B',
    img: 'img/project-2.png',
    stack: ['React', 'NodeJS', 'Shadcn'],
    url: "http://"
  },
  {
    name: 'Project C',
    img: 'img/project-3.png',
    stack: ['React', 'NodeJS', 'Shadcn'],
    url: "http://"
  },
  {
    name: 'Project D',
    img: 'img/project-4.png',
    stack: ['React', 'NodeJS', 'Shadcn'],
    url: "http://"
  },
];



const Portfolio: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="min-h-svh w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 justify-center my-28 max-w-[1300px]" id="portfolio">
      <AnimatedHeading 
        text="P R O Y E C T O S" 
        className="col-span-1 xl:col-span-2"
      />
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