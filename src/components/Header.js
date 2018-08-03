import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, Switch, Link,
  } from 'react-router-dom';



class Header extends Component {
    state = {  }
    render() {
        return (
            <header>
                <Link className="link-logo" to="/">
                    <div className="logo"><i className="fab fa-r-project"></i> Realty Pros UK</div>
                </Link>
                <nav>
                <Link to="/search">
                    <a href="#" className="buy-home">Buy Home</a>
                </Link>
                    <a href="#">About Us</a>
                    <a href="#">Log In</a>
                    <a href="#"className="register-btn">Register</a>

                </nav>
            </header>   );
    }
}

export default Header;
