import React from 'react';
import { Link } from 'react-router-dom';

const UserAccount = () => {
  return (
    <div className="user_account section__padding">
      <h1 className='section__title'>Welcome to Your Account</h1>
      
      <ul className='account_menu'>
        <li><Link to="/update">Update Account</Link></li>
        <li><Link to="/delete">Delete Account</Link></li>
        <li><Link to="/send">Send Money</Link></li>
        <li><Link to="/receive">Receive Money</Link></li>
        <li><Link to="/view-transactions">View Transactions</Link></li>
      </ul>
      
    </div>
  );
};

export default UserAccount;
