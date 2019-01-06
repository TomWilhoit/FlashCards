import React, { Component } from 'react';
import CardContainer from './CardContainer';

class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      correctClicked: false,
    }
  }
  
  correctGuess = () => {
    alert('Great Answer. Top Marks. Advance to MOD 6.');
    this.props.incrementQuestionIndex()
    
  };

  falseGuess = () => {
    alert('Incorrect Answer. Try harder. Maybe crack open a book once in a while instead of going to Brothers')
    // this.props.saveToStorage();
  };

  render() {
    
    if (this.state.correctClicked === false) {
      return (
        <div className="Card">
          <div>{this.props.id}</div>
          <div>{this.props.question}</div>
        <button className="correct-answer-btn" onClick={this.correctGuess}>{this.props.correctAnswer}</button>
          <button className="false-answer-btn1" onClick={this.falseGuess}>{this.props.falseAnswer1}</button>
          <button className="false-answer-btn2" onClick={this.falseGuess}>{this.props.falseAnswer2}</button>
        </div>
      );
    }
};
}
    
    
  

        



export default Card