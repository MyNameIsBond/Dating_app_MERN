import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.css'
import Blog from './components/Blog.jsx'
import Profile from './components/Profile.jsx'
import Home from './components/Home.jsx'
import Messages from './components/Messages.jsx'
import Register from './components/Register'
import Navigation from './components/Nav_bar.jsx'
import Login from './components/Login.jsx'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/loading_bar.jsx'
import LoadingBar from 'react-redux-loading-bar'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation component={Navigation} />
            <LoadingBar showFastActions />
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/messages" component={Messages} />
              <Route path="/blog" component={Blog} />
              <Route path="/profile/:user" component={Profile} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
