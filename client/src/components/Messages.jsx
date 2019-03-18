import React, { Component } from 'react'
import { Icon, MediaBox } from 'react-materialize'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loggedIn_reducer } from '../actions/ioLogin'

import { userTyping } from '../actions/userTyping'
import { send_message } from '../actions/send_message'
import { fetchUser } from '../actions/fetchUser'
import ChatGrid from './chattingSystem/ChatGrid.jsx'

class Messages extends Component {
  componentWillMount() {
    const { user } = this.props.user
    this.props.fetchUser(user.id)
    this.props.loggedIn_reducer()
  }

  Chat_Grid = () => (
    <div id="chat-grid">
      <this.User_info />
      <this.Message_search />
      <this.Message_credentials />
    </div>
  )

  typing(e) {
    this.props.userTyping(e.target)
    console.log(this.props.user)
  }

  sendMessage(e) {
    this.props.send_message(this.props.typing.message)
  }

  senderMessage = () => (
    <div className="senderMessage">
      <img src={require('./hot-girls-5.jpg')} alt="" />
      <div className="actualMessage">
        <small>13:40</small>
        <p>Hey, My name is Dolores.</p>
      </div>
    </div>
  )

  receiverMessage = () => (
    <div className="receiverMessage">
      <Icon small className="profile-buttons icons-btn waves-effect waves-white">
        more_horiz
      </Icon>
      <div className="actualMessageReceiver">
        <small>13:45</small>
        <p>hey</p>
      </div>
      <img src={require('./hot-girls-5.jpg')} alt="" />
    </div>
  )

  Message_fiels = () => (
    <div id="message-fields">
      <this.receiverMessage />
      <this.senderMessage />

      <div className="message-input">
        <input type="text" onChange={this.typing.bind(this)} placeholder="Type a message..." />
        <Icon className="photo-pic">photo</Icon>
        <i onClick={this.sendMessage.bind(this)} className="material-icons photo-send">
          send
        </i>

        <Icon className="photo-gif profile-buttons icons-btn waves-effect waves-white">gif</Icon>
        <Icon className="photo-mood profile-buttons icons-btn waves-effect waves-white">mood</Icon>
      </div>
    </div>
  )

  Message_infos = () => (
    <div id="message-infos">
      <div className="user-info-card">
        <img src={require('./user.png')} alt="" />
        <p>Amanda,26</p>
        <Icon className="profile-buttons icons-btn waves-effect waves-white">more_horiz</Icon>
      </div>
      <Icon className="profile-buttons icons-btn waves-effect waves-white">photo_camera</Icon>
      <div className="user-info-photos">
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
      </div>
    </div>
  )

  render() {
    return (
      <div className="messages-grid">
        <ChatGrid user={this.props.user} />
        <this.Message_fiels />
        <this.Message_infos />
      </div>
    )
  }
}
Messages.propTypes = {
  usersonline: PropTypes.func.isRequired,
  userTyping: PropTypes.func.isRequired,
  send_message: PropTypes.func.isRequired,
  typing: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  theUser: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  usersonline: state.loggedIn_reducer.loggedinusers,
  userTyping: state.userTyping,
  send_message: state.send,
  typing: state.userTyping,
  fetchUser: state.fetchUser,
  user: state.user_auth,
  theUser: state.user
})

export default connect(
  mapStateToProps,
  { loggedIn_reducer, userTyping, send_message, fetchUser }
)(Messages)
