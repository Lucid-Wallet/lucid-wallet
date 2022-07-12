import React from "react";
import { Link } from "react-router-dom";
import BudgetSummary from "../components/budgetsummary";
import FormCategory from "../components/category";

const HomePage = () => {

  return (
    <div className="HomePage">
      <header className="Home-Page">
      <p>
        Welcome to Lucid Wallet
      </p>
      <div>
      <FormCategory />
      <BudgetSummary/>
      </div>
      <Link to="/">Log Out</Link>

      </header>

    </div>



  )
}

export default HomePage;