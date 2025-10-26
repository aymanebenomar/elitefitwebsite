import React from "react";
import heroImg from "../assets/all.png";
import heroImg2 from "../assets/all2.png"; // Added the new image
import didaImg from "../assets/dida.jpg";
import { Clock, Dumbbell, Users, MapPin, Calendar, ArrowRight, Check, Star } from "lucide-react";

export default function Home() {
  const subscriptions = [
    {
      name: "BASIC",
      price: "299 MAD",
      period: "/mois",
      features: ["Accès salle", "Coach virtuel", "App mobile"],
      popular: false
    },
    {
      name: "PRO",
      price: "499 MAD",
      period: "/mois",
      features: ["Accès illimité", "Coach personnel", "Cours collectifs", "Nutrition"],
      popular: true
    },
    {
      name: "ELITE",
      price: "799 MAD",
      period: "/mois",
      features: ["Tous les clubs", "Coaching illimité", "Massages", "Équipement premium"],
      popular: false
    }
  ];

  const activities = [
    { name: "Musculation", icon: "💪", description: "Matériel haut de gamme" },
    { name: "CrossFit", icon: "🔥", description: "WOD quotidiens" },
    { name: "Yoga", icon: "🧘", description: "Séances détente" },
    { name: "Cardio", icon: "🏃", description: "Zones dédiées" },
    { name: "Boxe", icon: "🥊", description: "Ring professionnel" },
    { name: "Pilates", icon: "🌟", description: "Renforcement profond" }
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
              
              {/* Second Image - all2.png */}
              <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 transform rotate-6">
                <img 
                  src={heroImg2} 
                  alt="Gym Equipment" 
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

      {/* Concept Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              NOTRE <span className="text-red-600">CONCEPT</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche révolutionnaire qui combine technologie de pointe et expertise humaine 
              pour des résultats exceptionnels à Meknes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🚀",
                title: "TECHNOLOGIE AVANCÉE",
                description: "Équipements connectés et suivi intelligent de vos performances"
              },
              {
                icon: "👥",
                title: "COMMUNAUTÉ",
                description: "Rejoignez la communauté fitness la plus motivée de Meknes"
              },
              {
                icon: "🏆",
                title: "RÉSULTATS GARANTIS",
                description: "Des programmes personnalisés pour atteindre vos objectifs"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 group">
                <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abonnements Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              NOS <span className="text-yellow-500">ABONNEMENTS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">Choisissez la formule qui correspond à vos ambitions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {subscriptions.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-black border-2 border-yellow-400 shadow-2xl shadow-yellow-500/25' 
                  : 'bg-gray-800 border border-gray-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                    POPULAIRE
                  </div>
                )}
                
                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${plan.popular ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-black">{plan.price}</span>
                  <span className={`text-base md:text-lg ${plan.popular ? 'text-gray-800' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`w-4 h-4 md:w-5 md:h-5 ${plan.popular ? 'text-black' : 'text-yellow-500'}`} />
                      <span className={`text-sm md:text-base ${plan.popular ? 'text-gray-800' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold transition-all text-sm md:text-base ${
                  plan.popular 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-yellow-500 text-black hover:bg-yellow-400'
                }`}>
                  CHOISIR CETTE OFFRE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              NOS <span className="text-red-600">ACTIVITÉS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">Diversifiez votre entraînement avec nos nombreuses disciplines</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-4 md:p-6 text-center border border-gray-800 hover:border-yellow-500 transition-all duration-300 group cursor-pointer">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">{activity.name}</h3>
                <p className="text-xs md:text-sm text-gray-400">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-inscription Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-800 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-700">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                PRÉ-INSCRIPTION <span className="text-yellow-500">GRATUITE</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">
                Réservez votre séance d'essai à Meknes et obtenez un coaching personnalisé
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full p-3 md:p-4 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-sm md:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 md:p-4 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-sm md:text-base"
                />
                <select className="w-full p-3 md:p-4 rounded-xl bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm md:text-base">
                  <option value="">Meknes Centre Ville</option>
                  <option value="meknes">Notre unique club à Meknes</option>
                </select>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-3 md:p-4 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-sm md:text-base"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full p-3 md:p-4 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors text-sm md:text-base"
                />
                <label className="flex items-start gap-3 text-gray-300 text-xs md:text-sm p-3 md:p-4 bg-gray-700 rounded-xl border border-gray-600">
                  <input type="checkbox" className="mt-0.5 md:mt-1 text-yellow-500" />
                  <span>J'accepte de recevoir les informations et offres exclusives Elite Fit Meknes</span>
                </label>
              </div>
            </form>

            <button className="w-full bg-yellow-500 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 mt-6 md:mt-8 shadow-lg shadow-yellow-500/25 flex items-center justify-center gap-2 text-sm md:text-lg">
              RÉSERVER MA SÉANCE D'ESSAI GRATUITE
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}