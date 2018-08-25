import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/user_action';
import PropTypes from 'prop-types';
class Home extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    const loopUsers = this.props.users.map(user => (
      <ul>
        <li>
          {user.username}
          <small>{user.email}</small>
        </li>
      </ul>
    ));
    return <div>user: {loopUsers}</div>;
  }
}

Home.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.items
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Home);
