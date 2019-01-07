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

    renderList() {
        return this.state.articles.map( article => {
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
        console.log(this.state.articles);
        return (
            <div className="ArticleList">
                {this.renderList()}
            </div>
        )
    }
}

export default ArticleList;