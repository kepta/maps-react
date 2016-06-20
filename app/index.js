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
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import DisplayMap from '../examples/DisplayMap';
import Cluster from '../examples/Cluster';
import SetStyle from '../examples/SetStyle';
import ToggleLayer from '../examples/ToggleLayer';
import VectorSource from '../examples/VectorSource';
import FitBounds from '../examples/FitBounds';
import SlowlyFly from '../examples/SlowlyFly';
import CenterOnSymbol from '../examples/CenterOnSymbol';

const examples = {
  DisplayMap,
  Cluster,
  SetStyle,
  ToggleLayer,
  VectorSource,
  FitBounds,
  SlowlyFly,
  CenterOnSymbol,
};

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

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Sample} />
        {Object.keys(examples).map(e => <Route path={e} component={examples[e]} />)}
      </Route>
    </Router>
  </Provider>,
  node
);
