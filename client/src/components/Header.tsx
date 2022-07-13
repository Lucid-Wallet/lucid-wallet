import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const logOffCurrentUser = async () => {
    await fetch('http://localhost:8080/signOut',{
      credentials: 'include'
    });
  }

  return (
    <div className='headerCx'>
      <ul>
        <Link to='/home'><li>Home</li></Link>
        <Link to='/user'><li>User Profile</li></Link>
        <Link to='/'><li onClick={ logOffCurrentUser }>Log off</li></Link>
      </ul>
    </div>
  );
}

export default Header;

