import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurClub from "./pages/OurClub";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club" element={<OurClub />} /> {/* <-- single club */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
