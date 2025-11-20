import React, { useEffect } from "react";
import { Dumbbell, Zap, Repeat } from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/competall.JPG";

import equip1 from "../assets/machine.jpg";
import equip2 from "../assets/machine2.jpg";
import equip3 from "../assets/all3.jpg";
import equip4 from "../assets/barelite.jpg";
import equip5 from "../assets/dida.jpg";
import equip6 from "../assets/dida2.jpg";

export default function ModernEquipment() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equipmentCategories = [
    { icon: Zap, name: "Cardio", description: "Des machines à la pointe de la technologie pour faire battre votre cœur." },
    { icon: Dumbbell, name: "Force", description: "Développez vos muscles avec notre large gamme d'haltères et de machines de résistance." },
    { icon: Repeat, name: "Fonctional", description: "Améliorez votre forme physique au quotidien avec notre équipement d'entraînement fonctionnel." },
  ];

  const equipmentList = [
    { name: "T Barre", image: equip1, category: "Cardio" },
    { name: "Smith Machine", image: equip2, category: "Cardio" },
  ];

  const services = ["BODYBUILDING", "CROSSFIT", "TAEKWONDO", "JUDO", "CROSSFIT KIDS"];

  return (
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white tracking-tight mb-4"
          >
            MODERN EQUIPMENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Entraînez-vous avec les meilleurs. Notre salle de sport est équipée de machines de pointe pour vous aider à atteindre vos objectifs de remise en forme.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-red-700 mb-8 tracking-tight leading-tight"
          >
            TECHNOLOGIE DE FITNESS DE HAUT NIVEAU
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto md:text-lg leading-relaxed"
          >
            Nous investissons dans les équipements de fitness les plus récents et les plus efficaces de marques de classe mondiale pour vous garantir la meilleure expérience d'entraînement possible. Découvrez notre gamme de machines et d'outils.
          </motion.p>
        </div>
      </section>

      {/* Equipment Categories Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {equipmentCategories.map((category, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Services Banners */}
      <div className="relative h-48 bg-black overflow-hidden">
        <div className="absolute w-[150%] h-20 -left-[25%] top-36 rotate-[-2deg]">
          <div className="flex gap-8 animate-scroll-infinite py-6">
            {[...services, ...services, ...services, ...services, ...services, ...services].map((service, i) => (
              <React.Fragment key={i}>
                <span className="text-xl md:text-2xl font-black text-black tracking-wider whitespace-nowrap">
                  {service}
                </span>
                <span className="text-black/80 text-2xl font-bold">●</span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="absolute w-[150%] h-20 -left-[25%] top-76 rotate-[2deg]">
          <div className="flex gap-8 animate-scroll-infinite-reverse py-6" style={{ animationDelay: '-15s' }}>
            {[...services, ...services, ...services, ...services, ...services, ...services].map((service, i) => (
              <React.Fragment key={`white-${i}`}>
                <span className="text-xl md:text-2xl font-black text-black tracking-wider whitespace-nowrap">
                  {service}
                </span>
                <span className="text-black/80 text-2xl font-bold">●</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Gallery Section */}
      <section className="pt-16 pb-16 bg-black"> {/* Reduced top padding from 24 to 16 */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              NOTRE ARSENAL
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Un aperçu des outils qui alimenteront votre transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden group"
              >
                <img src={item.image} alt={item.name} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-sm text-red-500 font-semibold">{item.category}</p>
                  <h3 className="text-xl font-bold text-white mt-1">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes scroll-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(-20%); }
        }
        .animate-scroll-infinite { animation: scroll-infinite 20s linear infinite; }

        @keyframes scroll-infinite-reverse {
          from { transform: translateX(-20%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-infinite-reverse { animation: scroll-infinite-reverse 20s linear infinite; }
      `}</style>
    </div>
  );
}
