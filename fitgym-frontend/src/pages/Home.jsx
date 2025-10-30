import React from "react";
import Hero from "../components/Hero";
import Concepts from "../components/Concepts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Hero />

      {/* Concept */}
      <section id="concept" className="scroll-mt-16 md:scroll-mt-24">
        <Concepts />
      </section>  

      {/* Contact */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
