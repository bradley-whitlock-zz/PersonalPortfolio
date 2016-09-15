import React from 'react'
import Header from './header'

class About extends React.Component {
  constructor(){
    console.log('in the about constructor')
    super()
  }
  render(){
    return(
      <div id="aboutPage">
        <Header/>
        <p>This is my about page</p>
      </div>
    )
  }
}

export default About