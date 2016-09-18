import React from 'react'
import Header from './header'

class About extends React.Component {
  constructor(){
    super()
    this.state= {details : 'Currently I am a second year Mechatronics Engineering Student at the University of Waterloo.' +
      ' I thrive on innovation and creation. I enjoy playing volleyball, hockey, bike, or almost anything' +
      ' that involves pushing myself or trying something new. In the future I hope to become a product designer and make ' +
      ' some of the coolest technology this world has ever seen!'}
  }
  render(){
    return(
      <div id="aboutPage">
        <h1 id="aboutTitle"> Let me tell you about myself </h1>
        <div id="topRow">
          <img className="bradPics" id="pic1" src="./styles/images/brad4.jpg" alt="Brad #1" />
          <img className="bradPics" id="pic2" src="./styles/images/brad3.jpg" alt="Brad #3" />
        </div>
        <div id="aboutContent">
          {this.state.details}
        </div>
        <div id="bottomRow">
          <img className="bradPics" id="pic3" src="./styles/images/brad2.jpg" alt="Brad #4" />
        </div>
      </div>
    )
  }
}

export default About