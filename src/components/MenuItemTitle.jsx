import React from "react";
import MenuItemArrow from "./MenuItemArrow";

const MenuItemTitle = ({ title, displayFunction, displayContent }) => {
  return (
    <div className="item-title-container" onClick={displayFunction}>
      <h2>{title}</h2>
      <MenuItemArrow displayed={displayContent} />
    </div>
  );
};

export default MenuItemTitle;
