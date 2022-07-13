import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


import './assets/css/app.css';

import './assets/css/auth/login.css';
import './assets/css/auth/signup.css';

import './assets/css/header.css';
import './assets/css/pages/home.css';

import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Home from './containers/Home';


const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/setup' element={<div>Login Page</div>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;