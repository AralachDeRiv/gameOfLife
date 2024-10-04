import React from "react";
import RainbowGradientDefs from "./RainbowGradientDefs";

const DisplayMenuBtn = ({ size = 60, displayedMenu = false, onClick }) => {
  return (
    <div className="container-display-menu-btn" onClick={onClick}>
      <div className="icon-container">
        <svg
          height={`${size}px`}
          viewBox="0 -960 960 960"
          width={`${size}px`}
          stroke="#2e2e2e"
          strokeWidth="10"
          style={{
            transform: displayedMenu ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <RainbowGradientDefs />
          <path
            d="M576-480 352-704l56-56 288 288-288 288-56-56 224-224Z"
            fill="url(#gradientFill)"
          />
        </svg>
      </div>
    </div>
  );
};

export default DisplayMenuBtn;
