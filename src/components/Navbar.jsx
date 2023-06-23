import React, { useState } from 'react';
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri';
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (

    <nav className='app__navbar section__padding'>
      <div className="app__navbar-logo">
        <Link to='/'>SkillsForge</Link>
      </div>
      <ul className="app__navbar-links">
        <li><Link to='/send'>Send</Link></li>
        <li><Link to="/receive">Receive</Link></li>
        <li><Link to='/view-transactions'>View Transactions</Link></li>
      </ul>
      <div className="app__navbar-auth">
        <button><Link to='/register'>Register</Link></button>
      </div>

      <div className="app__navbar-smallscreen">
        <RiMenu4Line fontSize={27} className='overlay__open' onClick={() => setToggleMenu(!toggleMenu)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans"><a href = "#team">Team</a></li>
                <li className="p__opensans"><a href = "#">FAQ</a></li>
                <li className="p__opensans"><a href = "#downloads">Downloads</a></li>
                <li className="p__opensans"><a href = "#">Blog</a></li>
                <li className="p__opensans"><a href = "#contact">Contact Us</a></li>
            </ul>
            <div  className='overlay_socials'>
                
            </div>
          </div>
        )}
        
      </div>
      
    </nav>
  )
};

export default Navbar;