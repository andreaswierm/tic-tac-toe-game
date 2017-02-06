import React, { Component } from 'react';

class Menu extends Component {
  state = {
    isPlaying: false,
    singlePlayer: false
  }

  onClickMultiPlayer() {
    this.setState({
      isPlaying: true,
      singlePlayer: false
    });
  }

  onClickSinglePlayer() {
    this.setState({
      isPlaying: true,
      singlePlayer: true
    });
  }

  onResetState() {
    this.setState({
      isPlaying: false,
      singlePlayer: false
    });
  }

  render() {
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
