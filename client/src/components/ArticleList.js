import React, { Component } from 'react';
import axios from 'axios';
import './ArticleList.css';

class ArticleList extends Component {
    state = {
            articles: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/articles.json')
            .then(response => {
                this.setState({
                    articles: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        console.log(this.state.articles);
        return (
            <div className="ArticleList">
                Articles
            </div>
        )
    }
}

export default ArticleList;