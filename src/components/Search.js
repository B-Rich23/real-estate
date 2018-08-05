import React, { Component } from 'react';
import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import Footer from './Footer';

const Search = (props) => (
        <div className="Search">
          <Header />
          <section id="content-area">
            <Filter />
            <Listings listings={props.listings} open={props.modalOpen}/>
          </section>
          <Footer />
        </div>
    );



export default Search;
