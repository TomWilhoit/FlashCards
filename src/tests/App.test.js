import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme'


describe('App', () => {
  let wrapper;
  



beforeEach(() => {
  localStorage.setItem('savedQuestions', '[{}, {}, {},]');
  wrapper = shallow(
    <App />
  )
});

afterEach(() => {
  localStorage.clear();
}); 


it('should update local storage', () => {
  let savedArray = [{}, {}, {}];
  wrapper.setState({ savedArray, questionIndex: 0 });
  expect(wrapper.state().savedArray.length).toEqual(3);
  wrapper.instance().saveToStorage();
  let savedQuestions = JSON.parse(localStorage.getItem('savedQuestions')).length;
  expect(savedQuestions).toEqual(4);
}); 

it('should have a proper default state', () => {
  expect(wrapper.state()).toEqual({
    questions: [],
    shouldRestart: false,
    questionIndex: 0,
    savedArray: [],
    wrongArray: []
  }); 
});

it('should match the snapshot with all data passed in correctly', () => {
  expect(wrapper).toMatchSnapshot();
});



// it('should pull from local storage', () => {
//   let returnedArray = wrapper.instance().pullFromStorage();
//   expect(returnedArray).toEqual('[{}, {}, {},]');
// }); 




// it('should change state when finish game is ran', () => {
//     wrapper.instance().finishGame = jest.fn();
//     wrapper.update();
//     expect(wrapper.instance().state()).toEqual();
//   }):




})