import React, { Component } from 'react';
import Card from './Card';
import Timer from './Timer'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>flashcards</h1>
        <Card/>
        <Timer/>
      </div>
    );
  }
}

export default App;
