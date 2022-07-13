import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateUser_id } from "../reducers/budgetslice";


const LoginDisplay = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verified, setVerified] = useState(' ');
    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user_id = useSelector(state => state.budget.user_id);

    const loginCheck = () => {
        const user = {
            email: email,
            password: password
        };
        fetch('http://localhost:8080/signIn', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.display_name){
                //Assuming backend will send the userid
                // data.user_id=5
                // dispatch(updateUser_id(data.user_id))
                setVerified(data)
                navigate('/home');
            }else{
                setVerified(false);
                setEmail('');
                setPassword('WRONG PASSWORD BODY!!')
            }
        })
        .catch(err => console.log('Login Verification ERROR ==>', err))
    }

    return(
        <div id="loginBox">
            <div id="logoBox">
                <h1>THERE WILL BE A LOGO</h1>
            </div>
            <div id="inputBox">
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="Enter Your Username" value={email} onChange={e => setEmail(e.target.value)} />
                <br></br>
                <label>Password</label>
                <input className= "loginInput" type="password" placeholder="Enter Your Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            {verified === false && <div style={{color: 'red'}} > ERROR: Incorrect username or password</div>}

            <div id="loginButtonBox">
                <button id="loginBtn" onClick={loginCheck}>Sign in</button>
                <br></br>
                <div id="signup">
                    <span>Do not have an account yet?</span>
                    <Link to="/signup">Sign up</Link>
                </div>
                    <button id="signup">Sign in with Github</button>
            </div>
        </div>
    )
}

export default LoginDisplay;