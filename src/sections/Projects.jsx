import React from "react";
import { motion } from "framer-motion";

// Example project data
const projects = [
  {
    title: "Disaster Relief Management System",
    description:
      "A platform that connects donors, volunteers, and relief organizations with real-time disaster tracking and resource allocation.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Dev-Narpheesah/DRM_frontend",
    demo: "https://drm-frontend-rust.vercel.app/",
    image: "/project1.png",
  },
  {
    title: "Hotel Booking System",
    description:
      "Full-stack booking system with room availability, payments, and an admin dashboard.",
    tech: ["React", "Express", "Stripe API"],
    github: "https://github.com/Dev-Narpheesah/hotel-manage",
    demo: "https://hotel-manage-five.vercel.app/",
    image: "/project2.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio site built with React, Vite, Tailwind, and Framer Motion.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/Dev-Narpheesah/portfolio",
    demo: "#",
    image: "/portfolio.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    🔗 GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    🚀 Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
