import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Videos from './Videos'
import Applications from './Applications'

class Navbar extends Component {
  render (){
    return (
      <div className="nav-div">
        <nav>
          <ul className="nav-ul">
            <li className="nav-li"></li>
            <li className="nav-li"></li>
            <li className="nav-li"></li>
            <li className="nav-li"></li>
            <li className="nav-li"><a href="https://soundcloud.com/matthew-welch-6/">SoundCloud Profile</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
