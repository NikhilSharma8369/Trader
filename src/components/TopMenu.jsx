import { useState } from "react";
import { Menu, Languages } from "lucide-react";

const languages = [
  "English", "Türkçe", "Bahasa Indonesia", "Bahasa Melayu",
  "日本語", "Português", "اردو", "Deutsch"
];

export default function TopMenu({ username = "BMP", userId = "280233" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const toggleMainMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (!newState) {
        setLangOpen(false); // 
      }
      return newState;
    });
  };

  return (
    <div className="relative bg-zinc-900 border-b border-zinc-700 px-4 py-2 flex justify-end items-center z-50">
      
      <button onClick={toggleMainMenu}>
        <Menu className="text-white w-5 h-5" />
      </button>

      {menuOpen && (
        <div className="absolute right-2 top-10 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg w-60 text-white z-50">
          {/* User info */}
          <div className="p-3 border-b border-zinc-700">
            <p className="font-semibold">Hi {username}</p>
            <p className="text-xs text-gray-400">{userId}</p>
          </div>

          {/* Main dropdown menu */}
          <ul className="divide-y divide-zinc-700 relative">
            <li className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"> Switch Account</li>
            <li className="px-4 py-2 hover:bg-zinc-700 cursor-pointer"> Light Mode</li>

            {/* Language*/}
            <li
              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer flex justify-between items-center relative"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span>English</span>
              <Languages size={16} />

              {/*Language submenu  */}
              {langOpen && (
                <ul
                  className="absolute right-[100%] top-0 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg w-40 z-[9999] mr-1"
                  style={{ minWidth: "160px" }}
                >
                  {languages.map((lang) => (
                    <li
                      key={lang}
                      className="px-3 py-2 text-sm hover:bg-zinc-800 cursor-pointer"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">Basic Mode</li>
            <li className="px-4 py-2 hover:bg-red-700 text-red-400 cursor-pointer">Log Out</li>
          </ul>
        </div>
      )}
    </div>
  );
}
