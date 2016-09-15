import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log('component header mounted')
  }
  render() {
    return (
    <div id="header">
      <Link to="/" id="headerName">Bradley Whitlock</Link>
      <div id="middleOptions">
        <Link to='/projects' id="headerItem"> Projects </Link>
        <Link to='/experience' id="headerItem"> Experience</Link>
        <ListLink name="Links"> </ListLink>
      </div>
      <Link to="/contact" id="headerContact"> Contact Now </Link>
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


export default Header