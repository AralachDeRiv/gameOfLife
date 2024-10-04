import React, { useState } from "react";
import MenuItemTitle from "./MenuItemTitle";

const MenuInfo = () => {
  const [displayContent, setDisplayContent] = useState(false);

  return (
    <div className="menu-item info-container">
      <MenuItemTitle
        title={"Info"}
        displayFunction={() => setDisplayContent((prev) => !prev)}
        displayContent={displayContent}
      />
      {displayContent && (
        <>
          <p>
            Conway's Game of Life is a cellular automaton where a grid of cells
            evolves over time based on simple rules. Each cell is either alive
            or dead, and its state in the next generation depends on its
            neighbors. A live cell with 2 or 3 live neighbors stays alive, while
            fewer or more leads to death. A dead cell with exactly 3 live
            neighbors becomes alive. The game, despite its simplicity, can
            produce complex and fascinating patterns.
          </p>
          <p className="aside">
            Note: If the grid doesn't fit perfectly, try resizing the window
            slightly. The algorithm is quite basic and not very efficient, so
            the larger the window, the more resources it will consume. Adjust
            the speed if necessary.
          </p>
        </>
      )}
    </div>
  );
};

export default MenuInfo;
