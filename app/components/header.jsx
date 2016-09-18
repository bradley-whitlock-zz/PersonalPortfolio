import React from 'react'
import { Link } from 'react-router'
import Modal from 'react-modal'
import request from 'superagent'

class Header extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
    <div id="header">
      <Link to="/" id="headerName">Bradley Whitlock</Link>
      <div id="middleOptions">
        <Link to='/about' id="headerItem"> About </Link>
        <Link to='/experience' id="headerItem"> Experience</Link>
        <ListLink name="Links"> </ListLink>
      </div>
      <ContactModal id="headerContact"> Contact Now </ContactModal>
      <DropDownMain />
    </div>
    )
  }
}

class DropDownMain extends React.Component {
  constructor() {
    super()
    this.state = { hovered: null }
    this.showOptions = this.showOptions.bind(this)
    this.clearOptions = this.clearOptions.bind(this)
  }
  showOptions() {
    this.setState ({ hovered : <DropDownOptions/> })
  }
  clearOptions() {
    this.setState ({ hovered : null })
  }
  render() {
    return (
      <div id="dropDownAll" onMouseOver={this.showOptions} onMouseLeave={this.clearOptions}>
        <div id="bar1"></div>
        <div id="bar2"></div>
        <div id="bar3"></div>
        {this.state.hovered}
      </div>
    );
  }
}
class DropDownOptions extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div id="dropDownAll">
        <Link to="/about" id="aboutRedirect"> About </Link>
        <Link to="/experience" id="expRedirect"> Experience </Link>
        <ContactModal id="dropDownContact"> Contact Now</ContactModal>
      </div>
    )
  }
}

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '60%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

class ContactModal extends  React.Component {
  constructor() {
    super()
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
    this.state = {modalIsOpen: false, name: '', email: '', message: ''}
  }
  openModal(){
    this.setState({modalIsOpen: true})
  }
  closeModal() {
    this.setState({modalIsOpen: false})
  }
  sendMessage() {
    if (this.state.name && this.state.email && this.state.message && this.state.email.indexOf('@') > 0) {
      request
      .post('/mail')
      .send({ name: this.state.name, email: this.state.email, message: this.state.message })
      .end((err, res) => {
        if (err) {
          console.log('Error: ', err)
          this.setState({ messageStatus: 'Could not send, sorry' })
        } else {
          console.log('got a response of ', res)
          this.setState({ messageStatus: 'Sent successfully' })
        }
      })
    } else {
      this.setState({ messageStatus: 'Please enter all credentials correctly' })
    }
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }
  render(){
    return (
      <div className="contactModal">
        <button id="headerContact" onClick={this.openModal}>Contact Now</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles}>

          <button onClick={this.closeModal} id="closeContactModal"> Close </button>
          <h2 id="contactModalHeader"> GIVE ME A SHOUT! </h2>
          <form className="contactForm">
            <label className="inputHeader">  Enter your name here </label>
            <input className="inputField" placeholder='John Smith' type="text" value={this.state.name} onChange={this.handleChangeName} required />

            <label className="inputHeader"> Enter your email here </label>
            <input className="inputField" placeholder="john.smith@gmail.com" value={this.state.email} onChange={this.handleChangeEmail} type="text" required/>

            <label className="inputHeader"> Enter your message here </label>
            <input className="inputField" id="contactMessage" placeholder="Hey Brad what is your favourite hockey team?" value={this.state.message} onChange={this.handleChangeMessage} type="text" required />
          </form>
          <div id="messageStatus">{this.state.messageStatus}</div>
          <button onClick={this.sendMessage} id="submitMessage"> Send </button>
        </Modal>
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
        <a href="mailto:bradwhitlock6@gmail.com" id="dropDownEmail">Email</a>
      </div>
    );
  }
}


export default Header