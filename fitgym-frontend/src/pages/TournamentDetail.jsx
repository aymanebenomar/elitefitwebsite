import React from "react";
import { useParams, Link } from "react-router-dom";

import tourn1 from "../assets/tournement1.png";
import tourn2 from "../assets/tournement2.png";
import tourn3 from "../assets/tournement3.png";

const tournaments = [
  {
    id: 1,
    title: "Summer Fitness Challenge 2025",
    image: tourn1,
    description:
      "Un tournoi intense de fitness pour tester vos limites cet été. Ici, vous pouvez ajouter tous les détails: horaires, règles, photos et résultats.",
  },
  {
    id: 2,
    title: "Elite Fit Kids Cup",
    image: tourn2,
    description:
      "Tournoi pour enfants avec activités sportives et concours. Détails sur les catégories d’âge, récompenses et inscriptions.",
  },
  {
    id: 3,
    title: "Crossfit Championship",
    image: tourn3,
    description:
      "Compétition de Crossfit pour les passionnés et professionnels. Informations sur les équipes, exercices et classement.",
  },
];

export default function TournamentDetail() {
  const { id } = useParams();
  const tournament = tournaments.find((t) => t.id === parseInt(id));

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Tournoi non trouvé.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/community"
          className="text-red-600 font-bold mb-6 inline-block"
        >
          ← Retour aux tournois
        </Link>

        <h1 className="text-4xl font-black text-red-600 mb-6">
          {tournament.title}
        </h1>

        <img
          src={tournament.image}
          alt={tournament.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <p className="text-gray-300 text-lg leading-relaxed">
          {tournament.description}
        </p>
      </div>
    </div>
  );
}
