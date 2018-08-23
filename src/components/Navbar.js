import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Videos from './Videos'
import Applications from './Applications'
import component_styling from './component_styling.css'


class Navbar extends Component {
  render (){
    return (
      <div className="nav-div">
        <nav className="main-navbar">
          <ul className="nav-ul">
            <li className="nav-li"><Link to="/home">Bio</Link></li>
            <li className="nav-li"><Link to="/apps">Apps</Link></li>
            <li className="nav-li"><Link to="/videos">Video Demos</Link></li>
            <li className="nav-li"><a href="https://soundcloud.com/matthew-welch-6/" target="_blank">SoundCloud Profile</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
