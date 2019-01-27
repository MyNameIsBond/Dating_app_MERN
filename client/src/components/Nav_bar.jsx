import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../actions/user_authentication'
import '../styles/App.css'
import { Icon, Navbar, NavItem, SideNav, SideNavItem, Button } from 'react-materialize'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  prevent_from_refresh(e) {
    e.preventDefault()
  }
  logout(e) {
    e.preventDefault()
    this.props.logout()
  }
  render() {
    const { isAuthenticated } = this.props.user_auth
    const { id } = this.props.user_auth.user
    const User = (
      <NavItem>
        <NavItem onClick={this.prevent_from_refresh}>
          <NavLink to="/" activeClassName="is-selected">
            <Icon>home</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={this.prevent_from_refresh}>
          <NavLink to="/messages" activeClassName="is-selected">
            <Icon>message</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={this.prevent_from_refresh}>
          <NavLink to="/blog" activeClassName="is-selected">
            <Icon>dashboard</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={this.prevent_from_refresh}>
          <NavLink
            to={{
              pathname: `/profile/${id}`,
              state: { user: id }
            }}
            activeClassName="is-selected"
          >
            <Icon>person</Icon>
          </NavLink>
        </NavItem>
        <NavItem onClick={this.prevent_from_refresh}>
          <NavLink
            to="/"
            className="logreg"
            onClick={this.logout.bind(this)}
            activeClassName="is-selected"
          >
            LOGOUT
          </NavLink>
        </NavItem>
      </NavItem>
    )

    const Non_user = (
      <NavItem>
        <NavItem onClick={this.prevent_from_refresh}>
          <NavLink className="logreg" to="/login">
            Sign In
          </NavLink>
        </NavItem>
        <NavItem onClick={this.prevent_from_refresh}>
          <NavLink className="logreg" to="/Register">
            Register
          </NavLink>
        </NavItem>
      </NavItem>
    )
    return (
      <Navbar brand="Dateme.com" fixed right>
        {isAuthenticated ? User : Non_user}
      </Navbar>
    )
  }
}

Navigation.propTypes = {
  user_auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}
const mapStateToProps = state => {
  return { user_auth: state.user_auth, logout: state.logout }
}
export default connect(
  mapStateToProps,
  { logout }
)(Navigation)
