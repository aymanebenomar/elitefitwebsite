import React from "react";
import { Star, Users, Zap } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preinscription from "./PreInscription";

// Import images
import all3Img from '../assets/all3.jpg';
import allImg from '../assets/all.png';
import all2Img from '../assets/all2.png';
import bareliteImg from '../assets/barelite.jpg';
import tournement1Img from '../assets/tournement1.png';
import tournement2Img from '../assets/tournement2.png';

// Schedule Data
const scheduleData = [
  {
    time: "5:00",
    endTime: "6:00",
    classes: {
      monday: { name: "Body Combat", instructor: "Dida", color: "green-500" },
      tuesday: { name: "Sh'Bam", instructor: "Dida", color: "yellow-500" },
      wednesday: null,
      thursday: { name: "Bodypump", instructor: "Dida", color: "red-500" },
      friday: { name: "Zumba", instructor: "Mina", color: "blue-500" },
      saturday: { name: "Les Mills Grit", instructor: "Dida", color: "purple-500" },
      sunday: null
    }
  },
  {
    time: "6:00",
    endTime: "7:00",
    classes: {
      monday: null,
      tuesday: { name: "Cxworx", instructor: "Maya", color: "orange-500" },
      wednesday: { name: "Cxworx", instructor: "Dida", color: "orange-500" },
      thursday: { name: "Cxworx", instructor: "Dida", color: "orange-500" },
      friday: null,
      saturday: { name: "Bodypump", instructor: "Mina", color: "red-500" },
      sunday: { name: "Zumba", instructor: "Dida", color: "blue-500" }
    }
  },
  {
    time: "13:00",
    endTime: "14:00",
    classes: {
      monday: { name: "Sh'Bam", instructor: "Dida", color: "yellow-500" },
      tuesday: { name: "Bodypump", instructor: "Dida", color: "red-500" },
      wednesday: null,
      thursday: { name: "Cxworx", instructor: "Dida", color: "orange-500" },
      friday: { name: "Les Mills Grit", instructor: "Dida", color: "purple-500" },
      saturday: { name: "Zumba", instructor: "Dida", color: "blue-500" },
      sunday: null
    }
  },
  {
    time: "14:00",
    endTime: "15:00",
    classes: {
      monday: { name: "Cxworx", instructor: "Dida", color: "orange-500" },
      tuesday: { name: "Body Combat", instructor: "Dida", color: "green-500" },
      wednesday: { name: "Bodypump", instructor: "Maya", color: "red-500" },
      thursday: null,
      friday: { name: "Sh'Bam", instructor: "Dida", color: "yellow-500" },
      saturday: { name: "Sh'Bam", instructor: "Mohammed", color: "yellow-500" },
      sunday: { name: "Bodypump", instructor: "Dida", color: "red-500" }
    }
  },
  {
    time: "17:00",
    endTime: "18:00",
    classes: {
      monday: { name: "Body Combat", instructor: "Amara", color: "green-500" },
      tuesday: null,
      wednesday: { name: "Sh'Bam", instructor: "Dida", color: "yellow-500" },
      thursday: { name: "Cxworx", instructor: "Maya", color: "orange-500" },
      friday: { name: "Bodypump", instructor: "Dida", color: "red-500" },
      saturday: { name: "Les Mills Grit", instructor: "Dida", color: "purple-500" },
      sunday: { name: "Zumba", instructor: "Maya", color: "blue-500" }
    }
  },
  {
    time: "18:00",
    endTime: "19:00",
    classes: {
      monday: { name: "Les Mills Grit", instructor: "Nova", color: "purple-500" },
      tuesday: { name: "Sh'Bam", instructor: "Dida", color: "yellow-500" },
      wednesday: { name: "Cxworx", instructor: "Mina", color: "orange-500" },
      thursday: { name: "Bodypump", instructor: "Dida", color: "red-500" },
      friday: null,
      saturday: { name: "Zumba", instructor: "Dida", color: "blue-500" },
      sunday: { name: "Les Mills Grit", instructor: "Amara", color: "purple-500" }
    }
  }
];

