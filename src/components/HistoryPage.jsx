import React, { useState } from "react";
import { HistoryMenu } from "../components/HistoryMenu";
import NewOrder from './NewOrder';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const History = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const historyData = [
    {
      openTime: "2025.07.17",
      symbol: "Bonus",
      ticket: "",
      type: "",
      volume: "",
      openPrice: "",
      sl: "",
      tp: "",
      closeTime: "",
      price: "0.00",
      commission: "0.00",
      fee: "",
    },
  ];

  const footerData = {
    profit: "0.00",
    credit: "10,000.00",
    deposit: "0.00",
    withdrawal: "0.00",
    balance: "10,000.00",
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
  };

  const closeMenu = () => {
    setMenuPosition(null);
    setShowSubmenu(false);
  };

  const handleNewOrderClick = () => {
    setShowNewOrder(true);
    closeMenu();
  };

  const exportData = (type) => {
    const worksheet = XLSX.utils.json_to_sheet(historyData);
    XLSX.utils.sheet_add_json(worksheet, [footerData], { origin: -1 });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "History");

    if (type === "excel") {
      const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      saveAs(new Blob([buffer], { type: "application/octet-stream" }), "history.xlsx");
    } else if (type === "csv") {
      const csv = XLSX.utils.sheet_to_csv(worksheet);
      saveAs(new Blob([csv], { type: "text/csv;charset=utf-8;" }), "history.csv");
    } else if (type === "html") {
      const html = XLSX.utils.sheet_to_html(worksheet);
      saveAs(new Blob([html], { type: "text/html;charset=utf-8;" }), "history.html");
    }
    setShowDropdown(false);
  };

  return (
    <div
      className=" bg-white dark:bg-zinc-900 text-black dark:text-white mt-2 relative"
      onContextMenu={handleRightClick}
    >
      {/* Download Statement Button */}
      <div className=" relative inline-block">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-sm  mb-2 font-medium text-blue-600  hover:bg-blue-50 dark:hover:bg-zinc-800"
        >
          Download Statement
        </button>
        {showDropdown && (
          <div className="absolute z-50 mt-2 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded shadow-md w-30">
            <ul className="text-sm text-white">
              <li
                onClick={() => exportData("excel")}
                className="px-4 py-2 hover:bg-gray-100  text-black dark:text-white dark:hover:bg-zinc-700 cursor-pointer"
              >
                Excel
              </li>
              <li
                onClick={() => exportData("csv")}
                className="px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
              >
                CSV
              </li>
              <li
                onClick={() => exportData("html")}
                className="px-4 py-2 hover:bg-gray-100  text-black dark:text-white dark:hover:bg-zinc-700 cursor-pointer"
              >
                HTML
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Scrollable Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[1000px] text-sm text-left">
          <thead className="bg-gray-100 dark:bg-zinc-800 text-black dark:text-white font-medium">
            <tr>
              {[
                "Open Time", "Symbol", "Ticket", "Type", "Volume", "Open Price",
                "S/L", "T/P", "Close Time", "Price", "Commission", "Fee"
              ].map((header) => (
                <th key={header} className="px-4 py-2 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {historyData.map((row, idx) => (
              <tr key={idx} className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700">
                <td className="px-4 py-2">{row.openTime}</td>
                <td className="px-4 py-2">{row.symbol}</td>
                <td className="px-4 py-2">{row.ticket}</td>
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2">{row.volume}</td>
                <td className="px-4 py-2">{row.openPrice}</td>
                <td className="px-4 py-2">{row.sl}</td>
                <td className="px-4 py-2">{row.tp}</td>
                <td className="px-4 py-2">{row.closeTime}</td>
                <td className="px-4 py-2">{row.price}</td>
                <td className="px-4 py-2">{row.commission}</td>
                <td className="px-4 py-2">{row.fee}</td>
              </tr>
            ))}

            {/* Footer Row */}
            <tr className="bg-gray-100 dark:bg-zinc-800 text-black dark:text-white font-semibold">
              <td className="px-4 py-2" colSpan={12}>
                <div className="flex flex-wrap justify-start gap-x-6">
                  <span>Profit: <span className="font-normal">{footerData.profit}</span></span>
                  <span>Credit: <span className="font-normal">{footerData.credit}</span></span>
                  <span>Deposit: <span className="font-normal">{footerData.deposit}</span></span>
                  <span>Withdrawal: <span className="font-normal">{footerData.withdrawal}</span></span>
                  <span>Balance: <span className="font-normal">{footerData.balance}</span></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Context Menu */}
      {menuPosition && (
        <HistoryMenu
          x={menuPosition.x}
          y={menuPosition.y}
          onClose={closeMenu}
          onColumnHover={setShowSubmenu}
          showSubmenu={showSubmenu}
          onNewOrderClick={handleNewOrderClick}
        />
      )}

      {/* Modal */}
      {showNewOrder && (
        <NewOrder onClose={() => setShowNewOrder(false)} initialTab="new" />
      )}
    </div>
  );
};
