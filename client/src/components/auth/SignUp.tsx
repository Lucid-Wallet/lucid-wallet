import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  const [ passOrEmailErr, setPassOrEmailErr ] = useState('');

  const onHaveAccountButtonClick = () => {
    navigate('/')
  }

  const onSignUpButtonClick = () => {
    const emailField = document.querySelector('#emailSignUpField') as HTMLInputElement;
    const displayNameField = document.querySelector('#displayNameSignUpField') as HTMLInputElement;
    const passwordField = document.querySelector('#passwordSignUpField') as HTMLInputElement;
    const passwordConfirmField = document.querySelector('#passwordConfirmSignUpField') as HTMLInputElement;

    const email = emailField.value;
    const displayName = displayNameField.value;
    const password = passwordField.value;
    const confirmPassword = passwordConfirmField.value;

    if (password !== confirmPassword) {
      setPassOrEmailErr('Password does not match password confirmation');
    } else {

      const userSignUp = {
        email: email,
        display_name: displayName,
        password: password
      };

      fetch('http://localhost:8080/signUp', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify(userSignUp)
      })
      .then( res => res.json())
      .then( data => {
        if (data.success) navigate('/')
        else {
          setPassOrEmailErr('Email already exist.');
        }
      });
    } 
  }




  return (
    <div className='signUpPageCx'>
      <div className='signUpContentCx'>
        <div className='signUpHeaderCx'>SIGN UP</div> 
        <div className='signUpFieldCx'>
          <input className='signUpText' id='emailSignUpField' type='text' placeholder='Email address (e.g. 123@123.com'></input>
          <input className='signUpText' id='displayNameSignUpField' type='text' placeholder='Display Name'></input>
          <input className='signUpText' id='passwordSignUpField' type='text' placeholder='Password'></input>
          <input className='signUpText' id='passwordConfirmSignUpField' type='text' placeholder='Confirm your password'></input>
          <button className='signUpButton' onClick={ onSignUpButtonClick }>Sign Up</button>
          <button className='signUpButton' onClick={ onHaveAccountButtonClick }>Already Have Account?</button>
          <div id="signUpFailText">{ passOrEmailErr }</div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
