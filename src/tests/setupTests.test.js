import React from 'react';
import { shallow } from 'enzyme';
global.localStorage = require('../setupTests');

describe('setUpTests', () => {


it('Should invoke the set Item function', () => {
  // console.log('set',localStorage)
  localStorage.setItem('a','some string')
  expect(localStorage.getItem('a')).toEqual('some string')
})

it('Should set and get item', () => {
  // console.log('get',localStorage)
  localStorage.setItem('b','another string')
  expect(localStorage.getItem('b')).toEqual('another string')
})

})