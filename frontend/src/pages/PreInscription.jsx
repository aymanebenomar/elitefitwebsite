// src/pages/PreInscription.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/all.png";
import { Dumbbell } from "lucide-react";

const Preinscription = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "Bodybuilding",
  });
  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Veuillez accepter les conditions pour soumettre le formulaire.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/preinscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, consent }),
      });

      if (res.ok) {
        alert("✅ Formulaire soumis avec succès !");
        setFormData({ name: "", phone: "", email: "", program: "Bodybuilding" });
        setConsent(false);
      } else {
        alert("❌ Erreur lors de la soumission du formulaire.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-16 bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
          filter: "brightness(0.6)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
      </div>

      {/* Card Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/50 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-md">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-left relative flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Dumbbell className="text-red-600 w-8 h-8" />
            <h2 className="text-3xl font-bold uppercase text-red-600">
              REJOINS <span className="text-white">ELITE CLUB</span>
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base text-center md:text-left">
            Transforme ton corps, ton mental et ton énergie avec{" "}
            <span className="text-red-500 font-semibold">ELITE CLUB</span>.  
            Nos coachs experts t'accompagneront pour atteindre tes objectifs plus vite que jamais.
          </p>

          <p className="text-gray-400 text-center md:text-left text-sm md:text-base mt-2">
            "Chaque entraînement est un pas vers une meilleure version de toi-même."
          </p>

          <span className="absolute bottom-2 left-2 text-gray-400 text-sm hidden md:block">
            ELITE CLUB
          </span>
        </motion.div>

        {/* Right Section: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-black/40 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md grid grid-cols-1 gap-4"
        >
          <h3 className="text-2xl font-bold uppercase mb-4 text-center text-red-500">
            PRÉINSCRIPTION
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Numéro de téléphone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm appearance-none"
            >
              <option value="Bodybuilding">Bodybuilding</option>
              <option value="Kids">Kids</option>
              <option value="Crossfit">Crossfit</option>
            </select>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="w-5 h-5 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-2 focus:ring-red-600 mt-1 flex-shrink-0"
              />
              <span className="text-gray-300 text-xs leading-relaxed">
                J'accepte que mes informations soient utilisées pour la préinscription.
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-all duration-200 hover:shadow-md w-full text-sm"
          >
            Envoyer la demande
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Preinscription;
