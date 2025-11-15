import React from "react";
import { Routes, Route } from "react-router-dom";

// Existing imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurClub from "./pages/OurClub";
import Preinscription from "./pages/PreInscription";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

// New pages
import ModernEquipment from "./pages/ModernEquipment";
import PersonalCoaching from "./pages/PersonalCoaching";
import Community from "./pages/Community";
import TournamentDetail from "./pages/TournamentDetail";
import NosGroupes from "./pages/Nosgroupes";
import Horaires from "./pages/Horaires";

export default function App() {
  return (
    <Routes>
      {/* Main site */}
      <Route
        path="/"
        element={
          <div className="bg-black text-white font-sans overflow-x-hidden">
            <Navbar />

            <section id="home" className="scroll-mt-16 md:scroll-mt-24">
              <Home />
            </section>

            <section id="clubs" className="scroll-mt-16 md:scroll-mt-24">
              <OurClub />
            </section>

            <section id="preinscription" className="scroll-mt-16 md:scroll-mt-24">
              <Preinscription />
            </section>

            <section id="footer" className="scroll-mt-16 md:scroll-mt-24">
              <Footer />
            </section>
          </div>
        }
      />

      {/* New Concept Pages */}
      <Route path="/modern-equipment" element={<ModernEquipment />} />
      <Route path="/personal-coaching" element={<PersonalCoaching />} />
      <Route path="/community" element={<Community />} />

      {/* New groupes and Horaire pages */}
      <Route path="/horaires" element={<Horaires />} />
      <Route path="/nos-groupes" element={<NosGroupes />} />

      {/* Tournament detail page */}
      <Route path="/tournament/:id" element={<TournamentDetail />} />

      {/* Admin */}
      <Route path="/admin" element={<Admin />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}