import React, { Component } from 'react';



class Filter extends Component {
    state = {  }
    render() {
        return (
            <section className="filters">
                <h4>Filter</h4>
                <select className="filters neighboorhood" name="neighborhood">
                    <option>Ridgewood</option>
                </select>
                <select className="filters neighboorhood" name="housetype">
                    <option>Single-Family</option>
                </select>
                <select className="filters neighboorhood" name="bedrooms">
                    <option>2br</option>
                </select>
                <select className="filters neighboorhood" name="bathrooms">
                    <option>1ba</option>
                </select>
                <div className="filters price">
                    <span className="title">Price</span>
                    <input type="text" name="min-price" className="min-price" />
                    <input type="text" name="max-price" className="max-price" />
                </div>
                <div className="filters floor-space">
                    <span className="title">floor-space</span>
                    <input type="text" name="min-floor-space" className="min-floor-space" />
                    <input type="text" name="max-floor-space" className="max-floor-space" />
                </div>
                <div className="filters extras">
                    <span className="title">extras</span>
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
            </section>
        );
    }
}

export default Filter;
