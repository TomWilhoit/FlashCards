import React, { Component } from "react";
import App from "./App";
import "./css/Counter.scss";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h2>Question {this.props.questionIndex + 1}/40</h2>
      </div>
    );
  }
}

export default Counter;
