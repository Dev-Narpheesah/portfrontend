import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const leftAnim = shouldReduceMotion
    ? { initial: { opacity: 1, x: 0 }, animate: { opacity: 1, x: 0 }, transition: {} }
    : { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, ease: "easeOut" } };

  const rightAnim = shouldReduceMotion
    ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 }, transition: {} }
    : { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } };

  const textAnim = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: {} }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 } };

  const buttonAnim = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: {} }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.6 } };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...leftAnim} className="space-y-8">
            <div className="space-y-4">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                {...textAnim}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dev Narpheesah
                </span>
              </motion.h1>
              
              <motion.div 
                className="text-2xl lg:text-3xl font-semibold text-slate-300"
                {...textAnim}
              >
                Senior Full-Stack Developer
              </motion.div>
            </div>

            <motion.p 
              className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl"
              {...textAnim}
            >
              I craft exceptional digital experiences through clean code, innovative solutions, and user-centered design. 
              Passionate about building scalable applications and mentoring the next generation of developers.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              {...buttonAnim}
            >
              <motion.a
                href="#projects"
                aria-label="View my projects"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a
                href="/Resume.pdf"
                download
                aria-label="Download resume"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-slate-600 text-slate-300 font-semibold hover:border-blue-400 hover:text-blue-300 transition-all duration-300 hover:bg-slate-800/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <span>📄</span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-slate-800 flex items-center justify-center text-white font-bold text-sm">
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-slate-400">
                <div className="font-semibold">5+ Years Experience</div>
                <div className="text-sm">Building amazing products</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            {...rightAnim} 
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
                <div className="text-center space-y-6">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/hero.jpeg" 
                      loading="lazy" 
                      alt="Portrait of Dev Narpheesah" 
                      className="w-64 h-64 mx-auto rounded-2xl object-cover shadow-xl border-4 border-slate-600/50" 
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-white text-sm">✓</span>
                    </motion.div>
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Dev Narpheesah</h3>
                    <p className="text-slate-400">Problem Solver • System Thinker • Mentor</p>
                    <div className="flex justify-center gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Full-Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
