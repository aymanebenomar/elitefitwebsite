import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../assets/loooooogoooo-removebg-preview.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const section = document.getElementById(sectionId);
      if (!section) return; // prevent crash if section not found

      const navbarHeight = navbarRef.current?.offsetHeight || 90;
      const offset = sectionId === "abonnements" ? 20 : -80;
      const yOffset = section.getBoundingClientRect().top + window.scrollY - (navbarHeight + offset);

      window.scrollTo({ top: yOffset, behavior: "smooth" });
      setMenuOpen(false);
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 200);
    } else {
      doScroll();
    }
  };

  const navLinks = [
    { id: "concept", label: "Concept", isSection: true },
    { id: "abonnements", label: "Abonnements", isSection: true },
    { id: "clubs", label: "Club", isSection: true },
    { id: "preinscription", label: "Pré-inscription", isSection: true },
  ];

  return (
    <header
      ref={navbarRef}
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out 
      ${scrolled ? "w-2/3 bg-eliteBlack/90 backdrop-blur-md py-2 px-6" : "w-full py-6 px-10"} 
      rounded-xl z-50`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" onClick={() => scrollToSection("hero")} className="flex items-center gap-3 cursor-pointer">
          <img src={logoImg} alt="logo" className="w-10 h-10" />
        </Link>

        <nav className="hidden md:block">
          <ul className={`flex items-center ${scrolled ? "gap-4" : "gap-6"} text-white`}>
            {navLinks.map((link) => (
              <li key={link.id} className="cursor-pointer">
                {link.isSection ? (
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-eliteGold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="hover:text-eliteGold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button fixed to scroll to preinscription */}
        <button
          onClick={() => scrollToSection("preinscription")}
          className={`hidden md:flex bg-eliteGold hover:bg-yellow-500 text-eliteBlack font-bold rounded transition-all duration-500 
          ${scrolled ? "px-2 py-1 text-sm" : "px-4 py-2"}`}
        >
          Contact
        </button>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden bg-eliteBlack/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '24rem' : '0',
          opacity: menuOpen ? 1 : 0,
          marginTop: menuOpen ? '0.75rem' : '0'
        }}
      >
        <ul className="flex flex-col items-center gap-4 text-white px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="hover:text-eliteGold transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection("preinscription")}
              className="hover:text-eliteGold transition-colors duration-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
