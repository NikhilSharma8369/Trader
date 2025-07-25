// File: Dashboard.jsx
import React, { useState } from "react";
import NewOrder from "./NewOrder";
import TradingViewWidget from "../components/TradingViewWidget";
import TopMenu from './TopMenu';
import QuoteTable from "../components/QuoteTable";
import {
  ChevronDown, Clock, GalleryHorizontal, Layers, LayoutGrid, ListChecks,
  ListPlus, MousePointerClick, Square, Wifi
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
    <div className="flex flex-col lg:flex-row h-screen text-black dark:text-white bg-white dark:bg-black overflow-hidden">

      {/* Sidebar */}
      <aside className="lg:w-16 w-full lg:h-full flex lg:flex-col flex-row justify-between lg:items-center items-center bg-gray-200 dark:bg-zinc-900 py-2 px-4 lg:py-4 lg:px-0 border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-zinc-800">
        <div className="flex lg:flex-col gap-4 lg:mt-8">
          <ListPlus className="w-5 h-5" />
          <GalleryHorizontal className="size-5" />
          <Layers className="w-5 h-5" />
          <MousePointerClick className="size-5" />
          <ListChecks className="w-5 h-5" />
          <Clock className="w-5 h-5" />
        </div>
        <div className="flex lg:flex-col gap-4">
          <Wifi className="w-5 h-5" />
          <LayoutGrid className="size-5" />
          <Square className="size-5 text-black dark:text-white" />
          <span className="text-[10px] px-1">En</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Chart + Panel */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">

          {/* Chart Section */}
          <div className="flex-1 min-h-[300px] bg-white dark:bg-black">
            <TradingViewWidget />
          </div>

          {/* Trading Panel */}
          <div className="lg:w-[350px] w-full divide-y divide-gray-300 dark:divide-gray-500 p-4 bg-gray-100 dark:bg-zinc-900 space-y-4 border-t lg:border-t-0 lg:border-l border-gray-300 dark:border-zinc-800">
            <div className="p-2">
              <div className="text-sm font-medium">XAUUSD</div>
              <div className="flex justify-between text-[13px] text-gray-600 dark:text-zinc-500">
                <h1>Gold & Dollar</h1>
                <h1 className="flex gap-x-1">Metal <ChevronDown className="size-3" /></h1>
              </div>
            </div>

            <div className="space-y-4 py-2">
              <div className="flex items-center justify-between bg-gray-300 dark:bg-zinc-800 p-2 rounded-md">
                <button className="bg-gray-200 dark:bg-zinc-700 px-3 py-1 rounded text-sm">
                  Sell<br />3350.89
                </button>
                <span className="text-white bg-black dark:bg-white dark:text-black px-6 py-1 rounded">17</span>
                <button className="bg-gray-200 dark:bg-zinc-700 px-3 py-1 rounded text-sm">
                  Buy<br />3350.06
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-black text-white dark:bg-white dark:text-black text-xs py-2 rounded">Market</button>
                <button className="flex-1 bg-gray-200 dark:bg-zinc-700 text-xs py-2 rounded">Limit</button>
                <button className="flex-1 bg-gray-200 dark:bg-zinc-700 text-xs py-2 rounded">Stop</button>
              </div>

              <div>
                <label className="block text-xs text-gray-600 dark:text-zinc-400 mb-1">Volume</label>
                <input className="bg-gray-200 dark:bg-zinc-800 w-full p-2 rounded text-sm" defaultValue="0.01" />
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs mb-1">Take Profit</label>
                  <input className="bg-gray-200 dark:bg-zinc-800 w-full p-2 rounded text-sm" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs mb-1">Stop Loss</label>
                  <input className="bg-gray-200 dark:bg-zinc-800 w-full p-2 rounded text-sm" />
                </div>
              </div>

              <button className="bg-red-600 w-full py-2 rounded text-white text-sm">
                Sell<br />
                <span className="text-yellow-100 text-xs">0.01 Lots XAUUSD @ Market</span>
              </button>
            </div>
          </div>
        </div>

        {/* Position Panel */}
        <section className="bg-gray-100 dark:bg-zinc-900 border-t border-gray-300 dark:border-zinc-800">
          <div className="flex flex-wrap px-4 pt-2 pb-1 justify-between border-b border-gray-300 dark:border-zinc-700 text-xs gap-y-2">
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard" className={location.pathname === "/dashboard" ? "text-blue-600 font-bold" : "text-gray-600 dark:text-gray-400"}>Position</Link>
              <NavLink to="/dashboard/pending" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600 dark:text-gray-400"}>Pending</NavLink>
              <NavLink to="/dashboard/history" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600 dark:text-gray-400"}>History</NavLink>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-600 dark:text-zinc-400">
              <div>Balance <br /><span className="text-black dark:text-white">U$$10066.3</span></div>
              <div>Equity <br /><span className="text-black dark:text-white">U$$10066.3</span></div>
              <div>Margin <br /><span className="text-black dark:text-white">U$$6.70</span></div>
              <div>Margin Free <br /><span className="text-black dark:text-white">U$$10066.3</span></div>
              <div>Margin Level <br /><span className="text-black dark:text-white">150194.79%</span></div>
              <div>Profit & Lost <br /><span className="text-black dark:text-white">U$$-3.56</span></div>
            </div>
          </div>

          <div className="px-4 pb-2 overflow-x-auto">
            <Outlet />
          </div>
        </section>
      </main>

      {/* Quote Table */}
      <div className="hidden lg:block">
        <QuoteTable onNewOrder={() => openModal("newOrder")} onOpenPMC={() => openModal("pmc")} />
      </div>

      {showModal && <NewOrder onClose={() => setShowModal(false)} initialTab={activeTab} />}
    </div>
  );
}
