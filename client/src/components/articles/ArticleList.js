import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../../actions/index';

import './ArticleList.css';
import Header from "../Header";

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
                            <h2>{article.title}</h2>
                        </div>
                        <div>
                            <h3 className="article-list__description">{article.description}</h3>
                            <h4 className="article-list__author">By {article.author}</h4>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render() {
        //console.log(this.state.articles);
        return (
            <div>
                <div className="header__container--list">
                    <Header />
                </div>
                <div className="ArticleList">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

//export default ArticleList;
const mapStateToProps = (state) => {
    return {
        articles: Object.values(state.articles),
        //currentUserId: state.auth.userId,
        //isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchArticles })(ArticleList);