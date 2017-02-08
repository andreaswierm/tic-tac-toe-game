const checkForDiagonalLeftToRightWin = (grid) => {
  const topLeftCell = grid[0][0];

  if (!topLeftCell) {
    return false;
  }

  return (
    topLeftCell === grid[1][1] &&
    topLeftCell === grid[2][2]
  );
};

const checkForDiagonalRightToLeftWin = (grid) => {
  const topRightCell = grid[0][2];

  if (!topRightCell) {
    return false;
  }

  return (
    topRightCell === grid[1][1] &&
    topRightCell === grid[2][0]
  );
};


const checkForHorizontalWin = (grid, rowIndex) => {
  const firstCellValue = grid[rowIndex][0];

  if (!firstCellValue) {
    return false;
  }

  return (
    grid[rowIndex][1] === firstCellValue &&
    grid[rowIndex][2] === firstCellValue
  );
};

const checkForVerticalWin = (grid, columnIndex) => {
  const firstCellValue = grid[0][columnIndex];

  if (!firstCellValue) {
    return false;
  }

  return (
    grid[1][columnIndex] === firstCellValue &&
    grid[2][columnIndex] === firstCellValue
  );
};

const isAWin = (grid) => {
  return (
    checkForVerticalWin(grid, 0) ||
    checkForVerticalWin(grid, 1) ||
    checkForVerticalWin(grid, 2) ||
    checkForHorizontalWin(grid, 0) ||
    checkForHorizontalWin(grid, 1) ||
    checkForHorizontalWin(grid, 2) ||
    checkForDiagonalLeftToRightWin(grid) ||
    checkForDiagonalRightToLeftWin(grid)
  );
};

const isGameOver = (grid) => {
  let cells = [];

  Object
    .keys(grid)
    .map((row) => {
      Object
        .keys(grid[row])
        .map((cell) => {
          cells.push(grid[row][cell]);
        });
    });

  return cells.indexOf(false) < 0;
};

export default {
  isAWin,
  isGameOver
};
