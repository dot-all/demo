import { motion, Variants } from "framer-motion"
import { useState } from "react";

const arrowVariants: Variants = {
  show: { x: 5 },
  hidden: { x: -25 }
}

const dotVariants: Variants = {
  show: { opacity: 1, visibility: "visible" },
  hidden: { opacity: 0, visibility: "hidden" }
};

const textAnchorVariants: Variants = {
  start: { x: 0 },
  move: { x: 12 }
};



export default function ContactButton() {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
          <motion.a
            className="bg-[#2b2e3a] text-white rounded-full font-medium px-3 md:px-2 py-4 h-full text-sm flex flex-row relative group items-center justify-center overflow-hidden z-50"
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
              className="w-5 hidden md:block"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              stroke="white"
            >
              <desc id="contactIconDesc">Punto, icono de contacto</desc>
              <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="white" />
            </motion.svg>
          </motion.a>
  )
}
