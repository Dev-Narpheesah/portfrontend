import React from "react";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Hi, I’m Your Name — Senior Full-Stack Developer</h1>
        <p className="mt-4 text-slate-300 max-w-xl">
          I build scalable web applications and delightful user experiences. I focus on reliable systems, maintainable code, and mentoring engineers.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-slate-900 font-semibold shadow">
            View my work
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-700 text-slate-300">
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-slate-800/40 p-6 rounded-2xl flex items-center justify-center"
      >
        <div className="text-center">
          <img src="/hero.jpeg" alt="illustration" className="w-56 mx-auto" />
          <p className="mt-4 text-slate-400">Problem solver — System thinker — Mentor</p>
        </div>
      </motion.div>
    </section>
  );
}
