import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
     <Header/>
     <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      </div>
    )
  }
}
