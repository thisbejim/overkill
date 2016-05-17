// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { reducer } from "./app/reducers/reducers.js";
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import { load } from './app/actions/actions.js';

import { Container, Row, Column } from './app/components/grid/grid.js';

const Main = React.createClass({
  componentDidMount() {
    this.props.dispatch(load())
  },
  render() {
    return (
      <h1>{this.props.state.get("hello")}</h1>
    )
  }
});

let App = React.createClass({
  render() {
    let elements;
    // pass state and dispatch to path component props
    if(this.props.children) {
      elements = React.cloneElement(this.props.children, { state: this.props.state, dispatch: this.props.dispatch })
    }
    return (
      <span>
        {elements}
      </span>
    )
  }
});

// create store
const store = createStore(reducer, applyMiddleware(thunk))

// connect to store
const mapStateToProps = (state) => {
  return {
    state: state
  }
};

export const AppContainer = connect(
  mapStateToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
