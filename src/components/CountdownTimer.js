import React from 'react';
import { Statistic } from 'semantic-ui-react'

class CountdownTimer extends React.Component {

  constructor () {
    super ()
    this.state = {
      days: '1',
      hours: '1',
      minutes: '1',
      seconds: '0',
    }
  }

  render() {
    const items = [
      { key: 'days', label: 'Days', value: days },
      { key: 'hours', label: 'Hours', value: hours },
      { key: 'minutes', label: 'Minutes', value: minutes },
      { key: 'seconds', label: 'Seconds', value: seconds },
    ]

    return (
      <Statistic.Group items={items} />
    )
  }
};

export default CountdownTimer;
