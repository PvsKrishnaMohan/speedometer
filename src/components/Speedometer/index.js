import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickApplyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div className="inner-cont">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h2 className="para">
            Speed is <span className="span">{speed}</span> mph
          </h2>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-cont">
            <button
              className="Accelerate"
              type="button"
              onClick={this.onClickAccelerate}
            >
              Accelerate
            </button>
            <button
              className="ApplyBrake"
              type="button"
              onClick={this.onClickApplyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
