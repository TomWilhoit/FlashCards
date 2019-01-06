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
      shouldRestart: false
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
  
  
  render() {
    return (
      <div className="App">
        <Banner/>
        <CardCountainer
        id={this.state.questions[0].id}
        question={this.state.questions[0].question}
        correctAnswer={this.state.questions[0].correctAnswer}
        falseAnswer1={this.state.questions[0].falseAnswer1}
        falseAnswer2={this.state.questions[0].falseAnswer2}
        />
        <Timer shouldRestart={this.shouldRestart}/>
        <Counter/>

      </div>
    );
  }
}

export default App;
