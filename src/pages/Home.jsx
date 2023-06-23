import React from 'react'
import { Link } from 'react-router-dom'
import images from '../constants/images'

const Home = () => {
  return (
    <div className='home'>
      <div className="app__hero">
        <div className="hero__left">
          <h1>More payment option better than cash</h1>
          <span>With a UNINE you can access the more than 240 million customers out there, as well as offering management tools, options, and payment methods.</span>
          <div className="hero__store">
            <Link to="www.apple.com"><img src={images.app_store} alt="App Store" /></Link>
            <Link to="www.googleplay.com"><img src={images.google_play} alt="Google Play" /></Link>
          </div>
        </div>
        <div className="hero__right">
          <img className="phone" src={images.phone} alt="" />
          <img className='amazon' src={images.amazon_left} alt="" />
          <img className='mcd' src={images.mcd_right} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home