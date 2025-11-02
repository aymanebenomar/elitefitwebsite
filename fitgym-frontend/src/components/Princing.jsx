import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [currentCard, setCurrentCard] = useState(1); // Start with middle card (TOP VENTE)

  const cards = [
    {
      id: 0,
      title: "KIDS",
      price: "190DHS",
      color: "red",
      content: (
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
      )
    },
    {
      id: 1,
      title: "BODYBUILDING",
      price: "200DHS",
      color: "yellow",
      content: (
        <div className="relative bg-gray-800/50 rounded-2xl p-8 border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
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
      )
    },
    {
      id: 2,
      title: "CROSS-FIT",
      price: "150DHS",
      color: "red",
      content: (
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
      )
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextCard();
    } else if (info.offset.x > swipeThreshold) {
      prevCard();
    }
  };

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

      {/* Desktop View - Unchanged */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {cards.map((card) => (
          <div key={card.id} className={card.id === 1 ? "-mt-4" : ""}>
            {card.content}
          </div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="lg:hidden max-w-6xl mx-auto px-3">
        <div className="relative">
          {/* Navigation Arrows - Conditionally hidden */}
          <button
            onClick={prevCard}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all duration-200 ${
              currentCard === 0 ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            disabled={currentCard === 0}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCard}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all duration-200 ${
              currentCard === cards.length - 1 ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            disabled={currentCard === cards.length - 1}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container with perfect spacing */}
          <motion.div
            className="overflow-hidden py-5"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentCard * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {cards.map((card, index) => (
                <div key={card.id} className="w-full flex-shrink-0 px-2">
                  <div className={index === 1 ? "" : ""}>
                    {card.content}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentCard ? 'bg-yellow-500' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}