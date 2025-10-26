import React from "react";
import heroImg from "../assets/all.png";
import heroImg2 from "../assets/girl2.jpg";
import didaImg from "../assets/dida.jpg";
import girl1Img from "../assets/girl1.jpg";
import dida2Img from "../assets/dida2.jpg";
import bareliteImg from "../assets/barelite.jpg";
import all3Img from "../assets/all3.jpg";
import { Clock, Users, MapPin, ArrowRight, Star, Zap, Target, Heart, Dumbbell } from "lucide-react";

export default function Home() {
  const concepts = [
    {
      image: all3Img,
      title: "ÉQUIPEMENT HIGH-TECH",
      description: "Chez Elite Fit, nous investissons dans les dernières technologies fitness. Nos machines connectées, système de tracking avancé et analyses de performance vous offrent des données précises pour optimiser chaque séance et maximiser vos résultats.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      stats: ["50+ Machines", "Tracking Intelligent", "Analyses Détaillées"]
    },
    {
      image: girl1Img,
      title: "COACHING PERSONNALISÉ", 
      description: "Notre équipe de coachs certifiés crée des programmes sur mesure adaptés à vos objectifs spécifiques. Que vous soyez débutant ou athlète confirmé, nous vous accompagnons à chaque étape de votre transformation.",
      icon: <Target className="w-6 h-6 text-red-500" />,
      stats: ["Bilan Gratuit", "Suivi Régulier", "Objectifs Personnalisés"]
    },
    {
      image: dida2Img,
      title: "COMMUNAUTÉ MOTIVANTE",
      description: "Rejoignez une famille soudée où l'entraide et la motivation sont nos valeurs fondamentales. Événements exclusifs, défis communautaires et ambiance unique vous attendent pour transformer votre parcours fitness en expérience mémorable.",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      stats: ["Événements Mensuels", "Groupes d'Entraide", "Ambiance Familiale"]
    },
    {
      image: bareliteImg,
      title: "ESPACES PREMIUM",
      description: "Nos installations ont été conçues pour l'excellence. Zones spécialisées, environnement stimulant et équipements haut de gamme créent l'espace parfait pour repousser vos limites dans des conditions optimales.",
      icon: <Dumbbell className="w-6 h-6 text-green-500" />,
      stats: ["Zones Spécialisées", "Équipement Pro", "Confort Maximum"]
    }
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,0,0,0.2)_0%,_transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 py-16 md:py-20">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600/20 px-4 py-2 rounded-full border border-red-600/30">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-yellow-500">#1 CLUB DE SPORT À MEKNES</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight">
                <span className="text-white block transform -skew-x-3">ÉLÈVE TON</span>
                <span className="text-red-600 block transform -skew-x-3 animate-pulse">ENTRAÎNEMENT</span>
                <span className="text-white block transform -skew-x-3">AVEC ELITE FIT</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Rejoignez la communauté fitness la plus motivée de Meknes. 
              Des équipements premium, des coachs experts et une ambiance unique.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 py-4 justify-center md:justify-start">
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
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <button className="bg-yellow-500 text-black font-bold px-6 sm:px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 flex items-center justify-center gap-2 text-sm sm:text-base">
                S'INSCRIRE MAINTENANT
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="border-2 border-white text-white font-bold px-6 sm:px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
                DÉCOUVRIR NOTRE CLUB
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="flex-1 relative w-full mt-8 md:mt-0">
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
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700 shadow-2xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500">2K+</div>
                  <div className="text-xs sm:text-sm text-gray-300">MEMBRES ACTIFS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Alternating Concepts Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              NOTRE <span className="text-red-600">CONCEPT UNIQUE</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez ce qui fait d'Elite Fit le club de sport le plus innovant de Meknes
            </p>
          </div>

          {/* Alternating Layout */}
          <div className="space-y-20">
            {concepts.map((concept, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
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
                    <p className="text-lg text-gray-300 leading-relaxed">
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

                  {/* Progress Bar for Visual Interest */}
                  <div className="pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>Performance</span>
                      <span>{90 + index * 3}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${90 + index * 3}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prêt à Commencer Votre Transformation?
              </h3>
              <p className="text-gray-300 mb-6">
                Rejoignez les 2000+ membres qui ont déjà transformé leur vie avec Elite Fit
              </p>
              <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 flex items-center gap-3 mx-auto">
                <Users className="w-5 h-5" />
                COMMENCER MAINTENANT
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}