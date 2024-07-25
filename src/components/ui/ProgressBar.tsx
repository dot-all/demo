import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 115]);

  return (
    <aside className="fixed h-36 top-1/2 transform -translate-y-1/2 right-2 bg-black/20 w-[4px] xl:w-[6px] rounded-full hidden md:block ">
      <motion.div
        className="bg-black h-7 origin-[0] w-[4px] xl:w-[6px] rounded-full hidden md:block"
        style={{ translateY }}
      />
    </aside>
  );
}
