import React from 'react'

class LandingPage extends React.Component {
  constructor(){
    super()
    this.state = { lightOn : true }
    this.flash = this.flash.bind(this)
  }
  componentDidMount() {
    this.inc = setInterval(this.flash, 1000)
  }
  flash() {
    if (this.state.lightOn) {
      console.log('light was on')
      // FLASH THE LIGHT HERE
      // $(document.getElementById('#'))
      this.setState({ lightOn : false})
    } else {
      console.log('light was off')
      // FLASH THE LIGHT HERE
      this.setState({ lightOn : true})
    }
  }
  componentWillUnmount(){
    console.log('clearing the interval')
    clearInterval(this.inc)
  }
  render() {
    return(
    <div id="landingBackground">
      <img src="../styles/images/white-power-button.png" alt="Power Button" id="powerLogo"/>
      <p id="landingMessage"> Welcome to Brad's Website </p>
      <p id="continueMessage"> Click Anywhere to continue </p>
    </div>
    )
  }
}

export default LandingPage