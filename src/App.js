import React, { Component } from 'react';
import CardCountainer from './CardContainer';
import Timer from './Timer';
import Banner from './Banner';
import Counter from './Counter';
import Card from './Card';
import FlashCardDataSet from './FlashCardDataSet';
import './css/Main.scss';


class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      shouldRestart: false,
      questionIndex: 0,
      savedArray: [],
      wrongArray: []
    }
  }

  finishGame = () => {
    if (this.state.questionIndex === 39){
      this.setState({
        shouldRestart: true
      })
    }
  }


  componentDidMount = () => {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/FlashCardDataSet")
    .then(results => results.json())
    .then((result) => {
      this.setState({
        questions: result.FlashCardDataSet
      })
    })
    .catch(err => {
      this.setState({error: err})
    })
  };

  shouldRestartGame = () => {
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
  
  pullFromStorage = () => {
    return JSON.parse(localStorage.getItem('savedQuestions'))
  }
  
  
  render() {
  let index = this.state.questionIndex 
  if(this.state.shouldRestart === false){ 
    return (
      <div className="App">
        <Banner/>
        <CardCountainer
        questions= {this.state.questions}
        incrementQuestionIndex = {this.incrementQuestionIndex}
        saveToStorage = {this.saveToStorage}
        questionIndex = {this.state.questionIndex}
        shouldRestart={this.state.shouldRestart}
        finishGame={this.finishGame}/>
        <Timer shouldRestartGame={this.shouldRestartGame}/>
        <Counter
        questionIndex = {this.state.questionIndex}/>
      </div>
    )} else {
      let wrongArray = this.pullFromStorage();
      return(
        <div className="return-questions">
          <h1 className="review-header">Let's Review!</h1>
          <button className="restart-game-btn" onClick={this.shouldRestartGame}>Restart the Game!</button>
          {wrongArray.map(element => {
            return(
              <Card
                id={element.id}
                question={element.question}
                correctAnswer={element.correctAnswer}
                incrementQuestionIndex = {this.incrementQuestionIndex}
                saveToStorage = {this.saveToStorage}
                shouldRestart={this.state.shouldRestart}
                />
              )
            })
          }
        </div>
      )
    }
  }
}
export default App;
