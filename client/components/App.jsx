import React from 'react'
// import { connect } from 'react-redux'

import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Search from './Search.jsx'

import Walks from './Walks.jsx'

import Walk from './Walk.jsx'
import Comments from './Comments.jsx'


import Login from './Login.jsx'
import Register from './Register.jsx'
import User from './User.jsx'

import WalksSaved from './WalksSaved.jsx'

const App = () => {
  return (
  <>  
    <Header/>
    <Nav/>
    <Search/>
    <br/>
    <Walks/>
    <br/>
    <Walk/>
    <Comments/>
    <br/>

    <Login/>
    <Register/>
    <User/>
    <br/>
    <WalksSaved/>

  </>

  )
}


export default App
