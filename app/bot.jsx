import React from 'react'
import ReactDOM from 'react-dom'

class Bot extends React.Component {
  constructor() {
    // we use super so that we can access "this"
    super()
    this.state = { val: 0 }
    this.submitQuestion = this.submitQuestion.bind(this)
    // this.update = this.update.bind(this)
  }
  componentDidMount() {
    $()
  }
  submitQuestion() {
    const question = document.getElementById('question').value
    this.setState({ val : this.state.val + 1 })
    ReactDOM.render(<Question txt={question} />, document.getElementById('botLog'))
  }
  add(e) {
    if (e.key == 'Enter') this.submitQuestion()
  }
  render() {
    return (
      <div id="botBox">
        <input id="question" type="text" placeholder="How old is brad?" onKeyPress={this.add}/>
        <button id="submit" type="button" onClick={this.submitQuestion}>Send</button>
      </div>
    )
  }
}

class Question extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      React.DOM.div({className:"num1"}, this.props.txt)
      // <p id="botQuestion">{this.props.txt}</p>
    )
  }
}

export default Bot