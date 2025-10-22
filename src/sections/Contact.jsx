import { motion } from "framer-motion";
import { useState } from "react";

const API_URL = "https://portbackend-1-nn8t.onrender.com/api/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

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

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "dev.narpheesah@example.com",
      link: "mailto:dev.narpheesah@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/devnarpheesah",
      link: "https://linkedin.com/in/devnarpheesah"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
              📬 Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply chat about technology and innovation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss collaboration opportunities, 
                or just want to say hello, I'd love to hear from you!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Quick Response</h4>
              <p className="text-slate-300 text-sm">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="name" className="block text-slate-300 font-medium">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-700/50 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-600 focus:ring-cyan-500/50 focus:border-cyan-500'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="email" className="block text-slate-300 font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-700/50 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-600 focus:ring-cyan-500/50 focus:border-cyan-500'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="message" className="block text-slate-300 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-700/50 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-600 focus:ring-cyan-500/50 focus:border-cyan-500'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message 🚀"
                  )}
                </motion.button>

                {status && (
                  <motion.div
                    className={`p-4 rounded-xl text-center font-medium ${
                      status.type === 'success' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    role="status"
                  >
                    {status.message}
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
