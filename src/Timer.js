import React, { Component } from 'react';
import './css/Timer.scss';
import App from './App';


export default class Timer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      seconds: 900,
    };
  }

  componentDidMount = () => {
    this.startTimer();
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
      alert('Time is Up!');
      clearInterval(this.timer);
      this.props.shouldRestartGame();

    }

  }
  returnSeconds(){
    var seconds= this.state.seconds%60;
    return seconds > 9 ? seconds : "0"+seconds;
  }

  render() {
    return (
      <div className='timer-container'>
        <h2 className='timer-clock'>{Math.floor(this.state.seconds/60)}:{this.returnSeconds()}</h2>
        {/* <button className='start-btn' onClick={this.startTimer}>Start Timer</button> */}
      </div>
    );
  }
}
  




