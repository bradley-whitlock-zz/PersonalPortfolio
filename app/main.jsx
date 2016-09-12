import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Bot from './bot'
import Landing from './landing'

// import App from './js/lessons'
class App extends React.Component {
  constructor() {
    super()
    this.state = { initPage: <Landing/>}
  }
  update() {
    this.state.initPage = <div>
      <Header/>
      <Bot/>
    </div>
    this.forceUpdate()
  }
  render(){
    return (
    <div onClick={this.update.bind(this)}>
      {this.state.initPage}
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('reactRoot'))

// React.render(
//   <div>
//     <Landing onClick={continueToSite()}/>
//   </div>,
//   document.getElementById('reactRoot')
// )
//
// function continueToSite(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('reactRoot'))
//     ReactDOM.render(
//       <div>
//         <Header/>
//         <Bot/>
//       </div>
//     )
// }
/*
 NOTES:
 If you target the same element more than once it will overwrite it

 */
