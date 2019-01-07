import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

