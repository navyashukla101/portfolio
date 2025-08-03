import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "techstack", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Home darkMode={darkMode} scrollToSection={scrollToSection} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <TechStack darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      {/* Footer */}
      <footer
        className={`py-8 ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 to-purple-900 border-t border-purple-500/20"
            : "bg-gray-50 border-t border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2025 By Navya Shukla, with ❤️.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
