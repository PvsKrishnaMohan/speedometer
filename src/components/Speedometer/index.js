import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state={speed:0}

  onClickAccelerate=()=>{

        const{speed}=this.state

        if(speed<200){
            this.setState(prevState=>({speed: prevState.speed + 10}))
        }
    }
    onClickApplyBrake=()=>{

        const{speed}=this.state

        if(speed>0){
            this.setState(prevState=>({speed: prevState.speed - 10}))
        }
    }
  render(){
      const{speed}=this.state
      
      return(

        <div className="bg-container">
            <div className="inner-cont">
            <h1 className="heading">Heading</h1>
            <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className="image"/>
            <h2 className="para">Speed is{speed}mph</h2>
            <p className="para">Min Limit is 0 mph and max limit is 200mph</p>
            <div className="btn-cont">
                <button className="Accelerate" onClick={this.onClickAccelerate}>Accelerate</button>
                <button className="Apply Brake" onClick={this.onClickAccelerate}>Apply Brake</button>
            </div>
            </div>
        </div>

      )
  }

export default Speedometer
