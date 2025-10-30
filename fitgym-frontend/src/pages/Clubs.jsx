import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix marker icons for React
L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Clubs = () => {
  const position = [33.888, -5.547]; // Replace with your club coordinates

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Nos Clubs</h1>
      <div className="w-full max-w-5xl h-96 rounded-xl overflow-hidden shadow-lg">
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Elite Fit Club <br /> Meknes, Morocco
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Clubs;
