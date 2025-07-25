import React, { useState } from "react";

export default function SymbolMenu({ pos, onClose }) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  if (!pos) return null;

  return (
    <div
      className="absolute z-50 bg-white dark:bg-zinc-800 text-black dark:text-white border border-gray-300 dark:border-zinc-700 shadow-md rounded w-48"
      style={{ top: pos.y, left: pos.x }}
      onMouseLeave={onClose}
    >
      <ul className="text-sm select-none">
        <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer">
          New Order
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer">
          Close Position
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer">
          Modify or Delete
        </li>

        {/* Columns Submenu */}
        <li
          className="relative px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer flex justify-between items-center"
          onMouseEnter={() => setShowSubmenu(true)}
          onMouseLeave={() => setShowSubmenu(false)}
        >
          Columns <span className="ml-2">▶</span>

          {showSubmenu && (
            <ul className="absolute -top-[150px] left-full ml-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 shadow-md rounded w-40 z-50">
              {["Ticket", "Time", "Swap", "Profit", "Comment"].map((item) => (
                <li
                  key={item}
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
