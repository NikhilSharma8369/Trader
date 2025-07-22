import React, { useState, useEffect, useRef } from "react";
import NewOrder from "./NewOrder";
import TradingViewWidget from "../components/TradingViewWidget";
import {
  ChevronDown, Clock, GalleryHorizontal, Layers, LayoutGrid, ListChecks,
  ListPlus, MousePointerClick, Square, Wifi, Plus, Calculator, ExternalLink,
  LineChart, AlignVerticalJustifyCenter, BarChart3, FileText, Maximize2,
  EyeOff, Eye, Star, Grid2X2, SortAsc, Columns2
} from "lucide-react";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";

export default function TradingDashboard() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("newOrder");

  const openModal = (tab = "newOrder") => {
    setActiveTab(tab);
    setShowModal(true);
  };

  return (
    <div className="flex max-h-screen text-white bg-black border border-zinc-800 overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 bg-zinc-900 flex flex-col items-center justify-between py-4 border-r border-zinc-800">
        <div className="space-y-6 mt-8">
          <ListPlus className="w-5 h-5" />
          <GalleryHorizontal className="size-5" />
          <Layers className="w-5 h-5" />
          <MousePointerClick className="size-5" />
          <ListChecks className="w-5 h-5" />
          <Clock className="w-5 h-5" />
        </div>
        <div className="space-y-6">
          <Wifi className="w-5 h-5" />
          <LayoutGrid className="size-5" />
          <Square className="size-5 text-black" fill="zinc-700" />
          <span className="text-[10px] px-1">En</span>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          {/* Chart Section */}
          <div className="flex-1 bg-black">
            <TradingViewWidget />
          </div>

          {/* Trading Panel */}
          <div className="w-[350px] divide-y divide-gray-500 p-4 bg-zinc-900 space-y-4 border-l border-zinc-800">
            <div className="p-2">
              <div className="text-sm font-medium">XAUUSD</div>
              <div className="flex justify-between text-[13px] text-zinc-500">
                <h1>Gold & Dollar</h1>
                <h1 className="flex gap-x-1">Metal <ChevronDown className="size-3" /></h1>
              </div>
            </div>

            <div className="space-y-2 py-2">
              <div className="flex items-center justify-between bg-zinc-800 p-2 rounded-md">
                <button className="bg-zinc-700 px-3 py-1 rounded text-white text-sm">
                  Sell<br />3350.89
                </button>
                <span className="text-black bg-white px-6 py-1 rounded">17</span>
                <button className="bg-zinc-700 px-3 py-1 rounded text-white text-sm">
                  Buy<br />3350.06
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <button className="bg-white text-black text-xs px-9 py-1 rounded">Market</button>
                  <button className="bg-zinc-700 text-white text-xs px-9 py-1 rounded">Limit</button>
                  <button className="bg-zinc-700 text-white text-xs px-9 py-1 rounded">Stop</button>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Volume</label>
                  <input className="bg-zinc-800 w-full p-2 rounded text-white text-sm" defaultValue="0.01" />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs text-zinc-400 mb-1">Take Profit</label>
                    <input className="bg-zinc-800 w-full p-2 rounded text-white text-sm" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-zinc-400 mb-1">Stop Loss</label>
                    <input className="bg-zinc-800 w-full p-2 rounded text-white text-sm" />
                  </div>
                </div>
              </div>

              <button className="bg-red-600 w-full py-1 rounded text-white text-xl">
                Sell<br />
                <span className="text-yellow-100 text-xs">0.01 Lots XAUUSD @ Market</span>
              </button>
            </div>
          </div>
        </div>

        {/* Position Panel */}
        <div className="w-full max-h-full text-xs bg-zinc-900 border-t border-zinc-800">
          <div className="flex px-4 pt-2 pb-1 justify-between border-b border-zinc-700">
            <div className="text-sm flex space-x-6">
              <div className="font-medium pb-1">
                <Link to="/dashboard" className={location.pathname === "/dashboard" ? "text-blue-600 font-bold" : "text-gray-700"}>Position</Link>
              </div>
              <div className="text-zinc-400">
                <NavLink to="/dashboard/pending" className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-gray-700")}>Pending</NavLink>
              </div>
              <div className="text-zinc-400">
                <NavLink to="/dashboard/history" className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-gray-700")}>History</NavLink>
              </div>
            </div>
            <div className="flex gap-x-6 text-zinc-400">
              <div>Balance <br /><span className="text-white">U$$10066.3</span></div>
              <div>Equity <br /><span className="text-white">U$$10066.3</span></div>
              <div>Margin <br /><span className="text-white">U$$6.70</span></div>
              <div>Margin Free <br /><span className="text-white">U$$10066.3</span></div>
              <div>Margin Level <br /><span className="text-white">150194.79%</span></div>
              <div>Profit & Lost <br /><span className="text-white">U$$-3.56</span></div>
            </div>
          </div>
          <div className="px-4 pb-2 overflow-x-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Quote Table */}
      <QuoteTable onNewOrder={() => openModal("newOrder") } onOpenPMC={() => openModal("pmc")} />

      {showModal && <NewOrder onClose={() => setShowModal(false)} initialTab={activeTab} />}
    </div>
  );
}

const QuoteTable = ({ onNewOrder, onOpenPMC }) => {
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
      label: "Hide",
      icon: <EyeOff className="w-4 h-4 mr-2" />,
      action: () => {
        setHideMenuOptions(true);
        setHideDataRows(false);
      },
    },
    {
      label: "Hide All",
      icon: <EyeOff className="w-4 h-4 mr-2" />,
      action: () => {
        setHideMenuOptions(true);
        setHideDataRows(true);
      },
    },
    {
      label: "Show All",
      icon: <Eye className="w-4 h-4 mr-2" />,
      action: () => {
        setHideMenuOptions(false);
        setHideDataRows(false);
      },
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
      className="relative bg-zinc-900 text-white text-sm p-4 border-l border-l-zinc-700 overflow-hidden w-[300px] transition-all duration-300"
      onContextMenu={handleRightClick}
    >
      <table className="w-full text-left mt-6 transition-all duration-300 cursor-pointer">
        <thead>
          <tr className="text-gray-300 text-sm">
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
                className="border-b border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
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
                <td className="px-2 py-2 align-top text-right font-semibold text-white">
                  3352.<span className="text-[15px]">34</span>
                  <div className="text-xs text-gray-400">L:1332.30</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {!hideMenuOptions && menuPos && (
        <div
          className="absolute z-50 bg-zinc-900 text-white border border-zinc-700 rounded shadow-md w-64 text-sm"
          style={{ top: `${menuPos.y}px`, left: `${menuPos.x}px` }}
        >
          {menuOptions.map((opt, i) => (
            <div
              key={i}
              className="flex items-center px-4 py-2 hover:bg-zinc-800 cursor-pointer"
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
};