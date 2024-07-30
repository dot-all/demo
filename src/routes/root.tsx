import Header from "../components/ui/Header";
import ProgressBar from "../components/ui/ProgressBar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";

export default function Root() {
  return (
    <>
      <main className="w-full h-full pb-10">
        <Header />
        <Hero />
        <Experience />
        <Portfolio />
        <About />
        <Contact />
        <ProgressBar />
      </main>
    </>
  )
}
