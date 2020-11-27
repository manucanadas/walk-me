import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'

import { IfAuthenticated, IfNotAuthenticated } from './IsAuthenticated'

import { logOut } from '../actions/auth'

const logOutUser = (dispatch) => {
  logOff()
  dispatch(logOut())
}

const Nav = (props) => {
  return (
    <>
      <nav className='nav-box'>

          <button className="text-btn"><NavLink to='/' exact activeClassName="active" className="nav-link"> Home</NavLink></button>
          {/* <button className="text-btn"><NavLink to='/walks' exact activeClassName="active" className="nav-link"> WalkFinder</NavLink></button> --not sure whether this should be a navlink, or re-direct instead as this walks page will appear based on what the user searches on the homepage */}
          <button className="text-btn"><NavLink to='/walks/all' activeClassName="active" className="nav-link"> All Walks</NavLink></button>

          {/* <button className="text-btn"><NavLink to='/walks/saved' activeClassName="active" className="nav-link"> Saved Walks</NavLink></button> -- this should only be visible to authenticated users so not always showing on nav bar */}
          <IfNotAuthenticated>
            <button className="text-btn"><NavLink to='/login' activeClassName="active" className="nav-link"> Login</NavLink></button>
            <button className="text-btn"><NavLink to='/register' activeClassName="active" className="nav-link"> Register</NavLink></button>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <button className="text-btn"><NavLink to='/' activeClassName="active" className="nav-link" onClick={() => logOutUser(props.dispatch)}> Sign out</NavLink></button>
          </IfAuthenticated>

    
      </nav>
    </>
  )
}

export default connect()(Nav)
