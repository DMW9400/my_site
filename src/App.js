import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Videos from './components/Videos'
import Applications from './components/Applications'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="name-header">Matthew Welch, FullStack Web Developer</h1>
        <Route path="/" component={Navbar}></Route>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/apps" component={Applications} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
