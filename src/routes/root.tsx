// import { Link } from "react-router-dom";

import DropDownMenu from "../components/ui/DropdownMenu";
import ProgressBar from "../components/ui/ProgressBar";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";

export default function Root() {
  return (
    <>
      <main className="w-full h-full pb-10 bg-[#f0f1fa]">
        <DropDownMenu />
        <Hero />
        <Portfolio />
        <Contact />
        <ProgressBar />
      </main>
    </>
  )
}
