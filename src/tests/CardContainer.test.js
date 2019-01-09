import React from 'react';
import Timer from '../Timer';
import { shallow } from 'enzyme';
import CardContainer from '../CardContainer'
import App from '../App'
import FlashCardDataSet from '../FlashCardDataSet'

const incrementQuestionIndexMock = jest.fn()
const saveToStorageMock = jest.fn()
const finishGameMock = jest.fn()

describe('CardContainer', () => {
  let wrapper;
  
  beforeEach(() => {
  wrapper = shallow(
    <CardContainer
        questions= {FlashCardDataSet}
        incrementQuestionIndex = {incrementQuestionIndexMock}
        saveToStorage = {saveToStorageMock}
        questionIndex = {0}
        shouldRestart={false}
        finishGame={finishGameMock}/>
    );
  });
  
  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  }); 
});
