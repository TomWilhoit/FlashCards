import React, { Component } from "react";
import CardContainer from "./CardContainer";
import "./css/Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctClicked: false,
      questionOrder: 1
    };
  }
  //
  questionOrderRandomizer = () => {
    this.setState({
      questionOrder: Math.floor(Math.random() * (3 - 1 + 1)) + 1
    });
  };

  correctGuess = () => {
    if (this.props.shouldRestart === true) {
      alert("Oh! You got it right. With no other options. Incredible.");
    } else if (this.props.shouldRestart === false) {
      alert("Great Answer. Top Marks. Advance to MOD 6.");
      this.props.incrementQuestionIndex();
      this.questionOrderRandomizer();
      this.props.finishGame();
    }
  };

  falseGuess = () => {
    alert(
      "Incorrect Answer. Try harder. Maybe crack open a book once in a while instead of going to Brothers"
    );
    this.props.saveToStorage();
  };

  render() {
    if (this.state.correctClicked === false && this.state.questionOrder === 1) {
      return (
        <div className="Card">
          <h2 className="question">{this.props.question}</h2>
          <button className="correct-answer-btn" onClick={this.correctGuess}>
            {this.props.correctAnswer}
          </button>
          {this.props.falseAnswer1 && (
            <button className="false-answer-btn1" onClick={this.falseGuess}>
              {this.props.falseAnswer1}
            </button>
          )}
          {this.props.falseAnswer2 && (
            <button className="false-answer-btn2" onClick={this.falseGuess}>
              {this.props.falseAnswer2}
            </button>
          )}
          ;
        </div>
      );
    } else if (
      this.state.correctClicked === false &&
      this.state.questionOrder === 2
    ) {
      return (
        <div className="Card">
          <h2 className="question">{this.props.question}</h2>
          <button className="false-answer-btn1" onClick={this.falseGuess}>
            {this.props.falseAnswer1}
          </button>
          <button className="correct-answer-btn" onClick={this.correctGuess}>
            {this.props.correctAnswer}
          </button>
          <button className="false-answer-btn2" onClick={this.falseGuess}>
            {this.props.falseAnswer2}
          </button>
        </div>
      );
    } else if (
      this.state.correctClicked === false &&
      this.state.questionOrder === 3
    ) {
      return (
        <div className="Card">
          <h2 className="question">{this.props.question}</h2>
          <button
            className="button false-answer-btn1"
            onClick={this.falseGuess}
          >
            {this.props.falseAnswer1}
          </button>
          <button
            className="button false-answer-btn2"
            onClick={this.falseGuess}
          >
            {this.props.falseAnswer2}
          </button>
          <button
            className="button correct-answer-btn"
            onClick={this.correctGuess}
          >
            {this.props.correctAnswer}
          </button>
        </div>
      );
    }
  }
}

export default Card;
