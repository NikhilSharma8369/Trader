import React from 'react';

export const History = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full  text-sm text-left">
        <thead className="bg-zinc-900 text-white font-medium">
          <tr>
            <th className="px-4 py-2 ">Open Time</th>
            <th className="px-4 py-2 ">Symbol</th>
            <th className="px-4 py-2 ">Ticket</th>
            <th className="px-4 py-2 ">Type</th>
            <th className="px-4 py-2 ">Volume</th>
            <th className="px-4 py-2 ">Open Price</th>
            <th className="px-4 py-2 ">S/L</th>
            <th className="px-4 py-2 ">T/P</th>
            <th className="px-4 py-2 ">Close Time</th>
            <th className="px-4 py-2 ">Price</th>
            <th className="px-4 py-2 ">Commission</th>
            <th className="px-4 py-2 ">Fee</th>
            <th className="px-4 py-2 ">Swap</th>
            <th className="px-4 py-2 ">Profit</th>
          </tr>
        </thead>
        <tbody className="text-white">
          <tr className="bg-zinc-900">
            <td className="px-4 py-2 ">2025.07.1...</td>
            <td className="px-4 py-2  text-white">Bonus</td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2 "></td>
            <td className="px-4 py-2  text-right">0.00</td>
            <td className="px-4 py-2  text-right">0.00</td>
            <td className="px-4 py-2  text-right">0.00</td>
            <td className="px-4 py-2  text-right font-medium">10,000.00</td>
          </tr>
          {/* Footer row */}
          <tr className="bg-zinc-900 font-semibold">
            <td className="px-4 py-2" colSpan={14}>
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
