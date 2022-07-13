import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


import './assets/css/app.css';

import './assets/css/auth/login.css';
import './assets/css/auth/signup.css';

import './assets/css/header.css';
import './assets/css/pages/home.css';
import './assets/css/pages/category.css';
import './assets/css/pages/userProfile.css'

import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

import Category from './components/pages/Category';
import Home from './components/pages/Home';
import UserProfile from './components/pages/UserProfile';


const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/category' element={<Category />} />
        <Route path='/user' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;