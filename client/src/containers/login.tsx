import React from "react";
import { Link } from "react-router-dom";


const LoginDisplay = () => {

    return(
        <div>
            <label>Username</label>
            <input placeholder="Enter Your Username" />
            <br></br>
            <label>Password</label>
            <input placeholder="Enter Your Password" />
            <br></br>
            {/* <button>Sign in</button> */}
            <Link to="/home">Sign in</Link>
            <Link to="/signup">Sign up</Link>
            <button>Sign in with Github</button>
        </div>
    )
}

export default LoginDisplay;