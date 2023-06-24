import React from 'react'
import {BsTwitter, BsInstagram, BsDiscord} from 'react-icons/bs'

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
          <p>Sign In</p>
          <p>Update Account</p>
          <p>Delete Account</p>
        </div>
        <div className="box2">
          <p>Send Money</p>
          <p>Receive Money</p>
          <p>View Transactions</p>
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