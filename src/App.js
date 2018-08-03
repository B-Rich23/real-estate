import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import './App.css';
import listings from './dataListings';
import Home from './components/Home';
import Search from './components/Search';

class App extends Component {
  state = {
    listings: listings,
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
