import React from 'react'
import { data } from '../constants'
import DetailCard from '../components/DetailCard'

const Transaction = () => {
  return (
    <div className='app__transactions section__padding'>
    <h1 className="section__title">Safe & Convenient Transaction</h1>
    <p className="section__subtitle">Want to pay anything so easy with the touch of a finger. Through SKILLSFORGE, you can make practically any transaction.</p>
    <div className="transaction__cards">
        {data.transactions.map((detail) => (
            <DetailCard key={detail.id} detail={detail}/>
        ))}
    </div>   
    </div>
  )
}

export default Transaction