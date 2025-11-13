import React from "react";

export default function ModernEquipment() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-black text-red-600">
          Équipement Moderne
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Découvrez les équipements professionnels qui font la force d’Elite Fit.
          Machines récentes, espace optimisé et matériel haut de gamme.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Pourquoi notre équipement est unique ?</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✔ Machines haut de gamme</li>
            <li>✔ Entretien régulier</li>
            <li>✔ Entraînement sécurisé</li>
            <li>✔ Espace moderne et performant</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
