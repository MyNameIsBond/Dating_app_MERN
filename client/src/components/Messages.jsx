import React, { Component } from 'react'

const Chat_Grid = () => <div id="chat-grid">chat grid</div>
const Message_fiels = () => <div id="message-fields">message fields</div>
const Message_infos = () => <div id="message-infos">message infos</div>
const Message_input = () => <div id="message-input">message input</div>
const Message_search = () => <div id="message-search">message search</div>

const Messages = () => (
  <div className="messages-grid">
    <Chat_Grid />
    <Message_fiels />
    <Message_infos />
    <Message_input />
    <Message_search />
  </div>
)

export default Messages
