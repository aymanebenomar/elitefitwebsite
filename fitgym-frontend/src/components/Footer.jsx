import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-white text-lg">ELITE FIT</div>
          <p className="text-sm text-gray-400 mt-2">6H - 23H | 7/7J | Accès National</p>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <p className="text-sm text-gray-400 mt-2">contact@elitefit.ma</p>
        </div>
        <div>
          <div className="font-semibold text-white">Suivez-nous</div>
          <div className="flex gap-3 mt-2 text-gray-400">
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 mt-8 pt-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} ELITE FIT</div>
    </footer>
  );
}