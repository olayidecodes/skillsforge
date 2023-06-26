import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Update = () => {
  // State variables for form input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform update account logic here, e.g., send data to server
    // Reset form input fields
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const navigate = useNavigate()

  const handleUpdate = () => {
    alert("Account Details Updated")
    navigate("/")
  };

  return (
    <div className='app__update section__padding'>
      <h2 className='section__title'>Update Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button onClick={handleUpdate} type="submit">Update</button>
      </form>
    </div>
  );
};


export default Update