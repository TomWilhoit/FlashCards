import React, { Component } from 'react';
import CardContainer from './CardContainer';

class Card extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="Card">
        <div>{this.props.id}</div>
        <div>{this.props.question}</div>
        <button>{this.props.correctAnswer}</button>
        <button>{this.props.falseAnswer1}</button>
        <button>{this.props.falseAnswer2}</button>
      </div>
    );
  }
}
        



export default Card