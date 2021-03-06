import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';

import history from './utils/history';
import App from './App';

import './index.css';

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
