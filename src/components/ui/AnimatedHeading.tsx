import React, { useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

const textVariants: Variants = {
  init: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <motion.h2
      ref={ref}
      initial="init"
      variants={textVariants}
      animate={isInView ? "show" : "init"}
      className={`flex flex-row ${className}`}
      transition={{ duration: 0.45, type: "tween", ease: "easeInOut" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mt-1" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 352l64-64-64-64"/>
        <path d="M448 288H154c-58.76 0-106-49.33-106-108v-20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
      </svg>
      <pre className='tracking-tighter'><span className={`ml-4 text-2xl md:text-3xl tracking-tighter`}>{text}</span></pre>
    </motion.h2>
  );
};

export default AnimatedHeading;