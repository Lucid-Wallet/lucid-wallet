import React from 'react';
import Header from '../Header';

const UserProfile = () => {
  // const getUser = () ={

  // }

  return (
    <div className='userProfilePageCx'>
      <Header />
      <div className='userProfileContentCx'>
        <div>User Profile Page</div>
        <h1>WELCOME</h1>
        <div className='profileExpense'>
          <p>Total Expense:</p>
          <p>10000$</p>
          <br></br>
          <p>Total Monthly Expense:</p>
          <p>4000$</p>
        </div>
      </div>
    </div>
    
  );
};

export default UserProfile;