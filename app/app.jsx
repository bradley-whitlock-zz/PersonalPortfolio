import React,  { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'

import HomePage from './components/homepage'
import About from './components/about'
import Experience from './components/experience'
import Contact from './components/contact'
import MainLayout from './mainlayout'

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainLayout}>
          <IndexRoute component={HomePage}/>
          <Route path='/about' component={About} />
          <Route path='/experience' component={Experience} />
          <Route path='/contact' component={Contact} />
        </Route>
      </Router>
    )
  }
}
ReactDOM.render(<Routes />, document.getElementById('reactRoot'))

// let routes = {
//   path: '/',
//   component: MainLayout,
//   indexRoute: { component: HomePage },
//   childRoutes: [
//     {
//       path: 'about',
//       component: About
//     }
//   ]
// }
//
// ReactDOM.render(
//   <Router history={browserHistory} router={routes} />,
//   document.getElementById('reactRoot')
// )