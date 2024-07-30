import { motion, Variants, useInView } from "framer-motion";
import { useState, useRef } from "react";

const dotVariants: Variants = {
  show: { opacity: 1, visibility: "visible" },
  hidden: { opacity: 0, visibility: "hidden" }
};

const textAnchorVariants: Variants = {
  start: { x: 0 },
  move: { x: 12 }
};

const arrowVariants: Variants = {
  show: { x: 5 },
  hidden: { x: -25 }
}

const sectionVariants: Variants = {
  init: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export default function Contact() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.45, once: true });

  return (
    <>
      <footer className="max-h-[640px] h-[80vh] md:h-[90vh] bg-black w-11/12 xl:w-10/12 mx-auto rounded-[40px] grid grid-rows-3 grid-cols-1 max-w-[1300px]" id="contact">
        <motion.section
          ref={ref}
          variants={sectionVariants}
          initial="init"
          animate={isInView ? "show" : "init"}
          transition={{ duration: .8, type: "tween", ease: "easeInOut" }}
          className="flex flex-col items-center justify-end row-span-2 gap-4"
        >
          <h2 className="text-white text-[38px] md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold w-3/5 tracking-tighter leading-snug">Hagamos que tu próxima idea cobre vida.</h2>
          <motion.a
            className={`${isHovered ? 'text-white': 'text-black'} bg-white rounded-full px-4 md:px-2 py-3 text-sm md:text-base font-semibold mt-8 mb-2 md:my-8 flex flex-row relative group items-center justify-center overflow-hidden`}
            href="mailto:al.quirozsilva@gmail.com"
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "#0814ec" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.svg
              variants={arrowVariants}
              initial="hidden"
              animate={isHovered ? "show" : "hidden"}
              xmlns="http://www.w3.org/2000/svg"
              transition={{ type: "tween", duration: 0.15 }}
              className="w-[18px] mt-[2px] hidden md:block"
              viewBox="0 0 512 512"
            >
              <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100" />
            </motion.svg>

            <motion.span
              variants={textAnchorVariants}
              initial="start"
              animate={isHovered ? "move" : "start"}
              transition={{ type: "tween", duration: 0.18 }}
            >
              CONTÁCTAME
            </motion.span>
            <motion.svg
              id="contactIcon"
              variants={dotVariants}
              initial="show"
              animate={isHovered ? "hidden" : "show"}
              transition={{ type: "tween", duration: 0.01 }}
              className="w-6 mt-1 hidden md:block"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc id="contactIconDesc">Punto, icono de contacto</desc>
              <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#000000" />
            </motion.svg>
          </motion.a>
        </motion.section>
        <section className="flex flex-col items-center justify-center gap-10">
          <ul className="font-medium flex flex-row gap-5 md:gap-10 text-white text-sm md:text-base">
            <li><a target="_blank" href="https://www.linkedin.com/in/im-allan/">LinkedIn</a></li>
            <li><a target="_blank" href="https://github.com/dot-all">Github</a></li>
            <li><a target="_blank" href="https://exercism.org/profiles/dot-all">Exercism</a></li>
            <li><a target="_blank" href="https://codepen.io/im-allan">CodePen</a></li>
          </ul>
          <p className="font-medium text-white/50">al.quirozsilva@gmail.com</p>
        </section>
      </footer>
    </>
  );
}
