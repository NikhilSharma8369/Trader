// src/components/ContextMenu.jsx
import React from "react";

const ContextMenu = ({ x, y, options, onClose }) => {
  return (
    <div
      className="absolute z-50 bg-zinc-900 text-white border border-zinc-700 rounded shadow-md w-48 text-sm"
      style={{ top: y, left: x }}
      onClick={onClose}
    >
      {options.map((opt, i) => (
        <div
          key={i}
          className="px-4 py-2 hover:bg-zinc-800 cursor-pointer"
          onClick={() => {
            opt.onClick();
            onClose();
          }}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
