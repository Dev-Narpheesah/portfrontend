import { motion } from "framer-motion";

export default function About() {
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

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const skills = [
    { name: "Frontend Development", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "Database Design", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Cloud Architecture", level: 88, color: "from-orange-500 to-red-500" },
    { name: "DevOps & CI/CD", level: 82, color: "from-indigo-500 to-purple-500" },
    { name: "Team Leadership", level: 92, color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30">
              👨‍💻 About Me
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I'm a passionate <span className="font-semibold text-blue-400">Senior Full-Stack Developer</span> with over 5 years of experience 
            building scalable web applications and leading engineering teams. I specialize in modern technologies and 
            love creating solutions that make a real difference.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">My Journey</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Starting as a curious computer science student, I quickly fell in love with the art of coding. 
                  What began as simple scripts evolved into complex, enterprise-level applications that serve thousands of users daily.
                </p>
                <p>
                  Over the years, I've had the privilege of working with amazing teams, mentoring junior developers, 
                  and contributing to open-source projects that impact the global developer community.
                </p>
                <p>
                  Today, I focus on building <span className="text-blue-400 font-semibold">scalable systems</span>, 
                  <span className="text-purple-400 font-semibold"> mentoring teams</span>, and creating 
                  <span className="text-green-400 font-semibold"> exceptional user experiences</span>.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Core Competencies</h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-3">What I Love</h4>
              <div className="flex flex-wrap gap-2">
                {["Clean Code", "Problem Solving", "Team Collaboration", "Continuous Learning", "Innovation", "Mentoring"].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
