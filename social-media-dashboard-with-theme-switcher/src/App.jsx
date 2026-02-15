import { useState } from "react";
import Header from "./components/Header";
import SocialMediaOverview from "./components/SocialMediaOverview";
import SocialMediaOverviewToday from "./components/SocialMediaOverviewToday";

function App () {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  }


  return (
    <div className={`h-screen px-4 py-8 md:px-16 relative ${isDarkMode ? "bg-[hsl(230,17%,14%)]" : ""}`}>
     {/*isDarkMode && (
        <div className="absolute h-2/5 w-screen bg-[hsl(232,19%,100%)] -z-50 rounded-b-3xl"></div>
      )
     */}
     <Header isDarkMode={isDarkMode} handleDarkModeToggle={handleDarkModeToggle} />
     <SocialMediaOverview />
     <SocialMediaOverviewToday />
    </div>
  );
}

export default App