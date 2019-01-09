import React from 'react';
import Timer from '../Timer';
import { shallow } from 'enzyme';
import Card from '../Card';
import App from '../App';

let wrapper;

describe('Card', () => {
 
  beforeEach(() => {
  wrapper = shallow(
    <Card/>
    );
  });
  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      correctClicked: false,
      questionOrder: 1
    });
  });
});
