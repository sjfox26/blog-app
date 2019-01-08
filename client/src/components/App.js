import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ArticleList from './articles/ArticleList';
import ArticleShow from './articles/ArticleShow';
import Header from './Header';
import './App.css';
import history from '../history';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}>
              <div>
                  <Header />
                  <Switch>
                      <Route path="/" exact component={ArticleList}/>
                      <Route path="/articles/:id" exact component={ArticleShow}/>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
