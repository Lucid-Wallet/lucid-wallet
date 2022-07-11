import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {

  return (
    <div className="HomePage">
      <header className="Home-Page">
      <p>
        Welcome to Lucid Wallet
      </p>
      <Link to="/">Log Out</Link>

      </header>

    </div>



  )
}

export default HomePage;