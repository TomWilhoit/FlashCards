import React, { Component } from 'react';
import Card from './Card';
// import './css/App.css';

class CardContainer extends Component {
  constructor(props) {
    super(props)
  }
  
  checkLoad = () => {
    if (this.props.questions.length !== 0){

    }
  }

  render() {
   return (
      <div>
        {this.props.questions.length !== 0 &&
        <Card
        id={this.props.questions[this.props.questionIndex].id}
        question={this.props.questions[this.props.questionIndex].question}
        correctAnswer={this.props.questions[this.props.questionIndex].correctAnswer}
        falseAnswer1={this.props.questions[this.props.questionIndex].falseAnswer1}
        falseAnswer2={this.props.questions[this.props.questionIndex].falseAnswer2}
        incrementQuestionIndex = {this.props.incrementQuestionIndex}
        saveToStorage = {this.props.saveToStorage}/> } 
      </div>
    )}
  
  };




export default CardContainer;