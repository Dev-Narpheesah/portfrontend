import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m open to freelance opportunities, collaborations, and full-time roles.  
        Let’s connect!
      </motion.p>

      <form className="w-full max-w-xl bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
