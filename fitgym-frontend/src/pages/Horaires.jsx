import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Horaires = () => {
  const schedule = [
    { day: "Lundi", open: "08:00 — 23:00", womenOnly: null },
    { day: "Mardi", open: "08:00 — 23:00", womenOnly: "08:00 — 10:00" },
    { day: "Mercredi", open: "08:00 — 23:00", womenOnly: null },
    { day: "Jeudi", open: "08:00 — 23:00", womenOnly: "08:00 — 10:00" },
    { day: "Vendredi", open: "08:00 — 23:00", womenOnly: null },
    { day: "Samedi", open: "08:00 — 23:00", womenOnly: "08:00 — 10:00" },
    { day: "Dimanche", open: "10:00 — 16:00", womenOnly: null },
  ];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 px-6 max-w-4xl mx-auto flex-grow">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-6">
          NOS <span className="text-red-600">HORAIRES</span>
        </h2>
        <p className="text-gray-300 text-lg text-center mb-12">
          Voici les horaires de notre gym. Les heures réservées aux femmes sont indiquées en rose.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-700 rounded-xl overflow-hidden">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-4 py-2">Jour</th>
                <th className="px-4 py-2">Horaires</th>
                <th className="px-4 py-2">Réservé aux femmes</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-900/30" : ""
                  }`}
                >
                  <td className="px-4 py-2 font-semibold">{s.day}</td>
                  <td className="px-4 py-2">{s.open}</td>
                  <td className="px-4 py-2 text-pink-400 italic">
                    {s.womenOnly ? s.womenOnly : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Horaires;
