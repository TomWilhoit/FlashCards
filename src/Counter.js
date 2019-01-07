import React, { Component } from 'react';
import App from './App';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h2>Question {this.props.questionIndex + 1}/40</h2>
      </div>
    );
  }
}

export default Counter