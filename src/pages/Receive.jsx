import React, { useState } from 'react';

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
    // Perform the necessary logic to receive money, e.g., make an API call
    // Reset the form fields
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h2>Receive Money</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">Receive</button>
      </form>
    </div>
  );
};

export default ReceiveMoneyPage;
