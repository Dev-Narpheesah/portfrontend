export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
