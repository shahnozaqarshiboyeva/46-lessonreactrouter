import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
export default class blog extends Component {
  render() {
    return (
      <div>
        <h1>Umumiy Page</h1>
        <About/>
        <Contact/>
        <Home/>
      </div>
    )
  }
}
