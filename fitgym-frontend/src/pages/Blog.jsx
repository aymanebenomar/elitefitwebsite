// src/pages/Blog.jsx
import React from "react";
import { motion } from "framer-motion";
import blogImg from "../assets/all2.png";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="bg-black text-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center justify-center text-center py-16 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-red-600 italic">
          Revivez Fitness Park Heroes
        </h1>
        <p className="max-w-3xl text-gray-300 text-lg leading-relaxed italic">
          Le 13 juillet, Fitness Park Mohammedia a accueilli la toute première édition
          de Fitness Park Heroes, un événement sportif exceptionnel qui a réuni les
          meilleurs adhérents de nos clubs de Casablanca, Mohammedia, et Rabat. 
          Découvrez l'ambiance, les compétitions et les moments inoubliables.
        </p>
      </motion.section>

      {/* Blog Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex justify-center mb-12 px-6"
      >
        <img
          src={blogImg}
          alt="Fitness Park Heroes"
          className="w-full max-w-5xl rounded-2xl shadow-xl object-cover"
        />
      </motion.div>

      {/* Blog Content */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-5xl px-6 mx-auto mb-20 text-gray-300 space-y-6 text-lg leading-relaxed"
      >
        <p>
          Une ambiance incroyable et un esprit de dépassement de soi. Dès le début de
          la journée, l'ambiance était électrique. Les encouragements des supporters,
          la musique entraînante, et l'énergie palpable ont transformé le club de
          Mohammedia en une véritable arène de compétition.
        </p>

        <p>
          Chaque épreuve a été conçue pour tester les limites des participants, et
          chaque binôme a démontré une incroyable résilience et une volonté de fer.
          C'était plus qu'une compétition ; c'était une célébration de l'esprit sportif
          et du dépassement de soi.
        </p>

        <p>
          L'événement a été ponctué de moments mémorables : des performances inspirantes,
          des défis relevés avec brio, et surtout, un esprit de camaraderie et de solidarité
          entre tous les participants.
        </p>

        <p>
          À la fin de la journée, les efforts de nos héros ont été récompensés. Les binômes
          gagnants ont reçu des prix pour célébrer leur victoire et leur détermination à
          aller au-delà de leurs limites.
        </p>

        <p>
          Cette première édition de Fitness Park Heroes n'est que le début d'une série
          d'événements qui visent à rassembler notre communauté autour du sport et de
          la passion pour le fitness. Restez connectés pour plus de détails sur les
          prochains événements et continuez à vous entraîner pour devenir le prochain héros !
        </p>
      </motion.section>

      {/* Smooth Transition + Footer */}
      <div className="w-full bg-gradient-to-b from-black to-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
