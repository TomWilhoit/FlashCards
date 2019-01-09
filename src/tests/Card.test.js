import React from 'react';
import Timer from '../Timer';
import { shallow } from 'enzyme';
import Card from '../Card';
import App from '../App';

global.localStorage = require('../setupTests')
global.alert = ()=>{return true};
let wrapper;

describe('Card', () => {
  let incrementQuestionIndexMock = jest.fn();
  let finishGameMock = jest.fn();

  beforeEach(() => {
  wrapper = shallow(
    <Card 
    finishGame={finishGameMock}
    incrementQuestionIndex={incrementQuestionIndexMock}
     />
    );
  });

  it('should invoke falseGuess', () => {
    wrapper.setProps({saveToStorage:()=>{}});

    wrapper.instance().falseGuess();

    
  })

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      correctClicked: false,
      questionOrder: 1
    });
  });

  it('should randomizer', ()=>{
    expect(wrapper.state('questionOrder')).toEqual(1);
    wrapper.instance().questionOrderRandomizer();
    expect(wrapper.state('questionOrder')).not.toBeNull();
  });

  it('should alert when correct guess', ()=>{
    wrapper.setProps({shouldRestart:true})
    expect(wrapper.instance().correctGuess()).toEqual(true);
  });
  
  it('should show next question if wrong', ()=>{
    wrapper.setProps({shouldRestart:false})
    wrapper.instance().correctGuess();
    expect(wrapper.instance().correctGuess()).toEqual(true);
    expect(finishGameMock).toHaveBeenCalled();
    expect(incrementQuestionIndexMock).toHaveBeenCalled();

  })

});
