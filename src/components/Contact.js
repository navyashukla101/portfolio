import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-16 ${
            darkMode
              ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              : "text-gray-900"
          }`}
        >
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p
            className={`text-lg mb-12 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Feel free to reach
            out!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "navyashukla10@email.com",
                href: "mailto:navyashukla10@email.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/johndoe",
                href: "https://www.linkedin.com/in/navyashukla10",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/navyashukla101",
                href: "https://github.com/navyashukla101",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-800/50 to-purple-800/50 border border-purple-500/20 hover:border-purple-400/40"
                    : "bg-white shadow-sm hover:shadow-md border border-gray-200"
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`inline-flex p-4 rounded-full ${
                      darkMode
                        ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {contact.label}
                    </h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
