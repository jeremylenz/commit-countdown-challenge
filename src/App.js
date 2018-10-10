import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/CountdownTimer.js'

class App extends Component {
  render() {
    const zeroTime = new Date(Date.now() + 86400000)

    return (
      <div className="App">
        <CountdownTimer zeroTime={zeroTime} />
      </div>
    );
  }
}

export default App;
