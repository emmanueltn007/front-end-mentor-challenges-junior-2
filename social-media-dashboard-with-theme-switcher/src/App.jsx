
import Header from "./components/Header";
import SocialMediaOverview from "./components/SocialMediaOverview";
import SocialMediaOverviewToday from "./components/SocialMediaOverviewToday";
import { useTheme } from "./hooks/ThemeContext";

function App () {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen px-8 py-8 md:px-32 relative flex flex-col gap-8 md:gap-4 ${isDarkMode ? "bg-[hsl(230,17%,14%)]" : "bg-[hsl(0,100%,100%)]"}`}>

     <div className={`absolute left-0 top-0 h-1/5 md:h-2/5 w-screen rounded-b-3xl ${isDarkMode ? "bg-[hsl(232,19%,15%)]" : "bg-[hsl(225,100%,98%)]"}`}></div>

     <Header />
     <SocialMediaOverview />
     <SocialMediaOverviewToday />
    </div>
  );
}

export default App