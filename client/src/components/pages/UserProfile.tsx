import React, {useEffect} from 'react';
import {useAppSelector} from '../../hooks'
import Header from '../Header';
import { selectUser, selectItems } from '../../reducers/itemSlice';

let user = selectUser;
let totalExpense = '4,324.32';
let monthlyExpense = '2,343.54';




const UserProfile = () => {

  const items = useAppSelector(selectItems);
    useEffect(() => {
     console.log('HERE IS YOUR STORE',items);
    }
    )
    const fetchData =() => {
      fetch('http://localhost:8080/profile' , {
        method: 'GET',
        credentials: 'include',
        headers:{
          'Content-Type': 'Application/JSON'
        },
      })
      .then(response => response.json())
      .then(data => {
       console.log("WE ARE IN USERPROFILE")
        user = data;
      })
      .catch(err => console.log('ERROR IN USERPROFILE DATA FETCH', err))
    }

  return (
    <div className='userProfilePageCx'>
      <Header />
      <div className='userProfileContentCx'>
        <div>User Profile Page</div>
        {/* <h1>WELCOME {user}</h1> */}
        <div className='profileExpense'>
          <p>Total Expenses:</p>
            {totalExpense}
          <p>Total Monthly Expense:</p>
            {monthlyExpense}
        </div>
      </div>
    </div>
    
  );
};

export default UserProfile;