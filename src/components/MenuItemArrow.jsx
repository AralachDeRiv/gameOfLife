import React from "react";

const MenuItemArrow = ({ displayed, size = 40 }) => {
  return (
    <div className="container-display-menu-item-btn">
      <svg
        height={`${size}px`}
        viewBox="0 -960 960 960"
        width={`${size}px`}
        fill="#585858"
        style={{ transform: displayed ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
      </svg>
    </div>
  );
};

export default MenuItemArrow;
