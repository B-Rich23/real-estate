import React, { Component } from 'react';


class Header extends Component {
    state = {  }
    render() {
        return (
            <header>
                <div className="logo"><i className="fab fa-r-project"></i> Realty Pros UK</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Log In</a>
                    <a href="#"className="register-btn">Register</a>

                </nav>
            </header>   );
    }
}

export default Header;
