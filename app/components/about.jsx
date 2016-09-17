import React from 'react'
import Header from './header'

class About extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div id="aboutPage">
        <h1 id="aboutTitle">Some more information on Brad</h1>
        <div id="topRow">
          <img className="bradPics" id="pic1" src="./styles/images/brad2.jpg" alt="Brad #1" />
          <img className="bradPics" id="pic2" src="./styles/images/brad3.jpg" alt="Brad #3" />
        </div>
        <div id="aboutContent">
          Currently I am a second year Mechatronics Engineering Student at the University of Waterloo.
        </div>
        <div id="bottomRow">
          <img className="bradPics" id="pic3" src="./styles/images/brad4.jpg" alt="Brad #4" />
        </div>
      </div>
    )
  }
}

export default About