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
  
  
  render() {
    return (
      <div className="App">
        <Banner/>
        <CardCountainer
        questionObj= {this.state.questions[this.state.questionIndex]}
        incrementQuestionIndex = {this.incrementQuestionIndex}/>
        <Timer shouldRestart={this.shouldRestart}/>
        <Counter/>

      </div>
    );
  }
}

export default App;
