import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Filter from "./components/Filter";
import Listings from "./components/Listings";
import listings from './dataListings';
import Footer from './components/Footer';
import Home from './components/Home';

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
          {/* <Route path="/:id" component={MovieDetails} /> */}
          </Switch>

          {/* <Header />
          <section id="content-area">
            <Filter />
            <Listings listings={this.state.listings}/>
          </section>
          <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
