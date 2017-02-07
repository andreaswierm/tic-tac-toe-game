import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  describe('#onClickMultiPlayer()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu />)
    });

    it('it should set the isPlying state flag to true', () => {
      wrapper.instance().onClickMultiPlayer();

      expect(wrapper.instance().state.isPlaying)
        .toEqual(true);
    });

    it('it should keep the isSinglePlayer state flag to false', () => {
      wrapper.instance().onClickMultiPlayer();

      expect(wrapper.instance().state.isSinglePlayer)
        .toEqual(false);
    });
  });

  describe('#onClickSinglePlayer()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu />)
    });

    it('it should set the isPlying state flag to true', () => {
      wrapper.instance().onClickSinglePlayer();

      expect(wrapper.instance().state.isPlaying)
        .toEqual(true);
    });

    it('it should set the isSinglePlayer state flag to true', () => {
      wrapper.instance().onClickSinglePlayer();

      expect(wrapper.instance().state.isSinglePlayer)
        .toEqual(true);
    });
  });

  describe('#onResetState()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu />)

      wrapper.setState({
        isPlaying: true,
        isSinglePlayer: true
      });
    });

    it('it should set the isPlying state flag to false', () => {
      wrapper.instance().onResetState();

      expect(wrapper.instance().state.isPlaying)
        .toEqual(false);
    });

    it('it should set the isSinglePlayer state flag to true', () => {
      wrapper.instance().onResetState();

      expect(wrapper.instance().state.isSinglePlayer)
        .toEqual(false);
    });
  });
});
