import { useState } from "react";

export function useDarkModeTheme () {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  }


    return {
        isDarkMode,
        handleDarkModeToggle
    };
}