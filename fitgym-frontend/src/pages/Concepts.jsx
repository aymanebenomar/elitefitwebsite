import React from "react";
import { Dumbbell, Users, Target, Heart, Zap, ArrowRight } from "lucide-react";

export default function ConceptsSection() {
  const concepts = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "ÉQUIPEMENT HIGH-TECH",
      description: "Matériel dernier cri pour des performances optimales",
      features: ["Machines connectées", "Système de tracking", "Analyses avancées"]
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "COACHING PERSONNALISÉ",
      description: "Des programmes sur mesure pour vos objectifs",
      features: ["Bilan personnalisé", "Suivi régulier", "Adaptation continue"]
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "COMMUNAUTÉ MOTIVANTE",
      description: "Rejoignez la famille Elite Fit Meknes",
      features: ["Événements exclusifs", "Groupes d'entraide", "Ambiance unique"]
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-green-500" />,
      title: "ESPACES PREMIUM",
      description: "Des installations conçues pour l'excellence",
      features: ["Zones spécialisées", "Environnement stimulant", "Confort optimal"]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            NOTRE <span className="text-red-600">CONCEPT UNIQUE</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez ce qui fait d'Elite Fit le club de sport le plus innovant de Meknes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                Une Expérience Fitness Complète
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Chez Elite Fit Meknes, nous avons créé un environnement où la technologie de pointe, 
                l'expertise humaine et la communauté se rencontrent pour vous offrir des résultats exceptionnels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {concepts.map((concept, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {concept.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white">{concept.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{concept.description}</p>
                  <ul className="space-y-2">
                    {concept.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats and Info */}
          <div className="relative">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">2K+</div>
                  <div className="text-sm text-gray-300">MEMBRES ACTIFS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
                  <div className="text-sm text-gray-300">SATISFACTION</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
                  <div className="text-sm text-gray-300">ÉQUIPEMENTS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">ACCÈS</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">Pourquoi nous choisir ?</h4>
                <p className="text-gray-300 mb-6">
                  Des installations modernes, un accompagnement personnalisé et une communauté 
                  motivante pour atteindre vos objectifs fitness.
                </p>
                <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 flex items-center gap-2 mx-auto">
                  <Users className="w-5 h-5" />
                  RENCONTREZ NOTRE ÉQUIPE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 flex items-center gap-3 mx-auto">
            <Dumbbell className="w-5 h-5" />
            DÉCOUVRIR NOTRE CLUB
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}