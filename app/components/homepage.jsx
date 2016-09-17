import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="homepage">
        <h1 id="mainTitle"> Passionate. <br/> Enthusiastic. <br/> Creative. </h1>
        <div id="buttonOptions">
          <Link to='/about' id="aboutMeButton"> About Me</Link>
          <Link to='/experience' id="experienceButton"> Experience </Link>
        </div>
      </div>
    )
  }
}

export default HomePage
