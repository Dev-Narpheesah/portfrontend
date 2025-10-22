import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2022 — Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Leading development of enterprise-scale applications and mentoring junior developers.",
    achievements: [
      "Led a team of 5 developers in building a microservices architecture serving 100K+ users",
      "Improved application performance by 40% through code optimization and caching strategies",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Mentored 3 junior developers, helping them advance to mid-level positions"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "StartupXYZ",
    position: "Frontend Engineer",
    duration: "2019 — 2022",
    location: "Remote",
    type: "Full-time",
    description: "Built responsive web applications and contributed to design system development.",
    achievements: [
      "Developed a component library used across 15+ applications, improving consistency by 60%",
      "Optimized bundle size by 35% through code splitting and lazy loading implementation",
      "Implemented accessibility features achieving WCAG 2.1 AA compliance",
      "Collaborated with design team to create a unified design system"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Jest"],
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Digital Agency Pro",
    position: "Junior Developer",
    duration: "2018 — 2019",
    location: "New York, NY",
    type: "Full-time",
    description: "Started my professional journey building client websites and learning modern web technologies.",
    achievements: [
      "Built 20+ client websites with 100% client satisfaction rate",
      "Learned modern JavaScript frameworks and best practices",
      "Contributed to open-source projects and gained industry recognition",
      "Developed strong problem-solving and communication skills"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "MySQL"],
    color: "from-green-500 to-emerald-500"
  }
];

export default function Experience() {
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
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30">
              💼 Professional Experience
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Work Experience
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A journey of growth, learning, and impactful contributions to the tech industry.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline */}
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-2 border-slate-800`}></div>
                    <div className="w-px h-16 bg-slate-600"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-semibold text-slate-300">{exp.company}</span>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 font-medium">{exp.duration}</div>
                      <div className="text-slate-500 text-sm">{exp.location}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start gap-3 text-slate-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1, duration: 0.3 }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05, duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-8 rounded-2xl border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I bring years of experience, a passion for innovation, and a commitment to excellence 
              to every project. Let's discuss how I can contribute to your team's success.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
