import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaTiktok, FaInstagram } from "react-icons/fa";

import heroImage from "../assets/all.png";

// Coach images
import coach1 from "../assets/dida.jpg";
import coach2 from "../assets/girl1.jpg";
import coach3 from "../assets/dida2.jpg";
import coach4 from "../assets/girl2.jpg";

// === COACHES DATA ===
const coaches = [
  {
    name: "Mohamed Dida",
    specialization: "Crossfit & Musculation",
    image: coach1,
    description:
      "Dida est un expert en conditionnement physique avec plus de 10 ans d'expérience dans la transformation des corps et des esprits.",
    socials: { tiktok: "#", instagram: "#" },
  },

  {
    name: "Gourmina",
    specialization: "Women Crossfit",
    image: coach2,
    description: "Mina vous guide pour améliorer la force et la flexibilité.",
    socials: { tiktok: "#", instagram: "#" },
  },
];

const services = [
  "BODYBUILDING",
  "CROSSFIT",
  "TAEKWONDO",
  "JUDO",
  "CROSSFIT KIDS",
];

export default function PersonalCoaching() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
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
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white mb-4"
          >
            NOS COACHS EXPERTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Rencontrez notre équipe de professionnels dévoués prêts à vous
            guider dans votre parcours de remise en forme.
          </motion.p>
        </div>
      </section>

      {/* MOVING BANNERS */}
      <div className="relative h-48 bg-black overflow-hidden">
        {/* RED STRIP */}
        <div
          className="absolute w-full h-20 bg-red-700"
          style={{ transform: "rotate(-2deg)", top: "36px" }}
        >
          <div className="flex gap-8 animate-scroll-infinite py-6 whitespace-nowrap">
            {[...services, ...services].map((s, i) => (
              <span key={i} className="text-2xl font-black text-black mx-4">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* WHITE STRIP */}
        <div
          className="absolute w-full h-20 bg-white"
          style={{ transform: "rotate(2deg)", top: "76px" }}
        >
          <div className="flex gap-8 animate-scroll-infinite-reverse py-6 whitespace-nowrap">
            {[...services, ...services].map((s, i) => (
              <span key={i} className="text-2xl font-black text-black mx-4">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* COACHES */}
      <div className="bg-black py-20">
        {coaches.map((coach, index) => (
          <section
            key={index}
            className={`flex flex-col md:flex-row items-center container mx-auto my-16 px-4 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={coach.image}
                alt={coach.name}
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl font-bold text-white">{coach.name}</h2>

              <p className="text-xl text-red-500 font-semibold mb-4">
                {coach.specialization}
              </p>

              <p className="text-gray-300 mb-6">{coach.description}</p>

              {/* SOCIAL ICONS */}
              <div className="flex space-x-4 mb-6 text-2xl">
                <a
                  href={coach.socials.tiktok}
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTiktok />
                </a>
                <a
                  href={coach.socials.instagram}
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>

              {/* BUTTON TO GROUPS PAGE */}
              <Link
                to="/nos-groupes"
                className="inline-block mt-3 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Voir les groupes
              </Link>
            </div>
          </section>
        ))}
      </div>

      <Footer />

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes scroll-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-20%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }

        @keyframes scroll-infinite-reverse {
          from {
            transform: translateX(-20%);
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
