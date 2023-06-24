import React from 'react'
import { images } from '../constants'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Interest = () => {
  return (
    <div className='app__interest section__padding'>
        <div className="half left">
            <img src={images.atm} alt="" />
        </div>
        <div className="half right">
            <h1 className='section__title'>Keep your cash flow clear 💸and keep increasing 🚀</h1>
            <p className='section__subtitle'>See it all at a glance when you link your cash accounts, credit cards, investments, and bills.</p>
            <button>Try for now <AiOutlineArrowRight /></button>
        </div>
    </div>
  )
}

export default Interest