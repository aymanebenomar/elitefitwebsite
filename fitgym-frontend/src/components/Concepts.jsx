import React from "react";
import girl1Img from "../assets/girl1.jpg";
import dida2Img from "../assets/all2.png";
import all3Img from "../assets/all3.jpg";
import { Zap, Target, Heart, Users, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Pricing from "../components/Princing";

export default function Concepts() {
  const concepts = [
    {
      image: all3Img,
      title: "ÉQUIPEMENT MODERNE",
      description: "Chez Elite Fit, nous mettons à votre disposition des équipements de qualité professionnelle. Nos machines récentes et bien entretenues vous garantissent des séances d'entraînement efficaces et sécurisées pour progresser dans les meilleures conditions.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      stats: ["20+ Machines", "Équipements Pro", "Entretien Régulier"],
      features: ["Espace optimisé", "Sécurité maximale"]
    },
    {
      image: girl1Img,
      title: "COACHING PERSONNALISÉ", 
      description: "Notre équipe de coachs certifiés crée des programmes sur mesure adaptés à vos objectifs spécifiques. Que vous soyez débutant ou athlète confirmé, nous vous accompagnons à chaque étape de votre transformation.",
      icon: <Target className="w-6 h-6 text-red-500" />,
      stats: ["Bilan Gratuit", "Suivi Régulier", "Objectifs Personnalisés"],
      features: ["Coach diplômés", "Programmes sur mesure", "Suivi continu"]
    },
    {
      image: dida2Img,
      title: "COMMUNAUTÉ MOTIVANTE",
      description: "Rejoignez une famille soudée où l'entraide et la motivation sont nos valeurs fondamentales. Événements exclusifs, défis communautaires et ambiance unique vous attendent pour transformer votre parcours fitness en expérience mémorable.",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      stats: ["Événements Mensuels", "Groupes d'Entraide", "Ambiance Familiale"],
      features: ["Événements exclusifs", "Ambiance motivante", "Support communautaire"]
    }
  ];

  return (
    <section id="concepts" className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            NOTRE <span className="text-red-600">CONCEPT UNIQUE</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto italic">
            Découvrez ce qui fait d'Elite Fit le club de sport le plus innovant de Meknes
          </p>
        </motion.div>

        {/* Alternating Layout */}
        <div className="space-y-20">
          {concepts.map((concept, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image Side */}
              <div className="flex-1">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                  <img 
                    src={concept.image} 
                    alt={concept.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      {concept.icon}
                      <span className="text-white font-bold text-sm">
                        {concept.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white">
                    {concept.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    {concept.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {concept.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="text-sm text-gray-300">{stat}</div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-6 bg-red-500 rounded-full"></div>
                    <h4 className="text-lg font-bold text-white">POINTS FORTS</h4>
                  </div>
                  <div className="space-y-3">
                    {concept.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm italic">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prix Section with abonnements ID */}
        <div id="abonnements">
          <Pricing />
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}
