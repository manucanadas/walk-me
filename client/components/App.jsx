import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'

import Header from './Header.jsx'

import Search from './Search.jsx'
import BigMap from './BigMap.jsx'

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
   
    <Route exact path='/' component={Search}/>
    
    <Switch>
      <Route exact path='/walks/all' component={AllWalks}/>
      <Route exact path='/walks/saved' component={WalksSaved}/>
      <Route exact path='/walks/:name' component={IndividualWalk}/>
      <Route exact path='/walks' component={WalkList}/>
    </Switch>

    <Route path='/login' component={Login}/>
    
    <Route path='/register' component={Register}/>
    <Route path='/user' component={User}/>

  </>

  )
}


export default App
