import React from "react";
import { Dumbbell, Zap, Repeat } from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/all2.png";

// Re-using existing assets for equipment gallery
import equip1 from "../assets/all.png";
import equip2 from "../assets/all2.png";
import equip3 from "../assets/all3.jpg";
import equip4 from "../assets/barelite.jpg";
import equip5 from "../assets/dida.jpg";
import equip6 from "../assets/dida2.jpg";

export default function ModernEquipment() {

  const equipmentCategories = [
    {
      icon: Zap,
      name: "Cardio",
      description: "State-of-the-art machines to get your heart pumping.",
    },
    {
      icon: Dumbbell,
      name: "Strength",
      description: "Build muscle with our wide range of weights and resistance machines.",
    },
    {
      icon: Repeat,
      name: "Functional",
      description: "Improve your real-world fitness with our functional training gear.",
    },
  ];

  const equipmentList = [
    { name: "TechnoGym Treadmills", image: equip1, category: "Cardio" },
    { name: "Life Fitness Ellipticals", image: equip2, category: "Cardio" },
    { name: "Hammer Strength Racks", image: equip3, category: "Strength" },
    { name: "Free Weights Zone", image: equip4, category: "Strength" },
    { name: "Kettlebell Sets", image: equip5, category: "Functional" },
    { name: "TRX Suspension Trainers", image: equip6, category: "Functional" },
  ];

  const services = ["BODYBUILDING", "CROSSFIT", "TAEKWONDO", "JUDO", "CROSSFIT KIDS"];

  return (
    <div className="min-h-screen bg-black flex flex-col">
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
            Train with the best. Our gym is equipped with state-of-the-art machines to help you achieve your fitness goals.
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
            TOP-TIER FITNESS TECHNOLOGY
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto md:text-lg leading-relaxed"
          >
            We invest in the latest and most effective fitness equipment from world-class brands to ensure you have the best possible workout experience. Explore our range of machines and tools.
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

      {/* Scrolling Services Banners - Crossing Effect */}
      <div className="relative h-48 bg-black">
        <div className="absolute w-[150%] h-20 bg-red-700 -left-[25%]" 
             style={{ 
               transform: 'rotate(-2deg)',
               top: '36px'
             }}>
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
        <div className="absolute w-[150%] h-20 bg-white -left-[25%]" 
             style={{ 
               transform: 'rotate(2deg)',
               top: '76px'
             }}>
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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              OUR ARSENAL
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A glimpse into the tools that will power your transformation.
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
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${100 / 5}%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }
        
        @keyframes scroll-infinite-reverse {
          from {
            transform: translateX(-${100 / 5}%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-scroll-infinite-reverse {
          animation: scroll-infinite-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
