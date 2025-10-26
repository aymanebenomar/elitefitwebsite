import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/eliteblacklogo.png"; // replace with your gym logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "concept", label: "Concept", path: "/" },
    { id: "abonnements", label: "Abonnements", path: "/abonnements" },
    { id: "clubs", label: "Clubs", path: "/clubs" },
    { id: "activities", label: "Activités", path: "/activities" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "preinscription", label: "Pré-inscription", path: "/preinscription" },
  ];

  return (
    <header
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
        ${scrolled ? "w-2/3 bg-eliteBlack/90 backdrop-blur-md py-2 px-6" : "w-full py-6 px-10"}
        rounded-xl z-50
      `}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img src={logoImg} alt="logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-eliteGold text-xl">ELITE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className={`flex items-center ${scrolled ? "gap-4" : "gap-6"} text-white`}>
            {navLinks.map((link) => (
              <li key={link.id} className="group cursor-pointer">
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div
          className={`hidden md:flex bg-eliteGold hover:bg-yellow-500 text-eliteBlack font-bold rounded transition-all duration-500 ease-in-out
            ${scrolled ? "px-2 py-1 text-sm" : "px-4 py-2"}`}
        >
          <span>Contact</span>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-eliteBlack/95 rounded-xl shadow-lg flex flex-col items-center px-6 py-4">
          <ul className="flex flex-col items-center gap-4 text-white font-light text-base">
            {navLinks.map((link) => (
              <li key={link.id} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;