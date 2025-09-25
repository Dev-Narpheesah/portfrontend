import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { getInitialTheme, applyTheme } from "./utils/theme";

const theme = getInitialTheme();
applyTheme(theme);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
