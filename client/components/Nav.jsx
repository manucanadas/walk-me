import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav className='nav-box'>
        <ul className="main-nav__items" >

          <span className="main-nav__item"><NavLink to='/' exact activeClassName="active" className="nav-link"> Home</NavLink></span>
          {/* <li className="main-nav__item"><NavLink to='/walks' exact activeClassName="active" className="nav-link"> WalkFinder</NavLink></li> --not sure whether this should be a navlink, or re-direct instead as this walks page will appear based on what the user searches on the homepage */}
          <li className="main-nav__item"><NavLink to='/walks/all' activeClassName="active" className="nav-link"> All Walks</NavLink></li>

          {/* <li className="main-nav__item"><NavLink to='/walks/saved' activeClassName="active" className="nav-link"> Saved Walks</NavLink></li> -- this should only be visible to authenticated users so not always showing on nav bar */}

          <li className="main-nav__item"><NavLink to='/login' activeClassName="active" className="nav-link"> Login</NavLink></li>
          <li className="main-nav__item"><NavLink to='/register' activeClassName="active" className="nav-link"> Register</NavLink></li>

          {/* <li className="main-nav__item"><NavLink to='/' activeClassName="active" className="nav-link"> Sign out</NavLink></li> - this also is only visible when users are authenticated */}

        </ul>
      </nav>
    </>
  )
}

// test change

export default Nav
