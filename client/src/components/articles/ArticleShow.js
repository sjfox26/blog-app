import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';
import { Link } from 'react-router-dom';
import Header from "../Header";


import './ArticleShow.css';

class ArticleShow extends React.Component {
    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    renderContent(text) {
        return (
            <div>
                {text.split("\n").map((p,key) => {
                    return <p key={key} className="article__text--paragraph">{p}</p>;
                })}
            </div>);
    }

    render() {
        if (!this.props.article) {
            return <div></div>
        }

        const { title, description, content, author } = this.props.article;

        return (
            <div>
                <Link to={'/'} className="link">
                    <div className="header__container--article">
                        <Header/>
                    </div>
                </Link>
                <div className="article__container">
                    <h1 className="article__title">{title}</h1>
                    <p className="article__description">{description}</p>
                    <p className="article__author">By <span className="article__author--text">{author}</span></p>
                    <h5 className="article__text">{this.renderContent(content)}</h5>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { article: state.articles[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchArticle })(ArticleShow);