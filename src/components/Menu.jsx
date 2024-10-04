import React from "react";
import MenuInfo from "./MenuInfo";
import MenuPatterns from "./MenuPatterns";
import MenuHandleBorders from "./MenuHandleBorders";

const Menu = ({ setBlockedBorders, blockedBorders, setPatternOnClick }) => {
  return (
    <div className="menu-container">
      <MenuInfo />
      <MenuHandleBorders
        // Besoin de passer la fonction de cette manière pour éviter une erreur
        setBlockedBorders={(prev) => setBlockedBorders(prev)}
        blockedBorders={blockedBorders}
      />
      <MenuPatterns setPatternOnClick={(prev) => setPatternOnClick(prev)} />
    </div>
  );
};

export default Menu;
