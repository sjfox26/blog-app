import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ArticleList from "./articles/ArticleList";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p className="nav">
                    <span className="nav__item"><Link to="/" component={ArticleList} className="nav__link">Articles</Link></span>
                    <span className="nav__item"><a href="/#" className="nav__link">Contact me</a></span>
                </p>
                <p className="copyright">
                    &copy; Copyright 2018 by Scott Fox.
                </p>
            </footer>
        );
    }
}

export default Footer;