import React, { useState } from "react";
import { Sun, Moon, User, Briefcase, Code, Phone, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "techstack", label: "Tech Stack", icon: Code },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-800/90 via-purple-800/90 to-violet-800/90 backdrop-blur-md"
          : "bg-white/90 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className={`text-2xl font-bold ${
              darkMode
                ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                : "text-purple-600"
            }`}
          >
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? darkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-purple-600 text-white"
                      : darkMode
                      ? "hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20"
                      : "hover:bg-purple-100"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-300 hover:to-orange-300"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute left-0 right-0 p-4 ${
              darkMode
                ? "bg-gradient-to-r from-gray-800 via-purple-800 to-violet-800"
                : "bg-white"
            } border-t ${
              darkMode ? "border-purple-500/20" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? darkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-purple-600 text-white"
                      : darkMode
                      ? "text-white hover:bg-purple-500/20"
                      : "text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
