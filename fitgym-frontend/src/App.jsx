import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home />
    </div>
  );
}