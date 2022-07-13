import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


import './assets/css/app.css'
import './assets/css/login.css'

import Login from './components/auth/Login';



const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<div>Home Page</div>} />
        <Route path='/signup' element={<div>Sign Up Page</div>} />
        <Route path='/setup' element={<div>Login Page</div>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;