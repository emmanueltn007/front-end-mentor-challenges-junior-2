import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const handleDarkModeToggle = () => {
    setIsDarkMode(prev => {
      localStorage.setItem("theme", !prev ? "dark" : "light");
      return !prev
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleDarkModeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if(!context) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }
  return context;
}