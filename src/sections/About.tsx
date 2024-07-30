import { useInView, Variants, motion } from 'framer-motion';
import AnimatedHeading from '../components/ui/AnimatedHeading'
import { useRef } from 'react';

const elVariants: Variants = {
  init: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 }
};


export default function About() {
  const ref = useRef<HTMLSelectElement | null>(null);
  const sectionRef = useRef<HTMLSelectElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const imgIsInView = useInView(imgRef, { amount: 0.1, once: true });
  const sectionIsInView = useInView(sectionRef, { amount: 0.2, once: true });
  

  return (
    <section className="w-11/12 xl:w-10/12 mx-auto grid gap-8 justify-center my-28 max-w-[1300px]" id='about-me'>
      <AnimatedHeading
        text="S O B R E  M Í" 
        className="col-span-1"
      />
      <article className='grid grid-rows-1 xl:grid-rows-2 grid-cols-1 xl:grid-cols-4 gap-4 h-fit'>
        <motion.section 
          className='bg-[#f2f4f7] hover:shadow-xl transition-shadow duration-500 rounded-3xl p-10 col-span-1 xl:col-span-4 h-fit overflow-hidden'
          ref={ref}
          variants={elVariants}
          initial="init"
          animate={isInView ? "show" : "init"}
          transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
        >
          <motion.p
            className='text-base md:text-lg text-balance md:text-pretty'
            variants={elVariants}
            initial="init"
            animate={isInView ? "show" : "init"}
            transition={{ duration: .8, type: "tween", ease: "easeInOut" }}
          >
            Mi nombre es Allan Quiroz Silva y mi pasión por la programación nació a los 10 años con Blender Game Engine, donde creé mi primer videojuego. Desde entonces, mi camino ha sido un constante aprendizaje. He participado en Hackathones organizadas por mi casa de estudio, donde he tenido la oportunidad de trabajar en equipos multidisciplinarios para desarrollar productos innovadores. Estas experiencias me han permitido fortalecer mis habilidades de colaboración, comunicación y resolución de problemas.
          </motion.p>
        </motion.section>
        <motion.img
          src="img/computer.webp"
          className='hidden xl:block rounded-3xl h-52 w-[95%] hover:shadow-xl transition-shadow duration-500'
          alt=""
          ref={imgRef}
          variants={elVariants}
          initial="init"
          animate={imgIsInView ? "show" : "init"}
          transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
        />
        <motion.section
          className='hidden xl:block bg-[#f2f4f7] rounded-3xl p-10 h-fit col-span-1 xl:col-span-3 col-start-1 xl:col-start-2 hover:shadow-xl transition-shadow duration-500 overflow-hidden'
          ref={sectionRef}
          variants={elVariants}
          initial="init"
          animate={sectionIsInView ? "show" : "init"}
          transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}  
        >
          <motion.p
            className='text-base md:text-lg'
            variants={elVariants}
            initial="init"
            animate={sectionIsInView ? "show" : "init"}
            transition={{ duration: .8, type: "tween", ease: "easeInOut" }}
          >
            Como programador, mi objetivo principal es convertir las ideas de los usuarios en una realidad tangible, utilizando mis habilidades y conocimientos para crear soluciones tecnológicas que sean eficientes, intuitivas y satisfagan sus necesidades. Estoy siempre abierto a nuevos desafíos y oportunidades para seguir aprendiendo y creciendo como profesional. Si tienes un proyecto en mente, no dudes en contactarme.
          </motion.p>
        </motion.section>
      </article>
    </section>
  )
}
