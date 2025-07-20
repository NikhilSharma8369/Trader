import {
  ArrowLeftRight,
  ChevronDown,
  Clock,
  GalleryHorizontal,
  LaptopMinimal,
  Layers,
  LayoutGrid,
  ListCheck,
  ListChecks,
  ListPlus,
  Menu,
  MousePointerClick,
  Square,
  Wifi
} from "lucide-react";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";

export default function TradingDashboard() {
  const location=useLocation()
 
  return (
    <div className="flex  max-h-screen  text-white bg-black border border-zinc-800">
      {/* Sidebar */}
      <div className="w-16 bg-zinc-900 flex flex-col items-center justify-between py-4  border-r border-zinc-800">
        <div className="space-y-6 mt-8">
          <ListPlus className="w-5 h-5 " />
          <GalleryHorizontal className="size-5" />
          <Layers className="w-5 h-5" />
          <MousePointerClick className="size-5" />
          <ListChecks className="w-5 h-5" />
          <Clock className="w-5 h-5" />
        </div>

        <div className="space-y-6">
          <Wifi className="w-5 h-5" />
          <LayoutGrid className="size-5 " />
          <Square className="size-5 text-black" fill="zinc-700" />
          <span className="text-[10px] px-1">En</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1  overflow-hidden">
        {/* Top Section */}
        <div className="flex flex-1 overflow-hidden">
          {/* Chart Area */}
          <div className="flex-1 flex-col">
            <div className="w-full h-10 bg-zinc-900 border-b border-b-zinc-700"></div>
            <div className="   border-r border-zinc-800"></div>
          </div>
          {/* Trading Panel */}
          <div className="w-[350px] divide-y divide-gray-500  p-4 bg-zinc-900 space-y-4 border-l border-zinc-800">
            <div className=" p-2">
              <div className="text-sm font-medium ">XAUUSD</div>
              <div className="flex justify-between text-[13px]  text-zinc-500">
                <h1>Gold & Dollar</h1>
                <h1 className="flex gap-x-1">
                  Metal <ChevronDown className="size-3"/>
                </h1>
              </div>

            </div>
            <div className="space-y-2 py-2">
            <div className="flex items-center justify-between bg-zinc-800 p-2 rounded-md">
              <button className="bg-zinc-700 px-3 py-1 rounded text-white text-sm">Sell<br />3350.89</button>
              <span className="text-black bg-white px-6 py-1 rounded" >17</span>
              <button className="bg-zinc-700 px-3 py-1 rounded text-white text-sm">Buy<br />3350.06</button>
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
            <button className="bg-red-600 w-full py-2 rounded text-white text-xl">
              Sell<br /><span className="text-yellow-100 text-xs">0.01 Lots XAUUSD @ Market</span>
            </button>
</div>

          </div>
        </div>

        {/* Positions Section */}
        <div className="w-full  max-h-full text-xs  bg-zinc-900 border-t border-zinc-800">
          <div className="flex px-4 pt-2 pb-1 justify-between border-b border-zinc-700">
            <div className=" text-sm flex space-x-6">
              <div className="font-medium  pb-1">
                <Link
                  to="/dashboard"
                  className={ 
                    location.pathname==="/dashboard" ? 'text-blue-600 font-bold' : 'text-gray-700'
                  }
                >
                  Position
                </Link>
              </div>
              <div className="text-zinc-400">
                <NavLink
                  to="/dashboard/pending"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-700'
                  }
                >
                  Pending
                </NavLink>
              </div>
              <div className="text-zinc-400">
                <NavLink
                  to="/dashboard/history"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-700'
                  }
                >
                  History
                </NavLink>
              </div>
            </div><div className="flex gap-x-6">
              <div className="text-zinc-400">Balance </div>
              <div className="text-zinc-400">Equity</div>
              <div className="text-zinc-400">Margin</div>
              <div className="text-zinc-400">Margin Free</div>
              <div className="text-zinc-400">Margin Level</div>
              <div className="text-zinc-400">Profit & Lost</div></div>
          </div>
          <div className="px-4 pb-2 overflow-x-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Right Table */}
      <QuoteTable/>
    </div>
  );
}




 

 
const QuoteTable = () => {
  const rows = Array.from({ length: 9 });

  return (
    <div className=" bg-zinc-900   text-white text-sm p-4  border-l   border-l-zinc-700 overflow-x-auto">
      <table className="w-full text-left "  >
        <thead>
          <tr className="text-gray-300 text-sm">
            <th className="px-2 pb-2">Symbol</th>
            <th className="px-2 pb-2 text-right">Bid</th>
            <th className="px-2 pb-2 text-right">Ask</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((_, index) => (
            <tr key={index} className="border-b border-b-zinc-600">
              {/* Symbol Column */}
              <td className="px-2 py-2 align-top">
                <div className="text-xs text-gray-400">13.66</div>
                <div className="flex items-center gap-1 font-semibold">
                  <span>XAUUSD</span>
                  <span className="text-green-400 text-xs">📈</span>
                  <span className="text-xs text-gray-400">17</span>
                </div>
              </td>

              {/* Bid Column */}
              <td
                className={`px-2 py-2 align-top text-right font-semibold ${
                  index % 2 === 0 ? 'text-green-400' : 'text-red-500'
                }`}
              >
                3352.<span className="text-[15px]">34</span>
                <div className="text-xs text-gray-400">L:1331.34</div>
              </td>

              {/* Ask Column */}
              <td className="px-2 py-2 align-top text-right font-semibold text-white">
                3352.<span className="text-[15px]">34</span>
                <div className="text-xs text-gray-400">L:1332.30</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

 

 