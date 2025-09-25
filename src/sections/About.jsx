import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl text-center leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I am a <span className="font-semibold text-blue-600">Senior Software Developer</span> 
        with experience building scalable applications and leading engineering teams.  
        I specialize in modern web technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>Cloud</strong> platforms.  
        My passion is creating clean, maintainable, and user-friendly software that solves real-world problems.
      </motion.p>
    </section>
  );
}
