import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Clients />
      <Contact />
    </div>
  );
}
