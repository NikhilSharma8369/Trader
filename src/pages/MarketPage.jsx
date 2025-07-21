import React from "react";
import SymbolRow from "../components/SymbolRow";

const symbols = ["EUR/USD", "USD/JPY", "GBP/USD", "BTC/USD", "ETH/USD"];

const MarketPage = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Market Watch</h1>
      <div className="space-y-2">
        {symbols.map((symbol, i) => (
          <SymbolRow key={i} symbol={symbol} />
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
