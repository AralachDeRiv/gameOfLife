import React, { useState, useRef, useEffect } from "react";
import MenuItemTitle from "./MenuItemTitle";

const MenuHandleBorders = ({ setBlockedBorders, blockedBorders }) => {
  const [displayContent, setDisplayContent] = useState(false);
  const lateralInput = useRef(null);
  const verticalInput = useRef(null);

  useEffect(() => {
    if (displayContent) {
      lateralInput.current.checked = blockedBorders.lateral;
      verticalInput.current.checked = blockedBorders.vertical;
    }
  }, [displayContent]);

  return (
    <div className="menu-item handle-border-container">
      <MenuItemTitle
        title={"Handle borders"}
        displayFunction={() => setDisplayContent((prev) => !prev)}
        displayContent={displayContent}
      />

      {displayContent && (
        <>
          <p>Block lateral and/or vertical borders</p>
          <div className="handle-borders-inputs-container">
            <div className="input-checkbox-container">
              <input
                ref={lateralInput}
                type="checkbox"
                id="block-lateral"
                onChange={(e) =>
                  setBlockedBorders((prev) => {
                    return { ...prev, lateral: e.target.checked };
                  })
                }
              />
              <label htmlFor="block-lateral">lateral</label>
            </div>
            <div className="input-checkbox-container">
              <input
                ref={verticalInput}
                type="checkbox"
                id="block-vertical"
                onChange={(e) =>
                  setBlockedBorders((prev) => {
                    return { ...prev, vertical: e.target.checked };
                  })
                }
              />
              <label htmlFor="block-vertical">vertical</label>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuHandleBorders;
