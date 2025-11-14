import React from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
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
  const navigate = useNavigate();
  const position = [33.880557, -5.563053]; // Meknès coordinates

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full h-[45vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-2 text-red-600 tracking-wide italic"
        >
          ELITE CLUB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-gray-300 text-lg italic px-6 leading-relaxed"
        >
          Bienvenue à notre salle de sport à Meknès — un espace moderne et
          inspirant dédié à la performance, la santé et au dépassement de soi.
        </motion.p>
      </section>

      {/* Map & Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10 px-6 pb-20"
      >
        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold italic mb-4 flex items-center gap-2"
          >
            <MapPin className="text-red-500 w-7 h-7" />
            Où nous trouver
          </motion.h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Notre salle se situe à Meknès, dans un emplacement central et
            facilement accessible. Venez découvrir un espace dédié à la forme,
            à la motivation et au dépassement de soi.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-red-500 w-5 h-5" />
              <span>Rue de Fès, Meknès, Maroc</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-red-500 w-5 h-5" />
              <span>+212 6 12 34 56 78</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-red-500 w-5 h-5" />
              <span>contact@eliteclub.ma</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-red-500 w-5 h-5" />
              <span>Lun - Dim : 6h00 - 23h00</span>
            </div>
          </div>

          <motion.a
            href="https://maps.app.goo.gl/gnpjXtPvjW8HrvLGA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Voir sur Google Maps
          </motion.a>

          <motion.button
            onClick={() => navigate("/modern-equipment")}
            className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-transparent border-2 border-red-600 hover:bg-red-600 rounded-full text-white font-semibold tracking-wide transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Découvrir Notre Club
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
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
      </motion.section>
    </div>
  );
};

export default OurClub;