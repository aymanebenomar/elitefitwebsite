import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
import tourn1 from "../assets/tournement1.png";
import tourn2 from "../assets/tournement2.png";
import tourn3 from "../assets/tournement3.png";

const tournaments = [
  {
    id: 1,
    title: "Summer Fitness Challenge 2025",
    image: tourn1,
    excerpt: "Un tournoi intense de fitness pour tester vos limites cet été...",
  },
  {
    id: 2,
    title: "Elite Fit Kids Cup",
    image: tourn2,
    excerpt: "Tournoi pour enfants avec activités sportives et concours...",
  },
  {
    id: 3,
    title: "Crossfit Championship",
    image: tourn3,
    excerpt: "Compétition de Crossfit pour les passionnés et professionnels...",
  },
];

export default function Community() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-red-600 mb-8">
            Communauté Motivante - Nos Tournois
          </h1>

          <p className="text-gray-300 text-lg mb-12">
            Découvrez nos tournois et événements passés pour notre communauté Elite Fit. Cliquez sur chaque article pour en savoir plus.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tournaments.map((t) => (
              <article
                key={t.id}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
              >
                <Link to={`/tournament/${t.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
                    <p className="text-gray-300 mb-4">{t.excerpt}</p>
                    <span className="inline-block text-red-600 font-bold hover:underline">
                      Lire plus →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
