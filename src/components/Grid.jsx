import React from "react";
import { putPatternOnGrid } from "../utils/gameOfLifeFunctions";

const Grid = ({ cellsRef, setRender, patternOnClick, setPatternOnClick }) => {
  const handleCellClick = (row, col) => {
    if (patternOnClick) {
      const newGrid = putPatternOnGrid(
        row,
        col,
        patternOnClick,
        cellsRef.current
      );
      cellsRef.current = newGrid;
      setPatternOnClick(null);
    } else {
      cellsRef.current[row][col] = !cellsRef.current[row][col];
    }
    setRender({});
  };

  return (
    <>
      <div className="grid-container">
        {cellsRef.current.map((row, indexRow) =>
          row.map((cell, indexCol) => (
            <div
              key={`${indexRow}-${indexCol}`}
              className="cell"
              data-alive={cell}
              data-row={indexRow}
              data-col={indexCol}
              onClick={() => handleCellClick(indexRow, indexCol)}
            ></div>
          ))
        )}
      </div>
    </>
  );
};

export default Grid;
