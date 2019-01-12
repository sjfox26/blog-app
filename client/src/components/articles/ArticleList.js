import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../../actions/index';

import './ArticleList.css';
import Header from "../Header";
import Footer from "../Footer";

class ArticleList extends Component {
    /*state = {
            articles: []
    }*/

    /*componentDidMount() {
        axios.get('http://localhost:3001/articles.json')
            .then(response => {
                this.setState({
                    articles: response.data
                })
            })
            .catch(error => console.log(error))
    }*/

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderList() {
        return this.props.articles.map( article => {
            return(
                <div key={article.id} className="article__info">
                    <Link to={`/articles/${article.id}`} className="link">
                        <div className="article-list__title">
                            <h3>{article.title}</h3>
                        </div>
                        <div>
                            <p className="article-list__description">{article.description}</p>
                            <p className="article-list__author">By {article.author}</p>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="header__container--list">
                    <Header />
                </div>
                <div className="ArticleList">
                    <h1>Articles</h1>
                    {this.renderList()}
                </div>
                <Footer />
            </div>
        );
    }
}

//export default ArticleList;
const mapStateToProps = (state) => {
    return {
        articles: Object.values(state.articles)
    };
};

export default connect(mapStateToProps, { fetchArticles })(ArticleList);