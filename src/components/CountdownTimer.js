import React from 'react';
import { Statistic, Header } from 'semantic-ui-react'
import moment from 'moment'

class CountdownTimer extends React.Component {

  constructor() {
    super()
    this.state = {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0',
    }
  }

  componentDidMount() {
    this.tick()
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    let tMinus = moment.duration(this.props.zeroTime - Date.now())
    let days = tMinus.days()
    let hours = tMinus.hours()
    let minutes = tMinus.minutes()
    let seconds = tMinus.seconds()
    this.setState({ days, hours, minutes, seconds })
  }

  render() {
    const { days, hours, minutes, seconds } = this.state
    if (days === null) {
      console.log('no days')
      return null
    }
    const items = [
      { key: 'days', label: 'Days', value: days },
      { key: 'hours', label: 'Hours', value: hours },
      { key: 'minutes', label: 'Minutes', value: minutes },
      { key: 'seconds', label: 'Seconds', value: seconds },
    ]
    const formattedDate = moment(this.props.zeroTime).format('lll')

    return (
      <div className='countdown-timer'>
        <Header as='h3'>Counting down to {formattedDate}</Header>
        <Statistic.Group items={items} />
      </div>
    )
  }
};

export default CountdownTimer;
