import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {FaTiktok, FaInstagram } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/all2.png"; 

// Coach images
import coach1 from "../assets/dida.jpg";
import coach2 from "../assets/girl1.jpg";
import coach3 from "../assets/dida2.jpg";
import coach4 from "../assets/girl2.jpg";

export default function PersonalCoaching() {

  const coaches = [
    {
      name: "Mohamed Bandidi",
      specialization: "Crossfit & Powerlifting",
      image: coach1,
      description: "Dida est un expert en conditionnement physique avec plus de 10 ans d'expérience dans la transformation des corps et des esprits.",
      socials: {
        tiktok: "#",
        instagram: "#",
      }
    },
    {
      name: "Gourmina",
      specialization: "Yoga & Flexibilité",
      image: coach2,
      description: "Mina vous guide à travers des flux de yoga dynamiques pour améliorer la flexibilité, la force et la tranquillité d'esprit.",
      socials: {
        tiktok: "#",
        instagram: "#",
      }
    },
    {
      name: "Mohamed Bandidi",
      specialization: "Musculation & Bodybuilding",
      image: coach3,
      description: "Spécialisé dans la prise de masse musculaire et la sculpture du corps, Dida vous pousse à dépasser vos limites.",
      socials: {
        tiktok: "#",
        instagram: "#",
      }
    },
    {
      name: "Sarah Connor",
      specialization: "Entraînement fonctionnel & HIIT",
      image: coach4,
      description: "Sarah conçoit des entraînements à haute intensité pour brûler des calories, améliorer l'endurance et la force fonctionnelle.",
      socials: {
        tiktok: "#",
        instagram: "#",
      }
    }
  ];

  const services = ["BODYBUILDING", "CROSSFIT", "TAEKWONDO", "JUDO", "CROSSFIT KIDS"];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

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
            NOS COACHS EXPERTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Rencontrez notre équipe de professionnels dévoués prêts à vous guider dans votre parcours de remise en forme.
          </motion.p>
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

      {/* Coaches Section */}
      <div className="bg-black py-20">
        {coaches.map((coach, index) => (
          <motion.section 
            key={index}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className={`flex flex-col md:flex-row items-center container mx-auto my-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div variants={itemVariants} className="w-full md:w-1/2">
              <img src={coach.image} alt={coach.name} className="rounded-lg shadow-2xl object-cover w-full h-auto" loading="lazy" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl font-bold text-white mb-2">{coach.name}</h2>
              <p className="text-xl text-red-500 font-semibold mb-4">{coach.specialization}</p>
              <p className="text-gray-300 mb-6">{coach.description}</p>
              <div className="flex space-x-4">
                <a href={coach.socials.tiktok} className="text-gray-400 hover:text-white transition-colors"><FaTiktok size={24} /></a>
                <a href={coach.socials.instagram} className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={24} /></a>
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>

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