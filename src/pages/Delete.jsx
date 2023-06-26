import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Delete = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate()
  const handleConfirmDelete = () => {
    // I can make an API call to your backend server to delete the user account
    console.log('Deleting user account...');
    alert("Account Deleted")
    navigate("/")
  };

  return (
    <div className='app__delete section__padding'>
    <div className="text">

      <h1 className='section__title'>Delete User Account</h1>
      <p className='section__subtitle'>
        Are you sure you want to delete your account? This action is irreversible and all your data will be lost.
      </p>
      {!confirmDelete ? (
        <button onClick={() => setConfirmDelete(true)}>Confirm Delete</button>
      ) : (
        <div>
          <p>Are you REALLY sure? This action cannot be undone!</p>
          <button onClick={handleConfirmDelete}>Yes, Delete</button><br />
          <button onClick={() => setConfirmDelete(false)}>Cancel</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Delete;


