import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Horizons</span>
                        <span className="heading-primary--sub">A Blog</span>
                    </h1>
                </div>
            </header>
        );
    }
}

export default Header;