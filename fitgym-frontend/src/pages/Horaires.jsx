import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Horaires = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-32 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-eliteGold mb-6">Horaires</h1>
        <p className="text-gray-300 text-lg mb-6">
          Voici les horaires des différents groupes et entraînements.
        </p>

        {/* Example schedule table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-700 rounded-xl overflow-hidden">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-4 py-2">Jour</th>
                <th className="px-4 py-2">Matin</th>
                <th className="px-4 py-2">Après-midi</th>
                <th className="px-4 py-2">Soir</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Lundi</td>
                <td className="px-4 py-2">7:00 — 11:00</td>
                <td className="px-4 py-2">12:00 — 16:00</td>
                <td className="px-4 py-2">17:00 — 21:00</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Mardi</td>
                <td className="px-4 py-2">8:30 — 12:30</td>
                <td className="px-4 py-2">13:30 — 16:30</td>
                <td className="px-4 py-2">17:30 — 20:30</td>
              </tr>
              {/* Add more days as needed */}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Horaires;
