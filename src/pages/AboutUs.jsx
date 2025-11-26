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

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
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
        <section className="py-28 bg-black px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-center mb-16 text-red-500">
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
