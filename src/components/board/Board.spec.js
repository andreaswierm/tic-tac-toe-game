import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

import {
  Ai,
  Rule
} from './../../factory';

import {
  PLAYER_ONE,
  PLAYER_TWO
} from './constants';

describe('Board', () => {
  describe('#onClickCancelGame()', () => {
    let onClickCancelGameSpy;
    let wrapper;

    beforeEach(() => {
      onClickCancelGameSpy = jest.fn();

      wrapper = shallow(
        <Board
          isSinglePLayer={false}
          onClickCancelGame={onClickCancelGameSpy} />
      );
    });

    it('should fire the callback when "Quit" is clicked', () => {
      wrapper.find('a[children="Quit"]').simulate('click');

      expect(onClickCancelGameSpy)
        .toBeCalled();
    });
  });

  describe('#onClickBoardItem()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Board
          isSinglePLayer={false}
          onClickCancelGame={jest.fn()} />
      );
    });

    it('should start on the first player turn', () => {
      expect(wrapper.find('.tt-board-header').text())
        .toEqual('Player one turn');
    });

    it('should select the position when the first user clicks', () => {
      wrapper.find('.tt-boardCell').at(0).simulate('click');

      expect(wrapper.instance().state.grid[0][0])
        .toEqual(PLAYER_ONE);
    });

    describe('when the first cell is already selected', () => {
      beforeEach(() => {
        wrapper.find('.tt-boardCell').at(0).simulate('click');
      });

      it('should be the second player turn', () => {
        expect(wrapper.find('.tt-board-header').text())
          .toEqual('Player two turn');
      });

      it('should select the second cell for the second player', () => {
        wrapper.find('.tt-boardCell').at(1).simulate('click');

        expect(wrapper.instance().state.grid[0][1])
          .toEqual(PLAYER_TWO);
      });

      it('should not select the cell for the second player', () => {
        wrapper.find('.tt-boardCell').at(0).simulate('click');

        expect(wrapper.instance().state.grid[0][0])
          .toEqual(PLAYER_ONE);
      });
    });

    describe('if the game is over', () => {
      beforeEach(() => {
        Rule.isGameOver = jest.fn().mockReturnThis(true);
      });

      it('should show Game Over', () => {
        wrapper.find('.tt-boardCell').at(0).simulate('click');

        expect(wrapper.text())
          .toEqual('GAME OVER!');
      });
    });

    describe('if there is a winner', () => {
      beforeEach(() => {
        Rule.isAWin = jest.fn().mockReturnThis(true);
      });

      it('should show the winner', () => {
        wrapper.find('.tt-boardCell').at(0).simulate('click');

        expect(wrapper.text())
          .toEqual('Player one WON!!!!');
      });
    });
  });
});
