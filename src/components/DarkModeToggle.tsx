import { FC } from "react";

interface darkModeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: FC<darkModeProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          onChange={toggleDarkMode}
          checked={isDarkMode}
        />
        <div
          className={`w-10 h-5 rounded-full ${
            isDarkMode ? "bg-blue-500" : "bg-gray-400"
          }`}
        >
          <div
            className={`h-5 w-5 rounded-full transform ${
              isDarkMode ? "translate-x-6" : ""
            } bg-white shadow-md`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
