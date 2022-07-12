
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate();

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    
    const signupSubmit = () => {
//add functionality to handle leaving fields blank
        const user = {
            username: username,
            password: password,
            email: email
        };
        fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(user)
        })
//{ uid: Number, username: <string> }
    }

    return(
    <div id="signupPage">
        <h1>Sign Up</h1>

        <label>Username</label>
        <input className="usernameInput" type="text" placeholder="Enter Your Username" value={username} 
            onChange={e => setUsername(e.target.value)} />
        <br></br>
        <label>Password</label>
        <input className="passwordInput" type="password" placeholder="Enter Your Password" value={password}
            onChange={e => setPassword(e.target.value)} />
        <br></br>
        <label>Email</label>
        <input className="emailInput" type="text" placeholder="Enter Your Email" value={email}
            onChange={e => setEmail(e.target.value)} />
        <br></br>


    <Link to="/">Already have an account?</Link>
    <br></br>
    <Link to="/setup">Sign up</Link>
</div>
    )
}

export default SignUp;