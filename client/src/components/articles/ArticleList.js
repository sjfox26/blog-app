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
                <div key={article.id}>
                    <Link to={`/articles/${article.id}`} className="link">
                        <div className="article__title">
                            <h2>{article.title}</h2>
                        </div>
                        <div className="article__info">
                            <h3 className="article__info--item">{article.description}</h3>
                            <h4 className="article__info--item">{article.author}</h4>
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