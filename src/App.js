import React, { Component } from 'react';
// import {
//   BrowserRouter as Router, Route, Switch, Link,
// } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Filter from "./components/Filter";
import Listings from "./components/Listings";
import listings from './dataListings';
import Footer from './components/Footer';

class App extends Component {
  state = {
    listings: listings,
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section id="content-area">
          <Filter />
          <Listings listings={this.state.listings}/>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
