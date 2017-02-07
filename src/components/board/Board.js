import React, { Component, PropTypes } from 'react';

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

    playerTurn: PLAYER_ONE
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

    this.setState({
      grid,
      playerTurn: playerTurn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE
    });
  }

  onClickRestart() {
    this.setState({
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

      playerTurn: PLAYER_ONE
    });
  }

  render() {
    const { onClickCancelGame } = this.props;
    const { playerTurn } = this.state;

    return (
      <div className="tt-board-container tt-alignCenter">
        <h2 className="tt-board-header">
          Player {playerTurn === PLAYER_ONE ? 'one' : 'two'} turn
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

    return Object.keys(grid).map((row, xAxis) => {
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
            onClick={this.onClickBoardItem.bind(this, xAxis, yAxis)}>
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
