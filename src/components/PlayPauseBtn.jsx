import React from "react";
import RainbowGradientDefs from "./RainbowGradientDefs";

const PlayPauseBtn = ({ play = false, size = 50, onClick }) => {
  return (
    <div className="play-pause-btn icon-container" onClick={onClick}>
      <svg
        height={`${size}px`}
        width={`${size}px`}
        viewBox="0 -960 960 960"
        stroke="#2e2e2e"
        strokeWidth="10"
      >
        <RainbowGradientDefs />
        {play ? (
          <path
            d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"
            fill="url(#gradientFill)" // Utilise le gradient comme couleur de remplissage
          />
        ) : (
          <path
            d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"
            fill="url(#gradientFill)"
          />
        )}
      </svg>
    </div>
  );
};

export default PlayPauseBtn;
