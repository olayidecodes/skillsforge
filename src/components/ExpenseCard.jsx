import React from 'react'

const ExpenseCard = ({expense: {id, title, image, date, amount, discount}}) => {
  return (
    <div className='expense__card'>
        <div className="left">
            <div className="icon">
                {image} 
            </div>
            <div className="text">
                    <h1>{title}</h1>
                    <p>{date}</p>
                </div>
        </div>
        <div className="right">
            <h2>{amount}</h2>
            <p>{discount}</p>
        </div>
    </div>
  )
}

export default ExpenseCard