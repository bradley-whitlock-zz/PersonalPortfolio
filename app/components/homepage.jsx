import React from 'react'
import { Link } from 'react-router'

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
            <ListRedirect name="Projects" link="redirect to Projects"> </ListRedirect>
            <ListRedirect name="Experience" link="redirect to Contact Me"> </ListRedirect>
            <ListLink name="Links"> </ListLink>
          </div>
          <HeaderContact name="Contact Now" link="redirect to contact me page"> </HeaderContact>
        </div>
        <h1 id="mainTitle"> Passionate. <br/> Enthusiastic. <br/> Creative. </h1>
        <div id="buttonOptions">
        <MainButton name="About Me" link="/about" identity="aboutMeButton"/>
        <MainButton name="Contact Me" link="/contact" identity="contactMeButton"/>
          </div>
      </div>
    )
  }
}

class MainButton extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
        <Link to={this.props.link} id={this.props.identity}> {this.props.name}</Link>
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
        <Link to="/about" id="dropDownLinkedIn">LinkedIn</Link>
        <Link to="/about" id="dropDownGithub">Github</Link>
        <Link to="/about" id="dropDownEmail">Email</Link>
      </div>
    );
  }
}

class ListRedirect extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Link to={this.props.link} id="headerItem"> {this.props.name}</Link>
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
