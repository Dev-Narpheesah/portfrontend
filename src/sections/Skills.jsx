import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Vue.js", level: 85, icon: "💚" },
      { name: "JavaScript", level: 95, icon: "🟨" }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 92, icon: "🟢" },
      { name: "Express.js", level: 90, icon: "🚀" },
      { name: "Python", level: 88, icon: "🐍" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MongoDB", level: 87, icon: "🍃" },
      { name: "REST APIs", level: 93, icon: "🔗" }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 88, icon: "☁️" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "Kubernetes", level: 80, icon: "⚓" },
      { name: "CI/CD", level: 87, icon: "🔄" },
      { name: "Terraform", level: 82, icon: "🏗️" },
      { name: "Linux", level: 90, icon: "🐧" }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 95, icon: "📚" },
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "Jest", level: 88, icon: "🧪" },
      { name: "Webpack", level: 82, icon: "📦" },
      { name: "GraphQL", level: 85, icon: "🔺" },
      { name: "Redis", level: 80, icon: "🔴" }
    ],
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
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
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30">
              🛠️ Technical Skills
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                      duration: 0.5 
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-slate-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5, 
                          duration: 1.2, 
                          ease: "easeOut" 
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Additional Expertise</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Beyond technical skills, I bring leadership, problem-solving, and a passion for continuous learning to every project.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Team Leadership", icon: "👥", color: "from-blue-500 to-cyan-500" },
              { name: "Project Management", icon: "📋", color: "from-purple-500 to-pink-500" },
              { name: "Code Review", icon: "🔍", color: "from-green-500 to-emerald-500" },
              { name: "Mentoring", icon: "🎓", color: "from-orange-500 to-red-500" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30 text-center hover:border-slate-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl`}>
                  {skill.icon}
                </div>
                <h4 className="text-slate-300 font-semibold">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
