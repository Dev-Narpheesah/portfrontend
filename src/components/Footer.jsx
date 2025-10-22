import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Dev-Narpheesah",
      icon: "💻",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/devnarpheesah",
      icon: "💼",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/devnarpheesah",
      icon: "🐦",
      color: "hover:text-cyan-400"
    },
    {
      name: "Email",
      url: "mailto:dev.narpheesah@example.com",
      icon: "📧",
      color: "hover:text-green-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">DN</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Dev Narpheesah</h3>
                <p className="text-slate-400">Senior Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Passionate about creating exceptional digital experiences through clean code, 
              innovative solutions, and user-centered design. Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl border border-slate-700/50 ${link.color} transition-all duration-300 hover:scale-110 hover:border-slate-600/50`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-sm">
                  📧
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a 
                    href="mailto:dev.narpheesah@example.com"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    dev.narpheesah@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-sm">
                  📱
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a 
                    href="tel:+15551234567"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm">
                  📍
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-700/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} Dev Narpheesah. All rights reserved. Built with ❤️ using React, Vite, and Tailwind CSS.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="https://portfrontend-ten.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Live Site
              </a>
              <a 
                href="https://portbackend-1-nn8t.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                API
              </a>
              <a 
                href="/Resume.pdf" 
                download
                className="text-slate-400 hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600/50 transition-all duration-300"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span>Back to Top</span>
            <span className="text-lg">↑</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
