import React from 'react';
import Counter from '../Counter';
import { shallow } from 'enzyme';

describe('Counter', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Counter/>
      )
    });
    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })
