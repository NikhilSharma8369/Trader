import { useState } from "react";
import { Menu, Languages } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; 

const languages = [
  "English", "Türkçe", "Bahasa Indonesia", "Bahasa Melayu",
  "日本語", "Português", "اردو", "Deutsch"
];

export default function TopMenu({ username = "BMP", userId = "280233" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

  const toggleMainMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (!newState) setLangOpen(false);
      return newState;
    });
  };

  return (
    <div className="relative bg-gray-100 dark:bg-zinc-900 border-b border-gray-300 dark:border-zinc-700 px-4 py-2 flex justify-end items-center z-50">
      <button onClick={toggleMainMenu}>
        <Menu className="text-black dark:text-white w-5 h-5" />
      </button>

      {menuOpen && (
        <div className="absolute right-2 top-10 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md shadow-lg w-60 text-black dark:text-white z-50">
          <div className="p-3 border-b border-gray-300 dark:border-zinc-700">
            <p className="font-semibold">Hi {username}</p>
            <p className="text-xs text-gray-400">{userId}</p>
          </div>

          <ul className="divide-y divide-gray-300 dark:divide-zinc-700 relative">
            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer">
              Switch Account
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </li>

           
            <li
              className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer flex justify-between items-center relative"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span>English</span>
              <Languages size={16} />
              {langOpen && (
                <ul className="absolute right-[100%] top-0 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-md shadow-lg w-40 z-[9999] mr-1">
                  {languages.map((lang) => (
                    <li
                      key={lang}
                      className="px-3 py-2 text-sm hover:bg-gray-200 dark:hover:bg-zinc-800 cursor-pointer"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer">
              Basic Mode
            </li>
            <li className="px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-400 cursor-pointer">
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
