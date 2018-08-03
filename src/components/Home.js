import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Header from './Header';
import Listings from './Listings';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <section id="splash">
        <h2>It's so good to be home</h2>
        <Link to="/search">
          <button className="search-btn">Search Homes</button>
        </Link>
      </section>
      <Footer />
    </div>
  )
}

export default Home

