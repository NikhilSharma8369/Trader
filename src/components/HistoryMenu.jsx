import React from "react";

export const HistoryMenu = ({ x, y, onClose, onColumnHover, showSubmenu }) => {
  const mainOptions = [
    "New Order", "Positions", "Deals", "Orders", "Orders & Deals", "Today",
    "Last 3 Days", "Last Week", "Last Month", "Last 3 Months", "Last 6 Months",
    "Last Year", "All History", "Custom Period", "Columns"
  ];

  const columnOptions = ["Ticket", "Open Time", "Close Time", "Commission", "Fee", "Swap", "Comment"];

  // Estimate height and adjust to prevent screen overflow
  const menuHeight = 480;
  const adjustedY = y - menuHeight < 10 ? 10 : y - menuHeight;

  return (
    <div
      className="absolute z-50 text-sm text-black dark:text-white bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded shadow-lg w-52"
      style={{ top: adjustedY, left: x }}
      onMouseLeave={onClose}
    >
      <ul>
        {mainOptions.map((item) => (
          <li
            key={item}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer relative"
            onMouseEnter={() => item === "Columns" && onColumnHover(true)}
            onMouseLeave={() => item === "Columns" && onColumnHover(false)}
          >
            {item}

            {item === "Columns" && showSubmenu && (
              <ul className="absolute -top-[150px] left-full ml-1 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded shadow-md w-40 z-50">
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
