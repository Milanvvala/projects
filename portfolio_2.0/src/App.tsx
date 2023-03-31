import { useEffect, useState } from "react";
import { About, Contact, Footer, Hero, Nav, Projects } from "./comp";

export default function App() {
  

  return (
    <main id="app" className=" font-sans text-xl font-extralight dark:bg-white md:text-3xl md:leading-[48px]">
        {/* <Nav /> */}
      <div className=" bg-black text-white p-12 space-y-12 ">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}