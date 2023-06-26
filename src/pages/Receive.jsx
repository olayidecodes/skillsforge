import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const ReceiveMoneyPage = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount('');
    setDescription('');
  };

  const navigate = useNavigate()

  const submitRequest = (e) => {
    alert("Request is being processed")
    navigate("/")
  }

  return (
    <div className='app__receive section__padding'>
      <h2 className='section__title'>Receive Money</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className='boxes'>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className='boxes'>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button onClick={submitRequest} type="submit">Receive</button>
      </form>
    </div>
  );
};

export default ReceiveMoneyPage;
