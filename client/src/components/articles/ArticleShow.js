import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';
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
                    return <p key={key}>{p}</p>;
                })}
            </div>);
    }

    render() {
        if (!this.props.article) {
            return <div>Loading...</div>
        }

        const { title, description, content } = this.props.article;

        return (
            <div>
                <div className="header__container--article">
                    <Header/>
                </div>
                <div>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <h5>{this.renderContent(content)}</h5>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { article: state.articles[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchArticle })(ArticleShow);