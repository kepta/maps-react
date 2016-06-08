import { render } from 'react-dom';
import React from 'react';
import App from './App';
import './mapbox-gl.css';
import './style.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Sample from './Sample';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import DisplayMap from './examples/DisplayMap';
import Cluster from './examples/Cluster';
import SetStyle from './examples/SetStyle';
import ToggleLayer from './examples/ToggleLayer';

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
      <Route path="/" component={App}>
        <IndexRoute component={Sample} />
        <Route path="display_a_map" component={DisplayMap} />
        <Route path="cluster" component={Cluster} />
        <Route path="SetStyle" component={SetStyle} />
        <Route path="ToggleLayer" component={ToggleLayer} />
      </Route>
    </Router>
  </Provider>,
  node
);
