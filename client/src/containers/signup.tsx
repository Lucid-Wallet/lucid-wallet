
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [displayname, setDisplayname] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    // States for checking the errors
    // const [submitted, setSubmitted] = useState(false);
    // const [error, setError] = useState(false);

    
    const signupSubmit = () => {
//add functionality to handle leaving fields blank
        const user = {
            email: email,
            display_name: displayname,
            password: password
        };
        fetch('http://localhost:8080/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(user)
        })
        .catch(err => console.log('Error occured while creating an account', err));
//{ uid: Number, username: <string> }
    }

    return(
    <div id="signupPage">
        <h1>Sign Up</h1>

        <label>Email</label>
        <input className="emailInput" type="text" placeholder="Enter Your Email" value={email}
            onChange={e => setEmail(e.target.value)} />
        <br></br>
        <label>Display Name</label>
        <input className="displaynameInput" type="text" placeholder="Create a Display Name" value={displayname} 
            onChange={e => setDisplayname(e.target.value)} />
        <br></br>
        <label>Password</label>
        <input className="passwordInput" type="password" placeholder="Enter Your Password" value={password}
            onChange={e => setPassword(e.target.value)} />
        <br></br>
        

        <div id="signupButtonBox">
            <button id="signupButton" onClick={signupSubmit}>Sign Up</button>
        <br></br>
        <div id="login">
            <span>Already have an account?</span>
            <Link to="/"> 
                <button type="button">
                    Login
                </button>
            </Link>
        </div>
    </div>
</div>
    )
}

export default SignUp;