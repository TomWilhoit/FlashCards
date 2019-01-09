import React from 'react';
import Timer from '../Timer';
import { shallow } from 'enzyme';
import App from '../App';

describe('Timer', () => {
  let wrapper;
  beforeEach(() => {
  wrapper = shallow(
    <Timer/>
    );
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      seconds: 5
  });
});

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }); 
  
  it('should fire eachTick')
  wrapper.instance().eachTick().toHaveBeenCalled()
  

  
  // it('should call startTimer', () => {
  //   wrapper.instance().startTimer = jest.fn();
  //   wrapper.update();
  //   wrapper.find('.start-btn').simulate('click');
  //   expect(wrapper.instance().startTimer()).toBeCalled();
  // });

});