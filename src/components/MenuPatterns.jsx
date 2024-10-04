import React, { useState } from "react";
import MenuItemTitle from "./MenuItemTitle";
import patterns from "../utils/patterns";

const MenuPatterns = ({ setPatternOnClick }) => {
  const [displayContent, setDisplayContent] = useState(false);

  return (
    <div className="menu-item menu-patterns-container">
      <MenuItemTitle
        title={"Patterns"}
        displayFunction={() => setDisplayContent((prev) => !prev)}
        displayContent={displayContent}
      />
      {displayContent && (
        <>
          <p>
            Click on one of the patterns here to display it on the grid by
            clicking on the screen.
          </p>
          <div className="patterns-container">
            {Object.entries(patterns).map((pattern, idx) => (
              <button key={idx} onClick={() => setPatternOnClick(pattern[1])}>
                {pattern[0]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MenuPatterns;
