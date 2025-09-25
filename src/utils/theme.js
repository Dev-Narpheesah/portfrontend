// utils/theme.js
export function getInitialTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

export function applyTheme(theme) {
  const root = window.document.documentElement;
  root.classList.remove(theme === "dark" ? "light" : "dark");
  root.classList.add(theme);
  window.localStorage.setItem("theme", theme);
}
