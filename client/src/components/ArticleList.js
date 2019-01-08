import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import { fetchArticles } from '../actions';

import './ArticleList.css';

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
                    {/*<Link to={`/articles/${article.id}`}>
                        <div>{article.title}</div>
                    </Link>*/}
                    <h2>{article.title}</h2>
                    <h5>{article.id}</h5>
                </div>
            );
        });
    }

    render() {
        //console.log(this.state.articles);
        return (
            <div className="ArticleList">
                {this.renderList()}
            </div>
        )
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