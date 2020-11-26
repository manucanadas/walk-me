import React from 'react'
// import { connect } from 'react-redux'

import Header from './Header.jsx'

import Search from './Search.jsx'
import Map from './Map.jsx'

import IndividualWalk from './IndividualWalk.jsx'
import WalkList from './WalkList.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import User from './User.jsx'

import WalksSaved from './WalksSaved.jsx'
import AllWalks from './AllWalks.jsx'

const App = () => {
  return (
  <>  
    <Header/>
   
    <Search/>

    <Map/>
    <br/>
    <WalkList/>
    <br/>
    <IndividualWalk/>
   
    <br/>

    <Login/>
    <Register/>
    <User/>
    <br/>
    <WalksSaved/>
    <AllWalks/>

  </>

  )
}


export default App
