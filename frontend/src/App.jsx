// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurClub from "./pages/OurClub";
import Preinscription from "./pages/PreInscription";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HOME SECTION --- */}
      <section id="home" className="scroll-mt-16 md:scroll-mt-24">
        <Home />
      </section>

      {/* --- CLUB SECTION --- */}
      <section id="clubs" className="scroll-mt-16 md:scroll-mt-24">
        <OurClub />
      </section>

      {/* --- PREINSCRIPTION SECTION --- */}
      <section id="preinscription" className="scroll-mt-16 md:scroll-mt-24">
        <Preinscription />
      </section>

      {/* --- FOOTER --- */}
      <section id="footer" className="scroll-mt-16 md:scroll-mt-24">
        <Footer />
      </section>
    </div>
  );
}
