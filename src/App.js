import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navbar}></Route>
        <Switch>
          <h1 className="name-header">Matthew Welch, FullStack Web Developer</h1>
        </Switch>
      </div>
    );
  }
}

export default App;
