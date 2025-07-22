import React, { useState } from "react";

export default function NewOrder({ onClose }) {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-auto">
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="bg-zinc-900 rounded-lg shadow-xl w-[600px] p-6 text-white">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-zinc-700 pb-2">
            <h2 className="text-lg font-semibold">Order</h2>
            <button onClick={onClose} className="text-xl font-bold text-white">&times;</button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mt-4 border-b border-zinc-700">
            <button
              onClick={() => setActiveTab("new")}
              className={`pb-1 ${activeTab === "new"
                ? "text-blue-400 font-medium border-b-2 border-blue-400"
                : "text-zinc-400"
              }`}
            >
              New position
            </button>
            <button
              onClick={() => setActiveTab("calculator")}
              className={`pb-1 ${activeTab === "calculator"
                ? "text-blue-400 font-medium border-b-2 border-blue-400"
                : "text-zinc-400"
              }`}
            >
              Profit / Margin Calculator
            </button>
          </div>

          {/* Body */}
          {activeTab === "calculator" ? (
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <label className="block font-medium text-red-500">* Symbol:</label>
                <select className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 mt-1 text-white">
                  <option>AUDCAD, Australian Dollar vs Canadian Dollar</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-red-500">* Volume:</label>
                <input
                  type="text"
                  defaultValue="0.03"
                  className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 mt-1 text-white"
                />
              </div>

              <div>
                <label className="block">Opening price:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue="0.00000"
                    className="flex-1 border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-white"
                  />
                  <button className="text-xs text-blue-400 hover:underline">Click to select</button>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label>Stop loss:</label>
                  <input
                    type="text"
                    className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-white"
                    defaultValue="0.00000"
                  />
                  <div className="text-xs text-zinc-400 mt-1">Calculated profit (SL): <span className="text-white">0.00</span></div>
                </div>
                <div className="flex-1">
                  <label>Take profit:</label>
                  <input
                    type="text"
                    className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-white"
                    defaultValue="0.00000"
                  />
                  <div className="text-xs text-zinc-400 mt-1">Calculated profit (TP): <span className="text-white">0.00</span></div>
                </div>
              </div>

              <div className="text-white font-medium mt-2">Calculated margin: <span className="text-white">0.00</span></div>

              <div className="text-center text-2xl mt-6 font-semibold text-white">
                0.89110 / 0.89135
              </div>
            </div>
          ) : (
            <>
              {/*New Position Form */}
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <label className="block font-medium text-red-500">* Symbol:</label>
                  <select className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 mt-1 text-white">
                    <option>AUDCAD, Australian Dollar vs Canadian Dollar</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium">Type:</label>
                  <select className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 mt-1 text-white">
                    <option>Market Execution</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <label className="block font-medium w-1/4">Volume:</label>
                  <input type="text" value="0.03" className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-white" />
                  <span>3,000 AUDCAD</span>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block">Stop Loss:</label>
                    <input type="text" className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-blue-400" value="0.00000" />
                  </div>
                  <div className="flex-1">
                    <label className="block">Take Profit:</label>
                    <input type="text" className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-white" value="0.00000" />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label>Calculated profit:</label>
                    <div className="text-red-400">-1,953.93</div>
                  </div>
                  <div className="flex-1">
                    <label>Calculated profit:</label>
                    <div className="text-white">0.00</div>
                  </div>
                </div>

                <div>
                  <label className="block">Fill Policy:</label>
                  <input
                    type="text"
                    className="w-full border border-zinc-600 bg-zinc-700 rounded px-2 py-1 text-gray-400"
                    value="Immediate or Cancel"
                    disabled
                  />
                </div>

                <div>
                  <label className="block">Comment:</label>
                  <input type="text" className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-white" />
                </div>

                <div>
                  <label className="block">Margin:</label>
                  <select className="w-full border border-zinc-600 bg-zinc-800 rounded px-2 py-1 text-white">
                    <option>Buy position: 0.89181</option>
                  </select>
                </div>
              </div>

              {/* Price and Action */}
              <div className="text-center text-2xl mt-6 font-medium text-white">
                0.89156 / 0.89181
              </div>

              <div className="flex justify-center gap-6 mt-6 mb-2">
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 text-sm">
                  Sell by Market
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 text-sm">
                  Buy by Market
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
