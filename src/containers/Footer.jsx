import React from 'react'
import {BsTwitter, BsInstagram, BsDiscord} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className="left">
        <div className="logo">
          <h1>SkillForge</h1>
        </div>
        <div className="links">
          <BsTwitter />
          <BsInstagram />
          <BsDiscord />
        </div>
      </div>
      <div className="right">
        <div className="box1">
          <p><Link to="/user">Your account</Link></p>
          <p><Link to="/login">Sign In</Link></p>
          <p><Link to="/update">Update Account</Link></p>
          <p><Link to="/delete">Delete Account</Link></p>
        </div>
        <div className="box2">
          <p><Link to="/send">Send Money</Link></p>
          <p><Link to="/receive">Receive Money</Link></p>
          <p><Link to="/view-transactions">View Transactions</Link></p>
        </div>
        <div className="box3">
          <p>UI 2nd Gate</p>
          <p>Agbowo</p>
          <p>Ibadan</p>
          <p>08044444444</p>
        </div>
      </div>
    </div>
  )
}

export default Footer