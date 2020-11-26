import React from 'react'



const Login = () => {
  return (

<>
  <h4> Login </h4> 
<div className='login-div'>
 
          <label className=''><h4>Username or email:</h4> </label>
          <input className='input' name="name" label='Name' type="text"/>
          <label className=''><h4>Password:</h4></label>
          <input className='input' name="password" type="password"/>
          <br/>
          <button className='submit-btn' type="submit"><h4>Log in</h4></button>


        </div>
    </>
  )
}


export default Login
