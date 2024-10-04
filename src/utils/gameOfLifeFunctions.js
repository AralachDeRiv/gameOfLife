export function createGrid() {
  const cellSize = 11; // coté de 10px + gap de 1px
  const columns = Math.floor(window.innerWidth / cellSize);
  const rows = Math.floor(window.innerHeight / cellSize);
  const newCells = [];

  for (let row = 0; row < rows; row++) {
    let newRow = [];
    for (let col = 0; col < columns; col++) {
      newRow.push(false); // Chaque cellule est initialisée comme morte
    }
    newCells.push(newRow);
  }
  return newCells;
}

const getSurroundingCells = (grid, row, col) => {
  const numRows = grid.length;
  const numCols = grid[0].length;

  const surroudingCells = [
    grid.at(row).at(col - 1),
    grid.at(row).at(col + 1 - numCols),
    grid.at(row + 1 - numRows).at(col - 1),
    grid.at(row + 1 - numRows).at(col),
    grid.at(row + 1 - numRows).at(col + 1 - numCols),
    grid.at(row - 1).at(col - 1),
    grid.at(row - 1).at(col),
    grid.at(row - 1).at(col + 1 - numCols),
  ];

  return surroudingCells;
};

export function getFutureCellStatus(grid, cell, row, col) {
  const surroudingCells = getSurroundingCells(grid, row, col);
  const aliveSurroudingCells = surroudingCells.reduce(
    (numberOfAlifeCells, cell) => numberOfAlifeCells + cell,
    0
  );
  return (
    aliveSurroudingCells === 3 || (cell === true && aliveSurroudingCells === 2)
  );
}

export function updateGrid(
  grid,
  blockedBorders = { lateral: false, vertical: false }
) {
  const gridCopy = JSON.parse(JSON.stringify(grid));
  const maxCol = gridCopy[0].length - 1;
  const maxRow = gridCopy.length - 1;

  const isBorderBlocked = (colIndex, rowIndex) => {
    if (blockedBorders["lateral"] && colIndex === maxCol) {
      return true;
    }
    if (blockedBorders["vertical"] && rowIndex === maxRow) {
      return true;
    }
    return false;
  };

  const updatedGrid = grid.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      if (isBorderBlocked(colIndex, rowIndex)) {
        return cell; // Retourne la cellule telle quelle
      }
      return getFutureCellStatus(gridCopy, cell, rowIndex, colIndex);
    });
  });

  return updatedGrid;
}

export function putPatternOnGrid(row, col, patternPositions, grid) {
  const gridCopy = JSON.parse(JSON.stringify(grid));
  const numRows = gridCopy.length;
  const numCols = gridCopy[0].length;

  const finalPositions = patternPositions.map((position) => [
    position[0] + row,
    position[1] + col,
  ]);

  finalPositions.forEach((position) => {
    let [row, col] = position;
    row = row < 0 ? numRows + row : row;
    col = col < 0 ? numCols + col : col;

    gridCopy[row][col] = true;
  });

  return gridCopy;
}
