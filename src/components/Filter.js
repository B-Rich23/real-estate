import React, { Component } from 'react';



class Filter extends Component {
    state = {  }
    render() {
        return (
            <section id="filter">
                <div className="inside">
                    <h4>Filter</h4>
                    <select className="filters neighboorhood" name="neighborhood">
                        <option>Ridgewood</option>
                    </select>
                    <select className="filters housetype" name="housetype">
                        <option>Single-Family</option>
                    </select>
                    <select className="filters bedrooms" name="bedrooms">
                        <option>2br</option>
                    </select>
                    <select className="filters bathrooms" name="bathrooms">
                        <option>1ba</option>
                    </select>
                    <div className="filters price">
                        <span className="title">Price</span>
                        <input type="text" name="min-price" className="min-price" />
                        <input type="text" name="max-price" className="max-price" />
                    </div>
                    <div className="filters sqft">
                        <span className="title">Square Footage</span>
                        <input type="text" name="min-sqft" className="min-sqft" />
                        <input type="text" name="max-sqft" className="max-sqft" />
                    </div>
                    <div className="filters extras">
                        <span className="title">Extras</span>
                        <input type="text" name="min-extras" className="min-extras" />
                        <input type="text" name="max-extras" className="max-extras" />
                    </div>
                    <div className="filters extras">
                        <label for="extras">
                            <span>Elevators</span>
                            <input name="extras" type="checkbox" value="elevator" />
                        </label>
                        <label for="extras">
                            <span>Swimming Pool</span>
                            <input name="extras" type="checkbox" value="Swimming Pool" />
                        </label>
                        <label for="extras">
                            <span>Finished Basement</span>
                            <input name="extras" type="checkbox" value="finished-basement" />
                        </label>
                        <label for="extras">
                            <span>Gym</span>
                            <input name="extras" type="checkbox" value="gym" />
                        </label>
                    </div>
                </div>
            </section>
        );
    }
}

export default Filter;
