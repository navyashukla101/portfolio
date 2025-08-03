import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faPython,
  faGit,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFire,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

const TechStack = ({ darkMode }) => {
  // Replace with your actual tech stack
  const techStack = [
    { name: "React", icon: <FontAwesomeIcon icon={faReact} /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
    { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} /> },
    { name: "Python", icon: <FontAwesomeIcon icon={faPython} /> },
    { name: "MongoDB", icon: <FontAwesomeIcon icon={faDatabase} /> },
    //{ name: "PostgreSQL", icon: <FontAwesomeIcon icon={faDatabase} /> },
    { name: "Git", icon: <FontAwesomeIcon icon={faGit} /> },
    { name: "Docker", icon: <FontAwesomeIcon icon={faDocker} /> },
    { name: "AWS", icon: <FontAwesomeIcon icon={faAws} /> },
    { name: "Firebase", icon: <FontAwesomeIcon icon={faFire} /> },
    { name: "Tailwind CSS", icon: <FontAwesomeIcon icon={faPaintBrush} /> },
  ];

  return (
    <section
      id="techstack"
      className={`py-20 ${
        darkMode
          ? "bg-gradient-to-r from-gray-800/50 to-purple-800/50"
          : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-16 ${
            darkMode
              ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              : "text-gray-900"
          }`}
        >
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-purple-800/50 border border-purple-500/20"
                  : "bg-white shadow-sm border border-gray-200"
              }`}
            >
              <div className="space-y-3">
                <div className="text-4xl transform group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3
                  className={`text-sm font-semibold ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
