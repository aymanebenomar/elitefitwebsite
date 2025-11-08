import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/all.png";
import { Dumbbell } from "lucide-react";
import { supabase } from "../supabaseClient"; // Make sure this file exists and is correct

const Preinscription = () => {
  const [fullName, setFullName] = useState("");
  const [numTele, setNumTele] = useState("");
  const [email, setEmail] = useState("");
  const [offre, setOffre] = useState("Bodybuilding");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!consent) {
      alert("Veuillez accepter les conditions pour soumettre le formulaire.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.from("preinscriptions").insert([
        {
          full_name: fullName,
          num_tele: numTele,
          email: email,
          offre: offre,
          consent: consent,
        },
      ]);

      console.log("Supabase data:", data);
      console.log("Supabase error:", error);

      if (error) {
        alert("Erreur lors de l'enregistrement : " + error.message);
      } else {
        alert("Formulaire soumis avec succès !");
        setFullName("");
        setNumTele("");
        setEmail("");
        setOffre("Bodybuilding");
        setConsent(false);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Une erreur inattendue s'est produite !");
    } finally {
      setLoading(false);
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
              placeholder="Nom complet"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />

            <input
              type="tel"
              placeholder="Numéro de téléphone"
              value={numTele}
              onChange={(e) => setNumTele(e.target.value)}
              required
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 bg-opacity-70 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />

            <select
              value={offre}
              onChange={(e) => setOffre(e.target.value)}
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
            disabled={loading}
            className={`mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-all duration-200 hover:shadow-md w-full text-sm ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Envoi..." : "Envoyer la demande"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Preinscription;
