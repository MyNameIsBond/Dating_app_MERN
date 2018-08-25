import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles/App.css';
import Blog from './components/Blog.jsx';
import Home from './components/Home.jsx';
import Messages from './components/Messages.jsx';
import Register from './components/Register';
import Navigation from './components/Nav_bar.jsx';
import Login from './components/Login.jsx';
import { Provider } from 'react-redux';

import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation component={Navigation} />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/messages" component={Messages} />
              <Route path="/blog" component={Blog} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
