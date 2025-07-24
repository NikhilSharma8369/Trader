import React from "react";

export const HistoryMenu = ({ x, y, onClose, onColumnHover, showSubmenu }) => {
  const mainOptions = [
    "New Order", "Positions", "Deals", "Orders", "Orders & Deals", "Today",
    "Last 3 Days", "Last Week", "Last Month", "Last 3 Months", "Last 6 Months",
    "Last Year", "All History", "Custom Period", "Columns"
  ];

  const columnOptions = ["Ticket", "Open Time", "Close Time", "Commission", "Fee", "Swap", "Comment"];

  return (
    <div
      className="absolute z-50 text-white rounded shadow-md w-52"
      style={{ top: y, left: x }}
      onMouseLeave={onClose}
    >
      <ul className=" text-sm">
        {mainOptions.map((item) => (
          <li
            key={item}
            className="px-4 py-2 bg-zinc-800 -top-[450px] hover:bg-zinc-700 cursor-pointer relative"
            onMouseEnter={() => item === "Columns" && onColumnHover(true)}
            onMouseLeave={() => item === "Columns" && onColumnHover(false)}
          >
            {item}
            {item === "Columns" && showSubmenu && (
              <ul className="absolute -top-[150px] left-full ml-1 bg-zinc shadow-md bg-zinc-800 rounded w-40 z-50">
                {columnOptions.map((col) => (
                  <li key={col} className="px-3 py-2 hover:bg-zinc-700">
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
