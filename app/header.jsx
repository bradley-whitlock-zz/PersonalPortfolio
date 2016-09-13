import React from 'react'

class Header extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="homepage">
        <div id="header">
          <HeaderName name="Bradley Whitlock" link="redirect to homePage"> </HeaderName>
          <div id="middleOptions">
            <ListRedirect title="Projects" link="redirect to Projects"> </ListRedirect>
            <ListRedirect title="Experience" link="redirect to Contact Me"> </ListRedirect>
            <ListLink title="Links"> </ListLink>
          </div>
          <HeaderContact name="Contact Now" link="redirect to contact me page"> </HeaderContact>
        </div>
        <h1 id="mainTitle"> Passionate. <br/> Enthusiastic. <br/> Creative. </h1>
        <div id="buttonOptions">
        <MainButton name="About Me" link="redirect to the About Me Page" identity="aboutMeButton"/>
        <MainButton name="Contact Me" link="redirect to the Contact Page" identity="contactMeButton"/>
          </div>
      </div>
    )
  }
}

class MainButton extends React.Component {
  constructor() {
    super()
    this.update = this.update.bind(this)
  }
  update() {
    console.log(this.props.link)
  }
  render() {
    return (
      <div id={this.props.identity} onClick={this.update}>{this.props.name}</div>
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
    console.log('show options')
    this.state.hovered = <ListDropDown/>
    this.forceUpdate()
  }
  clearOptions() {
    console.log('clear options')
    this.state.hovered = null
    this.forceUpdate()
  }
  render() {
    return (
      <div id="dropItem" onMouseOver={this.showOptions} onMouseLeave={this.clearOptions}>{this.props.title}
        {this.state.hovered}
      </div>
    );
  }
}

class ListDropDown extends React.Component {
  constructor() {
    // we use super so that we can access "this"
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.link)
  }
  render() {
    return (
      <div>
        <li onClick={console.log('hi')} id="dropDownLinkedIn">LinkedIn</li>
        <li onClick={console.log('hello world')} id="dropDownGithub">Github</li>
        <li onClick={console.log('hello world')} id="dropDownEmail">Email</li>
      </div>
    );
  }
}

class ListRedirect extends React.Component {
  constructor() {
    // we use super so that we can access "this"
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.link)
  }
  render() {
    return (
      <li onClick={this.handleClick} id="headerItem">{this.props.title}</li>
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



export default Header
