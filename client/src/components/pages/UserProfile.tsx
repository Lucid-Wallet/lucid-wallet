import React, {useEffect} from 'react';
import Header from '../Header';
import { selectUser } from '../../reducers/itemSlice';

let user = selectUser;
let totalExpense = 0;
let monthlyExpense =0;



const UserProfile = () => {


    useEffect(() => {
      console.log(user)
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
         user = data.user;
         totalExpense = data.totalExpense;
         monthlyExpense = data.monthlyExpense;
       })
       .catch(err => console.log('ERROR IN USERPROFILE DATA FETCH', err))
    }
    )

  return (
    <div className='userProfilePageCx'>
      <Header />
      <div className='userProfileContentCx'>
        <div>User Profile Page</div>
        {/* <h1>WELCOME {user}</h1> */}
        <div className='profileExpense'>
          <p>Total Expense:</p>
            {totalExpense}
          <p>Total Monthly Expense:</p>
            {monthlyExpense}
        </div>
      </div>
    </div>
    
  );
};

export default UserProfile;