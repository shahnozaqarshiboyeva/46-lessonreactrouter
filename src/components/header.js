import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class header extends Component {
  render() {
    return (
  <div>
        <header>
        <ul>
          <li><NavLink to="/blog" className={({isActive})=>(isActive) ? 'active':''}>Blog</NavLink></li>
            <li><NavLink to="/Home"  className={({isActive})=>(isActive) ? 'active':''}>Home</NavLink></li>
            <li><NavLink to="/About" className={({isActive})=>(isActive) ? 'active':''}>About</NavLink></li>
            <li><NavLink to="/Contact" className={({isActive})=>(isActive) ? 'active':''}>Contact</NavLink></li>
        </ul>
      </header>
  </div>
    )
  }
}
