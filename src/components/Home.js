import React, { Component } from 'react';

import Header from './Header';
import Listings from './Listings';

const Home = () => {
  return (
    <div>
      <Header/>
      <section id="splash">
        <button className="search-btn">Search Homes</button>
      </section>
    </div>
  )
}

export default Home

