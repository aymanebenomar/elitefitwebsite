import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/all.png";
import { Dumbbell } from "lucide-react";

const Preinscription = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat text-white py-20"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-left"
        >
          <div className="flex items-center gap-3">
            <Dumbbell className="text-red-600 w-10 h-10" />
            <h2 className="text-4xl font-extrabold text-red-600 italic">
              Rejoins <span className="text-white">ELITE CLUB</span>
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Transforme ton corps, ton mental et ton énergie avec{" "}
            <span className="text-red-500 font-semibold">ELITE CLUB</span>.  
            Nos coachs experts t’accompagneront pour atteindre tes objectifs plus vite que jamais.
          </p>

          <p className="text-gray-400 italic">
            “Le changement commence le jour où tu décides d’agir.”
          </p>
        </motion.div>

        {/* Right Section: Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-black/60 p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md grid grid-cols-1 gap-5"
        >
          <h3 className="text-3xl font-bold mb-2 text-center text-red-500 italic">
            Préinscription
          </h3>

          <input
            type="text"
            placeholder="Nom complet"
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <select
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="">Choisissez un service</option>
            <option value="coaching">Coaching personnalisé</option>
            <option value="musculation">Musculation</option>
            <option value="cardio">Cardio training</option>
            <option value="nutrition">Programme nutritionnel</option>
          </select>

          <button
            type="submit"
            className="mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-all duration-200 hover:shadow-[0_0_20px_#dc2626]"
          >
            Envoyer la demande
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Preinscription;
