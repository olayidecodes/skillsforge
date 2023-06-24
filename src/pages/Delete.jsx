import React, { useState } from 'react';

const Delete = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    // I can make an API call to your backend server to delete the user account
    console.log('Deleting user account...');
  };

  return (
    <div>
      <h1>Delete User Account</h1>
      <p>
        Are you sure you want to delete your account? This action is irreversible and all your data will be lost.
      </p>
      {!confirmDelete ? (
        <button onClick={() => setConfirmDelete(true)}>Confirm Delete</button>
      ) : (
        <div>
          <p>Are you REALLY sure? This action cannot be undone!</p>
          <button onClick={handleConfirmDelete}>Yes, Delete</button>
          <button onClick={() => setConfirmDelete(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Delete;


