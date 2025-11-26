import React from "react";
import { 
  MapPin, Clock, Users, Dumbbell, Heart, 
  Facebook, Instagram, Twitter
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const baseAnimation = "transition-all duration-700 ease-out"; 
  const inViewClass = "opacity-100 translate-y-0";
  const getHiddenClasses = (delay) => `opacity-0 translate-y-8 ${baseAnimation} delay-${delay}`;

  return (
    <footer 
      className="bg-black relative overflow-hidden" 
      ref={ref}
    >
      {/* Watermark */}
      <div 
        className={`absolute inset-0 z-0 flex items-center justify-center pointer-events-none 
          text-[180px] sm:text-[300px] md:text-[400px] font-black text-gray-800/80 
          filter drop-shadow-[0_0_5px_rgba(20,20,20,0.5)] 
          transition-all duration-1000 ease-in 
          ${inView ? 'opacity-[0.60] translate-y-1/3' : 'opacity-0 translate-y-1/4'}`}
        style={{ lineHeight: '0.8' }} 
      >
        ELITE
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          
          {/* Brand Column */}
          <div className={`col-span-1 md:col-span-2 ${inView ? inViewClass : getHiddenClasses(300)}`}>
            <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4">
              ELITE <span className="text-red-600">FIT</span>
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base max-w-md">
              Votre partenaire fitness de confiance à Meknes. Rejoignez notre communauté 
              et transformez votre vie avec des équipements modernes et un coaching expert.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <div className="bg-red-600/20 p-2 md:p-3 rounded-lg border border-red-600/30">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
              </div>
              <div className="bg-yellow-500/20 p-2 md:p-3 rounded-lg border border-yellow-500/30">
                <Dumbbell className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
              </div>
              <div className="bg-gray-700 p-2 md:p-3 rounded-lg border border-gray-600">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={inView ? inViewClass : getHiddenClasses(600)}>
            <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">LIENS RAPIDES</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic text-sm md:text-base">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic text-sm md:text-base">
                  Nos Offres
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic text-sm md:text-base">
                  Équipements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic text-sm md:text-base">
                  Coachs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 italic text-sm md:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={inView ? inViewClass : getHiddenClasses(900)}>
            <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">CONTACT</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 md:space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                <span className="text-gray-300 italic text-sm md:text-base">Meknes, Morocco</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                <span className="text-gray-300 italic text-sm md:text-base">7H - 23H • 6/7J</span> 
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                <span className="text-gray-300 italic text-sm md:text-base">+212 6 XX XX XX XX</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-4 md:mt-6">
              <h5 className="text-xs md:text-sm font-bold text-white mb-2 md:mb-3">SUIVEZ-NOUS</h5>
              <div className="flex space-x-2 md:space-x-3">
                <a href="#" className="bg-gray-800 p-1.5 md:p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-1.5 md:p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-1.5 md:p-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
                  <Twitter className="w-4 h-4 md:w-5 md:h-5 text-white" /> 
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center ${inView ? inViewClass : getHiddenClasses(1200)}`}>
          <p className="text-gray-400 text-xs md:text-sm italic text-center md:text-left">
            © 2024 Elite. Tous droits réservés.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-3 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm italic transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm italic transition-colors duration-300">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}