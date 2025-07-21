import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

const SymbolRow = ({ symbol = "EUR/USD" }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    e.preventDefault();
    setPosition({ x: e.pageX, y: e.pageY });
    setMenuVisible(true);
  };

  const menuOptions = [
    { label: "+ New Order", onClick: () => alert("New Order for " + symbol) },
    { label: "Profit / Margin Calculator" },
    { label: "Open in New Tab" },
    { label: "Tick Chart", disabled: true },
    { label: "Market Depth", disabled: true },
    { label: "Options Board", disabled: true },
    { label: "Specification" },
    { label: "Popup Prices" },
    { label: "Hide" },
    { label: "Show All" },
  ];

  return (
    <div className="relative">
      <div
        className="p-2 hover:bg-gray-800 cursor-pointer"
        onClick={handleClick}
      >
        {symbol}
      </div>

      <ContextMenu
        visible={menuVisible}
        position={position}
        options={menuOptions}
        onClose={() => setMenuVisible(false)}
      />
    </div>
  );
};

export default SymbolRow;
