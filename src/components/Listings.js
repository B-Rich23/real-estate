import React, { Component } from 'react';



class Listings extends Component {
    state = {  }
    render() {
        return (
            <section id="listings">
                <div className="listings-inside">
                    <section className="search-area">
                        <input type="text" name="search" placeholder="Search" />
                    </section>
                    <section className="sortby-area">
                        <div className="sort-results">240 results found</div>
                        <div className="sort-options">
                            <select name="sortby" className="sortby">
                                <option value="price-asc">Highest Price</option>
                                <option value="price-dsc">Lowest Price</option>
                            </select>
                            <div className="sort-view">
                            <i className="fas fa-list"></i>
                            <i className="fas fa-th"></i>
                            </div>
                        </div>
                    </section>
                    <section className="listings-results">
                        <div className="listing">
                            <div className="listing-img">
                                <span className="price">$Price</span>
                                <span className="address">Address</span>
                                <div className="details">
                                    <div className="user-img">

                                    </div>
                                    <div className="user-details">
                                        <span className="user-name">Nina Smith</span>
                                        <span className="post-date">07-24-18</span>
                                    </div>
                                    <div className="listing-details">
                                        <div className="floor-space">
                                        <i class="fas fa-ruler"><span>1000</span> ft&sup2;</i>
                                        </div>
                                        <div className="bed-bath">
                                            <i class="fas fa-bed"><span>3</span> bed</i>
                                            <i class="fas fa-bath"><span>1</span> bath</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-info">
                                <span>$400,000</span>
                                <i className="fas fa-map-marker-alt"></i><span>Ridgewood, NY</span>
                            </div>
                        </div>
                    </section>
                    <section className="pagination">
                        <ul className="paginations">
                            <li>Prev</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>Next</li>
                        </ul>
                    </section>
                </div>
            </section>
        );
    }
}

export default Listings;
