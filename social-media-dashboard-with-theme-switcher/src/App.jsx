import { useState } from "react";
import Header from "./components/Header";

function App () {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  }


  return (
    <div className="relative">
     {isDarkMode && (
        <div className="absolute h-2/5 w-screen bg-[hsl(230,17%,14%)] -z-50 rounded-b-3xl"></div>
      )
     }
     <Header isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
    </div>
  );
}

export default App