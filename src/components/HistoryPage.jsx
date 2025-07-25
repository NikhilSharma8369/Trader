import React, { useState, useRef } from "react";
import { HistoryMenu } from "../components/HistoryMenu";

export const History = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleRightClick = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.pageX, y: e.pageY });
  };

  const closeMenu = () => {
    setMenuPosition(null);
    setShowSubmenu(false);
  };

  return (
    <div
      className="overflow-x-auto p-4 bg-white dark:bg-zinc-900 text-black dark:text-white "
      onContextMenu={handleRightClick}
    >
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-zinc-800 text-black dark:text-white font-medium">
          <tr>
            {[
              "Open Time", "Symbol", "Ticket", "Type", "Volume", "Open Price",
              "S/L", "T/P", "Close Time", "Price", "Commission", "Fee", "Swap", "Profit"
            ].map((header) => (
              <th key={header} className="px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700 text-black dark:text-white">
            <td className="px-4 py-2">2025.07.1...</td>
            <td className="px-4 py-2">Bonus</td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2 text-right">0.00</td>
            <td className="px-4 py-2 text-right">0.00</td>
            <td className="px-4 py-2 text-right">0.00</td>
            <td className="px-4 py-2 text-right font-medium">10,000.00</td>
          </tr>

          {/* Footer row */}
          <tr className="bg-gray-100 dark:bg-zinc-800 text-black dark:text-white font-semibold">
            <td className="px-4 py-2" colSpan={14}>
              <div className="flex flex-wrap justify-start gap-x-6">
                <span>Profit: <span className="font-normal">0.00</span></span>
                <span>Credit: <span className="font-normal">10,000.00</span></span>
                <span>Deposit: <span className="font-normal">0.00</span></span>
                <span>Withdrawal: <span className="font-normal">0.00</span></span>
                <span>Balance: <span className="font-normal">10,000.00</span></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Right-click menu */}
      {menuPosition && (
        <HistoryMenu
          x={menuPosition.x}
          y={menuPosition.y}
          onClose={closeMenu}
          onColumnHover={setShowSubmenu}
          showSubmenu={showSubmenu}
        />
      )}
    </div>
  );
};
