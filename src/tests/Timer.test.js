import React from 'react';
import Timer from '../Timer';
import { shallow } from 'enzyme';
import App from '../App';


global.alert = ()=> {
  
}

describe('Timer', () => {
  let wrapper;
  beforeEach(() => {
  wrapper = shallow(
    <Timer/>
    );
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      seconds: 900
  });
});

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }); 
  
  it('should have invoked eachTick', () => {
    expect(wrapper.state('seconds')).toEqual(900)
    wrapper.instance().startTimer();
    expect(wrapper.state('seconds')).not.toEqual(898);
  })

});