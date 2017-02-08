import React, { Component, PropTypes } from 'react';

import {
  Ai,
  Rule
} from './../../factory';

import {
  PLAYER_ONE,
  PLAYER_TWO
} from './constants';

class Board extends Component {
  static propTypes = {
    isSinglePLayer: PropTypes.bool.isRequired,
    onClickCancelGame: PropTypes.func.isRequired
  }

  state = {
    isGameOver: false,

    grid: {
      0: {
        0: false,
        1: false,
        2: false
      },
      1: {
        0: false,
        1: false,
        2: false
      },
      2: {
        0: false,
        1: false,
        2: false
      }
    },

    hasAWinner: false,
    playerTurn: PLAYER_ONE
  }

  isAiTurn() {
    const { isSinglePLayer } = this.props;
    const { playerTurn } = this.state;

    if (playerTurn === PLAYER_TWO && isSinglePLayer) {
      return true;
    }

    return false;
  }

  onClickBoardItem(xAxis, yAxis) {
    let {
      grid,
      playerTurn
    } = this.state;

    if (!!grid[xAxis][yAxis]) {
      return;
    }

    grid[xAxis][yAxis] = playerTurn;

    const hasAWinner = Rule.isAWin(grid);
    const isGameOver = Rule.isGameOver(grid);

    if (hasAWinner || isGameOver) {
      setTimeout(() => {
        this.onClickRestart();
      }, 3000);
    } else {
      playerTurn = playerTurn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE
    }

    this.setState({
      isGameOver: !hasAWinner && isGameOver,
      grid,
      hasAWinner: hasAWinner,
      playerTurn
    });

    setTimeout(function() {
      if (this.isAiTurn()) {
        setTimeout(() => {
          const nextAiMove = Ai.nextMove(grid);

          this.onClickBoardItem(nextAiMove.xAxis, nextAiMove.yAxis);
        }, 2000);
      }
    }.bind(this));
  }

  onClickRestart() {
    this.setState({
      isGameOver: false,
      grid: {
        0: {
          0: false,
          1: false,
          2: false
        },
        1: {
          0: false,
          1: false,
          2: false
        },
        2: {
          0: false,
          1: false,
          2: false
        }
      },

      hasAWinner: false,
      playerTurn: PLAYER_ONE
    });
  }

  getPLayerName() {
    const { playerTurn } = this.state;

    if (this.isAiTurn()) {
      return 'Jarvis';
    }

    return `Player ${playerTurn === PLAYER_ONE ? 'one' : 'two'}`;
  }

  render() {
    const { onClickCancelGame } = this.props;

    const {
      isGameOver,
      hasAWinner
    } = this.state;

    if (isGameOver) {
      return <h1>GAME OVER!</h1>;
    }

    if (hasAWinner) {
      return (
        <h1 className="tt-boardCell-winnerLabel">
          {this.getPLayerName()} WON!!!!
        </h1>
      );
    }

    return (
      <div className="tt-board-container tt-alignCenter">
        <h2 className="tt-board-header">
          {this.getPLayerName()} turn
        </h2>

        <div className="tt-board">
          {this.renderBoard()}
        </div>

        <ul className="tt-list tt-alignCenter">
          <li>
            <a
              className="tt-link"
              onClick={this.onClickRestart.bind(this)} >
              Restart
            </a>
          </li>

          <li>
            <a
              className="tt-link"
              onClick={onClickCancelGame} >
              Quit
            </a>
          </li>
        </ul>
      </div>
    );
  }

  renderBoard() {
    const { grid } = this.state;
    const canPlay = !this.isAiTurn();

    return Object
      .keys(grid)
      .map((row, xAxis) => {
        const items = Object.keys(grid[row]).map((item, yAxis) => {
          let classNames = ['tt-boardCell'];
          let itemContent;

          if (!!xAxis) {
            classNames.push('tt-boardCell-borderTop');
          }

          if (!!yAxis) {
            classNames.push('tt-boardCell-borderLeft');
          }

          if (!!grid[xAxis][yAxis]) {
            itemContent = (
              <span className="tt-boardCell-content">
                {grid[xAxis][yAxis] === PLAYER_ONE ? 'x' : 'o'}
              </span>
            );
          }

          return (
            <div
              key={yAxis}
              className={classNames.join(' ')}
              onClick={canPlay && this.onClickBoardItem.bind(this, xAxis, yAxis)}>
              {itemContent}
            </div>
          );
        });

      return (
        <div
          key={xAxis}
          className="tt-boardRow">
          {items}
        </div>
      );
    });
  }
}

export default Board;
