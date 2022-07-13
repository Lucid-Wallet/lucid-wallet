import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


import './assets/css/app.css';

import './assets/css/auth/login.css';
import './assets/css/auth/signup.css';

import './assets/css/header.css';
import './assets/css/pages/home.css';
import './assets/css/pages/category.css';
import './assets/css/pages/userProfile.css'
// import './assets/css/pages/item.css'

import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

import Categories from './components/pages/Categories';
import Home from './components/pages/Home';
import UserProfile from './components/pages/UserProfile';
// import Items from './components/pages/Items';


const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/user' element={<UserProfile />} />
        {/* <Route path='/item' element={<Items />} /> */}
      </Routes>
    </BrowserRouter>
  )

}

export default App;