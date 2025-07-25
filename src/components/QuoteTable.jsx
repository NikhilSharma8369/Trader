// File: src/components/QuoteTable.jsx

import React, { useState, useEffect, useRef } from "react";
import TopMenu from "./TopMenu";
import {
  Plus, Calculator, ExternalLink, LineChart, AlignVerticalJustifyCenter,
  BarChart3, FileText, Maximize2, EyeOff, Eye, Star, Grid2X2,
  SortAsc, Columns2
} from "lucide-react";

export default function QuoteTable({ onNewOrder, onOpenPMC }) {
  const rows = Array.from({ length: 9 });
  const [menuPos, setMenuPos] = useState(null);
  const [hideMenuOptions, setHideMenuOptions] = useState(false);
  const [hideDataRows, setHideDataRows] = useState(false);
  const tableRef = useRef();

  const handleRightClick = (e) => {
    e.preventDefault();
    const bounds = tableRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const rightOffset = bounds.right - e.clientX;
    const leftOffset = e.clientX - bounds.left;
    const adjustedX = rightOffset < 200 ? leftOffset - 200 : leftOffset;

    setHideMenuOptions(false);
    setMenuPos({ x: adjustedX, y });
  };

  const handleClose = () => setMenuPos(null);

  const menuOptions = [
    { label: "New Order", icon: <Plus className="w-4 h-4 mr-2" />, action: onNewOrder },
    { label: "Profit/Margin Calculator", icon: <Calculator className="w-4 h-4 mr-2" />, action: onOpenPMC },
    { label: "Open in new tab", icon: <ExternalLink className="w-4 h-4 mr-2" /> },
    { label: "Tick Chart", icon: <LineChart className="w-4 h-4 mr-2" /> },
    { label: "Market Depth", icon: <AlignVerticalJustifyCenter className="w-4 h-4 mr-2" /> },
    { label: "Options Board", icon: <BarChart3 className="w-4 h-4 mr-2" /> },
    { label: "Specification", icon: <FileText className="w-4 h-4 mr-2" /> },
    { label: "Popup Prices", icon: <Maximize2 className="w-4 h-4 mr-2" /> },
    {
      label: "Hide", icon: <EyeOff className="w-4 h-4 mr-2" />,
      action: () => { setHideMenuOptions(true); setHideDataRows(false); }
    },
    {
      label: "Hide All", icon: <EyeOff className="w-4 h-4 mr-2" />,
      action: () => { setHideMenuOptions(true); setHideDataRows(true); }
    },
    {
      label: "Show All", icon: <Eye className="w-4 h-4 mr-2" />,
      action: () => { setHideMenuOptions(false); setHideDataRows(false); }
    },
    { label: "Show Favorites", icon: <Star className="w-4 h-4 mr-2" /> },
    { label: "Symbols", icon: <Grid2X2 className="w-4 h-4 mr-2" /> },
    { label: "Sort", icon: <SortAsc className="w-4 h-4 mr-2" /> },
    { label: "Columns", icon: <Columns2 className="w-4 h-4 mr-2" /> },
  ];

  useEffect(() => {
    const listener = () => handleClose();
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);

  return (
    <div
      ref={tableRef}
      className="relative bg-white dark:bg-zinc-900 text-black dark:text-white text-sm p-4 border-l border-gray-300 dark:border-zinc-700 w-full sm:w-[300px] overflow-x-auto"
      onContextMenu={handleRightClick}
    >
      <TopMenu />

      <table className="w-full text-left mt-6 cursor-pointer">
        <thead>
          <tr className="text-gray-600 dark:text-gray-300 text-sm">
            <th className="px-2 pb-2">Symbol</th>
            <th className="px-2 pb-2">Bid</th>
            <th className="px-2 pb-2">Ask</th>
          </tr>
        </thead>
        <tbody>
          {!hideDataRows &&
            rows.map((_, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                <td className="px-2 py-2 align-top">
                  <div className="text-xs text-gray-400">13.66</div>
                  <div className="flex items-center gap-1 font-semibold">
                    <span>XAUUSD</span>
                    <span className="text-green-400 text-xs">📈</span>
                    <span className="text-xs text-gray-400">17</span>
                  </div>
                </td>
                <td className={`px-2 py-2 align-top text-right font-semibold ${index % 2 === 0 ? "text-green-400" : "text-red-500"}`}>
                  3352.<span className="text-[15px]">34</span>
                  <div className="text-xs text-gray-400">L:1331.34</div>
                </td>
                <td className="px-2 py-2 align-top text-right font-semibold text-black dark:text-white">
                  3352.<span className="text-[15px]">34</span>
                  <div className="text-xs text-gray-400">L:1332.30</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Context Menu */}
      {!hideMenuOptions && menuPos && (
        <div
          className="absolute z-50 bg-white dark:bg-zinc-900 text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded shadow-lg w-64 text-sm"
          style={{
            top: `${menuPos.y}px`,
            left: `${menuPos.x}px`,
            maxWidth: "90vw"
          }}
        >
          {menuOptions.map((opt, i) => (
            <div
              key={i}
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
              onClick={() => {
                opt.action?.();
                handleClose();
              }}
            >
              {opt.icon}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
