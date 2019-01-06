import React, { Component } from 'react';
import Card from './Card';
// import './css/App.css';

class CardContainer extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    return (
      <div>
        <Card
        id={this.props.id}
        question={this.props.question}
        correctAnswer={this.props.correctAnswer}
        falseAnswer1={this.props.falseAnswer1}
        falseAnswer2={this.props.falseAnswer2}
        />  
      </div>
    )}
  };




export default CardContainer;