import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { UserContext } from "../Context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Brand Logo & Greeting */}
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold tracking-tight">My App</span>
        <span className="text-gray-400">|</span>
        <p className="text-sm font-medium">
          Hello, <span className="font-semibold text-blue-500">{user || "User"}</span> 👋
        </p>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 active:scale-95 ${
          isDark
            ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-700"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
        }`}
      >
        <span>{isDark ? "🌞 Light Mode" : "🌚 Dark Mode"}</span>
      </button>
    </nav>
  );
}

export default Navbar;