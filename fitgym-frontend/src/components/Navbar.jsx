import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../assets/eliteblacklogo.png";

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
      if (!section) return;

      const navbarHeight = navbarRef.current?.offsetHeight || 90;
      const yOffset = section.getBoundingClientRect().top + window.scrollY - (navbarHeight + 15);

      window.scrollTo({ top: yOffset, behavior: "smooth" });
      setMenuOpen(false);
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 150);
    } else {
      doScroll();
    }
  };

  const navLinks = [
    { id: "concept", label: "Concept", isSection: true },
    { id: "abonnements", label: "Abonnements", isSection: true },
    { id: "clubs", label: "Clubs", path: "/clubs", isSection: false },
    { id: "activities", label: "Activités", path: "/activities", isSection: false },
    { id: "blog", label: "Blog", path: "/blog", isSection: false },
    { id: "preinscription", label: "Pré-inscription", path: "/preinscription", isSection: false },
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
          <span className="font-bold text-eliteGold text-xl">ELITE</span>
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

        <button
          onClick={() => scrollToSection("contact")}
          className={`hidden md:flex bg-eliteGold hover:bg-yellow-500 text-eliteBlack font-bold rounded transition-all duration-500 
          ${scrolled ? "px-2 py-1 text-sm" : "px-4 py-2"}`}
        >
          Contact
        </button>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-eliteBlack/95 rounded-xl shadow-lg flex flex-col items-center px-6 py-4">
          <ul className="flex flex-col items-center gap-4 text-white">
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.isSection ? (
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-eliteGold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to={link.path}
                    className="hover:text-eliteGold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-eliteGold transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