const WEEK_DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative w-full h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${all3Img})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider">
              Elite Fit Club
            </h1>
          </div>
        </section>

        {/* What is Elite Fit Club Section */}
        <section className="py-28 bg-black px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 text-red-500">
              Qu'est-ce qu'Elite Fit Club ?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Elite Fit Club est une collection de cours de fitness de groupe passionnants et énergiques conçus pour vous mettre au défi et vous motiver. Dirigés par nos instructeurs de classe mondiale, ces cours sont plus qu'un simple entraînement - c'est une expérience.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-28 bg-gray-900 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-center mb-16 text-white">
              Pourquoi choisir notre Elite Fit Club ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center p-8 bg-black rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300">
                <Zap className="w-16 h-16 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Équipements Modernes</h3>
                <p className="text-gray-400">
                  Entraînez-vous dans un environnement à la pointe de la technologie avec les équipements les plus récents.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-black rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300">
                <Users className="w-16 h-16 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Instructeurs Experts</h3>
                <p className="text-gray-400">
                  Notre équipe d'instructeurs certifiés vous guidera et vous inspirera.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-black rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300">
                <Star className="w-16 h-16 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Programmes Diversifiés</h3>
                <p className="text-gray-400">
                  Des programmes variés, du haute intensité à la danse, trouvez le cours parfait pour vous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section className="py-28 bg-black px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-center mb-16 text-red-500">
              Nos Cours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative rounded-lg overflow-hidden group">
                <img src={allImg} alt="Body Combat" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-black text-white uppercase">
                    BODY BUILDING
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    Un entraînement à haute énergie inspiré des arts martiaux.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden group">
                <img src={all2Img} alt="Judo" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-black text-white uppercase">
                    JUDO
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    Un programme de fitness en groupe amusant et énergique inspiré de Judo.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden group">
                <img src={bareliteImg} alt="BodyPump" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-black text-white uppercase">
                    CROSSFIT
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    Un entraînement de musculation avec des poids libres.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden group">
                <img src={tournement1Img} alt="Taekwondo" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-black text-white uppercase">
                    TAEKWONDO
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    Améliorez votre force et votre flexibilité avec nos cours de Taekwondo.
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden group">
                <img src={tournement2Img} alt="Crossfit Kids" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-black text-white uppercase">
                    CROSSFIT KIDS
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    Un programme de remise en forme amusant et engageant conçu spécifiquement pour les enfants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-28 bg-black px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 text-red-500">
                Programme des Cours Elite Fit Club
              </h2>
              <div className="flex flex-col items-center gap-4 mb-6">
                <p className="text-gray-400 text-lg">
                  Du <span className="text-white font-semibold">24 Juin 2026</span> au <span className="text-white font-semibold">30 Juin 2026</span>
                </p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-red-500">
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Heure</th>
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Lundi</th>
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Mardi</th>
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Mercredi</th>
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Jeudi</th>
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Vendredi</th>
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Samedi</th>
                    <th className="py-4 px-6 text-white text-left text-base font-bold uppercase">Dimanche</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {scheduleData.map((slot, index) => (
                    <tr key={slot.time} className={`border-b border-gray-800 ${index % 2 === 1 ? 'bg-gray-900/50' : ''}`}>
                      <td className="py-4 px-6 text-white font-semibold align-top">
                        <div>{slot.time}</div>
                        <div className="text-gray-500 text-sm">{slot.endTime}</div>
                      </td>
                      {WEEK_DAYS.map((day) => (
                        <td key={day} className="py-4 px-6 align-top">
                          {slot.classes[day] && (
                            <div className={`border-l-4 border-${slot.classes[day].color} pl-3`}>
                              <div className="font-bold text-white">{slot.classes[day].name}</div>
                              <div className="text-sm text-gray-400">{slot.classes[day].instructor}</div>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-28 bg-black px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-16 text-white">
              Get in Shape, Have a Blast
            </h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/U0mg3i533bM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Fitness Class"
              ></iframe>
            </div>
          </div>
        </section>

        <Preinscription />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;