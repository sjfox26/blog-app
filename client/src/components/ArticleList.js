import React, { Component } from 'react';
import axios from 'axios';
import './ArticleList.css';

class ArticleList extends Component {
    state = {
            lists: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/articles.json')
            .then(response => {
                this.setState({
                    lists: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        console.log(this.state.lists);
        return (
            <div className="ArticleList">
                Articles
            </div>
        )
    }
}

export default ArticleList;