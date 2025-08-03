import React from "react";
import profileImage from "../assets/navya2.jpg"; // Add this import at the top

const Home = ({ darkMode, scrollToSection }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6 animate-fadeInLeft">
            <div className="space-y-4">
              <h1
                className={`text-5xl lg:text-7xl font-bold ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
                    : "text-gray-900"
                }`}
              >
                Hi, I'm Navya Shukla
              </h1>
              <h2
                className={`text-2xl lg:text-3xl ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                    : "text-purple-600"
                }`}
              >
                Software Engineer
              </h2>
            </div>

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm a software engineer with a strong foundation in full-stack
              development, deep learning, and systems programming. I’ve built
              and deployed projects ranging from secure file systems and
              compilers to AI-powered solutions like seizure detection and stock
              price forecasting. I enjoy creating efficient, scalable tools that
              solve real-world problems, and I’m always exploring the
              intersection of AI and software systems.
            </p>

            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? "border border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10"
                    : "border border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fadeInRight">
            <div
              className={`relative ${
                darkMode
                  ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                  : "bg-gray-100"
              } rounded-full p-8 transform hover:scale-105 transition-all duration-300`}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img
                  src={profileImage} // Update this line
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute -top-4 -right-4 w-16 h-16 ${
                  darkMode
                    ? "bg-gradient-to-br from-yellow-400 to-orange-400"
                    : "bg-yellow-400"
                } rounded-full flex items-center justify-center animate-bounce`}
              >
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
