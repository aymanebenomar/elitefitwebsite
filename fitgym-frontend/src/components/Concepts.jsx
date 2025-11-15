import React from "react";
import girl1Img from "../assets/girl1.jpg";
import dida2Img from "../assets/all2.png";
import all3Img from "../assets/all3.jpg";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pricing from "../components/Princing";

export default function Concepts() {
  const concepts = [
    {
      image: all3Img,
      title: "ÉQUIPEMENT MODERNE",
      path: "/modern-equipment",
      description:
        "Chez Elite Fit, nous mettons à votre disposition des équipements de qualité professionnelle...",
      stats: ["20+ Machines", "Équipements Pro", "Entretien Régulier"],
      features: ["Espace optimisé", "Sécurité maximale"],
    },
    {
      image: girl1Img,
      title: "COACHING PERSONNALISÉ",
      path: "/personal-coaching",
      description:
        "Notre équipe de coachs certifiés crée des programmes sur mesure adaptés à vos objectifs...",
      stats: ["Bilan Gratuit", "Suivi Régulier", "Objectifs Personnalisés"],
      features: ["Coach diplômés", "Programmes sur mesure", "Suivi continu"],
    },
    {
      image: dida2Img,
      title: "COMMUNAUTÉ MOTIVANTE",
      path: "/community",
      description:
        "Rejoignez une famille soudée où l'entraide et la motivation sont au cœur de votre expérience...",
      stats: ["Événements Mensuels", "Groupes d'Entraide", "Ambiance Familiale"],
      features: [
        "Événements exclusifs",
        "Ambiance motivante",
        "Support communautaire",
      ],
    },
  ];

  return (
    <section
      id="concepts"
      className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 scroll-mt-32"
    >
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

        <div className="space-y-20">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* IMAGE */}
              <div className="flex-1">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={concept.image}
                    alt={concept.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  {concept.title}
                </h3>

                <p className="text-lg text-gray-300 italic">
                  {concept.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {concept.stats.map((s, i) => (
                    <div
                      key={i}
                      className="p-3 bg-gray-800/50 rounded-xl border border-gray-700 text-center"
                    >
                      <span className="text-sm text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <h4 className="text-lg font-bold text-white">POINTS FORTS</h4>
                  <div className="space-y-3 mt-3">
                    {concept.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-300 text-sm italic">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MINI BUTTON LINK */}
                <div className="pt-6">
                  <Link
                    to={concept.path}
                    className="inline-block px-4 py-2 bg-eliteGold text-black font-semibold rounded hover:bg-yellow-500 transition-colors duration-300 text-sm"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="abonnements">
          <Pricing />
        </div>
      </div>
    </section>
  );
}
