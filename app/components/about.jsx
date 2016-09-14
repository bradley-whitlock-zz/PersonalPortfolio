import React from 'react'

class About extends React.Component {
  constructor(){
    console.log('in the about constructor')
    super()
  }
  componentDidMount() {
    console.log('YESSSSS')
  }
  render(){
    return(
      <div id="aboutPage">
        <p>This is my about page</p>
      </div>
    )
  }
}

export default About