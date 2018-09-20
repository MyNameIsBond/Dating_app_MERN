import React, { Component } from 'react'
import { Icon } from 'react-materialize'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { usersonline } from '../actions/ioLogin'

class Messages extends Component {
  componentWillMount() {
    this.props.usersonline()
  }
  Message_search = () => (
    <div id="message-search">
      <input type="text" placeholder="Search your matches" />
      <Icon>search</Icon>
    </div>
  )

  Message_credentials = () => (
    <div className="message_credentials">
      <img src={require('./hot-girls-5.jpg')} alt="" />
      <div className="mc_info">
        <p className="mc_name" />
        <p className="mc_message">
          <Icon>done_all</Icon>
          Hey cutie
        </p>
      </div>
      <div className="mc_options">
        <small>3 mins ago</small>
        <Icon>keyboard_arrow_down</Icon>
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
        <Icon>more_horiz</Icon>
      </div>
    </div>
  )

  Chat_Grid = () => (
    <div id="chat-grid">
      <this.User_info />
      <this.Message_search />
      <this.Message_credentials />
    </div>
  )

  Test(e) {
    console.log(e.target.value)
  }

  Message_fiels = () => (
    <div id="message-fields">
      <div className="message-input">
        <input
          type="text"
          onChange={this.Test.bind(this)}
          placeholder="Type a message..."
        />
        <Icon className="photo-pic">photo</Icon>
        <i onClick={this.Test} className="material-icons photo-send">
          send
        </i>

        <Icon className="photo-gif">gif</Icon>
        <Icon className="photo-mood">mood</Icon>
      </div>
    </div>
  )

  Message_infos = () => (
    <div id="message-infos">
      <div className="user-info-card">
        <img src={require('./user.png')} alt="" />
        <p>Amanda,26</p>
        <Icon className="">more_horiz</Icon>
      </div>
      <Icon className="">photo_camera</Icon>
      <div className="user-info-photos">
        <img src={require('./hot-girls-5.jpg')} />
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
  usersonline: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  usersonline: state.usersonline.loggedinusers
})

export default connect(
  mapStateToProps,
  { usersonline }
)(Messages)
