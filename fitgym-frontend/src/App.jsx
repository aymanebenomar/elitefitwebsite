import React from "react";
import { Routes, Route } from "react-router-dom"; // <-- import Routes and Route
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurClub from "./pages/OurClub";
import Preinscription from "./pages/PreInscription";
import Footer from "./components/Footer";
import Admin from "./pages/Admin"; // <-- import Admin page
import Login from "./pages/Login"; // <-- import Login page

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

      {/* Admin page */}
      <Route path="/admin" element={<Admin />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
