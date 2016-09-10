import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Bot from './bot'
// import App from './js/lessons'

ReactDOM.render(
  <div>
    <Header/>
    <Bot/>
  </div>,
  document.getElementById('reactRoot')
)

/*
 NOTES:
 If you target the same element more than once it will overwrite it

 */
