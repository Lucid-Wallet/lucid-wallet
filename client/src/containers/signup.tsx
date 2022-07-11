import React from "react";
import { Link } from "react-router-dom";


const SignUp = () => {
    return(
    <div>
    <label>Username</label>
    <input placeholder="Enter Your Username" />
    <br></br>
    <label>Password</label>
    <input placeholder="Enter Your Password" />
    <br></br>
    <label>Email</label>
    <input placeholder="Enter Your Email" />
    <br></br>
    <Link to="/">Do you have an account?</Link>
    <br></br>
    <Link to="/setup">Sign up</Link>
</div>
    )
}

export default SignUp;