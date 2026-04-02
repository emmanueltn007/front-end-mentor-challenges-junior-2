import { useTheme } from "../hooks/ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";

function Header() {
  const { isDarkMode } = useTheme()
  return (
    <header className="flex flex-col md:flex-row md:justify-between z-100">
      <div>
        <h1 className={`text-3xl font-bold ${isDarkMode ? "text-[hsl(0,100%,100%)]" : "text-[hsl(230,17%,14%)]"}`}>Social Media Dashboard</h1>
        <p className={`font-bold ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>Total Followers: 23,004</p>
      </div>
      <hr className="md:hidden border-t-2 border-[hsl(228,12%,44%)]" />
      <div className="flex items-center max-md:justify-between gap-4">
        <p className={`font-bold ${isDarkMode ? "text-[hsl(230,22%,74%)]" : "text-[hsl(228,12%,44%)]"}`}>Dark Mode</p>
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default Header;
