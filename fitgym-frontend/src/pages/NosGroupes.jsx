import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import coach1 from '../assets/dida2.jpg';
import coach2 from '../assets/girl2.jpg';

const coaches = [
  {
    name: "Coach Dida",
    photo: coach1, 
    program: "CrossFit Mix",
    days: "Lundi, Mercredi, Vendredi",
    schedule: {
      Matin: ["7:00 — Group 1", "8:30 — Group 2", "10:00 — Group 3", "11:00 — Group 4"],
      Kids: ["12:30 — Kids Group"],
      Soir: ["19:00 — Group 1", "20:00 — Group 2", "21:00 — Group 3", "22:00 — Group 4", "23:00 — Group 5"]
    }
  },
  {
    name: "Coach Amina",
    photo: coach2,  // ✅ assign the girl photo here
    program: "CrossFit Woman",
    days: "Mardi, Jeudi, Samedi",
    schedule: {
      Matin: ["8:30 — Group 1", "9:00 — Group 2", "10:00 — Group 3", "11:00 — Group 4", "12:00 — Group 5"],
      "Après-midi / Soir": ["17:00 — Group 2", "18:00 — Group 3", "19:00 — Group 4", "20:00 — Group 5"]
    }
  }
];

const NosGroupes = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        {/* PAGE TITLE */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-eliteGold mb-6 text-center"
        >
          Nos Groupes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto text-center"
        >
          Découvrez les programmes de groupes proposés dans notre club :
          horaires, types d'entraînements et répartition selon les coachs.
        </motion.p>

        {/* COACH CARDS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="bg-black border border-eliteGold/40 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Coach photo */}
                <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
                  {coach.photo ? (
                    <img 
                      src={coach.photo} 
                      alt={coach.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-800 w-full h-full flex items-center justify-center text-gray-400 font-bold text-xl">
                      {coach.name.split(" ")[1][0]}
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-eliteGold">{coach.program}</h2>
                  <p className="text-gray-400">{coach.name} — {coach.days}</p>
                </div>
              </div>

              {/* Schedule */}
              {Object.entries(coach.schedule).map(([timeOfDay, groups], idx) => (
                <div key={idx} className="mt-4">
                  <h3 className="text-xl text-eliteGold mb-1">{timeOfDay}</h3>
                  <ul className="text-gray-300 space-y-1 ml-2">
                    {groups.map((group, i) => (
                      <li key={i}>{group}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosGroupes;
