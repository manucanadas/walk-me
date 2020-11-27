import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './Header.jsx'
import Home from './Home.jsx'
import WalkFinder from './WalkFinder.jsx'
import IndividualWalk from './IndividualWalk.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import User from './User.jsx'
import SavedWalks from './SavedWalks.jsx'
import AllWalks from './AllWalks.jsx'

import { fetchWalks } from '../actions/index.js'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchWalks())
  }

  render () {
    return (
      <>
        <Header/>
        <Route exact path='/' component={Home}/
        <Switch>
          <Route exact path='/walks/all' component={AllWalks}/>
          <Route exact path='/walks/saved' component={SavedWalks}/>
          <Route exact path='/walks/:name' component={IndividualWalk}/>
          <Route exact path='/walks' component={WalkFinder}/>
        </Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/user' component={User}/>
      </>
    )
  }
<<<<<<< HEAD
||||||| 9ac73c0
const App = () => {
  return (
    <>
      <Header/>

      <Route exact path='/' component={Home}/>

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
=======
const App = () => {
  return (
    <>
      <Header/>

      <Route exact path='/' component={Home}/>

      <Switch>
        <Route exact path='/walks/all' component={AllWalks}/>
        <Route exact path='/walks/saved' component={SavedWalks}/>
        <Route exact path='/walks/:name' component={IndividualWalk}/>
        <Route exact path='/walks' component={WalkFinder}/>
      </Switch>

      <Route path='/login' component={Login}/>

      <Route path='/register' component={Register}/>
      <Route path='/user' component={User}/>

    </>

  )
>>>>>>> 865e0e8df673cb65061485176e0a7844c833d467
||||||| merged common ancestors
||||||||| 9ac73c0
const App = () => {
  return (
    <>
      <Header/>

      <Route exact path='/' component={Home}/>

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
=========
const App = () => {
  return (
    <>
      <Header/>

      <Route exact path='/' component={Home}/>

      <Switch>
        <Route exact path='/walks/all' component={AllWalks}/>
        <Route exact path='/walks/saved' component={SavedWalks}/>
        <Route exact path='/walks/:name' component={IndividualWalk}/>
        <Route exact path='/walks' component={WalkFinder}/>
      </Switch>

      <Route path='/login' component={Login}/>

      <Route path='/register' component={Register}/>
      <Route path='/user' component={User}/>

    </>

  )
>>>>>>>>> Temporary merge branch 2
=======
>>>>>>> 2d2d08704625aae3def828a19242ee2a4a8b6661
}

export default connect()(App)
