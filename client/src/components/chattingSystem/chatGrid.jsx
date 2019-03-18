import React, { Component } from 'react'
import { Icon, Tabs, Tab } from 'react-materialize'
import { fetchUser } from '../../actions/fetchUser'
import axios from 'axios'
import { assertContinueStatement } from 'babel-types'
export default class ChatGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }
  componentWillMount = () => {
    this.fetchTheUser()
    console.log('userid')
  }

  OnelineUser = () => (
    <div
      onClick={this.fetchMessages}
      className="message_credentials profile-buttons waves-effect waves-green"
    >
      <img src={require('../hot-girls-5.jpg')} />
      <div className="mc_info">
        <p className="mc_name">Dolor </p>
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

  tabs = () => {
    return (
      <div className="chatTabsDiv">
        <Tabs className="tab-demo chatTabs">
          <Tab title="Online">
            <this.OnelineUser />
          </Tab>

          <Tab title="Chat" active>
            <this.Message_credentials />
          </Tab>
        </Tabs>
      </div>
    )
  }

  /**
   * willl fetch the messages
   * Having the userName
   */
  fetchMessages = async () => {
    try {
      const { user } = this.props.user
      const messages = await axios.get(`messages/${user.id}`)
    } catch (error) {}
  }

  fetchTheUser = async () => {
    const { user } = this.props.user
    const res = await axios.get(`profile/${user.id}`)
    console.log(res.data)
    this.setState({ user: res.data })
  }
  Message_credentials = () => (
    <div
      onClick={this.fetchMessages}
      className="message_credentials profile-buttons waves-effect waves-green"
    >
      <img src={require('../hot-girls-5.jpg')} />
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

  User_info = () => {
    const { user } = this.state

    return (
      <div className="user-info">
        <img src={require('../user.png')} alt="" />
        <div className="user-info-div">
          <p className="user-info-name">{user.username}</p>
          <p className="user-info-email">{user.email}</p>
        </div>
        <div className="user-info-buttons">
          <Icon className="profile-buttons icons-btn waves-effect waves-white">more_horiz</Icon>
        </div>
      </div>
    )
  }

  Message_search = () => (
    <div id="message-search">
      <input type="text" placeholder="Search your matches" />
      <Icon>search</Icon>
    </div>
  )
  render() {
    return (
      <div id="chat-grid">
        <this.User_info />
        <this.Message_search />
        <this.tabs />
      </div>
    )
  }
}
