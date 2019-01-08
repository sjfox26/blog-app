import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';

class ArticleShow extends React.Component {
    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    render() {
        if (!this.props.article) {
            return <div>Loading...</div>
        }

        const { title, content } = this.props.article;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{content}</h5>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { article: state.articles[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchArticle })(ArticleShow);