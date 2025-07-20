import React from 'react';

export const History = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-blue-100 text-gray-700 font-medium">
          <tr>
            <th className="px-4 py-2 border">Open Time</th>
            <th className="px-4 py-2 border">Symbol</th>
            <th className="px-4 py-2 border">Ticket</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Volume</th>
            <th className="px-4 py-2 border">Open Price</th>
            <th className="px-4 py-2 border">S/L</th>
            <th className="px-4 py-2 border">T/P</th>
            <th className="px-4 py-2 border">Close Time</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Commission</th>
            <th className="px-4 py-2 border">Fee</th>
            <th className="px-4 py-2 border">Swap</th>
            <th className="px-4 py-2 border">Profit</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          <tr className="bg-white">
            <td className="px-4 py-2 border">2025.07.1...</td>
            <td className="px-4 py-2 border text-gray-600">Bonus</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border text-right">0.00</td>
            <td className="px-4 py-2 border text-right">0.00</td>
            <td className="px-4 py-2 border text-right">0.00</td>
            <td className="px-4 py-2 border text-right font-medium">10,000.00</td>
          </tr>
          {/* Footer row */}
          <tr className="bg-gray-100 font-semibold">
            <td className="px-4 py-2 border" colSpan={14}>
              <div className="flex flex-wrap justify-start gap-x-6">
                <span>Profit: <span className="font-normal">0.00</span></span>
                <span>Credit: <span className="font-normal">10,000.00</span></span>
                <span>Deposit: <span className="font-normal">0.00</span></span>
                <span>Withdrawal: <span className="font-normal">0.00</span></span>
                <span>Balance: <span className="font-normal">10,000.00</span></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
