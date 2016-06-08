import { render } from 'react-dom';
import React from 'react';
import App from './App';
import './style.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


const node = document.getElementById('app');

let middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = reduxLogger();
  middleware = [...middleware, loggerMiddleware];
}

const store = createStore(
  combineReducers({
    ...reducer,
    routing: routerReducer,
  }), undefined,
  compose(
    applyMiddleware(
      ...middleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  node
);
