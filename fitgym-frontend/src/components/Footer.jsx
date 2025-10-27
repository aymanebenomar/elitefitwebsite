import React from "react";
import { MapPin, Clock, Users, Dumbbell, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
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

          {/* Quick Links */}
          <div>
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

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300 italic">Meknes, Morocco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300 italic">6H - 23H • 7/7J</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-gray-300 italic">+212 6 XX XX XX XX</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-bold text-white mb-3">SUIVEZ-NOUS</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
                  <span className="text-white text-sm">FB</span>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors duration-300">
                  <span className="text-white text-sm">IN</span>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                  <span className="text-white text-sm">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm italic">
            © 2024 Elite Fit. Tous droits réservés.
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