import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeInSec: 0,
  }

  startTimeInterval = () => {
    this.setState(prevState => ({
      timeInSec: prevState.timeInSec + 1,
    }))
  }

  clearIntervalFunc = () => clearInterval(this.setIntervalId)

  componentWillUnmount = () => this.clearIntervalFunc()

  onStartTime = () => {
    this.setIntervalId = setInterval(this.startTimeInterval, 1000)
  }

  onStopTime = () => this.clearIntervalFunc()

  onResetTime = () => {
    this.clearIntervalFunc()
    this.setState({
      timeInSec: 0,
    })
  }

  timeInGivenFormate = () => {
    const {timeInSec} = this.state

    const minute = Math.floor(timeInSec / 60)
    const seconds = Math.floor(timeInSec % 60)

    const minuteFormate = minute > 9 ? minute : `0${minute}`
    const secondsFormate = seconds > 9 ? seconds : `0${seconds}`

    return `${minuteFormate}:${secondsFormate}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="time">{this.timeInGivenFormate()}</h1>
          <div className="buttons-flex">
            <button
              onClick={this.onStartTime}
              type="button"
              className="button start"
            >
              Start
            </button>
            <button
              onClick={this.onStopTime}
              type="button"
              className="button stop"
            >
              Stop
            </button>
            <button
              onClick={this.onResetTime}
              type="button"
              className="button restart"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
