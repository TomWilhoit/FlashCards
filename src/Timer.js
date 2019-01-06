import React, { Component } from 'react';
import './css/App.css';
import App from './App';


export default class Timer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      seconds: 900
    };
  }
  
  componentWillMount() {
    this.startTimer()
  }

  restartTimer = () => {
    this.setState({
      seconds: 900
    })
    this.props.shouldRestart();
  }
  
  startTimer = () => {
    this.timer = setInterval(this.eachTick, 1000);
  }
  

  eachTick = () => {
    if (this.state.seconds > 0)
    this.setState({
      seconds: (this.state.seconds - 1)
    });

    if (this.state.seconds === 0){
      console.log('time up');
      clearInterval(this.timer);
      this.props.shouldRestart();

    }

  }

  render() {
    return (
      <div className='timer-container'>
        <h2 className='timer-clock'>{this.state.seconds}</h2>
        <button className='start-btn' onClick={this.startTimer}>Start Timer</button>
        <button className='restart-btn' onClick={this.restartTimer}>Restart Button</button>
      </div>
    );
  }
}
  




