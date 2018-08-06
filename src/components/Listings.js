import React, { Component } from 'react';
// import ReactModal from './ReactModal';
import  Modal  from 'react-responsive-modal';




class Listings extends Component {

    render() {
        const { listings, open, modal } = this.props;
        const lorem = (
            <p>
              Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent
              rhoncus congue ipsum elementum lobortis. Ut ligula purus, ultrices id
              condimentum quis, tincidunt quis purus. Proin quis enim metus. Nunc
              feugiat odio at eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu
              ex vulputate consectetur vel eu nisi. Donec ultricies rutrum lectus, sit
              ame feugiat est semper vitae. Proin varius imperdiet consequat. Proin eu
              metus nisi. In hac habitasse platea dictumst. Vestibulum ac ultrices
              risus. Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar
              interdum velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent
              aliquet justo vitae rutrum volutpat. Ut quis pulvinar est.
            </p>
          );

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

                        {listings.map(listing => {
                            console.log(listing.price)
                            return                         <div className="listing" key={listing.listing_id} onClick={() => open()}>
                            <div className="listing-img">
                            <img className="listing-img" src={listing.image_645_430_url} alt="missing"/>
                                <span className="address">{listing.agent_address}</span>
                                <div className="details">
                                    {/* <div className="user-img">

                                    </div> */}
                                    {/* <div className="user-details">
                                        <span className="user-name">Nina Smith</span>
                                        <span className="post-date">07-24-18</span>
                                    </div> */}
                                    <div className="listing-details">
                                        <div className="floor-space subdetail"> <i className="fas fa-ruler"> <span>{listing.floor_area.max_floor_area.value}</span> ft&sup2;</i>
                                        </div>
                                        <div className="bed subdetail">
                                            <i className="fas fa-bed"> <span>{listing.num_bedrooms}</span> bed</i>
                                        </div>
                                        <div className="bath subdetail">
                                            <i class="fas fa-bath"> <span>{listing.num_bathrooms}</span> bath</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-info">
                                <span className="price">£{listing.price} </span>
                                <span className="location"><i className="fas fa-map-marker-alt"></i> {listing.post_town}, {listing.country}</span>
                            </div>
                        </div>

                        })}
                        <Modal open={modal} onClose={this.onCloseModal}>
          <h2>Big modal</h2>
          {lorem}
          {lorem}
          {lorem}
          {lorem}
          {lorem}
          {lorem}
        </Modal>
                    </section>
                </div>
                <section id="pagination">
                        <ul className="pages">
                            <li className="active">Prev</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>Next</li>
                        </ul>
                    </section>

            </section>

        );
    }
}

export default Listings;
