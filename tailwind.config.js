/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // we toggle 'dark' class on <html>
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3fbf8",
          100: "#daf7ed",
          500: "#6ee7b7",
          600: "#3fd48f"
        }
      }
    }
  },
  plugins: []
}
