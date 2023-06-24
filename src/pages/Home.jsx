import React from 'react'
import { Advert, Hero, Transaction } from '../containers'
import Interest from './../containers/Interest';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Transaction />
      <Interest />
      <Advert />
    </div>
  )
}

export default Home