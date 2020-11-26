import React from 'react'

const Login = () => {
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

export default Login
