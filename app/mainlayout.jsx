import React from 'react'
import Header from './components/header'

class MainLayout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div id="mainLayout">
        <Header/>
        {this.props.children}
        <footer className="mainFooter">
          <p> This is the footer</p>
        </footer>
      </div>
    )
  }
}

export default MainLayout