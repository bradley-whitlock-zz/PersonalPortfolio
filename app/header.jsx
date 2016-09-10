import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <HeaderName name="Bradley Whitlock" link="redirect to homePage"> </HeaderName>
        <div id="middleOptions">
          <ListItem title="Projects" link="redirect to Projects"> </ListItem>
          <ListItem title="Contact Me" link="redirect to Contact Me"> </ListItem>
          <ListItem title="About Me" link="redirect to About Me"> </ListItem>
        </div>
        <HeaderContact name="Contact Now" link="redirect to contact me page"> </HeaderContact>
      </div>
    )
  }
}

class ListItem extends React.Component {
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
