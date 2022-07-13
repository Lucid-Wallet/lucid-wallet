import React from 'react';

const Header = () => {

  return (
    <div className='headerCx'>
      <ul>
        <a href='/home'><li>Home</li></a>
        <a href='/category'><li>Categories</li></a>
        <a href='/user'><li>User Profile</li></a>
      </ul>
    </div>
  );
}

export default Header;

