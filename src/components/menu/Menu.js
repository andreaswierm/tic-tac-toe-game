import React, { Component } from 'react';
import { Board } from './../';

class Menu extends Component {
  state = {
    isPlaying: false,
    isSinglePlayer: false
  }

  onClickMultiPlayer() {
    this.setState({
      isPlaying: true,
      isSinglePlayer: false
    });
  }

  onClickSinglePlayer() {
    this.setState({
      isPlaying: true,
      isSinglePlayer: true
    });
  }

  onResetState() {
    this.setState({
      isPlaying: false,
      isSinglePlayer: false
    });
  }

  render() {
    const {
      isPlaying,
      isSinglePlayer
    } = this.state;

    if (isPlaying) {
      return (
        <Board
          isSinglePLayer={isSinglePlayer}
          onClickCancelGame={this.onResetState.bind(this)} />
      );
    }

    return (
      <ul className="tt-list tt-alignCenter">
        <li>
          <h1>
            Menu
          </h1>
        </li>

        <li>
          <a
            className="tt-link"
            onClick={this.onClickSinglePlayer.bind(this)} >
            Signle player
          </a>
        </li>

        <li>
          <a
            className="tt-link"
            onClick={this.onClickMultiPlayer.bind(this)} >
            Multi player
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
