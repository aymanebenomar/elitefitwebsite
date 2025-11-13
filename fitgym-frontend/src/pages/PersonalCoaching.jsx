import React from "react";

export default function PersonalCoaching() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-black text-red-600">
          Coaching Personnalisé
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Nos coachs certifiés vous accompagnent avec des programmes adaptés
          à vos objectifs, votre niveau et votre progression.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Services de coaching</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✔ Bilan physique complet</li>
            <li>✔ Programme personnalisé</li>
            <li>✔ Suivi régulier</li>
            <li>✔ Accompagnement motivationnel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
