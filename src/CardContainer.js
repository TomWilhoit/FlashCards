import React, { Component } from 'react';
import Card from './Card';
// import './css/App.css';

class CardContainer extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    const { id, question, correctAnswer, falseAnswer1, falseAnswer2 } = this.props.questionObj
    return (
      <div>
        <Card
        id={id}
        question={question}
        correctAnswer={correctAnswer}
        falseAnswer1={falseAnswer1}
        falseAnswer2={falseAnswer2}
        incrementQuestionIndex = {this.props.incrementQuestionIndex}
        />  
      </div>
    )}
  };




export default CardContainer;