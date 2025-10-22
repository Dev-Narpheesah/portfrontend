import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Disaster Relief Management System",
    description: "A comprehensive platform that connects donors, volunteers, and relief organizations with real-time disaster tracking and resource allocation. Features include real-time notifications, resource mapping, and volunteer coordination.",
    longDescription: "Built a full-stack disaster relief management system that helps coordinate emergency responses. The platform includes real-time tracking of disasters, resource allocation, volunteer management, and donor coordination. Features include geolocation services, real-time notifications, and a comprehensive dashboard for administrators.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Mapbox"],
    github: "https://github.com/Dev-Narpheesah/DRM_frontend",
    demo: "https://drm-frontend-rust.vercel.app/",
    image: "/project1.svg",
    category: "Full-Stack",
    featured: true,
    year: "2024"
  },
  {
    title: "Hotel Booking System",
    description: "Full-stack booking system with room availability, payments, and an admin dashboard. Includes real-time booking management, payment processing, and comprehensive analytics.",
    longDescription: "Developed a complete hotel management system with booking functionality, payment integration using Stripe, and an admin dashboard for hotel management. The system includes room availability tracking, customer management, booking history, and revenue analytics.",
    tech: ["React", "Express", "Stripe API", "PostgreSQL", "JWT", "Bootstrap"],
    github: "https://github.com/Dev-Narpheesah/hotel-manage",
    demo: "https://hotel-manage-five.vercel.app/",
    image: "/project2.svg",
    category: "E-commerce",
    featured: true,
    year: "2023"
  },
  {
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode, and mobile-first design.",
    longDescription: "Created a professional portfolio website showcasing my skills and projects. The site features smooth animations, responsive design, dark mode toggle, and optimized performance. Built with modern web technologies and best practices.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/Dev-Narpheesah/portfolio",
    demo: "https://portfrontend-ten.vercel.app/",
    image: "/portfolio.svg",
    category: "Portfolio",
    featured: false,
    year: "2024"
  },
  {
    title: "E-Learning Platform",
    description: "Interactive online learning platform with video streaming, quizzes, progress tracking, and certificate generation. Built for scalable education delivery.",
    longDescription: "Developed a comprehensive e-learning platform that supports video streaming, interactive quizzes, progress tracking, and certificate generation. The platform includes user authentication, course management, payment integration, and analytics dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Stripe", "Redis"],
    github: "https://github.com/Dev-Narpheesah/e-learning",
    demo: "https://e-learning-demo.vercel.app/",
    image: "/project1.svg",
    category: "Education",
    featured: true,
    year: "2023"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    longDescription: "Built a comprehensive task management application with real-time collaboration features. Includes project tracking, team management, deadline notifications, and progress analytics. Features drag-and-drop interface and mobile responsiveness.",
    tech: ["React", "Socket.io", "MongoDB", "Express", "JWT", "Material-UI"],
    github: "https://github.com/Dev-Narpheesah/task-manager",
    demo: "https://task-manager-demo.vercel.app/",
    image: "/project2.svg",
    category: "Productivity",
    featured: false,
    year: "2023"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, historical data, and interactive maps. Features include alerts and detailed weather analytics.",
    longDescription: "Created a comprehensive weather dashboard that provides real-time weather data, forecasts, and historical information. The application includes location-based services, weather alerts, and interactive maps for better visualization.",
    tech: ["React", "OpenWeather API", "Chart.js", "Geolocation", "PWA"],
    github: "https://github.com/Dev-Narpheesah/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app/",
    image: "/portfolio.svg",
    category: "Utility",
    featured: false,
    year: "2022"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ["All", "Full-Stack", "E-commerce", "Education", "Productivity", "Portfolio", "Utility"];
  const featuredProjects = projects.filter(project => project.featured);
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
              💼 Featured Projects
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            My Work
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A showcase of my recent projects and contributions. Each project represents a unique challenge and learning opportunity.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/vite.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700/50 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-slate-600/50 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔗 GitHub
                  </motion.a>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss your next project!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
