import React from 'react'
import { Link } from 'react-router-dom'
import images from '../constants/images'

const Hero = () => {
  return (
    <div className="app__hero">
        <div className="hero__part hero__left">
        <h1>More payment option better than cash</h1>
        <span>With a SKILLSFORGE you can access the more than 240 million customers out there, as well as offering management tools, options, and payment methods.</span>
        <div className="hero__store">
            <Link to="www.googleplay.com"><img className='store_icon' src={images.google_play} alt="Google Play" /></Link>
            <Link to="www.apple.com"><img className='store_icon' src={images.app_store} alt="App Store" /></Link>
        </div>
        <div className="rating">
            <p>Excellent <span>4.9 out of 5</span></p>
            <img src={images.five_stars} alt="Rating" className='stars' />
        </div>
        </div>
        <div className="hero__part hero__right">
        <img className="phone" src={images.phone} alt="" />
        <img className='amazon' src={images.amazon_left} alt="" />
        <img className='mcd' src={images.mcd_right} alt="" />
        </div>
    </div>
  )
}

export default Hero