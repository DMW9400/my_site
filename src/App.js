import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="name-header">
          <h1 className="name-header">Matthew Welch, FullStack Web Developer</h1>
          <nav className="main-nav">
            <ul className="main-nav-items">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
