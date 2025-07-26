import React from "react";

export const HistoryMenu = ({ x, y, onClose, onColumnHover, showSubmenu, onNewOrderClick }) => {
  const mainOptions = [
    "New Order", "Positions", "Deals", "Orders", "Orders & Deals", "Today",
    "Last 3 Days", "Last Week", "Last Month", "Last 3 Months", "Last 6 Months",
    "Last Year", "All History", "Custom Period", "Columns"
  ];

  const columnOptions = ["Ticket", "Open Time", "Close Time", "Commission", "Fee", "Swap", "Comment"];

  // Force the menu to appear 100px from top, and prevent it from going off-screen horizontally
  const menuWidth = 208; // Tailwind w-52
  const windowWidth = window.innerWidth;
  const adjustedX = x + menuWidth > windowWidth ? windowWidth - menuWidth - 10 : x;
  const fixedTop = 100; // Force top to 100px always

  return (
    <div
      className="fixed z-50 text-sm text-black dark:text-white bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded shadow-lg w-52"
      style={{ top: fixedTop, left: adjustedX }}
      onMouseLeave={onClose}
    >
      <ul>
        {mainOptions.map((item) => (
          <li
            key={item}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer relative"
            onMouseEnter={() => item === "Columns" && onColumnHover(true)}
            onMouseLeave={() => item === "Columns" && onColumnHover(false)}
            onClick={() => {
              if (item === "New Order") {
                onNewOrderClick("new");
                onClose();
              }
            }}
          >
            {item}

            {item === "Columns" && showSubmenu && (
              <ul className="absolute -top-[220px] left-full ml-1 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded shadow-md w-40 z-50">
                {columnOptions.map((col) => (
                  <li
                    key={col}
                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    {col}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
