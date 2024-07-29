import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, Variants, AnimationControls } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const iconVariants: Variants = {
  init: { rotate: 0 },
  hover: { rotate: 90 },
  open: { rotate: 90 },
  closed: { rotate: 0 },
};

const buttonVariants: Variants = {
  init: { backgroundColor: "#E4E6EF" },
  open: { backgroundColor: "#FFFFFF" },
  hover: { backgroundColor: "#FFFFFF" },
  closed: { backgroundColor: "#E4E6EF" },
};

const buttonTextVariants: Variants = {
  openMenu: { y: 0 },
  openClose: { y: -20 },
  closedMenu: { y: 20 },
  closedClose: { y: 0 },
};

const linkVariants: Variants = {
  hover: { scale: 1, opacity: 1},
  rest: { scale: 0, opacity: 0 }
}

const DropDownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setIsHovered(false);
    controls.start("closed");
  }, [controls]);

  const handleClick = () => {
    setIsOpen(prev => !prev);
    controls.start(isOpen ? "closed" : "open");
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  }, [closeMenu]);

  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  }, [closeMenu]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleClickOutside, handleEscKey]);

  return (
    <>
      <motion.button
        ref={buttonRef}
        variants={buttonVariants}
        initial="init"
        animate={isOpen ? "open" : isHovered ? "hover" : "closed"}
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => !isOpen && setIsHovered(false)}
        className="px-4 py-3 rounded-full text-sm font-medium mb-4 flex flex-row items-center relative h-full">
        <div className="relative h-5 w-14 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            variants={buttonTextVariants}
            initial="openMenu"
            animate={isOpen ? "openClose" : "openMenu"}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute">MENU</span>
            <span className="absolute" style={{ top: '100%' }}>CERRAR</span>
          </motion.div>
        </div>
        <motion.svg
          variants={iconVariants}
          initial="init"
          animate={isOpen ? "open" : isHovered ? "hover" : "closed"}
          className="w-5"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path d="M14.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 14 7.8zm-8 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 6 7.8z"></path>
          </g>
        </motion.svg>
      </motion.button>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="flex items-end flex-col absolute top-16"
        ref={menuRef}
      >
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              },
              display: "block"
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
              display: "none"
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className="bg-[#FFF] w-72 h-[264px] text-xl font-medium drop-shadow-2xl px-1 py-3"
        >
        <motion.li variants={itemVariants}>
          <motion.a whileHover="hover" initial="rest" href="/" className="flex flex-row justify-between hover:bg-[#DADFF7]/50 rounded-full px-6 py-4">
          INICIO
          <motion.svg variants={linkVariants} xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></motion.svg>
          </motion.a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <motion.a whileHover="hover" initial="rest" href="/#about-me" className="flex flex-row justify-between hover:bg-[#DADFF7]/50 rounded-full px-6 py-4">
          SOBRE MÍ
          <motion.svg variants={linkVariants} xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></motion.svg>
          </motion.a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <motion.a whileHover="hover" initial="rest" href="/#portfolio" className="flex flex-row justify-between hover:bg-[#DADFF7]/50 rounded-full px-6 py-4">
          PORTAFOLIO
          <motion.svg variants={linkVariants} xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></motion.svg>
          </motion.a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <motion.a whileHover="hover" initial="rest" href="/#contact" className="flex flex-row justify-between hover:bg-[#DADFF7]/50 rounded-full px-6 py-4">
          CONTACTO
          <motion.svg variants={linkVariants} xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></motion.svg>
          </motion.a>
        </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default DropDownMenu;