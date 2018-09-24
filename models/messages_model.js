const mongoose = require('mongoose')
// try to encrypt the messages
const bcrypt = require('bcrypt')
const Chat_Message = mongoose.Schema({
  users: [
    {
      type: String,
      required: true
    }
  ],
  messages: [
    {
      body: String,
      date: { type: Date, default: Date.now },
      user: String,
      seen: { type: Boolean, default: false }
    }
  ]
})

let Chat = (module.exports = mongoose.model('Chat', Chat_Message))

// Ideal
