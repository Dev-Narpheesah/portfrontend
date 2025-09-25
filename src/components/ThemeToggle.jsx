import React, { useState, useEffect } from "react";
import { applyTheme, getInitialTheme } from "../utils/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border transition-colors 
                 bg-white/5 dark:bg-white/3 border-transparent hover:bg-white/10 text-sm"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
