import React from 'react';
import { Link } from 'react-router-dom';

const UserAccount = () => {
  return (
    <div className="user_account section__padding">
      <h1 className='section__title'>Welcome to Your User Account</h1>
      <nav className="account_menu">
        <ul>
          <li><Link to="/">Update Account</Link></li>
          <li><Link to="/">Delete Account</Link></li>
          <li><Link to="/">Send Money</Link></li>
          <li><Link to="/">Receive Money</Link></li>
          <li><Link to="/">View Transactions</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default UserAccount;
