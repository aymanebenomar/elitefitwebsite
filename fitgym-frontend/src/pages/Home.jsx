import React from "react";
import Hero from "../components/Hero";
import Concepts from "../components/Concepts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Hero />
      
      {/* Concepts Section with concept ID */}
      <section id="concept">
        <Concepts />
      </section>
      
      <Footer />
    </div>
  );
}