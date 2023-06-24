import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../constants'

const Advert = () => {
  return (
    <div className='app__advert section__padding'>
        <div className="box">
            <h1 className='section__title'>Get SkillsForge App on Google Play or App Store</h1>
            <p className='section__subtitle'>Build your financial literacy within a transparent community. Follow other investors, share insights with people.</p>
            <div className="hero__store">
                <Link to="www.googleplay.com"><img className='store_icon' src={images.google_play} alt="Google Play" /></Link>
                <Link to="www.apple.com"><img className='store_icon' src={images.app_store} alt="App Store" /></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Advert