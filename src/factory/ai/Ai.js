import _ from 'lodash';
import { Rule } from './../../factory';
import { PLAYER_ONE } from './../../components/board/constants';

const getAllLeftCell = (grid) => {
  let leftCells = [];

  Object
    .keys(grid)
    .map((row, xAxis) => {
      Object.keys(grid[row]).map((item, yAxis) => {
        if (!grid[xAxis][yAxis]) {
          leftCells.push({xAxis, yAxis});
        }
      });
    });

  return leftCells;
};

const getMovesToBlock = (grid, leftCells) => {
  return leftCells.filter((cell) => {
    let futureGrid = JSON.parse(JSON.stringify(grid));

    futureGrid[cell.xAxis][cell.yAxis] = PLAYER_ONE;

    return Rule.isAWin(futureGrid);
  });
};

const nextMove = (grid) => {
  const leftCells = getAllLeftCell(grid);

  const movesToBlock = getMovesToBlock(grid, leftCells);

  if (!movesToBlock.length) {
    return _.sample(leftCells);
  }

  return _.sample(movesToBlock);
};

export default {
  nextMove
};
