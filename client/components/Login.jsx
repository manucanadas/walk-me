import React from 'react'

import { connect } from 'react-redux'
import { isAuthenticated, signIn } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'

class Login extends React.Component { 

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        signIn({ username, password }, { baseUrl })
            .then((token) => {
                if (isAuthenticated()) {
                    this.props.history.push('/home')
                }
                return null
            })
            .catch(err => alert(err.message))
    }

    render() {
      return (

<>
  <h4> Login </h4> 
<div className='login-div'>
 
          <label className=''>Username or email:</label>
          <input className='input' name="name" label='Name' type="text"/>
          <label className=''>Password:</label>
          <input className='input' name="password" type="password"/>
          <br/>
          <button className='submit-btn' type="submit">Log in</button>


        </div>
    </>
      )
  }
}

export default connect()(Login)
