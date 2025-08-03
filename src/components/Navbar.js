import React from "react";
import { Sun, Moon, User, Briefcase, Code, Phone } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
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

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {[
                { id: "home", label: "Home", icon: User },
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "techstack", label: "Tech Stack", icon: Code },
                { id: "contact", label: "Contact", icon: Phone },
              ].map(({ id, label, icon: Icon }) => (
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
