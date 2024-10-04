import React from "react";

const RainbowGradientDefs = () => {
  return (
    <defs>
      <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF0000", stopOpacity: 1 }} />
        <stop
          offset="16.67%"
          style={{ stopColor: "#FF7F00", stopOpacity: 1 }}
        />
        <stop
          offset="33.33%"
          style={{ stopColor: "#FFFF00", stopOpacity: 1 }}
        />
        <stop offset="50%" style={{ stopColor: "#00FF00", stopOpacity: 1 }} />
        <stop
          offset="66.67%"
          style={{ stopColor: "#00FFFF", stopOpacity: 1 }}
        />
        <stop
          offset="83.33%"
          style={{ stopColor: "#0000FF", stopOpacity: 1 }}
        />
        <stop offset="100%" style={{ stopColor: "#7F00FF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  );
};

export default RainbowGradientDefs;
