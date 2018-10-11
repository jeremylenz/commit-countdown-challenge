import React, { Component } from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      zeroTime: new Date(Date.now() + 86400000),
      commitList: [],
    }
  }

  async componentDidMount() {
    // get list of commit timestamps
    let response = await fetch('https://api.staging.coord.co/codechallenge/commits')
    const listOfCommits = await response.json() // json() returns a Promise but I just want the value, so I use await here as well
    this.calculateZeroTime(listOfCommits)
  }

  calculateZeroTime = (listOfCommits) => {
    if (listOfCommits.length < 2) {
      return null
    }

    // get time between commits
    listOfCommits.sort()
    let durationsSinceLastCommit = []
    for (let i = 1; i < listOfCommits.length - 1; i++) {
      let currentCommit = listOfCommits[i]
      let prevCommit = listOfCommits[i - 1]
      durationsSinceLastCommit.push(currentCommit - prevCommit)
    }

    // get average time between commits
    let sum = 0
    durationsSinceLastCommit.forEach((duration) => sum += duration)
    let averageTimeBetweenCommits = Math.floor(sum / durationsSinceLastCommit.length)

    // predict the rest of the commits until length is 2000
    let extrapolatedCommits = [...listOfCommits]
    for (let i = extrapolatedCommits.length - 1; i < 2000; i++) {
      let prevCommit = extrapolatedCommits[i]
      extrapolatedCommits.push(prevCommit + averageTimeBetweenCommits)
    }

    // get time of 2000th commit
    let predicted2000 = extrapolatedCommits[1999]

    // convert back to JS style timestamp
    predicted2000 *= 1000
    this.setState({
      commitList: listOfCommits,
      zeroTime: predicted2000,
    })
  }

  render() {
    const { zeroTime } = this.state

    return (
      <div className="App">
        <CountdownTimer zeroTime={zeroTime} />
      </div>
    );
  }
}

export default App;
