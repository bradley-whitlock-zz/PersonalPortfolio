/*  This is our first react component
 *  In a class component we always have render, returns other elements or components
 *  JSX - JS and XML combination, transpiled into JS
 *  return ... is passed to React.createElement
 *
 */
/*
// Lesson 12
import React from 'react'
import ReactDOM from 'react-dom'
// higher order functions

let Mixin = InnerComponent => class extends React.Component {
  constructor(){
    super()
    this.update = this.update.bind(this)
    this.state = { val : 0 }
  }
  update(){
    this.setState({ val: this.state.val + 1 })
  }
  componentWillMount(){
    console.log('will mount')
  }
  componentDidMount(){
    console.log('mounted')
  }
  render(){
    return(
      <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props}
      />
    )
  }
}

const Button = (props) => <button onClick={props.update}> {props.txt} - {props.val}</button>

const Label = (props) => <button onMouseMove={props.update}> {props.txt} - {props.val}</button>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
  render(){
    return(
      <div>
        <ButtonMixed txt="Button"/>
        <LabelMixed txt="Label"/>
      </div>
    )
  }
}


export default App
*/
/*
// Lesson 11
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.update = this.update.bind(this)
    this.state = { increasing: false }
  }
  update() {
    // re rendering the entire component
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('header')
    )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val })
  }
  shouldComponentUpdate(nextProps, nextState) {
    // Gives a condition for whether or not the components should be updated
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
  }
  render() {
    console.log(this.state.increasing)
    return (
      <button onClick={this.update}>
        {this.props.val}
      </button>
    )
  }
}

App.defaultProps = { val : 0 }

export default App
*/


// Lesson 9 and 10
// Mounting and Unmounting, adding/removing a element from the DOM
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({val : this.state.val + 1})
  }
  componentWillMount() {
    this.setState({m: 2})
  }
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update, 500)
  }
  componentWillUnmount() {
    clearInterval(this.inc)
  }
  render() {
    console.log('rendering')
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
}

class Wrapper extends React.Component {
  constructor() {
    super()
  }
  mount() {
    // the element was created in the render method
    ReactDOM.render(<App/>, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}> Mount</button>
        <button onClick={this.unmount.bind(this)}> UnMount </button>
        <div id='a'></div>
      </div>
    )

  }
}

export default Wrapper

// LESSON 8
// Accessing child properties
// import React from 'react'
// class App extends React.Component {
//   render() {
//     return <Button> I <Heart/> React</Button>
//   }
// }
//
// class Button extends React.Component {
//   render() {
//     return <button>{this.props.children}</button>
//   }
// }
//
// const Heart = () => <span>Love</span>
//
// export default App

/*
// THIS IS LESSON 5-7
// Refs A way to reference an index of a component

import React from 'react'
import ReactDOM from 'react-dom'
// State is managed by th component itself
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    // we can call this.update on change
    this.update = this.update.bind(this)
  }
  update(e) {
    // We want to keep track of all state in this one update method
    // The additional .refs.inp is necessary because it needs to know
    //   which element to target in the component
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render(){
    // Updating the state of the parent component
    // One component is rendering another component
    // To actually change the colors we re going to have to reach out to the DOM
    return (
      <div>
        <Slider ref="red" update={this.update}/>
        { this.state.red }
        <br/>
        <Slider ref="green" update={this.update}/>
        { this.state.green }
        <br/>
        <Slider ref="blue" update={this.update}/>
        { this.state.blue}
      </div>
    )
  }
}


class Slider extends React.Component {
  render() {
    return(
      <div>
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update}/>
      </div>
    )
  }
}
// This is a stateless component which is why we use the Slider for this not the
//   Widget component
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update}/>
      <h1>{props.txt}</h1>
    </div>
  )
}

export default App
*/


// The ReactDOM.render method can go in either of the files,
//    if it is in this file then the App does not need to be exported
// ReactDOM.render(
//   <App txt="this is the props text" cat={5} />,
//   document.getElementById('app')
// )
// App.propTypes = {
//   txt: React.PropTypes.string,
//   // The isRequired will throw an error if it is not specified
//   cat: React.PropTypes.number.isRequired
// }



/*
//THIS IS FROM LESSON 4 EGGHEAD
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  // The isRequired will throw an error if it is not specified
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text'
}

ReactDOM.render(
  <App txt="this is the props text" cat={5} />,
  document.getElementById('app')
)
*/

/*
THIS IS FROM VIDEO 3 EGGHEAD
import React from 'react'

class App extends React.Component {
  render() {
    return (
      // Cannot return more than one element without ()
      <div>
        <p> Hello React! </p>
        <h2> This is Brad he is cool </h2>
      </div>
    )
  }
}
 export default App
*/


/*
THIS IS FROM VIDEO 2 EGGHEAD
import React from 'react'

class App extends React.Component {
  render() {
    return <p> Hello React! </p>

    // return React.createElement('h1', null, 'Hello React Im here')
    // Same as: return React.createElement('h1', null, 'Hello React Im here')
  }
}

// Same as: stateless function
// const App = () => <h1>Hello React Stateless </h1>
// Difference is class can have STATE, stateless can not have state

export default App
*/