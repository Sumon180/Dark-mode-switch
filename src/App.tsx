import { useEffect, useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className=" dark:bg-slate-900">
      <nav className="max-w-7xl mx-auto flex items-center justify-between  dark:text-white">
        <div>Menu</div>
        <div>
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </nav>
      <div className="bg-[#F7F7F7] dark:bg-[#1E252B] duration-300 dark:text-slate-200">
        Home
      </div>
    </div>
  );
};

export default App;
