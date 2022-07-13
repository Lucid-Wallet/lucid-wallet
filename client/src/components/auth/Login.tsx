import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const loginButtonOnClick = () => {

    const loginFailText = document.querySelector('#loginFailText') as HTMLDivElement;

    const emailField = document.querySelector('#emailLoginField') as HTMLInputElement;
    const email = emailField.value;

    const passwordField = document.querySelector('#passwordLoginField') as HTMLInputElement;
    const password = passwordField.value;

    const userLogin = {
      email: email,
      password: password
    }

    fetch('http://localhost:8080/signIn', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(userLogin)
    })
    .then( res => res.json())
    .then( data => {

      if (data.display_name) {
        navigate('/home');
      } else {
        loginFailText.classList.toggle('active');
        setTimeout( () => {
          loginFailText.classList.toggle('active');
        }, 2000);
      }
    });
  }
  
  return (
    <div className='loginPageCx'>
      <div className='loginContentCx'>
        <div className='logoCx'>INSERT LOGO HERE</div> 
        <div className='loginFieldCx'>
          <input className='loginText' id='emailLoginField' type='text' placeholder='Email address (e.g. 123@123.com'></input>
          <input className='loginText' id='passwordLoginField' type='text' placeholder='Password'></input>
          <button className='loginButton' onClick={ loginButtonOnClick }>Log In</button>
          <div id="loginFailText">Incorrect email or password</div>
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