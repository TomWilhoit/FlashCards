import React, { Component } from 'react';
import CardCountainer from './CardContainer';
import Timer from './Timer';
import Banner from './Banner';
import Counter from './Counter';
import Card from './Card';
import FlashCardDataSet from './FlashCardDataSet';
import './css/App.css';

class App extends Component {
  constructor() {
    super();


    this.state = {
      questions: FlashCardDataSet,
      shouldRestart: false,
      questionIndex: 0,
      savedArray: [],
    }
  }
 
  shouldRestart = () => {
    if (this.state.shouldRestart===false) {
    this.setState({
      shouldRestart: true
    })
  } else{
    this.setState({
      shouldRestart: false
      })
    }
  }

  incrementQuestionIndex = () => {
    const newIndex = this.state.questionIndex + 1;
    this.setState({
      questionIndex: newIndex
    })
  }

  saveToStorage = () => {
    let [...savedQuestions] = this.state.savedArray
    savedQuestions.push(this.state.questions[this.state.questionIndex])
    localStorage.setItem('savedQuestions',JSON.stringify(savedQuestions))
    this.setState({
      savedArray: savedQuestions
    })

      

    }
  
  
  
  render() {
    return (
      <div className="App">
        <Banner/>
        <CardCountainer
        questionObj= {this.state.questions[this.state.questionIndex]}
        incrementQuestionIndex = {this.incrementQuestionIndex}
        saveToStorage = {this.saveToStorage}/>
        <Timer shouldRestart={this.shouldRestart}/>
        <Counter
        questionIndex = {this.state.questionIndex}/>

      </div>
    ) };
  }

export default App;
