import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
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
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I’m a curious and hands-on software engineer who loves turning
              ideas into robust, real-world systems. With experience in
              full-stack web development, deep learning, and system-level
              programming, I’ve worked on diverse projects—from building secure
              OS modules and compilers to designing AI-driven models for seizure
              detection, hate speech filtering, and stock price forecasting.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I enjoy working at the intersection of intelligent systems and
              practical software design. Whether it’s writing clean frontend
              code, optimizing backend logic, or experimenting with neural
              architectures, I’m driven by problem-solving and continuous
              learning.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Projects Completed", value: "15+" },
                //{ label: "Years Experience", value: "3+" },
                { label: "Technologies", value: "12+" },
                //{ label: "Happy Clients", value: "10+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center ${
                    darkMode
                      ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                      : "bg-white shadow-sm"
                  }`}
                >
                  <div
                    className={`text-2xl font-bold ${
                      darkMode
                        ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                        : "text-purple-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className={`p-8 rounded-2xl ${
                darkMode
                  ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                  : "bg-white shadow-lg"
              }`}
            >
              <div className="space-y-6">
                <h3
                  className={`text-2xl font-semibold ${
                    darkMode
                      ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                      : "text-gray-900"
                  }`}
                >
                  What I Do
                </h3>

                {[
                  {
                    title: "AI & ML Engineering",
                    desc: "Creating responsive and interactive user Designing deep learning pipelines and intelligent systems",
                  },
                  {
                    title: "Frontend & Backend Development",
                    desc: "Building responsive UIs and scalable backend logic using React, Node.js, and Express",
                  },
                  {
                    title: "Data Engineering & Analysis",
                    desc: "Performing preprocessing, feature engineering, and data visualization to support robust model training",
                  },
                  {
                    title: "Model Evaluation & XAI",
                    desc: "Implementing advanced evaluation metrics, explainable AI, and visual tools for actionable insights",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        darkMode
                          ? "bg-gradient-to-r from-purple-400 to-pink-400"
                          : "bg-purple-600"
                      }`}
                    ></div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
