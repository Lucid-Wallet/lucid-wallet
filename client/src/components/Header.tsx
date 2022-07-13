import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='headerCx'>
      <ul>
        <Link to='/home'><li>Home</li></Link>
        <Link to='/category'><li>Categories</li></Link>
        <Link to='/user'><li>User Profile</li></Link>
      </ul>
    </div>
  );
}

export default Header;

