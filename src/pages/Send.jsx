import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Send = () => {
  const [amount, setAmount] = useState('');

  const handleNumberClick = (number) => {
    setAmount(prevAmount => prevAmount + number);
  };

  const handleClearClick = () => {
    setAmount('');
  };

  const navigate = useNavigate()

  const handleSendMoney = () => {
    alert("Money Sent")
    navigate("/")
  };

  return (
    <div className='app__send section__padding'>
      <h2 className='section__title'>Send Money</h2>
      <div className="amount_input">
        <input type="text" value={amount} readOnly />
        <button onClick={handleClearClick}>Clear</button>
      </div>
      <div className="number_tabs">
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
      </div>
      <button className='send_button' onClick={handleSendMoney}>Send Money</button>
    </div>
  );
};

export default Send;

