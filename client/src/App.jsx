import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginDisplay from './containers/login';
import HomePage from './containers/homepage';
import SignUp from './containers/signup';
import BudgetSetup from './containers/budgetsetup';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginDisplay />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/setup' element={<BudgetSetup />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
