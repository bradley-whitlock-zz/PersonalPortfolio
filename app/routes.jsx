import React from 'react';
import ReactDom from 'react-dom'
import { IndexRoute, Route, Link } from 'react-router';

import HomePage from './components/homepage'
import About from './components/about'
import Experience from './components/experience'
import Contact from './components/contact'

export let routes = {
  path: '/',
  component: HomePage,
  indexRoute: { component: HomePage },
  onChange: (prevState, nextState, replace) => {
    let newPath = nextState.location.pathname;
  },
  childRoutes: [
    {
      path: 'about',
      component: About
    },
    {
      path: 'experience',
      component: Experience
    },
    {
      path: 'contact',
      component: Contact
    }
  ]
}


// class App extends React.Component {
//   constructor() {
//     super()
//     this.update = this.update.bind(this)
//     this.state = { initPage: <Landing clickPowerButton={this.update}/>}
//   }
//   update() {
//     this.setState({ initPage:
//       <div>
//         <Header/>
//         {/*<Bot/>*/}
//     </div>
//     })
//   }
//   render(){
//     return (
//     <div>
//       <Header/>
//       {/*<Bot/>*/}
//       {/*<RouteHandler/>*/}
//     </div>
//     )
//   }
// }
//
// ReactDOM.render(<App/>, document.getElementById('reactRoot'))
