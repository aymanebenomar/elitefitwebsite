import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// ✅ Fix marker icons for React Leaflet
L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const OurClub = () => {
  const position = [33.880557, -5.563053]; // Meknès coordinates

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-red-600 tracking-wide italic"
        >
          ELITE CLUB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-gray-300 text-lg italic px-6 leading-relaxed"
        >
          Bienvenue dans notre salle de sport à Meknès. Un espace moderne,
          inspirant et dédié à la performance, la santé et le bien-être.
          Rejoignez notre communauté de passionnés et atteignez vos objectifs
          avec style.
        </motion.p>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full flex flex-col items-center pb-20 mt-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <MapPin className="text-red-500 w-8 h-8" />
          <h2 className="text-3xl font-semibold italic">Où nous trouver</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-5xl h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-700"
        >
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <strong>Elite Fit Club</strong> <br /> Meknès, Morocco
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>

        {/* Google Maps Button */}
        <motion.a
          href="https://maps.app.goo.gl/gnpjXtPvjW8HrvLGA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold tracking-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Voir sur Google Maps
        </motion.a>
      </motion.section>
    </div>
  );
};

export default OurClub;
