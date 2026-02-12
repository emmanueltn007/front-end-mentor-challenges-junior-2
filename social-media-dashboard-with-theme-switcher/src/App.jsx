import { useState } from "react";
import Header from "./components/Header";

function App () {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  }


  return (
    <>
     <Header isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
    </>
  );
}

export default App