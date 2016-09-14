import React from 'react'
import { Link, RouteHandler } from 'react-router'

class HomePage extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="homepage">
        <div id="header">
          <HeaderName name="Bradley Whitlock" link="redirect to homePage"> </HeaderName>
          <div id="middleOptions">
            <Link to='/projects' id="headerItem"> Projects </Link>
            <Link to='/experience' id="headerItem"> Experience</Link>
            <ListLink name="Links"> </ListLink>
          </div>
          <HeaderContact name="Contact Now" link="redirect to contact me page"> </HeaderContact>
        </div>
        <h1 id="mainTitle"> Passionate. <br/> Enthusiastic. <br/> Creative. </h1>
        <div id="buttonOptions">
          <Link to='/about' id="aboutMeButton"> About Me</Link>
          <Link to='/contact' id="contactMeButton"> Contact Me</Link>
        </div>
      </div>
    )
  }
}

class ListLink extends React.Component {
  constructor() {
    super()
    this.state = { hovered: null }
    this.showOptions = this.showOptions.bind(this)
    this.clearOptions = this.clearOptions.bind(this)
  }
  showOptions() {
    this.setState ({ hovered : <ListDropDown/> })
  }
  clearOptions() {
    this.setState ({ hovered : null })
  }
  render() {
    return (
      <div id="dropItem" onMouseOver={this.showOptions} onMouseLeave={this.clearOptions}>{this.props.name}
        {this.state.hovered}
      </div>
    );
  }
}

class ListDropDown extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <a href="https://ca.linkedin.com/in/bradley-whitlock-383a34ab" id="dropDownLinkedIn">LinkedIn</a>
        <a href="https://github.com/bwhitty6" id="dropDownGithub">Github</a>
        <a href="http://thisismyemail.com" id="dropDownEmail">Email</a>
      </div>
    );
  }
}

class HeaderName extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log('redirect to home page')
  }
  render() {
    return (
      <p onClick={this.handleClick} id="headerName">{this.props.name}</p>
    )
  }
}

class HeaderContact extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log('redirect to Contact Page')
  }
  render() {
    return (
      <p onClick={this.handleClick} id="headerContact">{this.props.name}</p>
    )
  }
}

export default HomePage
