import React, { useEffect } from "react";
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
    schedule: {
      "Lundi, Mercredi, Vendredi": {
        Matin: ["8:30 — 10:00. Group 1", "11:00 — 12:30. Group 2"],
        Kids: ["19:00 — 20:00. Kids Group"],
        Soir: ["20:00 — 21:00. Group 4", "22:00 — 23:00. Group 5"]
      },
      "Mardi, Jeudi, Samedi": {
        Soir: ["20:00 — 21:00. Group 1", "21:00 — 22:00. Group 2", "22:00 — 23:00. Group 3"]
      }
    }
  },
  {
    name: "Coach Amina",
    photo: coach2,
    program: "CrossFit Woman",
    schedule: {
      "Mardi, Jeudi, Samedi": {
        Matin: ["8:30 — 10:00. Group 1"],
        "Après-midi / Soir": ["17:00 — 18:00. Group 2", "18:00 — 19:00. Group 3", "19:00 — 20:00. Group 4"]
      }
    }
  }
];

const NosGroupes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
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
          Découvrez les programmes de groupes proposés dans notre club : horaires, types d'entraînements et répartition selon les coachs.
        </motion.p>

        {/* Coaches Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {coaches.map((coach, index) => (
            <div key={index} className="flex flex-col gap-6 self-start">
              {/* Coach Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + index * 0.2 }}
                className="bg-black border border-eliteGold/40 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full w-16 h-16 overflow-hidden flex items-center justify-center">
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
                    Coach Groups
                  </div>
                </div>

                {/* Schedule */}
                {Object.entries(coach.schedule).map(([days, schedule], idx) => (
                  <div key={idx} className="mt-4">
                    <p className="text-gray-400 font-semibold mb-2">{days}</p>
                    {Object.entries(schedule).map(([timeOfDay, groups], i) => (
                      <div key={i} className="mt-2">
                        <h3 className="text-xl text-eliteGold mb-1">{timeOfDay}</h3>
                        <ul className="text-gray-300 space-y-1 ml-2">
                          {groups.map((g, j) => (
                            <li key={j}>{g}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Carousel placeholder */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-eliteGold mb-4 text-center">Nos Images de Groupes</h2>
          <div className="flex overflow-x-auto gap-4 p-4 snap-x snap-mandatory scroll-smooth">
            {/* Add your images here */}
            <div className="flex-none w-64 h-40 bg-gray-800 rounded-lg snap-center flex items-center justify-center text-gray-400">
              Image 1
            </div>
            <div className="flex-none w-64 h-40 bg-gray-800 rounded-lg snap-center flex items-center justify-center text-gray-400">
              Image 2
            </div>
            <div className="flex-none w-64 h-40 bg-gray-800 rounded-lg snap-center flex items-center justify-center text-gray-400">
              Image 3
            </div>
          </div>
        </section>

      </section>

      <Footer />
    </div>
  );
};

export default NosGroupes;
