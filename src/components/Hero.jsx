import React from "react";
import heroImg from "../assets/all.png";
import heroImg2 from "../assets/girl2.jpg";
import didaImg from "../assets/dida.jpg";
import { Clock, Users, MapPin, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbar = document.querySelector("header"); // get navbar height
    const navbarHeight = navbar?.offsetHeight || 90;

    // Adjust offset for specific sections
    const offset =
      sectionId === "abonnements"
        ? 20
        : sectionId === "preinscription"
        ? -120
        : sectionId === "clubs"
        ? -100
        : -80;

    const yOffset =
      section.getBoundingClientRect().top + window.scrollY - (navbarHeight + offset);
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  };

  return (
    <motion.section 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,0,0,0.2)_0%,_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 py-20 md:py-20">
        {/* Added extra top padding on mobile with py-20 */}
        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left mt-4 md:mt-0" // <-- subtle mobile shift down
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 bg-red-600/20 px-4 py-2 rounded-full border border-red-600/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-yellow-500">#1 CLUB DE SPORT À MEKNES</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white block transform -skew-x-3">ÉLÈVE TON</span>
              <span className="text-red-600 block transform -skew-x-3 animate-pulse">ENTRAÎNEMENT</span>
              <span className="text-white block transform -skew-x-3">AVEC ELITE FIT</span>
            </motion.h1>
          </div>

          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto md:mx-0 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Rejoignez la communauté fitness la plus motivée de Meknes. 
            Des équipements premium, des coachs experts et une ambiance unique.
          </motion.p>

          {/* Features */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 py-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Clock className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-300">6H - 23H • 7/7J</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-300">Meknes, Morocco</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Users className="text-yellow-500 w-5 h-5" />
              <span className="text-gray-300">Coach Experts</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button 
              onClick={() => scrollToSection("preinscription")}
              className="bg-yellow-500 text-black font-bold px-6 sm:px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              S'INSCRIRE MAINTENANT
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => scrollToSection("clubs")}
              className="border-2 border-white text-white font-bold px-6 sm:px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
            >
              DÉCOUVRIR NOTRE CLUB
            </button>
          </motion.div>
        </motion.div>

        {/* Images */}
        <motion.div 
          className="flex-1 relative w-full mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
            {/* Main Image */}
            <div className="absolute inset-0 transform rotate-2 md:rotate-3">
              <img 
                src={heroImg} 
                alt="Gym Training" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Second Image - girl2.jpg */}
            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 transform rotate-6">
              <img 
                src={heroImg2} 
                alt="Gym Training" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-red-600"
              />
            </div>
            
            {/* Third Image - dida.jpg */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 transform -rotate-6">
              <img
                src={didaImg}
                alt="Personal Training"
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-yellow-500"
              />
            </div>

            {/* Stats Card */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500">2K+</div>
                <div className="text-xs sm:text-sm text-gray-300">MEMBRES ACTIFS</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
