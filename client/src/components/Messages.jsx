import React, { Component } from 'react'
import { Icon, MediaBox } from 'react-materialize'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loggedIn_reducer } from '../actions/ioLogin'
import { userTyping } from '../actions/userTyping'
import { send_message } from '../actions/send_message'

class Messages extends Component {
  componentWillMount() {
    this.props.loggedIn_reducer(this.props)
  }
  Message_search = () => (
    <div id="message-search">
      <input type="text" placeholder="Search your matches" />
      <Icon>search</Icon>
    </div>
  )

  Message_credentials = () => (
    <div
      onClick={e => console.log(e.timeStamp)}
      className="message_credentials profile-buttons waves-effect waves-green"
    >
      <img src={require('./hot-girls-5.jpg')} />
      <div className="mc_info">
        <p className="mc_name">Dolores </p>
        <p className="mc_message">
          <Icon>done_all</Icon>
          Hey cutie
        </p>
      </div>
      <div className="mc_options">
        <small>3 mins ago</small>
        <Icon className="profile-buttons icons-btn waves-effect waves-white">
          keyboard_arrow_down
        </Icon>
      </div>
    </div>
  )

  User_info = () => (
    <div className="user-info">
      <img src={require('./user.png')} alt="" />
      <div className="user-info-div">
        <p className="user-info-name">Tony Hajdini</p>
        <p className="user-info-email">m1lt0s@hotmail.com</p>
      </div>
      <div className="user-info-buttons">
        <Icon className="profile-buttons icons-btn waves-effect waves-white">more_horiz</Icon>
      </div>
    </div>
  )

  Chat_Grid = () => (
    <div id="chat-grid">
      <this.User_info />
      <this.Message_search />
      <this.Message_credentials />
      <this.Message_credentials />
    </div>
  )

  typing(e) {
    this.props.userTyping(e)
  }
  test() {
    console.log()
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
        <p>Hey Dolores. N</p>
      </div>
      <img src={require('./hot-girls-5.jpg')} alt="" />
    </div>
  )

  Message_fiels = () => (
    <div id="message-fields">
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.receiverMessage />
      <this.senderMessage />

      <div className="message-input">
        <input type="text" onChange={this.typing.bind(this)} placeholder="Type a message..." />
        <Icon className="photo-pic">photo</Icon>
        <i onClick={this.test} className="material-icons photo-send">
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
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
        <MediaBox src={require('./hot-girls-5.jpg')} caption="A demo media box1" width="350" />
      </div>
    </div>
  )

  render() {
    return (
      <div className="messages-grid">
        <this.Chat_Grid />
        <this.Message_fiels />
        <this.Message_infos />
      </div>
    )
  }
}
Messages.propTypes = {
  usersonline: PropTypes.func.isRequired,
  userTyping: PropTypes.func.isRequired,
  send_message: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  usersonline: state.loggedIn_reducer.loggedinusers,
  UserTyping: state.userTyping,
  send_message: state.send_message
})

export default connect(
  mapStateToProps,
  { loggedIn_reducer, userTyping, send_message }
)(Messages)
