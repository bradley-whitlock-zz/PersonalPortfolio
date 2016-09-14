import React,  { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'

import HomePage from './components/homepage'
import About from './components/about'
import Experience from './components/experience'
import Contact from './components/contact'

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/experience' component={Experience} />
        <Route path='/contact' component={Contact} />
      </Router>
    )
  }
}

ReactDOM.render(<Routes />, document.getElementById('reactRoot'))