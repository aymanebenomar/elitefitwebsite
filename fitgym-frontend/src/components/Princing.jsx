import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <motion.div 
      className="mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          LES OFFRES <span className="text-red-600">D'ABONNEMENTS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        
        {/* KARATE JEUNES */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">KIDS</h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-4xl font-black text-red-500">190DHS</span>
              <span className="text-gray-400 text-lg">/mois*</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="text-center text-gray-300 italic">
              Le premier prélèvement à <span className="font-bold text-white">140DHS</span>
            </div>
            <div className="text-center text-gray-300 italic">
              Pour les <span className="font-bold text-white">jeunes de 8 à 16 ans</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-300 text-center mb-2 italic">Inclus dans l'offre :</div>
            <div className="flex flex-col items-center space-y-2 text-sm text-gray-400 italic">
              <div>• Cours de karaté 2x/semaine</div>
              <div>• Équipement de base fourni</div>
              <div>• Encadrement par des experts</div>
            </div>
          </div>

          <button className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-500 transition-all duration-300 transform hover:scale-105">
            J'EN PROFITE
          </button>
        </div>

        {/* OFFRE CLASSIQUE - TOP VENTE - Slightly Elevated */}
        <div className="relative bg-gray-800/50 rounded-2xl p-8 border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300 -mt-4">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-full text-sm">
              TOP VENTE
            </div>
          </div>
          
          <div className="text-center mb-6 pt-4">
            <h3 className="text-2xl font-bold text-white mb-2">BODYBUILDING</h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-4xl font-black text-yellow-500">200DHS</span>
              <span className="text-gray-400 text-lg">/mois</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="text-center text-gray-300 italic">
              Le premier prélèvement à <span className="font-bold text-white">150DHS</span>
            </div>
            <div className="text-center text-gray-300 italic">
              Accès <span className="font-bold text-white">illimité</span> à tous les équipements
            </div>
            <div className="text-center text-gray-300 italic">
              Engagement de <span className="font-bold text-white">12 mois</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-300 text-center mb-2 italic">Services premium :</div>
            <div className="flex flex-col items-center space-y-2 text-sm text-gray-400 italic">
              <div>• Suivi nutritionnel mensuel</div>
              <div>• Accès zone cardio & musculation</div>
            </div>
          </div>

          <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            J'EN PROFITE
          </button>
        </div>

        {/* CROSS-FIT */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">CROSS-FIT</h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-4xl font-black text-red-500">150DHS</span>
              <span className="text-gray-400 text-lg">/mois*</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="text-center text-gray-300 italic">
              Le premier prélèvement à <span className="font-bold text-white">199DHS</span>
            </div>
            <div className="text-center text-gray-300 italic">
              Frais d'inscription de <span className="font-bold text-white">200DHS</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-300 text-center mb-2 italic">Services inclus :</div>
            <div className="flex flex-col items-center space-y-2 text-sm text-gray-400 italic">
              <div>• Accès illimité Cross-Fit</div>
              <div>• Coaching personnalisé</div>
              <div>• Salle climatisée</div>
            </div>
          </div>

          <button className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-500 transition-all duration-300 transform hover:scale-105">
            J'EN PROFITE
          </button>
        </div>
      </div>
    </motion.div>
  );
}