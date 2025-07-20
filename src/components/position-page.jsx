import React from 'react'

export const Positions = () => {
  return (
    <>
      <table className="w-full h-[190px] relative text-left text-white">
              <thead className="text-zinc-400 border-b border-zinc-700">
                <tr>
                  <th className="py-2">Symbol</th>
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
                    <td  >Sell</td>
                    <td>0.01</td>
                    <td>3348.01</td>
                    <td></td>
                    <td></td>
                    <td>-4.36</td>
                    <td  >-4.59</td>
                  </tr>
                ))}
              </tbody>
            </table>
    
    </>
  )
}
