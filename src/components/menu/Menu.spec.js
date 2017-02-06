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

    it('it should keep the singlePlayer state flag to false', () => {
      wrapper.instance().onClickMultiPlayer();

      expect(wrapper.instance().state.singlePlayer)
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

    it('it should set the singlePlayer state flag to true', () => {
      wrapper.instance().onClickSinglePlayer();

      expect(wrapper.instance().state.singlePlayer)
        .toEqual(true);
    });
  });

  describe('#onResetState()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu />)

      wrapper.setState({
        isPlaying: true,
        singlePlayer: true
      });
    });

    it('it should set the isPlying state flag to false', () => {
      wrapper.instance().onResetState();

      expect(wrapper.instance().state.isPlaying)
        .toEqual(false);
    });

    it('it should set the singlePlayer state flag to true', () => {
      wrapper.instance().onResetState();

      expect(wrapper.instance().state.singlePlayer)
        .toEqual(false);
    });
  });
});
