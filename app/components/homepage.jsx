import React from 'react'
import { Link } from 'react-router'
import Header from './header'

class HomePage extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="homepage">
        <Header />
        <h1 id="mainTitle"> Passionate. <br/> Enthusiastic. <br/> Creative. </h1>
        <div id="buttonOptions">
          <Link to='/about' id="aboutMeButton"> About Me</Link>
          <Link to='/contact' id="contactMeButton"> Contact Me</Link>
        </div>
      </div>
    )
  }
}

export default HomePage
