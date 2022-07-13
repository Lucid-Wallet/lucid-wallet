"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className='loginPageCx'>
      <div className='loginContentCx'>
        <div>INSERT LOGO HERE</div> 
        <div className='loginFieldCx'>
          <input className='loginText' type='text' placeholder='Email address (e.g. 123@123.com'></input>
          <input className='loginText' type='text' placeholder='Password'></input>
          <button id='loginButton'>Log In</button>
        </div>
        <div className='loginOptionsCx'>
          <button className='oAuthButton'>Sign in with Github</button>
        </div> 
        <div className='signupCx'>
            <span>Don't have an account yet?</span>
            <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;