import React from "react";
import { Github } from "lucide-react";

const Projects = ({ darkMode }) => {
  // Replace with your actual projects
  const projects = [
    {
      name: "Stock Price Prediction & Anomaly Detection",
      description:
        "An LSTM-based model to predict AAPL stock prices with high accuracy (R²: 0.93) and an Isolation Forest to detect anomaly patterns in the stock data.",
      github:
        "https://github.com/navyashukla101/Stock-Price-Prediction-and-Anomaly-Pattern-Prediction-Model.git", // replace with actual link
      technologies: ["Python", "LSTM", "Isolation Forest", "Matplotlib"],
    },
    {
      name: "Plant Disease Detection",
      description:
        "A deep learning model using CNNs to classify plant diseases from leaf images, trained on a large dataset with high precision and recall.",
      github:
        "hhttps://github.com/navyashukla101/Plant-disease-prediction-model.git", // replace with actual link
      technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
    },
    {
      name: "Java-Based Mini Projects",
      description:
        "A collection of Java-based frontend applications including a quiz app, calculator, and student record manager using Swing for UI.",
      github: "https://github.com/navyashukla101/Java_projects.git", // replace with actual link
      technologies: ["Java", "Swing", "AWT"],
    },
    {
      name: "Portfolio Website",
      description:
        "A modern, fully responsive personal portfolio with light/dark mode, smooth animations, and performance optimization.",
      github: "https://github.com/navyashukla101/portfolio.git", // replace with actual link
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-16 ${
            darkMode
              ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              : "text-gray-900"
          }`}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                darkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-purple-800/50 border border-purple-500/20"
                  : "bg-white shadow-lg border border-gray-200"
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode
                        ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                        : "text-gray-900"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode
                        ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 text-purple-400"
                        : "bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    <Github size={20} />
                  </a>
                </div>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                          : "bg-purple-100 text-purple-700 border border-purple-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      darkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
