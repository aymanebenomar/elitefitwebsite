import React from "react";
import { 
  MapPin, Clock, Users, Dumbbell, Heart, 
  Facebook, Instagram, Twitter
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true, // L'animation ne se déclenche qu'une seule fois
    threshold: 0.1,    // Se déclenche lorsque 10% du composant est visible
  });

  // La classe de base pour tous les éléments qui apparaissent.
  const baseAnimation = "transition-all duration-700 ease-out"; 
  
  // Classe d'état final (visible)
  const inViewClass = "opacity-100 translate-y-0";

  // Fonction pour obtenir la classe d'état initial (caché) et le délai
  // NOTE: Les classes de délai (delay-300, etc.) nécessitent une configuration Tailwind
  const getHiddenClasses = (delay) => 
    `opacity-0 translate-y-8 ${baseAnimation} delay-${delay}`;


  return (
    <footer 
      // Le fond bg-gray-900 est le noir le plus profond dans Tailwind
      className="bg-gray-900 border-t border-gray-800 relative overflow-hidden" 
      ref={ref}
    >
      {/* 2. Filigrane "ELITE" - AFFICHÉ À MOITIÉ, SOMBRE ET MASSIF */}
      <div 
        className={`absolute inset-0 z-0 flex items-center justify-center pointer-events-none 
          text-[300px] sm:text-[400px] font-black text-gray-800/80 
          filter drop-shadow-[0_0_5px_rgba(20,20,20,0.5)] 
          
          /* Modification clé : Déplacement vers le bas et augmentation de l'opacité */
          transition-all duration-1000 ease-in 
          ${inView ? 'opacity-[0.60] translate-y-1/3' : 'opacity-0 translate-y-1/4'}`}
        style={{ lineHeight: '0.8' }} 
      >
        ELITE
      </div>
      
      {/* Contenu du Footer - z-10 pour être au-dessus du watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column (Apparition décalée: 300ms) */}
          <div className={`col-span-1 md:col-span-2 ${inView ? inViewClass : getHiddenClasses(300)}`}>
            <h3 className="text-2xl font-black text-white mb-4">
              ELITE <span className="text-red-600">FIT</span>
            </h3>
            <p className="text-gray-300 mb-6 italic max-w-md">
              Votre partenaire fitness de confiance à Meknes. Rejoignez notre communauté 
              et transformez votre vie avec des équipements modernes et un coaching expert.
            </p>
            <div className="flex space-x-4">
              <div className="bg-red-600/20 p-3 rounded-lg border border-red-600/30">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg border border-yellow-500/30">
                <Dumbbell className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
            </div>
          </div>

          {/* Quick Links (Apparition décalée: 600ms) */}
          <div className={inView ? inViewClass : getHiddenClasses(600)}>
            <h4 className="text-lg font-bold text-white mb-4">LIENS RAPIDES</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic">
                  Nos Offres
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic">
                  Équipements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic">
                  Coachs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info (Apparition décalée: 900ms) */}
          <div className={inView ? inViewClass : getHiddenClasses(900)}>
            <h4 className="text-lg font-bold text-white mb-4">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300 italic">Meknes, Morocco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300 italic">7H - 23H • 6/7J</span> 
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-gray-300 italic">+212 6 XX XX XX XX</span>
              </div>
            </div>

            {/* Social Media - Icônes mises à jour */}
            <div className="mt-6">
              <h5 className="text-sm font-bold text-white mb-3">SUIVEZ-NOUS</h5>
              <div className="flex space-x-3">
                {/* Facebook Logo */}
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                {/* Instagram Logo */}
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                {/* Twitter/X Logo */}
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-white" /> 
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Apparition décalée: 1200ms) */}
        <div className={`border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ${inView ? inViewClass : getHiddenClasses(1200)}`}>
          <p className="text-gray-400 text-sm italic">
            © 2024 Elite. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm italic transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm italic transition-colors duration-300">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
