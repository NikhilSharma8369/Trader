import React, { useState } from 'react';
import SymbolMenu from './SymbolMenu';

export const Positions = () => {
  const [symbolMenuPos, setSymbolMenuPos] = useState(null);

  return (
    <>
      <table className="w-full h-[170px] relative text-left text-zinc-500">
        <thead className="text-zinc-400 border-b border-zinc-700">
          <tr>
            <th
              className="py-2 relative cursor-pointer"
              onClick={(e) => {
                const rect = e.target.getBoundingClientRect();
                setSymbolMenuPos({ x: rect.left, y: rect.bottom });
              }}
            >
              Symbol
            </th>
            <th>ID</th>
            <th>Time</th>
            <th>Type</th>
            <th>Volume</th>
            <th>Price</th>
            <th>S/L</th>
            <th>T/P</th>
            <th>Swap</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {[1, 2, 3].map((i) => (
            <tr key={i} className="text-sm">
              <td className="py-2">XAUUSD</td>
              <td>1154553823</td>
              <td>2025.07.17 07:30:21</td>
              <td>Sell</td>
              <td>0.01</td>
              <td>3348.01</td>
              <td></td>
              <td></td>
              <td>-4.36</td>
              <td>-4.59</td>
            </tr>
          ))}
        </tbody>
      </table>

      <SymbolMenu pos={symbolMenuPos} onClose={() => setSymbolMenuPos(null)} />
    </>
  );
};
