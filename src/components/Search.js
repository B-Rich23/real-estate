import React, { Component } from 'react';
import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import Footer from './Footer';
import listings from '../dataListings';

class Search extends Component {
  state = {
    listings: listings,
  }

  render() {
    return (
        <div className="Search">
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

export default Search;
