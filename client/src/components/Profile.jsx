import React, { Component } from 'react'
import { fetchUser } from '../actions/fetchUser'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// 1) Set up redux
// 2) actions - fetch user's infos
// 3)

class Profile extends Component {
  componentWillMount() {
    const user = this.props.match.params.user
    this.props.fetchUser(user)
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <h2>hey</h2>
      </div>
    )
  }
}

Profile.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  users: state.user
})

export default connect(
  mapStateToProps,
  { fetchUser }
)(Profile)
