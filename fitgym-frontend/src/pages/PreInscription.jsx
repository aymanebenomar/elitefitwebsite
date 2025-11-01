import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/all.png";

const Preinscription = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`, // 🔥 change to your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-red-600 italic"
        >
          Préinscription
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mb-10"
        >
          Rejoignez la communauté <span className="text-red-500 font-semibold">ELITE CLUB</span>  
          en remplissant le formulaire ci-dessous. Un coach vous contactera dans les plus brefs délais.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/60 p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md"
        >
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
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 md:col-span-2"
          />
          <select
            className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 md:col-span-2"
          >
            <option value="">Choisissez un service</option>
            <option value="coaching">Coaching personnalisé</option>
            <option value="musculation">Musculation</option>
            <option value="cardio">Cardio training</option>
            <option value="nutrition">Programme nutritionnel</option>
          </select>

          <button
            type="submit"
            className="md:col-span-2 mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-all duration-200"
          >
            Envoyer la demande
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Preinscription;
