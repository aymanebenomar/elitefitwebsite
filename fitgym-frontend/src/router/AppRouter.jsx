import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Abonnements from "../pages/Abonnements";
import Clubs from "../pages/Clubs";
import Activities from "../pages/Activities";
import Blog from "../pages/Blog";
import PreInscription from "../pages/PreInscription";
import ModernEquipment from "../pages/ModernEquipment";
import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/abonnements" element={<Abonnements />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/preinscription" element={<PreInscription />} />
        <Route path="/modern-equipment" element={<MainLayout><ModernEquipment /></MainLayout>} />
      </Route>
    </Routes>
  );
}