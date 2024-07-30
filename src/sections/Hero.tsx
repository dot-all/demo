import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "./hero.scss"

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="h-svh w-full mx-auto grid grid-rows-3 relative">
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
        </div>
      </div>
      <div className="font-medium row-start-2 z-10 w-10/12 mx-auto">
        <h1 className="text-6xl md:text-8xl mb-4">Allan Quiroz.</h1>
        <p className="text-xl md:text-3xl md:w-10/12">1 año de experiencia. <span className="text-[#0814ec]">Ingeniero en informática</span> de Viña del Mar, Chile. Especializado en hacer experiencias web únicas.</p>
      </div>
      <motion.p
        className="text-sm md:text-base row-start-3 mt-auto mx-auto mb-5 font-semibold"
        style={{ opacity }}
      >
        HAZ SCROLL PARA DESCUBRIR
      </motion.p>
    </section>
  );
}